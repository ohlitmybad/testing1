const allData1 = [];
  const allData2 = [];
  let allDataAsString = '';

// Tooltip functionality
function showTooltip(element, text) {
    // Remove any existing tooltips
    const existingTooltip = document.querySelector('.tooltip');
    if (existingTooltip) {
        existingTooltip.remove();
    }

    // Create tooltip element
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = text;

    // Add to body first to get proper dimensions
    document.body.appendChild(tooltip);

    // Position tooltip
    const rect = element.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();
    
    // Calculate position (above the element, centered)
    let left = rect.left + (rect.width / 2) - (tooltipRect.width / 2);
    let top = rect.top - tooltipRect.height - 8;
    
    // Ensure tooltip doesn't go off-screen
    if (left < 10) left = 10;
    if (left + tooltipRect.width > window.innerWidth - 10) {
        left = window.innerWidth - tooltipRect.width - 10;
    }
    if (top < 10) {
        // If tooltip would go above viewport, show it below instead
        top = rect.bottom + 8;
    }

    tooltip.style.left = left + 'px';
    tooltip.style.top = top + 'px';

    // Remove tooltip after 2 seconds
    setTimeout(() => {
        if (tooltip.parentNode) {
            tooltip.remove();
        }
    }, 2000);
}
  

  
  const urls1 = [
  'https://datamb.football/database/CURRENT/RATOP72526/GK/GK.xlsx',
  
];

const urls2 = [
'https://datamb.football/database/OLD/RATOP72425/GK/GK.xlsx',


];

const fetchPromises1 = urls1.map(url => fetch(url).then(response => response.arrayBuffer()));
const fetchPromises2 = urls2.map(url => fetch(url).then(response => response.arrayBuffer()));

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
                          

            // Reorder columns
            const reorderedRow = [
                row[0],
                row[15],
                row[2],
                row[3],
                row[8],
                row[10],
                row[5],
                row[11],
                row[7],
                row[6],
                row[9],
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
            

            // Reorder columns
            const reorderedRow = [
                row[0],
                row[15],
                row[2],
                row[3],
                row[8],
                row[10],
                row[5],
                row[11],
                row[7],
                row[6],
                row[9],
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


function updateMatchingNames() {
    const searchQuery = searchInput.value.trim();
    
    // If empty search, hide the container
    if (searchQuery === "") {
        matchingNamesContainer.style.display = "none";
        return;
    }
    
    // Generate search variations for the query
    const searchVariations = generateSearchVariations(searchQuery);
    const foundResults = new Set(); // Use Set to avoid duplicates
    
    // Test each search variation against all names
    searchVariations.forEach(variation => {
        const matchingNames = names.filter(function(name) {
            const [fullName] = name.split(",");
            return smartNameMatch(variation, fullName);
        });
        
        // Add found results to our set
        matchingNames.forEach(name => foundResults.add(name));
    });
    
    const uniqueMatchingNames = Array.from(foundResults);
    
    matchingNamesContainer.innerHTML = "";
    
    uniqueMatchingNames.forEach(function(name) {
        const [fullName, team, age] = name.split(",");
        
        const nameElement = document.createElement("div");
        nameElement.classList.add("name");
        
        const fullNameElement = document.createElement("span");
        fullNameElement.textContent = fullName;
        fullNameElement.classList.add("fullName");
        nameElement.appendChild(fullNameElement);
        
        const ageElement = document.createElement("span");
        ageElement.textContent = " (" + age + ",";
        ageElement.classList.add("age");
        nameElement.appendChild(ageElement);
        
        const teamElement = document.createElement("span");
        teamElement.textContent = " " + team + ")";
        teamElement.classList.add("team");
        nameElement.appendChild(teamElement);
        
        nameElement.addEventListener("mousedown", function(event) {
    const clickedElement = event.target.closest(".name");
    if (clickedElement) {
        const fullName = clickedElement.querySelector(".fullName").textContent;
        const age = clickedElement.querySelector(".age").textContent.trim();
        const team = clickedElement.querySelector(".team").textContent
            .trim()
            .normalize('NFD')
            .replace(/[\u0300-\u036f\s]/g, '')
            .replace(/[^a-zA-Z]/g, '');
        
        const searchQuery = fullName + "," + team + "," + age.substring(1, age.length - 1);
        
        searchInput.value = searchQuery; // Set the full query as the search input value
        searchButton1.click();
    }
});
nameElement.addEventListener ("touchstart", (e) => {

    const clickedElement = event.target.closest(".name");
    if (clickedElement) {
        const fullName = clickedElement.querySelector(".fullName").textContent;
        const age = clickedElement.querySelector(".age").textContent.trim();
        const team = clickedElement.querySelector(".team").textContent
            .trim()
            .normalize('NFD')
            .replace(/[\u0300-\u036f\s]/g, '')
            .replace(/[^a-zA-Z]/g, '');
        
        const searchQuery = fullName + "," + team + "," + age.substring(1, age.length - 1);
        
        searchInput.value = searchQuery; // Set the full query as the search input value
        searchButton1.click();
}},
    { passive: false });
    matchingNamesContainer.appendChild (nameElement);
                  });
    
    if (uniqueMatchingNames.length === 0) {
        matchingNamesContainer.style.display = "none";
    } else {
        matchingNamesContainer.style.display = "block";
        matchingNamesContainer.style.padding = "8px";
        matchingNamesContainer.style.position = "relative";
        matchingNamesContainer.style.left = "13.3px";
        matchingNamesContainer.style.zIndex = "9999"; // Set a high z-index value
        matchingNamesContainer.style.width = "389px"; // Match the width of the search input
        matchingNamesContainer.style.maxHeight = "228px"; // Limit height for long lists
        matchingNamesContainer.style.overflowY = "auto"; // Enable scrolling if content exceeds height
        matchingNamesContainer.style.border = "1px solid #e0e0e0"; // Light gray border
    }
}

searchInput.addEventListener("input", updateMatchingNames);
searchInput.addEventListener("keyup", function(event) {
if (event.key === "Enter") {
  searchButton1.click(); // Trigger the search button click event
} else if (event.key === "Backspace") {
  updateMatchingNames();
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
const headerNames = [
    'Percentiles',
    '',
    '',
    'SP',
    'AW',
    'IN',
    'PC',
    'L%',
    'S%',
    'PG',
    'MIN',
    '',
];

// Full names for tooltips
const fullNames = [
    'Percentiles vs Top 7 Leagues',
    '',
    '',
    'Save percentage %',
    'Aerial duels won',
    'Interceptions (PAdj)',
    'Passes completed',
    'Long pass accuracy %',
    'Short pass completion %',
    'Prevented goals',
    'Minutes played',
    '',
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
if (i === 11) { // Last column (index 11)
    // Create a container for the info icon
    const iconContainer = document.createElement('span');
    iconContainer.innerHTML = '<i class="ion-information-circled" style="font-size: 14px; color: #666; cursor: pointer;"></i>';
    iconContainer.style.display = 'flex';
    iconContainer.style.justifyContent = 'left';
    iconContainer.style.alignItems = 'center';
    iconContainer.style.width = '100%';
    iconContainer.style.marginTop = '1px';
    
    th.appendChild(iconContainer);
    th.setAttribute('data-full-name', 'Click on a header to see full metric name');
} else {
    th.textContent = headerNames[i];
    th.setAttribute('data-full-name', fullNames[i]);
}
headerRow.appendChild(th);
}
// We don't need a separate header for the x button anymore
table.appendChild(headerRow);

// Add click event listeners to header cells for tooltips
const headerCells = headerRow.querySelectorAll('th');
headerCells.forEach((th, index) => {
    // Skip cells 2 and 3 (index 1 and 2)
    if (index !== 1 && index !== 2) {
        th.addEventListener('click', function() {
            const fullName = this.getAttribute('data-full-name');
            if (fullName && fullName.trim() !== '') {
                // Add clicked effect (except for the last column with info icon)
                if (index !== 11) {
                    this.classList.add('clicked');
                }
                
                showTooltip(this, fullName);
                
                // Remove clicked effect after 2 seconds (same as tooltip)
                if (index !== 11) {
                    setTimeout(() => {
                        this.classList.remove('clicked');
                    }, 2000);
                }
            }
        });
    } else {
        // Remove cursor pointer for non-clickable cells
        th.style.cursor = 'default';
    }
});
}




const teamData = dataArray[teamIndex];
const dataRow = document.createElement('tr');

for (let i = 1; i <= 11; i++) {
    const td = document.createElement('td');
    
    if (i >= 4 && i <= 10) {
        // Columns 3-10: multiply by 100 and apply custom rounding
        const value = teamData[i] * 100;
        if (value >= 99.0 && value < 100.0) {
            td.textContent = '99';
        } else {
            td.textContent = Math.ceil(value).toString();
        }
    } else {
        // Other columns: add comma suffix
        td.textContent = teamData[i];
    }
    
    td.classList.add(color);
    dataRow.appendChild(td);
}

// Add a separate table cell for the "x" column
const xCell = document.createElement('td');
const xButton = document.createElement('button');
xButton.innerHTML = '<i class="ion-close"></i>';
xButton.classList.add('x-button');
xCell.classList.add('x-cell');
xCell.style.cursor = 'pointer';
xCell.addEventListener('click', function () {
  dataRow.remove(); // Remove the corresponding row from the table
  const radarPolygons = document.querySelectorAll(`.radarPolygon.${color}`);
  const radarLines = document.querySelectorAll(`.radarLines.${color}`);
  const radarCircles = document.querySelectorAll(`.radarCircle.${color}`);

  radarPolygons.forEach((polygon) => polygon.remove());
  radarLines.forEach((line) => line.remove());
  radarCircles.forEach((circle) => circle.remove());

    const remainingDataRows = table.querySelectorAll('tr:not(:first-child)'); 
  if (remainingDataRows.length === 0) {
    table.remove(); 
  }

  const remainingRows = resultsTable.querySelectorAll('.metrics-table tr:not(:first-child)');
  
  if (remainingRows.length > 0) {
      // Get the last player's name from the last row
      const lastRow = remainingRows[remainingRows.length - 1];
      const lastPlayerName = lastRow.querySelector('td:first-child').textContent.split(',')[0];
      
      // Update similar players for the last remaining player
      const lastPlayerData = dataArray.find(player => player[1] === lastPlayerName);
      if (lastPlayerData) {
          updateSimilarPlayers(lastPlayerData);
      }
  } else {
      // If no players left, clear the similar players container
      const similarPlayersContainer = document.getElementById('similarPlayersContainer');
      if (similarPlayersContainer) {
          similarPlayersContainer.innerHTML = '';
      }
  }
});

xCell.appendChild(xButton);
dataRow.appendChild(xCell);

table.appendChild(dataRow);

if (!headersExist) {
resultsTable.appendChild(table);
}

const combResults = dataArray[teamIndex].join(', ');



const outerRadius = 130;
const center = [0, 0];
const angles = [0, 2 * Math.PI / 7, 4 * Math.PI / 7, 6 * Math.PI / 7, 8 * Math.PI / 7, 10 * Math.PI / 7, 12 * Math.PI / 7];

function axisValueToCartesian(axis, value) {
let angle = angles[axis - 1];
angle += (2 * Math.PI / 7) * 0.2;
const x = 165 * value * Math.cos(angle);
const y = 165 * value * Math.sin(angle);
return { x, y };
}

const svg = document.querySelector('.radar');
const radarWrapper = svg.appendChild(document.createElementNS('http://www.w3.org/2000/svg', 'g'));
radarWrapper.setAttribute('transform', 'translate(0,0)');
radarWrapper.innerHTML = '';

const data = [];
const rowCols = combResults.split(',');
for (let i = 4; i < 11; i++) {
data.push({ axis: i - 3, value: parseFloat(rowCols[i]) });
}

const points = data.map(({ axis, value }) => {
const { x, y } = axisValueToCartesian(axis, value);
return `${x},${y}`;
}).join(' ');

const polyline = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
polyline.setAttribute('class', `radarLines ${color}`); // Add the color class to the polyline
polyline.setAttribute('points', `${points} ${points.split(' ')[0]}`);
polyline.setAttribute('stroke-width', '3');
polyline.setAttribute('fill', 'none');
radarWrapper.appendChild(polyline);

const polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
polygon.setAttribute('class', `radarPolygon ${color}`); // Add the color class to the polygon
polygon.setAttribute('points', points);
polygon.style.fillOpacity = '0.2';
radarWrapper.appendChild(polygon);

data.forEach(({ axis, value }) => {
const { x, y } = axisValueToCartesian(axis, value);
const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
circle.setAttribute('class', `radarCircle ${color}`); // Add the color class to the circle
circle.style.fillOpacity = '0.86'; // Set the opacity to 1 (fully opaque)
circle.setAttribute('r', '6');
circle.setAttribute('cx', x);
circle.setAttribute('cy', y);
radarWrapper.appendChild(circle);
});
}


function createTableForTeam1() {
const searchInput = document.getElementById('searchInput1');
const searchButton = document.getElementById('searchButton1');
const resultsTable = document.getElementById('resultsTable');


const teamNames = new Set(); // Keep track of unique team names

const teamNamesList = document.createElement('ul');
teamNamesList.style.fontFamily = 'Arial, sans-serif'; 
teamNamesList.style.listStyleType = 'none'; // Remove the bullet points
teamNamesList.style.paddingLeft = '9px'; // Adjust the padding to move it further left
resultsTable.appendChild(teamNamesList);


let searchCounter = 0; // Initialize search counter

searchButton.addEventListener('click', function () {
const searchQuery = searchInput.value;
const results = search(searchQuery);

if (results) {
const teamId = parseInt(results[0]); // Parse the team ID from the results

const teamName = results[1] + ' (' + results[2] + ', ' + results[3] + ') - ' + results[11] + ' min';
const color = colorClasses[searchCounter % colorClasses.length]; // Get the color class based on the search counter

if (!teamNames.has(teamName)) {

const teamNameItem = document.createElement('li');
teamNameItem.textContent = teamName;
teamNameItem.classList.add(color); // Apply the color class to the team name


createTable(teamName, teamId - 1, color); // Pass the team ID and color to createTable
searchCounter++;

}
} 

});


}



createTableForTeam1();



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
  const mostSimilarPlayers = similarPlayers.slice(0, 3);

  const similarPlayersContainer = document.getElementById('similarPlayersContainer');
  similarPlayersContainer.innerHTML = ''; // Clear existing content

  const similarPlayerTable = document.createElement("table");
  similarPlayerTable.classList.add("similar-table");
  
  // Set width and alignment for the table
  similarPlayerTable.style.width = "100%";
  similarPlayerTable.style.textAlign = "center";

  const headerRow = document.createElement("tr");
  const headerCell = document.createElement("th");
  headerCell.setAttribute("colspan", "5");
  headerCell.style.cssText = "text-align: center !important; display: block !important; width: 100% !important;";
  const colorClass = playerColor || colorClasses[colorIndex % colorClasses.length];
  headerCell.innerHTML = `<div style="text-align: center !important; width: 100% !important; display: block !important; font-size: 12px;"><span data-i18n="similar.to" class="${colorClass}">Similar data to</span> <span class="${colorClass}">${playerData[1]}</span></div>`;
  // Use the last player's color class instead of the first one
  headerCell.classList.add(colorClass);
  headerRow.appendChild(headerCell);
  similarPlayerTable.appendChild(headerRow);

  const similarPlayerRow = document.createElement("tr");
  similarPlayerRow.style.cssText = "text-align: center !important; display: flex !important; justify-content: center !important;";

  for (let i = 0; i < mostSimilarPlayers.length; i++) {
      const playerIndex = mostSimilarPlayers[i].index;
      const playerName = dataArray[playerIndex][1];
      
      const playerCell = document.createElement("td");
      playerCell.innerHTML = `<div style="text-align: center !important; width: 100% !important; font-size: 10.8px !important; cursor: pointer !important; border: 1px solid var(--border-color) !important; border-radius: 4px !important; padding: 2px 4px !important; margin: 2px !important; display: inline-block !important; transition: background-color 0.2s !important;">${playerName}</div>`;

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



  if (window.translations) {
const translatable = similarPlayerTable.querySelectorAll('[data-i18n]');
translatable.forEach(element => translateElement(element, window.translations));
}}
}) })
.catch(error => {
console.error('Error fetching or processing data:', error);
});