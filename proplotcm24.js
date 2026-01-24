const allData1 = [];
  const allData2 = [];
  let allDataAsString = '';

// Worker URL
const WORKER_URL = 'https://summer-dream-8f33.datamb-football.workers.dev';

// File aliases: 23=RATOP72526_GK, 59=RATOP72425_GK
const fileAliases1 = ['23']; // Current season
const fileAliases2 = ['59']; // Old season

const fetchPromises1 = fileAliases1.map(alias => 
    fetch(`${WORKER_URL}/?file=${alias}`).then(response => response.arrayBuffer())
);
const fetchPromises2 = fileAliases2.map(alias => 
    fetch(`${WORKER_URL}/?file=${alias}`).then(response => response.arrayBuffer())
);

function processAndStoreData1(dataArray) {

    let uniqueIdCounter = 1;

    dataArray.forEach(data => {
        const workbook = XLSX.read(new Uint8Array(data), { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

        const dataWithoutHeader = jsonData.slice(1);

        dataWithoutHeader.forEach(row => {

            row.unshift(`${uniqueIdCounter++}`);

            row[15] = `${row[1]} 24/25`;

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

    const columnsToConvert = [4, 5, 6, 7, 8, 9, 10];
    const columnValues = columnsToConvert.map(col => allData1.map(row => parseFloat(row[col])));

    const percentiles = columnValues.map(values => {
        const sorted = [...values].sort((a, b) => a - b);
        return values.map(value => {
            const rank = sorted.indexOf(value) + 1;
            return (rank / sorted.length);
        });
    });

    allData1.forEach((row, rowIndex) => {
        columnsToConvert.forEach((col, colIndex) => {
            row[col] = percentiles[colIndex][rowIndex].toFixed(3);
        });
    });
}

function processAndStoreData(dataArray) {

    let uniqueIdCounter = 1;

    dataArray.forEach(data => {
        const workbook = XLSX.read(new Uint8Array(data), { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

        const dataWithoutHeader = jsonData.slice(1);

        dataWithoutHeader.forEach(row => {

            row.unshift(`${uniqueIdCounter++}`);

            row[15] = `${row[1]} 25/26`;

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

    const columnsToConvert = [4, 5, 6, 7, 8, 9, 10];
    const columnValues = columnsToConvert.map(col => allData2.map(row => parseFloat(row[col])));

    const percentiles = columnValues.map(values => {
        const sorted = [...values].sort((a, b) => a - b);
        return values.map(value => {
            const rank = sorted.indexOf(value) + 1;
            return (rank / sorted.length);
        });
    });

    allData2.forEach((row, rowIndex) => {
        columnsToConvert.forEach((col, colIndex) => {
            row[col] = percentiles[colIndex][rowIndex].toFixed(3);
        });
    });
}

Promise.all(fetchPromises1)
    .then(responses => {
        processAndStoreData(responses);

        Promise.all(fetchPromises2)
            .then(responses2 => {
                processAndStoreData1(responses2);

                const finalData = allData2.concat(allData1);

                finalData.forEach((row, index) => {
                    row[0] = `${index + 1}`;
                });

                finalData.forEach(row => {
                    allDataAsString += row.join(',') + '\n';
                });

                const inputLines = allDataAsString.trim().split('\n');

      const outputLines = [];

      for (const line of inputLines) {

          const parts = line.split(',');

          const name = parts[1];
          const age = parts[3];
          const club = parts[2];

          const outputLine = `${name},${age},${club}`;

          outputLines.push(outputLine);
      }

const names = outputLines;
const searchInput = document.getElementById('searchInput1');
searchInput.setAttribute("autocomplete", "off");

 const matchingNamesContainer = document.getElementById("matchingNames");

function updateMatchingNames() {
    const searchQuery = searchInput.value.trim();

    if (searchQuery === "") {
        matchingNamesContainer.style.display = "none";
        return;
    }

    const searchVariations = generateSearchVariations(searchQuery);
    const foundResults = new Set(); 

    searchVariations.forEach(variation => {
        const matchingNames = names.filter(function(name) {
            const [fullName] = name.split(",");
            return smartNameMatch(variation, fullName);
        });

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

        searchInput.value = searchQuery; 
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

        searchInput.value = searchQuery; 
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
        matchingNamesContainer.style.zIndex = "9999"; 
        matchingNamesContainer.style.width = "389px"; 
        matchingNamesContainer.style.maxHeight = "228px"; 
        matchingNamesContainer.style.overflowY = "auto"; 
        matchingNamesContainer.style.border = "1px solid #e0e0e0"; 
    }
}

searchInput.addEventListener("input", updateMatchingNames);
searchInput.addEventListener("keyup", function(event) {
if (event.key === "Enter") {
  searchButton1.click(); 
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

function removeSpecialChars(str) {
    return str.normalize('NFD')
        .replace(/[\u0300-\u036f\s]/g, '')  
        .replace(/Ø/g, 'O')
        .replace(/ø/g, 'o')
        .replace(/ı/g, 'i')
        .replace(/ł/g, 'l')              
        .replace(/Ł/g, 'L')              
        .replace(/[^\w]/g, '');          
}

function generateSearchVariations(query) {
    const variations = [];
    const words = query.trim().split(/\s+/).filter(w => w.length > 0 && !/^\d+$/.test(w) && !/^\d+\/\d+$/.test(w));

    variations.push(query);

    if (words.length >= 2) {
        const firstInitial = words[0].charAt(0).toUpperCase();
        const restOfName = words.slice(1).join(' ');

        variations.push(`${firstInitial}. ${restOfName}`);
        variations.push(`${firstInitial} ${restOfName}`);
        variations.push(`${firstInitial}.${restOfName}`);
    }

    return variations;
}

function isInitialMatch(queryWord, nameWord) {

    const cleanQuery = queryWord.replace(/\./g, '');
    if (cleanQuery.length === 1) {

        return cleanQuery.toLowerCase() === nameWord.charAt(0).toLowerCase();
    }
    return false;
}

function smartNameMatch(queryName, itemName) {

    const normalizedQuery = removeSpecialChars(queryName.toLowerCase());
    const normalizedItem = removeSpecialChars(itemName.toLowerCase());

    if (normalizedItem.includes(normalizedQuery)) {
        return true;
    }

    const queryWords = queryName.replace(/[^\w\s]/g, '').split(/\s+/).filter(w => w.length > 0);
    const itemWords = itemName.replace(/[^\w\s]/g, '').split(/\s+/).filter(w => w.length > 0);

    if (queryWords.length >= 2 && itemWords.length >= 2) {

        const firstWordMatches = isInitialMatch(queryWords[0], itemWords[0]) || 
                               queryWords[0].toLowerCase() === itemWords[0].toLowerCase();

        if (firstWordMatches) {

            const restQueryWords = queryWords.slice(1);
            const restItemWords = itemWords.slice(1);

            const restQuery = removeSpecialChars(restQueryWords.join(' ').toLowerCase());
            const restItem = removeSpecialChars(restItemWords.join(' ').toLowerCase());

            return restItem.includes(restQuery);
        }
    }

    return false;
}

function search(query) {
    const queryParts = query.split(',').map(part => part.trim()); 
    const name = queryParts[0]; 
    let age, team;

    if (queryParts.length > 1) {
        age = queryParts[1].trim(); 
        if (queryParts.length > 2) {
            team = queryParts[2].trim(); 
        }
    }

    const nameVariations = generateSearchVariations(name);
    const foundResults = new Set(); 

    nameVariations.forEach(nameVariation => {
        const results = dataArray.filter(data => {
            const normalizedTeam = removeSpecialChars(data[2].toLowerCase());
            const normalizedAge = data[3].trim().toLowerCase(); 

            const nameMatches = smartNameMatch(nameVariation, data[1]);

            const ageMatches = !age || normalizedAge === removeSpecialChars(age.toLowerCase());

            const teamMatches = !team || normalizedTeam.includes(removeSpecialChars(team.toLowerCase()));

            return nameMatches && ageMatches && teamMatches;
        });

        results.forEach(result => foundResults.add(result));
    });

    return Array.from(foundResults);
}

function createTable(teamName, teamIndex, color) {
const resultsTable = document.getElementById('resultsTable');
const headerNames = [
    'Percentiles',
    'SV%',
    'AWN',
    'INT',
    'PAS',
    'LP%',
    'SP%',
    'PRV',
    'MIN',
    '',
];

const fullNames = [
    'Percentiles vs Top 7 Leagues',
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

const headersExist = resultsTable.querySelector('th') !== null;

const table = headersExist ? resultsTable.querySelector('table') : document.createElement('table');
table.classList.add('metrics-table');

if (!headersExist) {

const headerRow = document.createElement('tr');
for (let i = 0; i < headerNames.length; i++) {
const th = document.createElement('th');
if (i === 9) { 

    const iconContainer = document.createElement('span');
    iconContainer.innerHTML = '<i class="ion-information-circled" style="font-size: 14px; color: #666; cursor: pointer;"></i>';
    iconContainer.style.display = 'flex';
    iconContainer.style.justifyContent = 'left';
    iconContainer.style.alignItems = 'center';
    iconContainer.style.width = '100%';
    iconContainer.style.marginTop = '1px';
    iconContainer.style.marginLeft = '3.4px';

    th.appendChild(iconContainer);
    th.setAttribute('data-full-name', 'Click on a header to see full metric name');
    th.setAttribute('data-i18n-tooltip', 'header.clickforinfo');
} else {
    th.textContent = headerNames[i];
    th.setAttribute('data-full-name', fullNames[i]);

    if (i === 0) th.setAttribute('data-i18n', 'header.percentiles');
    const tooltipKeys = ['header.percentilesvstop7leagues', 'header.savepercentage', 'header.aerialduelswon', 'header.interceptionspadj', 'header.passescompleted', 'header.longpassaccuracy', 'header.shortpasscompletion', 'header.preventedgoals', 'header.minutesplayed'];
    if (i < tooltipKeys.length) th.setAttribute('data-i18n-tooltip', tooltipKeys[i]);

}
headerRow.appendChild(th);
}

table.appendChild(headerRow);

const headerCells = headerRow.querySelectorAll('th');
headerCells.forEach((th, index) => {
    th.addEventListener('click', function() {
        const fullName = this.getAttribute('data-full-name');
        if (fullName && fullName.trim() !== '') {

            if (index !== 9) {
                this.classList.add('clicked');
            }

            showTooltip(this, fullName);

            if (index !== 9) {
                setTimeout(() => {
                    this.classList.remove('clicked');
                }, 2000);
            }
        }
    });
});

if (window.translations && table.querySelector('[data-i18n="header.percentiles"]')) {
    translateElement(table.querySelector('[data-i18n="header.percentiles"]'), window.translations);
}
}

const teamData = dataArray[teamIndex];
const dataRow = document.createElement('tr');

const playerNameTd = document.createElement('td');
const playerName = teamData[1]; 
const playerTeam = teamData[2]; 
const age = teamData[3]; 

playerNameTd.innerHTML = `
    <div style="font-weight: bold; font-size: 11px;">${playerName}</div>
    <div style="font-size: 9px; color: var(--text-color); opacity: 0.7; margin-top: 1px;">${playerTeam} • ${age}</div>
`;
playerNameTd.classList.add(color);
dataRow.appendChild(playerNameTd);

for (let i = 4; i <= 10; i++) {
    const td = document.createElement('td');

    const value = teamData[i] * 100;
    if (value >= 99.0 && value < 100.0) {
        td.textContent = '99';
    } else {
        td.textContent = Math.ceil(value).toString();
    }

    td.classList.add(color);
    dataRow.appendChild(td);
}

const minutesTd = document.createElement('td');
minutesTd.textContent = teamData[11];
minutesTd.classList.add(color);
dataRow.appendChild(minutesTd);

const xCell = document.createElement('td');
const xButton = document.createElement('button');
xButton.innerHTML = '<i class="ion-close"></i>';
xButton.classList.add('x-button');
xCell.classList.add('x-cell');
xCell.style.cursor = 'pointer';
xCell.addEventListener('click', function () {
  dataRow.remove(); 
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

      const lastRow = remainingRows[remainingRows.length - 1];
const firstCell = lastRow.querySelector('td:first-child');

      const firstDiv = firstCell.querySelector('div:first-child');
      const lastPlayerName = firstDiv ? firstDiv.textContent.trim() : firstCell.textContent.split('\n')[0].trim();

      const lastPlayerData = dataArray.find(player => player[1] === lastPlayerName);
      if (lastPlayerData) {
          updateSimilarPlayers(lastPlayerData);
      }
  } else {

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
polyline.setAttribute('class', `radarLines ${color}`); 
polyline.setAttribute('points', `${points} ${points.split(' ')[0]}`);
polyline.setAttribute('stroke-width', '2.6');
polyline.setAttribute('fill', 'none');
radarWrapper.appendChild(polyline);

const polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
polygon.setAttribute('class', `radarPolygon ${color}`); 
polygon.setAttribute('points', points);
polygon.style.fillOpacity = '0.2';
radarWrapper.appendChild(polygon);

data.forEach(({ axis, value }) => {
const { x, y } = axisValueToCartesian(axis, value);
const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
circle.setAttribute('class', `radarCircle ${color}`); 
circle.style.fillOpacity = '0.86'; 
circle.setAttribute('r', '6');
circle.setAttribute('cx', x);
circle.setAttribute('cy', y);
radarWrapper.appendChild(circle);
});
}

function createTableForTeam1() {
const searchInput = document.getElementById('searchInput1');
searchInput.setAttribute("autocomplete", "off");
const resultsTable = document.getElementById('resultsTable'); 

const teamNamesList = document.createElement('ul');
teamNamesList.style.fontFamily = 'Arial, sans-serif'; 
teamNamesList.style.listStyleType = 'none'; 
teamNamesList.style.paddingLeft = '9px'; 
resultsTable.appendChild(teamNamesList);


}

createTableForTeam1();

let colorIndex = 0; 

searchButton1.addEventListener("click", function() {
  const searchQuery = searchInput.value;
  const searchedPlayer = search(searchQuery);

  if (searchedPlayer.length > 0) {
      const searchedPlayerData = searchedPlayer[0];
      const color = colorClasses[colorIndex % colorClasses.length];
      createTable(searchedPlayerData[1] + ' (' + searchedPlayerData[2] + ', ' + searchedPlayerData[3] + ') - ' + searchedPlayerData[11] + ' min', searchedPlayerData[0] - 1, color);
      colorIndex++;
      updateSimilarPlayers(searchedPlayerData);
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

  for (let i = 0; i < dataArray.length; i++) {
      if (i !== searchedPlayerIndex) {
          const difference = calculateEuclideanDifference(playerData, dataArray[i]);
          similarPlayers.push({ index: i, difference: difference });
      }
  }

  similarPlayers.sort((a, b) => a.difference - b.difference);
  const mostSimilarPlayers = similarPlayers.slice(0, 3);

  const similarPlayersContainer = document.getElementById('similarPlayersContainer');
  similarPlayersContainer.innerHTML = ''; 

  const similarPlayerTable = document.createElement("table");
  similarPlayerTable.classList.add("similar-table");

  similarPlayerTable.style.width = "100%";
  similarPlayerTable.style.textAlign = "center";

  const headerRow = document.createElement("tr");
  const headerCell = document.createElement("th");
  headerCell.setAttribute("colspan", "5");
  headerCell.style.cssText = "text-align: center !important; display: block !important; width: 100% !important;";
  const colorClass = playerColor || colorClasses[colorIndex % colorClasses.length];
  headerCell.innerHTML = `<div style="text-align: center !important; width: 100% !important; display: block !important; font-size: 12px;"><span data-i18n="similar.to" class="${colorClass}">Similar data to</span> <span class="${colorClass}">${playerData[1]}</span></div>`;

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
searchInput.setAttribute("autocomplete", "off");

          const color = colorClasses[colorIndex % colorClasses.length];
          createTable(playerName, playerIndex, color);
          colorIndex++;

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
