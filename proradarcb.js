const allData1 = [];
  const allData2 = [];
  const allData3 = [];
  const allData4 = [];
  const allData5 = [];
  const allData6 = [];
  const allData7 = [];
  const allData8 = [];

    let allDataAsString = '';

// Worker URL
const WORKER_URL = 'https://summer-dream-8f33.datamb-football.workers.dev';

// File aliases for CB
const fileAliases1 = ['24'];           // RATOP72526_CB
const fileAliases2 = ['30', '36'];     // RAPRO2526_CB, RAPRO2025_CB
const fileAliases3 = ['60'];           // RATOP72425_CB
const fileAliases4 = ['78', '96'];     // RAPRO2425_CB, RAPRO2024_CB
const fileAliases5 = ['66'];           // RATOP72324_CB
const fileAliases6 = ['84', '102'];    // RAPRO2324_CB, RAPRO2023_CB
const fileAliases7 = ['72'];           // RATOP72223_CB
const fileAliases8 = ['90'];           // RAPRO2223_CB

const fetchPromises1 = fileAliases1.map(alias => fetch(`${WORKER_URL}/?file=${alias}`).then(response => response.arrayBuffer()));
const fetchPromises2 = fileAliases2.map(alias => fetch(`${WORKER_URL}/?file=${alias}`).then(response => response.arrayBuffer()));
const fetchPromises3 = fileAliases3.map(alias => fetch(`${WORKER_URL}/?file=${alias}`).then(response => response.arrayBuffer()));
const fetchPromises4 = fileAliases4.map(alias => fetch(`${WORKER_URL}/?file=${alias}`).then(response => response.arrayBuffer()));
const fetchPromises5 = fileAliases5.map(alias => fetch(`${WORKER_URL}/?file=${alias}`).then(response => response.arrayBuffer()));
const fetchPromises6 = fileAliases6.map(alias => fetch(`${WORKER_URL}/?file=${alias}`).then(response => response.arrayBuffer()));
const fetchPromises7 = fileAliases7.map(alias => fetch(`${WORKER_URL}/?file=${alias}`).then(response => response.arrayBuffer()));
const fetchPromises8 = fileAliases8.map(alias => fetch(`${WORKER_URL}/?file=${alias}`).then(response => response.arrayBuffer()));
            
                function processAndStoreData1(dataArray) {
                    // Unique ID counter
                    let uniqueIdCounter = 1;
                
                    dataArray.forEach((data, urlIndex) => {
                        const workbook = XLSX.read(new Uint8Array(data), { type: 'array' });
                        const sheetName = workbook.SheetNames[0];
                        const sheet = workbook.Sheets[sheetName];
                        const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
                
                        // Get the URL for the current data
                        const currentUrl = urls1[urlIndex];
                        // Extract season information from URL
                        let seasonSuffix = '25/26'; // Default
                        // Check if URL contains PRO20 followed by 2 digits (like PRO2024)
                        const proMatch = currentUrl.match(/PRO20(\d{2})/);
                        if (proMatch) {
                            seasonSuffix = '20' + proMatch[1]; // Use the 2 digits after PRO20 with 20 prefix
                        }
                
                        // Exclude header row
                        const dataWithoutHeader = jsonData.slice(1);
                
                        // Perform transformations and add unique ID
                        dataWithoutHeader.forEach(row => {
                            // Generate unique ID and shift columns
                            row.unshift(`${uniqueIdCounter++}`);
                
                            // Shift columns as needed
                            
                            row[15] = `${row[1]} ${seasonSuffix}`;
                
                            const reorderedRow = [
            row[0],
            row[15],
            row[2],
            row[3],
            row[10],
            row[9],
            row[11],
            row[5],
            row[6],
            row[7],
            row[8],
            row[4]
        ];
                            allData1.push(reorderedRow);
                        });
                    });
                
                    // Extract values from columns 4, 5, 6, 7, 8, 9, and 10
                    const columnsToConvert = [4, 5, 6, 7, 8, 9, 10];
                    const columnValues = columnsToConvert.map(col => allData1.map(row => parseFloat(row[col])));
                
                    // Calculate percentiles
                    const percentiles = columnValues.map(values => {
                        const sorted = [...values].sort((a, b) => a - b);
                        return values.map(value => {
                            const rank = sorted.indexOf(value) + 1;
                            return (rank / sorted.length);
                        });
                    });
                
                    // Replace original values with percentiles
                    allData1.forEach((row, rowIndex) => {
                        columnsToConvert.forEach((col, colIndex) => {
                            row[col] = percentiles[colIndex][rowIndex].toFixed(3);
                        });
                    });
                }
            
                function processAndStoreData2(dataArray) {
                    // Unique ID counter
                    let uniqueIdCounter = 1;
                
                    dataArray.forEach((data, urlIndex) => {
                        const workbook = XLSX.read(new Uint8Array(data), { type: 'array' });
                        const sheetName = workbook.SheetNames[0];
                        const sheet = workbook.Sheets[sheetName];
                        const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
                
                        // Get the URL for the current data
                        const currentUrl = urls2[urlIndex];
                        // Extract season information from URL
                        let seasonSuffix = '25/26'; // Default
                        // Check if URL contains PRO20 followed by 2 digits (like PRO2024)
                        const proMatch = currentUrl.match(/PRO20(\d{2})/);
                        if (proMatch) {
                            seasonSuffix = '20' + proMatch[1]; // Use the 2 digits after PRO20 with 20 prefix
                        }
                
                        // Exclude header row
                        const dataWithoutHeader = jsonData.slice(1);
                
                        // Perform transformations and add unique ID
                        dataWithoutHeader.forEach(row => {
                            // Generate unique ID and shift columns
                            row.unshift(`${uniqueIdCounter++}`);
                
                            // Shift columns as needed
                            
                            row[15] = `${row[1]} ${seasonSuffix}`;
                
                            const reorderedRow = [
            row[0],
            row[15],
            row[2],
            row[3],
            row[10],
            row[9],
            row[11],
            row[5],
            row[6],
            row[7],
            row[8],
            row[4]
        ];
                
                            allData2.push(reorderedRow);
                        });
                    });
                
                    // Extract values from columns 4, 5, 6, 7, 8, 9, and 10
                    const columnsToConvert = [4, 5, 6, 7, 8, 9, 10];
                    const columnValues = columnsToConvert.map(col => allData2.map(row => parseFloat(row[col])));
                
                    // Calculate percentiles
                    const percentiles = columnValues.map(values => {
                        const sorted = [...values].sort((a, b) => a - b);
                        return values.map(value => {
                            const rank = sorted.indexOf(value) + 1;
                            return (rank / sorted.length);
                        });
                    });
                
                    // Replace original values with percentiles
                    allData2.forEach((row, rowIndex) => {
                        columnsToConvert.forEach((col, colIndex) => {
                            row[col] = percentiles[colIndex][rowIndex].toFixed(3);
                        });
                    });
                }
            
                function processAndStoreData3(dataArray) {
                  // Unique ID counter
                  let uniqueIdCounter = 1;
              
                  dataArray.forEach((data, urlIndex) => {
                      const workbook = XLSX.read(new Uint8Array(data), { type: 'array' });
                      const sheetName = workbook.SheetNames[0];
                      const sheet = workbook.Sheets[sheetName];
                      const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
              
                      // Get the URL for the current data
                      const currentUrl = urls3[urlIndex];
                      // Extract season information from URL
                      let seasonSuffix = '24/25'; // Default
                      // Check if URL contains PRO20 followed by 2 digits (like PRO2023)
                      const proMatch = currentUrl.match(/PRO20(\d{2})/);
                      if (proMatch) {
                          seasonSuffix = '20' + proMatch[1]; // Use the 2 digits after PRO20 with 20 prefix
                      }
              
                      // Exclude header row
                      const dataWithoutHeader = jsonData.slice(1);
              
                      // Perform transformations and add unique ID
                      dataWithoutHeader.forEach(row => {
                          // Generate unique ID and shift columns
                          row.unshift(`${uniqueIdCounter++}`);
              
                          // Shift columns as needed
                          
                          row[15] = `${row[1]} ${seasonSuffix}`;
              
                          const reorderedRow = [
            row[0],
            row[15],
            row[2],
            row[3],
            row[10],
            row[9],
            row[11],
            row[5],
            row[6],
            row[7],
            row[8],
            row[4]
        ];
              
                          allData3.push(reorderedRow);
                      });
                  });
              
                  // Extract values from columns 4, 5, 6, 7, 8, 9, and 10
                  const columnsToConvert = [4, 5, 6, 7, 8, 9, 10];
                  const columnValues = columnsToConvert.map(col => allData3.map(row => parseFloat(row[col])));
              
                  // Calculate percentiles
                  const percentiles = columnValues.map(values => {
                      const sorted = [...values].sort((a, b) => a - b);
                      return values.map(value => {
                          const rank = sorted.indexOf(value) + 1;
                          return (rank / sorted.length);
                      });
                  });
              
                  // Replace original values with percentiles
                  allData3.forEach((row, rowIndex) => {
                      columnsToConvert.forEach((col, colIndex) => {
                          row[col] = percentiles[colIndex][rowIndex].toFixed(3);
                      });
                  });
              }
              function processAndStoreData4(dataArray) {
                // Unique ID counter
                let uniqueIdCounter = 1;
            
                dataArray.forEach((data, urlIndex) => {
                    const workbook = XLSX.read(new Uint8Array(data), { type: 'array' });
                    const sheetName = workbook.SheetNames[0];
                    const sheet = workbook.Sheets[sheetName];
                    const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
            
                    // Get the URL for the current data
                    const currentUrl = urls4[urlIndex];
                    // Extract season information from URL
                    let seasonSuffix = '24/25'; // Default
                    // Check if URL contains PRO20 followed by 2 digits (like PRO2023)
                    const proMatch = currentUrl.match(/PRO20(\d{2})/);
                    if (proMatch) {
                        seasonSuffix = '20' + proMatch[1]; // Use the 2 digits after PRO20 with 20 prefix
                    }
            
                    // Exclude header row
                    const dataWithoutHeader = jsonData.slice(1);
            
                    // Perform transformations and add unique ID
                    dataWithoutHeader.forEach(row => {
                        // Generate unique ID and shift columns
                        row.unshift(`${uniqueIdCounter++}`);
            
                        // Shift columns as needed
                        
                        row[15] = `${row[1]} ${seasonSuffix}`;
            
                        const reorderedRow = [
            row[0],
            row[15],
            row[2],
            row[3],
            row[10],
            row[9],
            row[11],
            row[5],
            row[6],
            row[7],
            row[8],
            row[4]
        ];
                        allData4.push(reorderedRow);
                    });
                });
            
                // Extract values from columns 4, 5, 6, 7, 8, 9, and 10
                const columnsToConvert = [4, 5, 6, 7, 8, 9, 10];
                const columnValues = columnsToConvert.map(col => allData4.map(row => parseFloat(row[col])));
            
                // Calculate percentiles
                const percentiles = columnValues.map(values => {
                    const sorted = [...values].sort((a, b) => a - b);
                    return values.map(value => {
                        const rank = sorted.indexOf(value) + 1;
                        return (rank / sorted.length);
                    });
                });
            
                // Replace original values with percentiles
                allData4.forEach((row, rowIndex) => {
                    columnsToConvert.forEach((col, colIndex) => {
                        row[col] = percentiles[colIndex][rowIndex].toFixed(3);
                    });
                });
            }
            function processAndStoreData5(dataArray) {
              // Unique ID counter
              let uniqueIdCounter = 1;
            
              dataArray.forEach((data, urlIndex) => {
                  const workbook = XLSX.read(new Uint8Array(data), { type: 'array' });
                  const sheetName = workbook.SheetNames[0];
                  const sheet = workbook.Sheets[sheetName];
                  const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
            
                  // Get the URL for the current data
                  const currentUrl = urls5[urlIndex];
                  // Extract season information from URL
                  let seasonSuffix = '23/24'; // Default
                  // Check if URL contains PRO20 followed by 2 digits (like PRO2022)
                  const proMatch = currentUrl.match(/PRO20(\d{2})/);
                  if (proMatch) {
                      seasonSuffix = '20' + proMatch[1]; // Use the 2 digits after PRO20 with 20 prefix
                  }
            
                  // Exclude header row
                  const dataWithoutHeader = jsonData.slice(1);
            
                  // Perform transformations and add unique ID
                  dataWithoutHeader.forEach(row => {
                      // Generate unique ID and shift columns
                      row.unshift(`${uniqueIdCounter++}`);
            
                      // Shift columns as needed
                      
                      row[15] = `${row[1]} ${seasonSuffix}`;
                     
                      const reorderedRow = [
            row[0],
            row[15],
            row[2],
            row[3],
            row[10],
            row[9],
            row[11],
            row[5],
            row[6],
            row[7],
            row[8],
            row[4]
        ];
            
                      allData5.push(reorderedRow);
                  });
              });
            
              
            
              // Extract values from columns 4, 5, 6, 7, 8, 9, and 10
              const columnsToConvert = [4, 5, 6, 7, 8, 9, 10];
              const columnValues = columnsToConvert.map(col => allData5.map(row => parseFloat(row[col])));
            
              // Calculate percentiles
              const percentiles = columnValues.map(values => {
                  const sorted = [...values].sort((a, b) => a - b);
                  return values.map(value => {
                      const rank = sorted.indexOf(value) + 1;
                      return (rank / sorted.length);
                  });
              });
            
              // Replace original values with percentiles
              allData5.forEach((row, rowIndex) => {
                  columnsToConvert.forEach((col, colIndex) => {
                      row[col] = percentiles[colIndex][rowIndex].toFixed(3);
                  });
              });
            }
            
            
            function processAndStoreData6(dataArray) {
              // Unique ID counter
              let uniqueIdCounter = 1;
            
              dataArray.forEach((data, urlIndex) => {
                  const workbook = XLSX.read(new Uint8Array(data), { type: 'array' });
                  const sheetName = workbook.SheetNames[0];
                  const sheet = workbook.Sheets[sheetName];
                  const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
            
                  // Get the URL for the current data
                  const currentUrl = urls6[urlIndex];
                  // Extract season information from URL
                  let seasonSuffix = '23/24'; // Default
                  // Check if URL contains PRO20 followed by 2 digits (like PRO2022)
                  const proMatch = currentUrl.match(/PRO20(\d{2})/);
                  if (proMatch) {
                      seasonSuffix = '20' + proMatch[1]; // Use the 2 digits after PRO20 with 20 prefix
                  }
            
                  // Exclude header row
                  const dataWithoutHeader = jsonData.slice(1);
            
                  // Perform transformations and add unique ID
                  dataWithoutHeader.forEach(row => {
                      // Generate unique ID and shift columns
                      row.unshift(`${uniqueIdCounter++}`);
            
                      // Shift columns as needed
                      
                      row[15] = `${row[1]} ${seasonSuffix}`;
                     
                      const reorderedRow = [
            row[0],
            row[15],
            row[2],
            row[3],
            row[10],
            row[9],
            row[11],
            row[5],
            row[6],
            row[7],
            row[8],
            row[4]
        ];
            
                      allData6.push(reorderedRow);
                  });
              });
            
              
              
            
              // Extract values from columns 4, 5, 6, 7, 8, 9, and 10
              const columnsToConvert = [4, 5, 6, 7, 8, 9, 10];
              const columnValues = columnsToConvert.map(col => allData6.map(row => parseFloat(row[col])));
            
              // Calculate percentiles
              const percentiles = columnValues.map(values => {
                  const sorted = [...values].sort((a, b) => a - b);
                  return values.map(value => {
                      const rank = sorted.indexOf(value) + 1;
                      return (rank / sorted.length);
                  });
              });
            
              // Replace original values with percentiles
              allData6.forEach((row, rowIndex) => {
                  columnsToConvert.forEach((col, colIndex) => {
                      row[col] = percentiles[colIndex][rowIndex].toFixed(3);
                  });
              });
            }
            function processAndStoreData7(dataArray) {
              // Unique ID counter
              let uniqueIdCounter = 1;
            
              dataArray.forEach((data, urlIndex) => {
                  const workbook = XLSX.read(new Uint8Array(data), { type: 'array' });
                  const sheetName = workbook.SheetNames[0];
                  const sheet = workbook.Sheets[sheetName];
                  const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
            
                  // Get the URL for the current data
                  const currentUrl = urls7[urlIndex];
                  // Extract season information from URL
                  let seasonSuffix = '22/23'; // Default
                  // Check if URL contains PRO20 followed by 2 digits (like PRO2022)
                  const proMatch = currentUrl.match(/PRO20(\d{2})/);
                  if (proMatch) {
                      seasonSuffix = '20' + proMatch[1]; // Use the 2 digits after PRO20 with 20 prefix
                  }
            
                  // Exclude header row
                  const dataWithoutHeader = jsonData.slice(1);
            
                  // Perform transformations and add unique ID
                  dataWithoutHeader.forEach(row => {
                      // Generate unique ID and shift columns
                      row.unshift(`${uniqueIdCounter++}`);
            
                      // Shift columns as needed
                      
                      row[15] = `${row[1]} ${seasonSuffix}`;
                     
                      const reorderedRow = [
            row[0],
            row[15],
            row[2],
            row[3],
            row[10],
            row[9],
            row[11],
            row[5],
            row[6],
            row[7],
            row[8],
            row[4]
        ];
            
                      allData7.push(reorderedRow);
                  });
              });
            
              
              
            
              // Extract values from columns 4, 5, 6, 7, 8, 9, and 10
              const columnsToConvert = [4, 5, 6, 7, 8, 9, 10];
              const columnValues = columnsToConvert.map(col => allData7.map(row => parseFloat(row[col])));
            
              // Calculate percentiles
              const percentiles = columnValues.map(values => {
                  const sorted = [...values].sort((a, b) => a - b);
                  return values.map(value => {
                      const rank = sorted.indexOf(value) + 1;
                      return (rank / sorted.length);
                  });
              });
            
              // Replace original values with percentiles
              allData7.forEach((row, rowIndex) => {
                  columnsToConvert.forEach((col, colIndex) => {
                      row[col] = percentiles[colIndex][rowIndex].toFixed(3);
                  });
              });
            }
              
            function processAndStoreData8(dataArray) {
              // Unique ID counter
              let uniqueIdCounter = 1;
            
              dataArray.forEach((data, urlIndex) => {
                  const workbook = XLSX.read(new Uint8Array(data), { type: 'array' });
                  const sheetName = workbook.SheetNames[0];
                  const sheet = workbook.Sheets[sheetName];
                  const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
            
                  // Get the URL for the current data
                  const currentUrl = urls8[urlIndex];
                  // Extract season information from URL
                  let seasonSuffix = '22/23'; // Default
                  // Check if URL contains PRO20 followed by 2 digits (like PRO2022)
                  const proMatch = currentUrl.match(/PRO20(\d{2})/);
                  if (proMatch) {
                      seasonSuffix = '20' + proMatch[1]; // Use the 2 digits after PRO20 with 20 prefix
                  }
            
                  // Exclude header row
                  const dataWithoutHeader = jsonData.slice(1);
            
                  // Perform transformations and add unique ID
                  dataWithoutHeader.forEach(row => {
                      // Generate unique ID and shift columns
                      row.unshift(`${uniqueIdCounter++}`);
            
                      // Shift columns as needed
                      
                      row[15] = `${row[1]} ${seasonSuffix}`;
                     
                      const reorderedRow = [
            row[0],
            row[15],
            row[2],
            row[3],
            row[10],
            row[9],
            row[11],
            row[5],
            row[6],
            row[7],
            row[8],
            row[4]
        ];
            
                      allData8.push(reorderedRow);
                  });
              });
            
              
              
            
              // Extract values from columns 4, 5, 6, 7, 8, 9, and 10
              const columnsToConvert = [4, 5, 6, 7, 8, 9, 10];
              const columnValues = columnsToConvert.map(col => allData8.map(row => parseFloat(row[col])));
            
              // Calculate percentiles
              const percentiles = columnValues.map(values => {
                  const sorted = [...values].sort((a, b) => a - b);
                  return values.map(value => {
                      const rank = sorted.indexOf(value) + 1;
                      return (rank / sorted.length);
                  });
              });
            
              // Replace original values with percentiles
              allData8.forEach((row, rowIndex) => {
                  columnsToConvert.forEach((col, colIndex) => {
                      row[col] = percentiles[colIndex][rowIndex].toFixed(3);
                  });
              });
            }

                  Promise.all(fetchPromises1)
                      .then(responses => {
                          processAndStoreData1(responses);
                          // Fetch and process the remaining files
                          Promise.all(fetchPromises2)
                              .then(responses2 => {
                                  processAndStoreData2(responses2);
                  
                                  Promise.all(fetchPromises3)
                                  .then(responses3 => {
                                      processAndStoreData3(responses3);
                                      Promise.all(fetchPromises4)
                                      .then(responses4 => {
                                          processAndStoreData4(responses4);
                                          Promise.all(fetchPromises5)
                                          .then(responses5 => {
                                              processAndStoreData5(responses5);
                                              Promise.all(fetchPromises6)
                                                .then(responses6 => {
                                                    processAndStoreData6(responses6);
                                                    Promise.all(fetchPromises7)
                                                    .then(responses7 => {
                                                        processAndStoreData7(responses7);
                                                        Promise.all(fetchPromises8)
                                                        .then(responses8 => {
                                                            processAndStoreData8(responses8);
                  
                                  // Concatenate intermediate data with new data
                                  const finalData = allData1.concat(allData2).concat(allData3).concat(allData4).concat(allData5).concat(allData6).concat(allData7).concat(allData8);
                  
                                  // Reset and assign new unique IDs
                                  finalData.forEach((row, index) => {
                                      row[0] = `${index + 1}`;
                                  });
                                  
                                  finalData.forEach(row => {
                                      allDataAsString += row.join(',') + '\n';
                                  });
                  
                  
                                  const inputLines = allDataAsString.trim().split('\n');
                  const outputLines = [];
              
              // Process each line
              for (const line of inputLines) {
                  // Split the line by comma
                const parts = line.split(',');
              
                // Extract the desired fields
                const name = parts[1];
                const age = parts[3];
                const club = parts[2];
              
                // Create the formatted string
                const outputLine = `${name},${age},${club}`;
              
                // Add the formatted string to the output array
                outputLines.push(outputLine);
              }
              
              
              
                  const names = outputLines;
                      const searchInput = document.getElementById('searchInput1');
                      searchInput.setAttribute("autocomplete", "off");
               const matchingNamesContainer = document.getElementById("matchingNames");
              const searchButton = document.getElementById("searchButton1");
              
              
              
              
              function isMobileDevice() {
                const userAgent = navigator.userAgent;
                return /Android|iPhone/i.test(userAgent);
              }
              
              // Global variables for keyboard navigation
              let selectedIndex = -1;
              let currentResults = [];
              
              function updateMatchingNames() {
    const searchQuery = searchInput.value.trim();
    
    // If empty search, hide the container
    if (searchQuery === "") {
        matchingNamesContainer.style.display = "none";
        selectedIndex = -1;
        currentResults = [];
        return;
    }
    
    // Generate search variations for the query
    const searchVariations = generateSearchVariations(searchQuery);
    const foundResults = new Set(); // Use Set to avoid duplicates
    
    // Test each search variation against all names
    searchVariations.forEach(variation => {
        const matchingNames = names.filter(name => {
            const [fullName, team, age] = name.split(",");
            // Check if either fullName or team matches using smart matching
            return smartNameMatch(variation, fullName) || smartNameMatch(variation, team);
        });
        
        // Add found results to our set
        matchingNames.forEach(name => foundResults.add(name));
    });
    
        const uniqueMatchingNames = Array.from(foundResults);
    currentResults = uniqueMatchingNames;
    
    matchingNamesContainer.innerHTML = "";
    
    if (uniqueMatchingNames.length === 0) {
        matchingNamesContainer.style.display = "none";
        selectedIndex = -1;
        return;
    }
    
    uniqueMatchingNames.forEach((name, index) => {
        const [fullName, team, age] = name.split(",");
        
        const nameElement = document.createElement("div");
        nameElement.classList.add("name");
        nameElement.setAttribute("data-index", index);
        
        nameElement.innerHTML = `
            <span class="fullName">${fullName}</span>
            <span class="age"> (${age}, </span>
            <span class="team">${team})</span>
        `;
        
        // Add event listener to handle selection
        nameElement. addEventListener ("mousedown", (e) => {
e.preventDefault();
e.stopPropagation();
            searchInput.value = fullName + "," + team + "," + age; // Set full query as input value
            searchButton1.click();
        });
        
    
    nameElement.addEventListener ("touchstart", (e) => {
e.preventDefault();
e.stopPropagation();
searchInput.value = fullName + "," + team + "," + age;
searchButton1.click();
}, 
{ passive: false });
matchingNamesContainer.appendChild (nameElement);
              });
    
    // Style the container
    const searchInputWidth = searchInput.offsetWidth;
    matchingNamesContainer.style.display = "block";
    matchingNamesContainer.style.padding = "8px";
    matchingNamesContainer.style.position = "relative";
    matchingNamesContainer.style.zIndex = "9999"; // Set a high z-index value
    matchingNamesContainer.style.width = searchInputWidth + "px";
    matchingNamesContainer.style.maxHeight = "267px"; // Limit height for long lists
    matchingNamesContainer.style.overflowY = "auto"; // Enable scrolling if content exceeds height
    matchingNamesContainer.style.border = "1px solid #e0e0e0"; // Light gray border
    
    // Reset selection when new results are shown
    selectedIndex = -1;
    updateSelection();
}

function updateSelection() {
    // Remove previous selection
    const allNames = matchingNamesContainer.querySelectorAll('.name');
    allNames.forEach((name, index) => {
        name.style.backgroundColor = '';
        name.style.color = '';
    });
    
    // Add selection to current index
    if (selectedIndex >= 0 && selectedIndex < allNames.length) {
        const selectedElement = allNames[selectedIndex];
        selectedElement.style.backgroundColor = 'var(--hover-color)';
        selectedElement.style.color = 'var(--text-color)';
        
        // Scroll into view if needed
        selectedElement.scrollIntoView({ block: 'nearest' });
    }
}
              
              searchInput.addEventListener("input", updateMatchingNames);
              searchInput.addEventListener("keyup", function(event) {
                if (event.key === "Enter") {
                  // If there's a selected item, use that
                  if (selectedIndex >= 0 && currentResults.length > selectedIndex) {
                    const selectedResult = currentResults[selectedIndex];
                    const [fullName, team, age] = selectedResult.split(",");
                    searchInput.value = fullName + "," + team + "," + age;
                  }
                  searchButton1.click(); // Trigger the search button click event
                } else if (event.key === "ArrowDown") {
                  event.preventDefault();
                  if (currentResults.length > 0) {
                    selectedIndex = Math.min(selectedIndex + 1, currentResults.length - 1);
                    updateSelection();
                  }
                } else if (event.key === "ArrowUp") {
                  event.preventDefault();
                  if (currentResults.length > 0) {
                    selectedIndex = Math.max(selectedIndex - 1, 0);
                    updateSelection();
                  }
                } else if (event.key === "Backspace") {
                  updateMatchingNames();
                }
              });
              
              // Prevent default arrow key behavior when dropdown is visible
              searchInput.addEventListener("keydown", function(event) {
                if ((event.key === "ArrowDown" || event.key === "ArrowUp") && currentResults.length > 0) {
                  event.preventDefault();
                }
              });
                  
              const csvData = allDataAsString;
              let dataArray = csvData.trim().split('\n').map(line => line.split(','));
              
              
              
                          function calculateEuclideanDifference(data1, data2) {
                            let difference = 0;
                            for (let i = 4; i <= 10; i++) {
                              const metric1 = parseFloat(data1[i]);
                              const metric2 = parseFloat(data2[i]);
                              difference += Math.pow(metric1 - metric2, 2);
                            }
                            return Math.sqrt(difference);
                          }
                          
                          
                          const colorClasses = ['result-color-1', 'result-color-2', 'result-color-3', 'result-color-4', 'result-color-5', 'result-color-6', 'result-color-7', 'result-color-8', 'result-color-9', 'result-color-10', 'result-color-11', 'result-color-12', 'result-color-13', 'result-color-14', 'result-color-15', 'result-color-16', 'result-color-17', 'result-color-18', 'result-color-19', 'result-color-20', 'result-color-21', 'result-color-22', 'result-color-23', 'result-color-24', 'result-color-25', 'result-color-26', 'result-color-27', 'result-color-28', 'result-color-29', 'result-color-30', 'result-color-31', 'result-color-32', 'result-color-33', 'result-color-34', 'result-color-35', 'result-color-36', 'result-color-37'];
                          
                          let searchResults = []; // Declare the search results variable
                          
                          function removeSpecialChars(str) {
    return str.normalize('NFD')
        .replace(/[\u0300-\u036f\s]/g, '')  // This already removes spaces with \s
        .replace(/Ø/g, 'O')
        .replace(/ø/g, 'o')
        .replace(/ı/g, 'i')
        .replace(/ł/g, 'l')              // Added support for ł -> l
        .replace(/Ł/g, 'L')              // Added support for Ł -> L
        .replace(/[^\w]/g, '');          // Remove punctuation (no \s needed since spaces already removed)
}

function generateSearchVariations(query) {
    const variations = [];
    const words = query.trim().split(/\s+/).filter(w => w.length > 0 && !/^\d+$/.test(w) && !/^\d+\/\d+$/.test(w));

    
    // Add original query
    variations.push(query);
    
    // If we have multiple words, try converting first word to initial
    if (words.length >= 2) {
        const firstInitial = words[0].charAt(0).toUpperCase();
        const restOfName = words.slice(1).join(' ');
        
        // Add variations with initial
        variations.push(`${firstInitial}. ${restOfName}`);
        variations.push(`${firstInitial} ${restOfName}`);
        variations.push(`${firstInitial}.${restOfName}`);
    }
    
    return variations;
}

function isInitialMatch(queryWord, nameWord) {
    // Check if query word is an initial (1-2 chars, possibly with dot)
    const cleanQuery = queryWord.replace(/\./g, '');
    if (cleanQuery.length === 1) {
        // Query is an initial, check if it matches first letter of name word
        return cleanQuery.toLowerCase() === nameWord.charAt(0).toLowerCase();
    }
    return false;
}

function smartNameMatch(queryName, itemName) {
    // First try the standard removeSpecialChars approach
    const normalizedQuery = removeSpecialChars(queryName.toLowerCase());
    const normalizedItem = removeSpecialChars(itemName.toLowerCase());
    
    if (normalizedItem.includes(normalizedQuery)) {
        return true;
    }
    
    // Then try intelligent word-by-word matching
    const queryWords = queryName.replace(/[^\w\s]/g, '').split(/\s+/).filter(w => w.length > 0);
    const itemWords = itemName.replace(/[^\w\s]/g, '').split(/\s+/).filter(w => w.length > 0);
    
    if (queryWords.length >= 2 && itemWords.length >= 2) {
        // Check if first word is initial and matches, and rest of words match
        const firstWordMatches = isInitialMatch(queryWords[0], itemWords[0]) || 
                               queryWords[0].toLowerCase() === itemWords[0].toLowerCase();
        
        if (firstWordMatches) {
            // Check if remaining words match
            const restQueryWords = queryWords.slice(1);
            const restItemWords = itemWords.slice(1);
            
            // Create a combined string from remaining words for comparison
            const restQuery = removeSpecialChars(restQueryWords.join(' ').toLowerCase());
            const restItem = removeSpecialChars(restItemWords.join(' ').toLowerCase());
            
            return restItem.includes(restQuery);
        }
    }
    
    return false;
}

function search(query) {
    const queryParts = query.split(',').map(part => part.trim()); // Split the query by commas and trim whitespace
    const name = queryParts[0]; // Extract the name part
    let age, team;

    // Extract age and team if they exist
    if (queryParts.length > 1) {
        age = queryParts[1].trim(); // Trim any leading or trailing spaces
        if (queryParts.length > 2) {
            team = queryParts[2].trim(); // Trim any leading or trailing spaces
        }
    }

    const nameVariations = generateSearchVariations(name);
    const foundResults = new Set(); // Use Set to avoid duplicates

    nameVariations.forEach(nameVariation => {
        const results = dataArray.filter(data => {
            const normalizedTeam = removeSpecialChars(data[2].toLowerCase());
            const normalizedAge = data[3].trim().toLowerCase(); // Trim any leading or trailing spaces

            // Check if the name matches using smart matching
            const nameMatches = smartNameMatch(nameVariation, data[1]);

            // Check if the age matches (or if age is not provided)
            const ageMatches = !age || normalizedAge === removeSpecialChars(age.toLowerCase());

            // Check if the team matches (or if team is not provided)
            const teamMatches = !team || normalizedTeam.includes(removeSpecialChars(team.toLowerCase()));

            // Return true if name matches and either age or team matches
            return nameMatches && ageMatches && teamMatches;
        });

        // Add found results to our set
        results.forEach(result => foundResults.add(result));
    });

    return Array.from(foundResults);
}
                          
                          function createTable(teamName, teamIndex, color) {
        const resultsTable = document.getElementById('resultsTable');
                resultsTable.style.display = 'block';
        const headerNames = [
            '<span data-i18n="table.percentiles">Percentiles</span>',
      '<span data-i18n="table.passes">Passes cmp</span>',
      '<span data-i18n="table.fwdPass">Fwd pass%</span>',
      '<span data-i18n="table.progPasses">Prog passes</span>',
      '<span data-i18n="table.possWon">Poss won</span>',
      '<span data-i18n="table.defDuel">Def duel%</span>',
      '<span data-i18n="table.aerial">Aerial duel%</span>',
      '<span data-i18n="table.progCarries">Prog carries</span>',
      '<span data-i18n="table.minutes">Minutes</span>',
    ];
    
      
      
        // Check if table headers exist
        const headersExist = resultsTable.querySelector('th') !== null;
      
        const table = headersExist ? resultsTable.querySelector('table') : document.createElement('table');
        table.classList.add('metrics-table');
      
        if (!headersExist) {
          // Create the table header
          const headerRow = document.createElement('tr');
         
      for (let i = 0; i < headerNames.length; i++) {
            const th = document.createElement('th');
            th.innerHTML = headerNames[i];
            // Make first column wider
            if (i === 0) {
              th.style.width = '31%';
              th.style.textAlign = 'left';
            }
            headerRow.appendChild(th);
          }
          // Add a separate table header for the "x" column
          const xHeader = document.createElement('th');
          xHeader.textContent = '';
          xHeader.style.width = '4%';
          headerRow.appendChild(xHeader);
          table.appendChild(headerRow);
        }
        // Get the player data
        const teamData = dataArray[teamIndex];
        const dataRow = document.createElement('tr');
        // First cell: player name, team, age, minutes
        const tdPlayer = document.createElement('td');
        tdPlayer.classList.add(color);
        tdPlayer.style.textAlign = 'left';
        tdPlayer.style.whiteSpace = 'normal';
        tdPlayer.style.overflow = 'visible';
        tdPlayer.style.textOverflow = 'clip';
        tdPlayer.style.minHeight = '36px';
        tdPlayer.style.lineHeight = '1.1';
        // Format player name: make trailing numeric part (e.g. '24/25' or '2025') smaller
        const playerName = teamData[1];
        const nameMatch = playerName.match(/^(.*?)(\s+)(\d{2}\/\d{2}|\d{4})$/);
        let playerNameHTML;
        if (nameMatch) {
          playerNameHTML = `${nameMatch[1]}<span style=\"font-size:10px; display:inline-block; vertical-align:baseline;\">&nbsp;${nameMatch[3]}</span>`;
        } else {
          playerNameHTML = playerName;
        }
        tdPlayer.innerHTML = `
          <div style=\"font-size:13px; white-space:nowrap;\">${playerNameHTML}</div>
          <div style=\"font-size:10px; color:#777; margin-top:0px; font-weight:normal;\">${teamData[2]}, ${teamData[3]}</div>
        `;
        dataRow.appendChild(tdPlayer);
        // Metrics columns (Passes cmp, Fwd pass%, Prog passes, Poss won, Def duel%, Aerial duel%, Prog carries)
        for (let i = 4; i <= 10; i++) {
          const td = document.createElement('td');
          const value = parseFloat(teamData[i]) * 100;
          td.textContent = value.toFixed(1);
          td.style.fontWeight = '500';
          td.classList.add(color);
          dataRow.appendChild(td);
        }
        // Add minutes column
        const tdMinutes = document.createElement('td');
        tdMinutes.textContent = teamData[11];
        tdMinutes.style.fontSize = '12px';
        tdMinutes.style.color = '#777';
        tdMinutes.style.textAlign = 'center';
        tdMinutes.classList.add(color); // Apply player color
        dataRow.appendChild(tdMinutes);
        // Add a separate table cell for the "x" column
        const xCell = document.createElement('td');
        const buttonWrapper = document.createElement('div');
        buttonWrapper.style.position = 'relative';
        buttonWrapper.style.width = '100%';
        buttonWrapper.style.height = '100%';
        buttonWrapper.style.display = 'flex';
        buttonWrapper.style.alignItems = 'center';
        const xButton = document.createElement('button');
        xButton.textContent = 'x';
        xButton.style.backgroundColor = 'transparent';
        xButton.style.border = 'none';
        xButton.style.color = '#999';
        xButton.style.fontSize = '14px';
        xButton.style.cursor = 'pointer';
        xButton.style.width = '4px';
        xButton.style.height = '24px';
        xButton.style.borderRadius = '50%';
        xButton.style.display = 'flex';
        xButton.style.alignItems = 'center';
        xButton.style.justifyContent = 'center';
        xButton.style.transition = 'all 0.2s';
        xButton.style.position = 'relative';
        xButton.style.zIndex = '1';
        const touchTarget = document.createElement('div');
        touchTarget.style.position = 'absolute';
        touchTarget.style.top = '-15px';
        touchTarget.style.left = '-15px';
        touchTarget.style.width = '44px';
        touchTarget.style.height = '44px';
        touchTarget.style.cursor = 'pointer';
        touchTarget.style.zIndex = '0';
        const handleClick = function() {
          dataRow.remove();
          const radarPolygons = document.querySelectorAll(`.radarPolygon.${color}`);
          const radarLines = document.querySelectorAll(`.radarLines.${color}`);
          const radarCircles = document.querySelectorAll(`.radarCircle.${color}`);
          radarPolygons.forEach((polygon) => polygon.remove());
          radarLines.forEach((line) => line.remove());
          radarCircles.forEach((circle) => circle.remove());
          const remainingRows = document.querySelectorAll('.metrics-table tr:not(:first-child)');
          if (remainingRows.length > 0) {
              const lastRow = remainingRows[remainingRows.length - 1];
              const lastPlayerCell = lastRow.firstChild;
              // Extract player name from the formatted HTML structure
              const playerNameDiv = lastPlayerCell.querySelector('div:first-child');
              let lastPlayerName = '';
              if (playerNameDiv) {
                  // Get the text content including the season
                  lastPlayerName = playerNameDiv.textContent.trim();
                  // The season is now in a separate span, so we need to reconstruct the full name
                  const seasonSpan = playerNameDiv.querySelector('span');
                  if (seasonSpan) {
                      // Remove the season from the main text and add it back properly
                      const nameWithoutSeason = lastPlayerName.replace(seasonSpan.textContent, '').trim();
                      const season = seasonSpan.textContent.trim();
                      lastPlayerName = nameWithoutSeason + ' ' + season;
                  }
              }
              const lastPlayerData = dataArray.find(player => player[1] === lastPlayerName);
              if (lastPlayerData) {
                  updateSimilarPlayers(lastPlayerData);
              }
          } else {
              // Hide the entire table when all players are removed
              const resultsTable = document.getElementById('resultsTable');
              if (resultsTable) {
                  resultsTable.style.display = 'none';
              }
              const similarPlayersContainer = document.getElementById('similarPlayersContainer');
              if (similarPlayersContainer) {
                  similarPlayersContainer.innerHTML = '';
              }
          }
          adjustFirstColumnWidth();
        };
        xButton.addEventListener('click', handleClick);
        touchTarget.addEventListener('click', handleClick);
        buttonWrapper.appendChild(touchTarget);
        buttonWrapper.appendChild(xButton);
        xCell.appendChild(buttonWrapper);
        dataRow.appendChild(xCell);
        table.appendChild(dataRow);
        if (!headersExist) {
          resultsTable.appendChild(table);
        }
        adjustFirstColumnWidth();
        const combResults = dataArray[teamIndex].join(', ');
      
      const outerRadius = 214.2;
      const center = [0, 0];
      const angles = [
        0,
        (2 * Math.PI) / 7,
        (4 * Math.PI) / 7,
        (6 * Math.PI) / 7,
        (8 * Math.PI) / 7,
        (10 * Math.PI) / 7,
        (12 * Math.PI) / 7
      ];
    
      function axisValueToCartesian(axis, value) {
        let angle = angles[axis - 1];
        angle += (2 * Math.PI / 7) * 0.2;
        const x = 214.2 * value * Math.cos(angle);
        const y = 214.2 * value * Math.sin(angle);
        return { x, y };
      }
    
      const svg = document.querySelector('.radar');
      const radarWrapper = svg.appendChild(
        document.createElementNS('http://www.w3.org/2000/svg', 'g')
      );
      radarWrapper.innerHTML = '';
    
      const data = [];
      const rowCols = combResults.split(',');
      for (let i = 4; i < 11; i++) {
        data.push({ axis: i - 3, value: parseFloat(rowCols[i]) });
      }
    
      const points = data
        .map(({ axis, value }) => {
          const { x, y } = axisValueToCartesian(axis, value);
          return `${x},${y}`;
        })
        .join(' ');
    
      const polyline = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'polyline'
      );
      polyline.setAttribute('class', `radarLines ${color}`);
      polyline.setAttribute('points', `${points} ${points.split(' ')[0]}`);
      polyline.setAttribute('stroke-width', '3');
      polyline.setAttribute('fill', 'none');
      radarWrapper.appendChild(polyline);
    
      const polygon = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'polygon'
      );
      polygon.setAttribute('class', `radarPolygon ${color}`);
      polygon.setAttribute('points', points);
      polygon.style.fillOpacity = '0.2';
      radarWrapper.appendChild(polygon);
    
      data.forEach(({ axis, value }) => {
        const { x, y } = axisValueToCartesian(axis, value);
        const circle = document.createElementNS(
          'http://www.w3.org/2000/svg',
          'circle'
        );
        circle.setAttribute('class', `radarCircle ${color}`);
        circle.style.fillOpacity = '0.86';
        circle.setAttribute('r', '7.6');
        circle.setAttribute('cx', x);
        circle.setAttribute('cy', y);
        radarWrapper.appendChild(circle);
      });
    }
      
      const teamNames = new Set();
                          
                          
                          function createTableForTeam1() {
                            const searchInput = document.getElementById('searchInput1');
                            const searchButton = document.getElementById('searchButton1');
                            const resultsTable = document.getElementById('resultsTable');
                            const teamNamesList = document.createElement('ul');
                            teamNamesList.style.fontFamily = 'Arial, sans-serif';
                            teamNamesList.style.listStyleType = 'none';
                            teamNamesList.style.paddingLeft = '9px';
                            resultsTable.appendChild(teamNamesList);
                            let searchCounter = 0;
                          
                            searchButton.addEventListener('click', function () {
                              const searchQuery = searchInput.value;
                              const results = search(searchQuery);
                          
                              // Reset the toggle state before performing a new search
                              const radarPolygons = document.querySelectorAll('.radarPolygon');
                              radarPolygons.forEach(polygon => {
                                polygon.style.fill = '';
                              });
                          
                              if (results) {
                                const teamId = parseInt(results[0]);
                                const teamName =
                                  results[1] + ' (' + results[2] + ', ' + results[3] + ') - ' + results[11] + ' min';
                                const color = colorClasses[searchCounter % colorClasses.length];
                          
                                createTable(teamName, teamId - 1, color);
                          
                                searchCounter++;
                              }
                            });
                          }
                          
                          createTableForTeam1();
                          
                          
                          
                          const similarPlayersContainer = document.createElement("div");
                          similarPlayersContainer.id = "similarPlayersContainer";
                          const insertHere = document.getElementById("insertHere");
                          insertHere.appendChild(similarPlayersContainer);
                          
                          let colorIndex = 0; // Initialize color index
                          
                          searchButton1.addEventListener("click", function() {
                            const searchQuery = searchInput.value;
                            const searchedPlayer = search(searchQuery);
                            if (searchedPlayer.length > 0) {
                              const searchedPlayerData = searchedPlayer[0];
                              updateSimilarPlayers(searchedPlayerData);
                              colorIndex++;
                          }
                          searchInput.value = '';
                          updateMatchingNames();
                      });
              
              function updateSimilarPlayers(playerData) {
              const searchedPlayerIndex = parseInt(playerData[0]) - 1;
              const similarPlayers = [];
              const playerRows = document.querySelectorAll('.metrics-table tr:not(:first-child)');
              
              let playerColor = '';
              
              if (playerRows.length > 0) {
                  const lastPlayerRow = playerRows[playerRows.length - 1];
                  const lastPlayerCell = lastPlayerRow.querySelector('td:first-child');
                  const classes = Array.from(lastPlayerCell.classList);
                  playerColor = classes.find(cls => cls.startsWith('result-color-'));
              }
              
              // Store current selector values before clearing container
              const existingSelectors = similarPlayersContainer.querySelector('.custom-select');
              const previousLeague = existingSelectors ? existingSelectors.value : 'all';
              const previousSeason = existingSelectors ? similarPlayersContainer.querySelectorAll('.custom-select')[1].value : 'all';
              const previousAge = existingSelectors ? similarPlayersContainer.querySelectorAll('.custom-select')[2].value : 'all';
              
              // Clear container
              similarPlayersContainer.innerHTML = '';
              
              const similarPlayerTable = document.createElement("table");
              similarPlayerTable.classList.add("similar-table");
              
              const headerRow = document.createElement("tr");
              const headerCell = document.createElement("th");
              headerCell.setAttribute("colspan", "5");
              
              // Create container for header content
              const headerContent = document.createElement("div");
              headerContent.style.position = "relative";
              headerContent.style.display = "flex";
              headerContent.style.flexDirection = "column";
              headerContent.style.gap = "8px";
              
              // Add title
              const title = document.createElement("span");
                title.classList.add("similar-text");
              title.innerHTML = `<span data-i18n="similar.to">Similar data to</span><span> ${playerData[1]}</span>`;
              title.classList.add(playerColor || colorClasses[colorIndex % colorClasses.length]);
              
              // Create selector container
              const selectorContainer = document.createElement("div");
              selectorContainer.style.display = "flex";
              selectorContainer.style.gap = "8px";
              selectorContainer.style.justifyContent = "center";
              
              // Create custom league selector
              const leagueSelectContainer = document.createElement("div");
              leagueSelectContainer.className = "custom-select-container";
              
              const leagueSelectTrigger = document.createElement("div");
              leagueSelectTrigger.className = "custom-select-trigger";
              
              const leagueSelectSpan = document.createElement("span");
              leagueSelectSpan.textContent = "All Leagues";
              leagueSelectSpan.setAttribute("data-i18n", "league_all");
              leagueSelectTrigger.appendChild(leagueSelectSpan);
              
              const leagueSelectOptions = document.createElement("div");
              leagueSelectOptions.className = "custom-select-options";
              leagueSelectOptions.style.display = "none";
              
              // Add league options
              const leagueOptions = [
                { value: "all", text: "All Leagues" },
                { value: "top7", text: "Top 7 Leagues" },
                { value: "outside", text: "Outside Top 7" }
              ];
              
              // Hidden select for maintaining existing functionality
              const leagueSelect = document.createElement("select");
              leagueSelect.classList.add("select-league");
              leagueSelect.style.display = "none";
              
              leagueOptions.forEach((option, index) => {
                const customOption = document.createElement("div");
                customOption.className = "custom-select-option";
                if (index === 0) customOption.classList.add("selected");
                customOption.setAttribute("data-value", option.value);
                
                const optionSpan = document.createElement("span");
                optionSpan.textContent = option.text;
                optionSpan.setAttribute("data-i18n", "league_" + option.value);
                customOption.appendChild(optionSpan);
                
                // Add standard option to hidden select
                const selectOption = document.createElement("option");
                selectOption.value = option.value;
                selectOption.textContent = option.text;
                selectOption.setAttribute("data-i18n", "league_" + option.value);
                if (index === 0) selectOption.selected = true;
                leagueSelect.appendChild(selectOption);
                
                // Handle option click
                customOption.addEventListener("click", function() {
                  // Update selected option
                  leagueSelectOptions.querySelectorAll(".custom-select-option").forEach(opt => 
                    opt.classList.remove("selected")
                  );
                  customOption.classList.add("selected");
                  
                  // Update trigger text
                  leagueSelectSpan.textContent = option.text;
                  leagueSelectSpan.setAttribute("data-i18n", "league_" + option.value);
                  translateElement(leagueSelectSpan, window.translations);                  
                  // Update hidden select
                  leagueSelect.value = option.value;
                  const event = new Event("change");
                  leagueSelect.dispatchEvent(event);
                  
                  // Close dropdown
                  leagueSelectTrigger.classList.remove("open");
                  leagueSelectOptions.style.display = "none";
                });
                
                leagueSelectOptions.appendChild(customOption);
              });
              
              // Toggle dropdown on trigger click
              leagueSelectTrigger.addEventListener("click", function(e) {
                e.stopPropagation();
                
                // Close other open dropdowns
                document.querySelectorAll(".custom-select-trigger.open").forEach(trigger => {
                  if (trigger !== leagueSelectTrigger) {
                    trigger.classList.remove("open");
                    trigger.nextElementSibling.style.display = "none";
                  }
                });
                
                // Toggle this dropdown
                const isOpen = leagueSelectTrigger.classList.contains("open");
                leagueSelectTrigger.classList.toggle("open");
                leagueSelectOptions.style.display = isOpen ? "none" : "block";
              });
              
              // Add elements to container
              leagueSelectContainer.appendChild(leagueSelectTrigger);
              leagueSelectContainer.appendChild(leagueSelectOptions);
              leagueSelectContainer.appendChild(leagueSelect);
              
              // Create custom season selector 
              const seasonSelectContainer = document.createElement("div");
              seasonSelectContainer.className = "custom-select-container";
              
              const seasonSelectTrigger = document.createElement("div");
              seasonSelectTrigger.className = "custom-select-trigger";
              
              const seasonSelectSpan = document.createElement("span");
              seasonSelectSpan.textContent = "All Seasons";
              seasonSelectSpan.setAttribute("data-i18n", "season_all");
              seasonSelectTrigger.appendChild(seasonSelectSpan);
              
              const seasonSelectOptions = document.createElement("div");
              seasonSelectOptions.className = "custom-select-options";
              seasonSelectOptions.style.display = "none";
              
              // Add season options
              const seasonOptions = [
                { value: "all", text: "All Seasons" },
                { value: "current", text: "Current Season" }
              ];
              
              // Hidden select for maintaining existing functionality
              const seasonSelect = document.createElement("select");
              seasonSelect.classList.add("select-league");
              seasonSelect.style.display = "none";
              
              seasonOptions.forEach((option, index) => {
                const customOption = document.createElement("div");
                customOption.className = "custom-select-option";
                if (index === 0) customOption.classList.add("selected");
                customOption.setAttribute("data-value", option.value);
                
                const optionSpan = document.createElement("span");
                optionSpan.textContent = option.text;
                optionSpan.setAttribute("data-i18n", "season_" + option.value);
                customOption.appendChild(optionSpan);
                
                // Add standard option to hidden select
                const selectOption = document.createElement("option");
                selectOption.value = option.value;
                selectOption.textContent = option.text;
                selectOption.setAttribute("data-i18n", "season_" + option.value);
                if (index === 0) selectOption.selected = true;
                seasonSelect.appendChild(selectOption);
                
                // Handle option click
                customOption.addEventListener("click", function() {
                  // Update selected option
                  seasonSelectOptions.querySelectorAll(".custom-select-option").forEach(opt => 
                    opt.classList.remove("selected")
                  );
                  customOption.classList.add("selected");
                  
                  // Update trigger text
                  seasonSelectSpan.textContent = option.text;
                  seasonSelectSpan.setAttribute("data-i18n", "season_" + option.value);
                  translateElement(seasonSelectSpan, window.translations);                  
                  // Update hidden select
                  seasonSelect.value = option.value;
                  const event = new Event("change");
                  seasonSelect.dispatchEvent(event);
                  
                  // Close dropdown
                  seasonSelectTrigger.classList.remove("open");
                  seasonSelectOptions.style.display = "none";
                });
                
                seasonSelectOptions.appendChild(customOption);
              });
              
              // Toggle dropdown on trigger click
              seasonSelectTrigger.addEventListener("click", function(e) {
                e.stopPropagation();
                
                // Close other open dropdowns
                document.querySelectorAll(".custom-select-trigger.open").forEach(trigger => {
                  if (trigger !== seasonSelectTrigger) {
                    trigger.classList.remove("open");
                    trigger.nextElementSibling.style.display = "none";
                  }
                });
                
                // Toggle this dropdown
                const isOpen = seasonSelectTrigger.classList.contains("open");
                seasonSelectTrigger.classList.toggle("open");
                seasonSelectOptions.style.display = isOpen ? "none" : "block";
              });
              
              // Add elements to container
              seasonSelectContainer.appendChild(seasonSelectTrigger);
              seasonSelectContainer.appendChild(seasonSelectOptions);
              seasonSelectContainer.appendChild(seasonSelect);
              
              // Create custom age selector
              const ageSelectContainer = document.createElement("div");
              ageSelectContainer.className = "custom-select-container";
              
              const ageSelectTrigger = document.createElement("div");
              ageSelectTrigger.className = "custom-select-trigger";
              
              const ageSelectSpan = document.createElement("span");
              ageSelectSpan.textContent = "All Ages";
              ageSelectSpan.setAttribute("data-i18n", "age_all");
              ageSelectTrigger.appendChild(ageSelectSpan);
              
              const ageSelectOptions = document.createElement("div");
              ageSelectOptions.className = "custom-select-options";
              ageSelectOptions.style.display = "none";
              
              // Add age options
              const ageOptions = [
                { value: "all", text: "All Ages" },
                { value: "u30", text: "Under 30" },
                { value: "u25", text: "Under 25" },
                { value: "u23", text: "Under 23" },
                { value: "u21", text: "Under 21" }
              ];
              
              // Hidden select for maintaining existing functionality
              const ageSelect = document.createElement("select");
              ageSelect.classList.add("select-league");
              ageSelect.style.display = "none";
              
              ageOptions.forEach((option, index) => {
                const customOption = document.createElement("div");
                customOption.className = "custom-select-option";
                if (index === 0) customOption.classList.add("selected");
                customOption.setAttribute("data-value", option.value);
                
                const optionSpan = document.createElement("span");
                optionSpan.textContent = option.text;
                optionSpan.setAttribute("data-i18n", "age_" + option.value);
                customOption.appendChild(optionSpan);
                
                // Add standard option to hidden select
                const selectOption = document.createElement("option");
                selectOption.value = option.value;
                selectOption.textContent = option.text;
                selectOption.setAttribute("data-i18n", "age_" + option.value);
                if (index === 0) selectOption.selected = true;
                ageSelect.appendChild(selectOption);
                
                // Handle option click
                customOption.addEventListener("click", function() {
                  // Update selected option
                  ageSelectOptions.querySelectorAll(".custom-select-option").forEach(opt => 
                    opt.classList.remove("selected")
                  );
                  customOption.classList.add("selected");
                  
                  // Update trigger text
                  ageSelectSpan.textContent = option.text;
                  ageSelectSpan.setAttribute("data-i18n", "age_" + option.value);
                  translateElement(ageSelectSpan, window.translations);              
                  // Update hidden select
                  ageSelect.value = option.value;
                  const event = new Event("change");
                  ageSelect.dispatchEvent(event);
                  
                  // Close dropdown
                  ageSelectTrigger.classList.remove("open");
                  ageSelectOptions.style.display = "none";
                });
                
                ageSelectOptions.appendChild(customOption);
              });
              
              // Toggle dropdown on trigger click
              ageSelectTrigger.addEventListener("click", function(e) {
                e.stopPropagation();
                
                // Close other open dropdowns
                document.querySelectorAll(".custom-select-trigger.open").forEach(trigger => {
                  if (trigger !== ageSelectTrigger) {
                    trigger.classList.remove("open");
                    trigger.nextElementSibling.style.display = "none";
                  }
                });
                
                // Toggle this dropdown
                const isOpen = ageSelectTrigger.classList.contains("open");
                ageSelectTrigger.classList.toggle("open");
                ageSelectOptions.style.display = isOpen ? "none" : "block";
              });
              
              // Add elements to container
              ageSelectContainer.appendChild(ageSelectTrigger);
              ageSelectContainer.appendChild(ageSelectOptions);
              ageSelectContainer.appendChild(ageSelect);
              
              // Add all custom select containers to selector container
              selectorContainer.appendChild(leagueSelectContainer);
              selectorContainer.appendChild(seasonSelectContainer);
              selectorContainer.appendChild(ageSelectContainer);
              
              // Close dropdowns when clicking outside
              document.addEventListener('click', function() {
                document.querySelectorAll('.custom-select-trigger.open').forEach(trigger => {
                  trigger.classList.remove('open');
                  trigger.nextElementSibling.style.display = 'none';
                });
              });
              
              // Add everything to header content
              headerContent.appendChild(title);
              headerContent.appendChild(selectorContainer);
              headerCell.appendChild(headerContent);
              headerRow.appendChild(headerCell);
              similarPlayerTable.appendChild(headerRow);
              
              // Update event listeners
              leagueSelect.addEventListener('change', function() {
                  const selectedLeague = this.value;
                  const selectedSeason = seasonSelect.value;
                  const selectedAge = ageSelect.value;
                  updateSimilarPlayersTable(playerData, selectedLeague, selectedSeason, selectedAge, similarPlayerTable);
              });
              
              seasonSelect.addEventListener('change', function() {
                  const selectedLeague = leagueSelect.value;
                  const selectedSeason = this.value;
                  const selectedAge = ageSelect.value;
                  updateSimilarPlayersTable(playerData, selectedLeague, selectedSeason, selectedAge, similarPlayerTable);
              });
              
              ageSelect.addEventListener('change', function() {
                  const selectedLeague = leagueSelect.value;
                  const selectedSeason = seasonSelect.value;
                  const selectedAge = this.value;
                  updateSimilarPlayersTable(playerData, selectedLeague, selectedSeason, selectedAge, similarPlayerTable);
              });
              
              // Initial table population with previous values
              updateSimilarPlayersTable(playerData, previousLeague, previousSeason, previousAge, similarPlayerTable);
              similarPlayersContainer.appendChild(similarPlayerTable);
              }
              
              // Add these global variables after data loading
              let playerLookup = {
                  top7: new Set(),
                  outside: new Set(),
  
              };
              
              // Add this after all data is loaded (in the Promise.all chain)
              function buildPlayerLookup() {
                  // Build lookup tables for faster searching using both name and team
                  try {
                      // Clear existing lookup sets
                      playerLookup.top7.clear();
                      playerLookup.outside.clear();
                      
                      // Process top 7 leagues data
                      const top7Data = [].concat(
                          Array.isArray(allData1) ? allData1 : [],
                          Array.isArray(allData3) ? allData3 : [],
                          Array.isArray(allData5) ? allData5 : [],

Array.isArray(allData7) ? allData7 : [],
                      );
                      
                      // Process outside top 7 leagues data
                      const outsideData = [].concat(
                          Array.isArray(allData2) ? allData2 : [],
                          Array.isArray(allData4) ? allData4 : [],
                          Array.isArray(allData6) ? allData6 : [],

Array.isArray(allData8) ? allData8 : []
                      );
                      
                      top7Data.forEach(p => {
                          if (p && p[1] && p[2]) {
                              playerLookup.top7.add(p[1] + "|" + p[2]);
                          }
                      });
                      
                      outsideData.forEach(p => {
                          if (p && p[1] && p[2]) {
                              playerLookup.outside.add(p[1] + "|" + p[2]);
                          }
                      });
                      
                  } catch (error) {
                  }
              }
              
              function updateSimilarPlayersTable(playerData, selectedLeague, selectedSeason, selectedAge, table) {
                  // Clear existing rows except header
                  while (table.rows.length > 1) {
                      table.deleteRow(1);
                  }
              
                  const searchedPlayerIndex = parseInt(playerData[0]) - 1;
                  const similarPlayers = [];
                  
                  // Process all players
                  dataArray.forEach((player, index) => {
                      if (index === searchedPlayerIndex) return;
              
                                            const playerName = player[1];
                      const playerTeam = player[2];
                      const playerAge = parseInt(player[3]);
                      const seasonYear = player[1].split(' ').pop(); // Extract year from name
              
                      // Apply filters
                      if (!passesFilters(playerName, playerTeam, playerAge, seasonYear, selectedLeague, selectedSeason, selectedAge)) {
                          return;
                      }
              
                      const difference = calculateEuclideanDifference(playerData, player);
                      similarPlayers.push({ index, difference });
                  });
              
                  // Sort and get top 5
                  const mostSimilarPlayers = similarPlayers
                      .sort((a, b) => a.difference - b.difference)
                      .slice(0, 5);
              
                  // Create and append the row
                  const similarPlayerRow = document.createElement("tr");
                  similarPlayerRow.innerHTML = mostSimilarPlayers
                      .map(({ index }) => {
                          const player = dataArray[index];
                          const playerName = player[1];
                          const playerTeam = player[2]; 
                          const playerAge = player[3];
                          // Show player name with team in a smaller font
                          return `<td style="font-size: 10.8px; cursor: pointer;">
                                  <div>${playerName}</div>
                                  <div style="font-size: 9px; color: #777;">${playerTeam}</div>
                              </td>`;
                      })
                      .join('');
              
                  // Add click handlers
                  similarPlayerRow.querySelectorAll('td').forEach((cell, cellIndex) => {
                      cell.addEventListener("click", () => {
                          const player = dataArray[mostSimilarPlayers[cellIndex].index];
                          const playerName = player[1];
                          const playerTeam = player[2];
                          const playerAge = player[3];
                          // Set the full player info including team and age to ensure the correct player is found
                          document.getElementById('searchInput1').value = playerName + "," + playerAge + "," + playerTeam;
                          document.getElementById('searchButton1').click();
                      });
                  });;
              
                  table.appendChild(similarPlayerRow);
              }
              
              function passesFilters(playerName, playerTeam, playerAge, seasonYear, selectedLeague, selectedSeason, selectedAge) {
                  try {
                      if (selectedLeague !== 'all' && playerName && playerTeam) {
                          const playerKey = playerName + "|" + playerTeam; // Create key with name and team
                          const isTop7 = playerLookup.top7.has(playerKey);
                          const isOutside = playerLookup.outside.has(playerKey);
                          
                         
                              if (selectedLeague === 'top7' && !isTop7) return false;
                              if (selectedLeague === 'outside' && !isOutside) return false;
                          
                      }
                  
                      if (
                          selectedSeason === 'current' && playerName &&
                          !playerName.includes('25/26') && 
                          !playerName.includes('2025')
                      ) {
                          return false;
                      }
                  
                      // Age filter
                      if (playerAge && !isNaN(playerAge)) {
                          switch(selectedAge) {
                              case 'u30': if (playerAge >= 30) return false; break;
                              case 'u25': if (playerAge >= 25) return false; break;
                              case 'u23': if (playerAge >= 23) return false; break;
                              case 'u21': if (playerAge >= 21) return false; break;
                          }
                      }
                  
                      return true;
                  } catch (error) {
                      return true;
                  }
              }
              
              // Make sure to call buildPlayerLookup after data loading
              Promise.all([fetchPromises1, fetchPromises2, fetchPromises3, fetchPromises4, fetchPromises5, fetchPromises6, fetchPromises7, fetchPromises8])
                  .then(() => {
                      buildPlayerLookup();
                  });
              
              })})})})})})})})
                          .catch(error => {
                              console.error('Error fetching or processing data:', error);
                          });
