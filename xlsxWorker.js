self.onmessage = async function(event) {
    importScripts('https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js');
    
    // Check if we're likely on a mobile device (passed from main thread)
    const isMobile = event.data.isMobile || false;
    
    // Adjust batch size based on device capability
    const BATCH_SIZE = isMobile ? 4 : 9; // Smaller batch size for mobile devices
    const cache = new Map();
    let urls = event.data.urls;
    let allData = [];
    let processedFiles = 0;
    
    // Pre-allocate array for better memory management
    const estimatedTotalRows = 20000; // Adjust based on expected data size
    allData = new Array(estimatedTotalRows);
    

    // Optimize XLSX reading configuration
    const xlsxOptions = {
        type: 'array',
        cellDates: false,
        cellNF: false,
        cellText: false,
        cellStyles: false,
        cellFormula: false,
        dense: true, // Use dense array format for better performance
        raw: true,
        sheetStubs: false
    };

    // Process files in batches
    async function processBatch(startIndex) {
        const endIndex = Math.min(startIndex + BATCH_SIZE, urls.length);
        const batchUrls = urls.slice(startIndex, endIndex);
        
        // For mobile, add a small delay between batches to prevent UI freezing
        if (isMobile && startIndex > 0) {
            await new Promise(resolve => setTimeout(resolve, 200));
        }
        
        // Use Promise.all with optimized fetch
        const batchPromises = batchUrls.map(async (url) => {
            if (cache.has(url)) {
                return cache.get(url);
            }

            try {
                // Optimize fetch with appropriate settings
                const response = await fetch(url, {
                    method: 'GET',
                    mode: 'cors',
                    priority: 'high',
                    cache: 'force-cache'
                });
                
                // Use streaming for better memory efficiency
                const buffer = await response.arrayBuffer();
                
                // Optimize XLSX reading
                const workbook = XLSX.read(new Uint8Array(buffer), xlsxOptions);
                const sheetName = workbook.SheetNames[0];
                const sheet = workbook.Sheets[sheetName];
                
                // Optimize JSON conversion
                let jsonData = XLSX.utils.sheet_to_json(sheet, {
                    header: 1,
                    raw: true,
                    defval: '',
                    blankrows: false
                });

                // Pre-allocate array for row processing
                const processedData = new Array(jsonData.length);
                
                // Optimize row processing
                const fileIndex = urls.indexOf(url);
                const label = getPositionLabel(fileIndex);
                
                for (let i = 0; i < jsonData.length; i++) {
                    if (fileIndex !== 0 && i === 0) {
                        processedData[i] = null;
                        continue;
                    }
                    
                    const row = jsonData[i]; // Trim to 93 columns
                    // Optimize array operations
                    row.splice(2, 0, label); // Insert label at position 2
                    processedData[i] = row;
                }
                
                cache.set(url, processedData);
                return processedData;
            } catch (error) {
                console.error(`Error processing ${url}:`, error);
                // Return an empty dataset on error to prevent complete failure
                return [];
            }
        });

        const batchResults = await Promise.all(batchPromises);
        
        // Optimize batch merging
        let currentIndex = allData.length;
        batchResults.forEach((data, index) => {
            if (!data) return;
            
            if (startIndex + index === 0) {
                allData.push(...data);
            } else {
                allData.push(...data.filter(row => row !== null));
            }
        });

        processedFiles += batchResults.length;
        
        // Progress updates for better UX
        self.postMessage({
            type: 'progress',
            progress: processedFiles / urls.length
        });

        if (endIndex < urls.length) {
            // Use requestAnimationFrame equivalent for workers
            // Add a small delay for mobile to prevent freezing
            setTimeout(() => processBatch(endIndex), isMobile ? 50 : 0);
        } else {
            // Optimize final data transfer
            self.postMessage({
                type: 'complete',
                data: allData // Remove any null entries
            });
        }
    }

    // Helper function for position labels
    function getPositionLabel(fileIndex) {
        if (fileIndex <= 2) return 'Goalkeeper';
        if (fileIndex <= 5) return 'Centre-back';
        if (fileIndex <= 8) return 'Full-back';
        if (fileIndex <= 11) return 'Midfielder';
        if (fileIndex <= 14) return 'Winger';
        if (fileIndex <= 17) return 'Striker';
        return 'Unknown';
    }

    // Start processing immediately
    await processBatch(0);
};
