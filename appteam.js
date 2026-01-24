// Worker URL and async initialization
const WORKER_URL = 'https://summer-dream-8f33.datamb-football.workers.dev';

(async function() {
// Fetch teamradars.csv (ID 4) once
const response = await fetch(`${WORKER_URL}/?file=4`);
const csvText = await response.text();

const inputLines = csvText;
const outputLines = [];

const lines = inputLines.trim().split('\n');

for (const line of lines) {

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
    if (searchInput.value.trim() === "") {
        matchingNamesContainer.style.display = "none";
        return;
    }
    const searchQuery = removeSpecialChars(searchInput.value.toLowerCase());
    const matchingNames = names.filter(function(name) {
        const [fullName] = name.split(",");
        const normalizedName = removeSpecialChars(fullName.toLowerCase());
        return normalizedName.includes(searchQuery);
    });

    matchingNamesContainer.innerHTML = "";

    matchingNames.forEach(function(name) {
        const [fullName, team, age] = name.split(",");

        const nameElement = document.createElement("div");
        nameElement.classList.add("name");

        const fullNameElement = document.createElement("span");
        fullNameElement.textContent = fullName;
        fullNameElement.classList.add("fullName");
        nameElement.appendChild(fullNameElement);

        const ageElement = document.createElement("span");
        ageElement.textContent = " (" + team + ",";
        ageElement.classList.add("age");
        nameElement.appendChild(ageElement);

        const teamElement = document.createElement("span");
        teamElement.textContent = " " + age + ")";
        teamElement.classList.add("team");
        nameElement.appendChild(teamElement);

        nameElement.addEventListener("mousedown", (e) => {
            e.preventDefault();
            e.stopPropagation();
            const clickedElement = event.target.closest(".name");
            if (clickedElement) {
                const fullName = clickedElement.querySelector(".fullName").textContent;
                const age = clickedElement.querySelector(".age").textContent.trim();
                const team = clickedElement.querySelector(".team").textContent.trim().replace(/[^a-zA-Z\s]/g, '');
                const searchQuery = fullName + "," + age.substring(1, age.length - 1) + "," + team;

                searchInput.value = searchQuery;
                searchButton1.click();
            }
        });

        nameElement.addEventListener("touchstart", (e) => {
            e.preventDefault();
            e.stopPropagation();
            const clickedElement = event.target.closest(".name");
            if (clickedElement) {
                const fullName = clickedElement.querySelector(".fullName").textContent;
                const age = clickedElement.querySelector(".age").textContent.trim();
                const team = clickedElement.querySelector(".team").textContent.trim().replace(/[^a-zA-Z\s]/g, '');
                const searchQuery = fullName + "," + age.substring(1, age.length - 1) + "," + team;

                searchInput.value = searchQuery;
                searchButton1.click();
            }
        }, {passive: false});

        matchingNamesContainer.appendChild(nameElement);
    });

    if (searchQuery === "" && matchingNames.length === 0) {
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

// Reuse the already fetched CSV data
const csvData = csvText;
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

  if (name && age && team) {
    const exactMatch = dataArray.find(data => 
      data[1].toLowerCase() === name.toLowerCase() && 
      data[3].toLowerCase() === age.toLowerCase() &&
      data[2].toLowerCase() === team.toLowerCase()
    );

    if (exactMatch) {
      return [exactMatch];
    }
  }

  if (name && age) {
    const nameAgeMatch = dataArray.find(data => 
      data[1].toLowerCase() === name.toLowerCase() && 
      data[3].toLowerCase() === age.toLowerCase()
    );

    if (nameAgeMatch) {
      return [nameAgeMatch];
    }
  }

  const results = dataArray.filter(data => {
    const normalizedName = removeSpecialChars(data[1].toLowerCase());
    const normalizedAge = data[3].trim().toLowerCase(); 

    const nameMatches = 
      removeSpecialChars(name.toLowerCase()) === normalizedName;  

    const ageMatches = !age || normalizedAge === removeSpecialChars(age.toLowerCase());

    return nameMatches && ageMatches;
  });

  if (results.length === 0) {
    const fallbackResults = dataArray.filter(data => {
      const normalizedName = removeSpecialChars(data[1].toLowerCase());
      const normalizedAge = data[3].trim().toLowerCase();

      const nameMatches = normalizedName.includes(removeSpecialChars(name.toLowerCase()));
      const ageMatches = !age || normalizedAge === removeSpecialChars(age.toLowerCase());

      return nameMatches && ageMatches;
    });
    return fallbackResults;
  }

  return results;
}

function createTable(teamName, teamIndex, color) {
    const resultsTable = document.getElementById('resultsTable');

    const headerNames = [
        'Percentiles',
        'GOL',
        'ATT',
        'POS',
        'CTR',
        'DEF',
        'PHY',
        'PRS',
        '',
    ];

    const fullNames = [
        'Percentiles vs Top 7 Leagues',
        'Goals',
        'Attacking',
        'Possession',
        'Counters',
        'Defensive',
        'Physicality',
        'Pressing',
        '',
    ];

    const headersExist = resultsTable.querySelector('th') !== null;

    const table = headersExist ? resultsTable.querySelector('table') : document.createElement('table');
    table.classList.add('metrics-table');

    if (!headersExist) {

    const headerRow = document.createElement('tr');
    for (let i = 0; i < headerNames.length; i++) {
    const th = document.createElement('th');
    if (i === 8) { 

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
    const tooltipKeys = ['header.percentilesvstop7leagues', 'header.goals', 'header.attacking', 'header.possession', 'header.counters', 'header.defensive', 'header.physicality', 'header.pressing'];
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

                if (index !== 8) {
                    this.classList.add('clicked');
                }

                showTooltip(this, fullName);

                if (index !== 8) {
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
             const secondDiv = firstCell.querySelector('div:last-child');

             const lastTeamName = firstDiv ? firstDiv.textContent.trim() : firstCell.textContent.split('\n')[0].trim();

             const teamSeasonText = secondDiv ? secondDiv.textContent.trim() : '';
             const lastTeamSeason = teamSeasonText.split(' • ')[1] || '';

             const lastTeamData = dataArray.find(team => team[1] === lastTeamName && team[3] === lastTeamSeason);
             if (lastTeamData) {
                 updateSimilarPlayers(lastTeamData);
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
    for (let i = 4; i <= 10; i++) {
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
    const searchButton = document.getElementById('searchButton1');
    const resultsTable = document.getElementById('resultsTable');

    const teamNames = new Set(); 

    const teamNamesList = document.createElement('ul');
    teamNamesList.style.fontFamily = 'Arial, sans-serif'; 
    teamNamesList.style.listStyleType = 'none'; 
    teamNamesList.style.paddingLeft = '9px'; 
    resultsTable.appendChild(teamNamesList);

    let searchCounter = 0; 

    searchButton.addEventListener('click', function () {
    const searchQuery = searchInput.value;
    const results = search(searchQuery);

    if (results) {
    const teamId = parseInt(results[0]); 

    const teamName = results[1] + ' (' + results[2] + ', ' + results[3] + ')';
    const color = colorClasses[searchCounter % colorClasses.length]; 

    if (!teamNames.has(teamName)) {

    const teamNameItem = document.createElement('li');
    teamNameItem.textContent = teamName;
    teamNameItem.classList.add(color); 

    createTable(teamName, teamId - 1, color); 
    searchCounter++;

    }
    } 

    });

    }

    createTableForTeam1();

    let colorIndex = 0; 

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

function updateSimilarPlayers(teamData) {
    const similarTeamsContainer = document.getElementById('similarPlayersContainer');
    if (!similarTeamsContainer) return;

    const searchedTeamIndex = parseInt(teamData[0]) - 1;
    const similarTeams = [];

    const teamRows = document.querySelectorAll('.metrics-table tr:not(:first-child)');
    let teamColor = '';
    if (teamRows.length > 0) {
        const lastTeamRow = teamRows[teamRows.length - 1];
        const lastTeamCell = lastTeamRow.querySelector('td:first-child');

        const classes = Array.from(lastTeamCell.classList);

        teamColor = classes.find(cls => cls.startsWith('result-color-'));
    }

    for (let i = 0; i < dataArray.length; i++) {
        if (i !== searchedTeamIndex) {
            const difference = calculateEuclideanDifference(teamData, dataArray[i]);
            similarTeams.push({ index: i, difference: difference });
        }
    }

    similarTeams.sort((a, b) => a.difference - b.difference);
    const mostSimilarTeams = similarTeams.slice(0, 3);

    similarTeamsContainer.innerHTML = ''; 

    const similarTeamTable = document.createElement("table");
    similarTeamTable.classList.add("similar-table");

    const headerRow = document.createElement("tr");
    const headerCell = document.createElement("th");
    headerCell.setAttribute("colspan", "5");

    headerCell.classList.add(teamColor || 'result-color-1');
    headerRow.appendChild(headerCell);
    similarTeamTable.appendChild(headerRow);

    const teamName = teamData[1];
    const teamSeason = teamData[3];
    headerCell.classList.add("similar-text");
    headerCell.style.cssText = "text-align: center !important; display: block !important; width: 100% !important;";
    const colorClass = teamColor || colorClasses[colorIndex % colorClasses.length];
    headerCell.innerHTML = `<div style="text-align: center !important; width: 100% !important; display: block !important; font-size: 12px;"><span data-i18n="similar.to" class="${colorClass}">Similar data to</span> <span class="${colorClass}">${teamName}, ${teamSeason}</span></div>`;

    const similarTeamRow = document.createElement("tr");
    similarTeamRow.style.cssText = "text-align: center !important; display: flex !important; justify-content: center !important;";

    for (let i = 0; i < mostSimilarTeams.length; i++) {
        const teamIndex = mostSimilarTeams[i].index;
        const similarTeamName = dataArray[teamIndex][1];
        const similarTeamSeason = dataArray[teamIndex][3];
        const similarTeamLeague = dataArray[teamIndex][2];      
        const teamCell = document.createElement("td");
        teamCell.innerHTML = `<div style="text-align: center !important; width: 100% !important; font-size: 10.8px !important; cursor: pointer !important; border: 1px solid var(--border-color) !important; border-radius: 4px !important; padding: 2px 4px !important; margin: 2px !important; display: inline-block !important; transition: background-color 0.2s !important;">${similarTeamName}, ${similarTeamSeason}</div>`;

        teamCell.addEventListener("click", function() {
            const searchInput = document.getElementById('searchInput1');
searchInput.setAttribute("autocomplete", "off");
const searchButton = document.getElementById('searchButton1');

            searchInput.value = `${similarTeamName},${similarTeamSeason},${similarTeamLeague}`;
            searchButton.click();
        });

        similarTeamRow.appendChild(teamCell);
    }

    similarTeamTable.appendChild(similarTeamRow);
    similarTeamsContainer.appendChild(similarTeamTable);
}

})(); // End async IIFE

