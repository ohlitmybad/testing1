self.onmessage = async function(event) {
    importScripts('https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js');
    
    const WORKER_URL = 'https://summer-dream-8f33.datamb-football.workers.dev';
    const BATCH_SIZE = 9;
    const cache = new Map();
    let fileAliases = event.data.fileAliases;
    let allData = [];
    let processedFiles = 0;
    
    const estimatedTotalRows = 20000;
    allData = new Array(estimatedTotalRows);

    const xlsxOptions = {
        type: 'array',
        cellDates: false,
        cellNF: false,
        cellText: false,
        cellStyles: false,
        cellFormula: false,
        dense: true,
        raw: true,
        sheetStubs: false
    };

    async function processBatch(startIndex) {
        const endIndex = Math.min(startIndex + BATCH_SIZE, fileAliases.length);
        const batchAliases = fileAliases.slice(startIndex, endIndex);
        
        const batchPromises = batchAliases.map(async (alias) => {
            if (cache.has(alias)) {
                return cache.get(alias);
            }

            const response = await fetch(`${WORKER_URL}/?file=${alias}`, {
                method: 'GET',
                mode: 'cors',
                priority: 'high',
                cache: 'force-cache'
            });
            
            const buffer = await response.arrayBuffer();
            
            const workbook = XLSX.read(new Uint8Array(buffer), xlsxOptions);
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
            
            let jsonData = XLSX.utils.sheet_to_json(sheet, {
                header: 1,
                raw: true,
                defval: '',
                blankrows: false
            });

            const processedData = new Array(jsonData.length);
            
            const fileIndex = fileAliases.indexOf(alias);
            const label = getPositionLabel(fileIndex);
            
            for (let i = 0; i < jsonData.length; i++) {
                if (fileIndex !== 0 && i === 0) {
                    processedData[i] = null;
                    continue;
                }
                
                const row = jsonData[i];
                row.splice(2, 0, label);
                processedData[i] = row;
            }
            
            cache.set(alias, processedData);
            return processedData;
        });

        const batchResults = await Promise.all(batchPromises);
        
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

        if (endIndex < fileAliases.length) {
            setTimeout(() => processBatch(endIndex), 0);
        } else {
            self.postMessage({
                type: 'complete',
                data: allData
            });
        }
    }

    function getPositionLabel(fileIndex) {
        if (fileIndex <= 2) return 'Goalkeeper';
        if (fileIndex <= 5) return 'Centre-back';
        if (fileIndex <= 8) return 'Full-back';
        if (fileIndex <= 11) return 'Midfielder';
        if (fileIndex <= 14) return 'Winger';
        if (fileIndex <= 17) return 'Striker';
        return 'Unknown';
    }

    await processBatch(0);
};
