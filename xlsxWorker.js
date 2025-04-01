self.onmessage = async function(event) {
    importScripts('https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js');
    
    const BATCH_SIZE = 9; // Increased batch size for modern browsers
    const cache = new Map();
    let urls = event.data.urls;
    let allData = [];
    let processedFiles = 0;
    
    // Pre-allocate array for better memory management
    const estimatedTotalRows = 20000; // Adjust based on expected data size
    allData = [];
    

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
        
        // Use Promise.all with optimized fetch
        const batchPromises = batchUrls.map(async (url) => {
            if (cache.has(url)) {
                return cache.get(url);
            }

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
            const processedData = [];
            
            // Optimize row processing
            const fileIndex = urls.indexOf(url);
            const label = getPositionLabel(fileIndex);
            
            for (let i = 0; i < jsonData.length; i++) {
                if (fileIndex !== 0 && i === 0) {
                    continue;
                }
                
                const row = jsonData[i];
                // Optimize array operations
                row.splice(2, 0, label); // Insert label at position 2
                processedData.push(row);
            }
            
            cache.set(url, processedData);
            return processedData;
        });

        const batchResults = await Promise.all(batchPromises);
        
        // Optimize batch merging - avoid splice which can be slow
        let newData = [];
        batchResults.forEach((data, index) => {
            if (!data) return;
            
            if (startIndex + index === 0) {
                newData = newData.concat(data);
            } else {
                newData = newData.concat(data);
            }
        });

        // Update allData with efficient concat
        allData = allData.concat(newData);

        processedFiles += batchResults.length;
        
        // Send progress update to main thread
        self.postMessage({
            type: 'progress',
            processedFiles: processedFiles,
            totalFiles: urls.length
        });

        if (endIndex < urls.length) {
            // Use setTimeout with 0ms delay to allow UI thread to breathe
            setTimeout(() => processBatch(endIndex), 0);
        } else {
            // Send data in chunks to avoid large message freezing
            const CHUNK_SIZE = 1000;
            const totalChunks = Math.ceil(allData.length / CHUNK_SIZE);
            
            // First notify that processing is complete
            self.postMessage({
                type: 'processing_complete',
                totalChunks: totalChunks
            });
            
            // Then send data in manageable chunks with delays
            for (let i = 0; i < totalChunks; i++) {
                const start = i * CHUNK_SIZE;
                const end = Math.min(start + CHUNK_SIZE, allData.length);
                const chunk = allData.slice(start, end);
                
                // Use setTimeout to stagger the transfers and prevent UI blocking
                setTimeout(() => {
                    self.postMessage({
                        type: 'chunk',
                        chunkIndex: i,
                        totalChunks: totalChunks,
                        data: chunk
                    });
                    
                    // Send complete message after the last chunk
                    if (i === totalChunks - 1) {
                        setTimeout(() => {
                            self.postMessage({
                                type: 'complete',
                                dispatchEvent: true
                            });
                        }, 100);
                    }
                }, i * 20); // Small delay between chunks
            }
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
