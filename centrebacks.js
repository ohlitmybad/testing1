const allData1 = [];
  const allData2 = [];
  let allDataAsString = '';

// Worker URL
const WORKER_URL = 'https://summer-dream-8f33.datamb-football.workers.dev';

// File aliases: 24=RATOP72526_CB, 60=RATOP72425_CB
const fileAliases1 = ['24']; // Current season
const fileAliases2 = ['60']; // Old season

const fetchPromises1 = fileAliases1.map(alias => 
    fetch(`${WORKER_URL}/?file=${alias}`).then(response => response.arrayBuffer())
);
const fetchPromises2 = fileAliases2.map(alias => 
    fetch(`${WORKER_URL}/?file=${alias}`).then(response => response.arrayBuffer())
);
  
  function processAndStoreData1(dataArray) {
      // Unique ID counter
      let uniqueIdCounter = 1;
  
      dataArray.forEach(data => {
          const workbook = XLSX.read(new Uint8Array(data), { type: 'array' });
          const sheetName = workbook.SheetNames[0];
          const sheet = workbook.Sheets[sheetName];
          const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
  
          // Exclude header row
          const dataWithoutHeader = jsonData.slice(1);
  
          // Perform transformations and add unique ID
          dataWithoutHeader.forEach(row => {
              // Generate unique ID and shift columns
              row.unshift(`${uniqueIdCounter++}`);
  
              // Shift columns as needed
              
              row[15] = `${row[1]} 24/25`;
                  
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

  function processAndStoreData(dataArray) {
      // Unique ID counter
      let uniqueIdCounter = 1;
  
      dataArray.forEach(data => {
          const workbook = XLSX.read(new Uint8Array(data), { type: 'array' });
          const sheetName = workbook.SheetNames[0];
          const sheet = workbook.Sheets[sheetName];
          const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
  
          // Exclude header row
          const dataWithoutHeader = jsonData.slice(1);
  
          // Perform transformations and add unique ID
          dataWithoutHeader.forEach(row => {
              // Generate unique ID and shift columns
              row.unshift(`${uniqueIdCounter++}`);
  
              // Shift columns as needed
              
              row[15] = `${row[1]} 25/26`;
  
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
    
    Promise.all(fetchPromises1)
        .then(responses => {
            processAndStoreData(responses);
    
        
            // Fetch and process the remaining files
            Promise.all(fetchPromises2)
                .then(responses2 => {
                    processAndStoreData1(responses2);
    
                    // Concatenate intermediate data with new data
                    const finalData = allData2.concat(allData1);
    
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
        // Format player name: make trailing numeric part (e.g. '25/26') smaller
        const playerName = teamData[1];
        const nameMatch = playerName.match(/^(.*?)(\s+)(\d{2}\/\d{2})$/);
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
      
      const outerRadius = 190;
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
        const x = 190 * value * Math.cos(angle);
        const y = 190 * value * Math.sin(angle);
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
        circle.setAttribute('r', '6');
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
        teamNamesList.style.margin = '0';
        teamNamesList.style.padding = '0';
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
  
  // Clear and reset the matching names container
  matchingNamesContainer.innerHTML = "";
  matchingNamesContainer.style.border = "none";
  matchingNamesContainer.style.padding = "0";
});

function updateSimilarPlayers(playerData) {
  const searchedPlayerIndex = parseInt(playerData[0]) - 1;
  const similarPlayers = [];
  
  // Find the color class of the LAST player from their row in the table
  const playerRows = document.querySelectorAll('.metrics-table tr:not(:first-child)');
  let playerColor = '';
  if (playerRows.length > 0) {
      const lastPlayerRow = playerRows[playerRows.length - 1];
      const lastPlayerCell = lastPlayerRow.querySelector('td:first-child');
      // Get all color classes from the element
      const classes = Array.from(lastPlayerCell.classList);
      // Find the color class (starts with 'result-color-')
      playerColor = classes.find(cls => cls.startsWith('result-color-'));
  }
  
  for (let i = 0; i < dataArray.length; i++) {
      if (i !== searchedPlayerIndex) {
          const difference = calculateEuclideanDifference(playerData, dataArray[i]);
          similarPlayers.push({ index: i, difference: difference });
      }
  }

  similarPlayers.sort((a, b) => a.difference - b.difference);
  const mostSimilarPlayers = similarPlayers.slice(0, 5);

  const similarPlayersContainer = document.getElementById('similarPlayersContainer');
  similarPlayersContainer.innerHTML = ''; // Clear existing content

  const similarPlayerTable = document.createElement("table");
  similarPlayerTable.classList.add("similar-table");

  const headerRow = document.createElement("tr");
  const headerCell = document.createElement("th");
  headerCell.setAttribute("colspan", "5");
  headerCell.classList.add("similar-text");
headerCell.innerHTML = `<span data-i18n="similar.to">Similar data to</span><span> ${playerData[1]}</span>`;

  
  // Use the last player's color class instead of the first one
  headerCell.classList.add(playerColor || colorClasses[colorIndex % colorClasses.length]);
  
  // Add media query for mobile devices
  const mediaQuery = window.matchMedia('(max-width: 500px)');
  if (mediaQuery.matches) {
    headerCell.style.fontSize = "11px";
    headerCell.style.padding = "8px";
  }
  
  headerRow.appendChild(headerCell);
  similarPlayerTable.appendChild(headerRow);

  const similarPlayerRow = document.createElement("tr");

  for (let i = 0; i < mostSimilarPlayers.length; i++) {
      const playerIndex = mostSimilarPlayers[i].index;
      const playerName = dataArray[playerIndex][1];
      
      const playerCell = document.createElement("td");
      playerCell.textContent = playerName;
      playerCell.style.fontSize = "12px";
      playerCell.style.padding = "7px 8px";
      playerCell.style.cursor = "pointer";
      playerCell.style.transition = "background-color 0.2s";
      playerCell.style.borderRight = "1px solid rgba(0, 0, 0, 0.05)";
      playerCell.style.lineHeight = "1.2";

      playerCell.addEventListener("click", function() {
          const searchInput = document.getElementById('searchInput1');
          const searchButton = document.getElementById('searchButton1');
          // Get the team name and age from the data array to ensure correct player selection
          const playerTeam = dataArray[playerIndex][2];
          const playerAge = dataArray[playerIndex][3];
          // Instead of using the search input and search button, directly create a table for this player
          const color = colorClasses[colorIndex % colorClasses.length];
          createTable(playerName, playerIndex, color);
          colorIndex++;
          // Update similar players for this player
          updateSimilarPlayers(dataArray[playerIndex]);
      });

      similarPlayerRow.appendChild(playerCell);
  }

  similarPlayerTable.appendChild(similarPlayerRow);
  similarPlayersContainer.appendChild(similarPlayerTable);
}

}) })
    .catch(error => {
        console.error('Error fetching or processing data:', error);
    });
