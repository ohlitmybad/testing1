let isPastSeason = false;
let data;

// Worker URL
const WORKER_URL = 'https://summer-dream-8f33.datamb-football.workers.dev';

// File aliases: 1=INDEX.csv, 2=OLDINDEX.csv
async function loadData() {
    const fileAlias = isPastSeason ? '2' : '1';
    
    try {
        const response = await fetch(`${WORKER_URL}/?file=${fileAlias}`);
        
        if (!response.ok) {
            alert('Failed to load ' + (isPastSeason ? 'past season' : 'current season') + ' data. Status: ' + response.status);
            return;
        }
        
        data = await response.text();
        
        let extraHeaderRow = 'Player,Team,League,Position,Age,Performance Index,Minutes played,Possessions won per 90,Defensive duels per 90,Aerial duels per 90,Sliding tackles per 90,Sliding tackles (PAdj),Shots blocked per 90,Interceptions per 90,Interceptions (PAdj),Successful attacking actions per 90,Goals per 90,Non-penalty goals per 90,xG per 90,Headed goals per 90,Shots per 90,Assists per 90,Crosses per 90,Crosses to box per 90,Dribbles attempted per 90,Offensive duels per 90,Touches in box per 90,Progressive carries per 90,Accelerations per 90,Fouls suffered per 90,Passes per 90,Forward passes per 90,Short passes per 90,Long passes per 90,Average pass length (m),xA per 90,Shot assists per 90,Key passes per 90,Passes to final third per 90,Passes to penalty box per 90,Through passes per 90,Deep completions per 90,Progressive passes per 90,Shots conceded per 90,Clean sheets,xG conceded per 90,Prevented goals per 90,Exits per 90,Defensive duels won %,Aerial duels won %,Shots on target %,Goal conversion %,Cross accuracy %,Dribble success rate %,Offensive duels won %,Pass completion %,Forward pass completion %,Short pass completion %,Long pass accuracy %,Pass completion (to final third) %,Pass completion (to penalty box) %,Through pass completion %,Progressive pass accuracy %,Save percentage %,Free kicks per 90,Direct free kicks per 90,Direct free kicks oT %,Corners per 90,Penalties attempted,Penalty success rate %,Matches played,Duels per 90,Duels won %,Possession +/-,Forward pass ratio,xA per 100 passes,Chance creation ratio,Inaccurate passes %,Goals + Assists per 90,NPG+A per 90,xG+xA per 90,xG/Shot,Goals - xG per 90,Goals per xG,Assists - xA per 90,Assists per xA,Successful dribbles per 90,Shots on target per 90,Accurate crosses per 90,Offensive duels won per 90,Defensive duels won per 90,Aerial duels won per 90,Passes completed per 90,Forward passes completed per 90,Short passes completed per 90,Long passes completed per 90,Accurate passes to final third per 90,Accurate passes to pen box per 90,Through passes completed per 90,Progressive passes completed per 90,Misplaced passes per 90,Saves per 90,Possessions lost per 90,Possessions won - lost per 90,Progressive actions per 90,Duels won per 90,Minutes per match,Backward pass ratio,Penalties scored,npxG per 90,npxG/Shot,npxG+xA per 90,Touches per 90,Progressive action rate,Progressive passes (PAdj),Ball-carrying frequency,xG per 100 touches,Shot frequency,Dribbles per 100 touches,Goals per 100 touches,Passes received per 90,Backward passes per 90,Pre-assists per 90';
        data = extraHeaderRow + '\n' + data;
        
    } catch (error) {
        alert('Error loading ' + (isPastSeason ? 'past season' : 'current season') + ' data: ' + error.message);
    }
}

let originalDataArray = [];

const playerTable = document.getElementById('playerTable');
const metricSelect = document.getElementById('metric');
const positionSelect = document.getElementById('position');
const leagueSelect = document.getElementById('league');
const ageInput = document.getElementById('age');
const metricHeader = document.getElementById('metricHeader');
const toggleButton = document.getElementById('toggleMetrics');
const toggleSortButton = document.getElementById('toggleSort'); // New button for toggling sort order

let isToggled = false;
let isAscending = false; // New state variable for sort order
let currentDataArray = originalDataArray; // Initially set to original data

const customMetricOrder = [
 
    { text: "Performance Index", i18n: "metrics.performanceIndex" },
    { text: "Minutes played", i18n: "metrics.minutesPlayed" },
    { text: "Matches played", i18n: "metrics.matchesPlayed" },
    { text: "Minutes per match", i18n: "metrics.minutesPerMatch" },

    // Goal Scoring
    { text: "CATEGORY: Goal Scoring", i18n: "categories.goalScoring" },
    { text: "Goals per 90", i18n: "metrics.goalsPerNinety" },
    { text: "Non-penalty goals per 90", i18n: "metrics.nonPenaltyGoals" },
    { text: "xG per 90", i18n: "metrics.xgPerNinety" },
    { text: "xG/Shot", i18n: "metrics.xgPerShot" },
    { text: "npxG per 90", i18n: "metrics.npxgPerNinety" },
    { text: "npxG/Shot", i18n: "metrics.npxgPerShot" },
    { text: "Goals per 100 touches", i18n: "metrics.goalsPerTouches" },
    { text: "xG per 100 touches", i18n: "metrics.xgPerTouches" },
    { text: "Shot frequency", i18n: "metrics.shotFrequency" },
    { text: "Shots per 90", i18n: "metrics.shotsPerNinety" },
    { text: "Shots on target %", i18n: "metrics.shotsOnTarget" },
    { text: "Shots on target per 90", i18n: "metrics.shotsOnTargetPerNinety" },
    { text: "Goal conversion %", i18n: "metrics.goalConversion" },
    { text: "Goals - xG per 90", i18n: "metrics.goalsMinusXg" },
    { text: "Goals per xG", i18n: "metrics.goalsPerXg" },
    { text: "Headed goals per 90", i18n: "metrics.headedGoals" },
    { text: "Touches in box per 90", i18n: "metrics.touchesInBox" },

    // Goal Creation
    { text: "CATEGORY: Goal Creation", i18n: "categories.goalCreation" },
    { text: "Assists per 90", i18n: "metrics.assistsPerNinety" },
    { text: "xA per 90", i18n: "metrics.xaPerNinety" },
    { text: "xA per 100 passes", i18n: "metrics.xaPerPasses" },
    { text: "Goals + Assists per 90", i18n: "metrics.goalsAndAssists" },
    { text: "NPG+A per 90", i18n: "metrics.npGoalsAndAssists" },
    { text: "xG+xA per 90", i18n: "metrics.xgAndXa" },
    { text: "npxG+xA per 90", i18n: "metrics.npxgAndXa" },
    { text: "Key passes per 90", i18n: "metrics.keyPasses" },
    { text: "Chance creation ratio", i18n: "metrics.chanceCreation" },
    { text: "Assists - xA per 90", i18n: "metrics.assistsMinusXa" },
    { text: "Assists per xA", i18n: "metrics.assistsPerXa" },
    { text: "Shot assists per 90", i18n: "metrics.shotAssists" },
    { text: "Pre-assists per 90", i18n: "metrics.preAssists" },
    { text: "Crosses per 90", i18n: "metrics.crosses" },
    { text: "Cross accuracy %", i18n: "metrics.crossAccuracy" },
    { text: "Accurate crosses per 90", i18n: "metrics.accurateCrosses" },
    { text: "Crosses to box per 90", i18n: "metrics.crossesToBox" },
    { text: "Deep completions per 90", i18n: "metrics.deepCompletions" },

    // Dribbling and Ball-Carrying
    { text: "CATEGORY: Dribbling and Ball-Carrying", i18n: "categories.dribbling" },
    { text: "Dribbles attempted per 90", i18n: "metrics.dribblesAttempted" },
    { text: "Dribble success rate %", i18n: "metrics.dribbleSuccess" },
    { text: "Successful dribbles per 90", i18n: "metrics.successfulDribbles" },
    { text: "Dribbles per 100 touches", i18n: "metrics.dribblesPerTouches" },
    { text: "Successful attacking actions per 90", i18n: "metrics.attackingActions" },
    { text: "Offensive duels per 90", i18n: "metrics.offensiveDuels" },
    { text: "Offensive duels won %", i18n: "metrics.offensiveDuelsWon" },
    { text: "Offensive duels won per 90", i18n: "metrics.offensiveDuelsWonPerNinety" },
    { text: "Progressive carries per 90", i18n: "metrics.progressiveCarries" },
    { text: "Ball-carrying frequency", i18n: "metrics.ballCarrying" },
    { text: "Accelerations per 90", i18n: "metrics.accelerations" },
    { text: "Fouls suffered per 90", i18n: "metrics.foulsSuffered" },

    // Passing
    { text: "CATEGORY: Passing", i18n: "categories.passing" },
    { text: "Passes per 90", i18n: "metrics.passes" },
    { text: "Pass completion %", i18n: "metrics.passCompletion" },
    { text: "Passes completed per 90", i18n: "metrics.passesCompleted" },
    { text: "Forward passes per 90", i18n: "metrics.forwardPasses" },
    { text: "Forward pass completion %", i18n: "metrics.forwardPassCompletion" },
    { text: "Forward passes completed per 90", i18n: "metrics.forwardPassesCompleted" },
    { text: "Short passes per 90", i18n: "metrics.shortPasses" },
    { text: "Short pass completion %", i18n: "metrics.shortPassCompletion" },
    { text: "Short passes completed per 90", i18n: "metrics.shortPassesCompleted" },
    { text: "Long passes per 90", i18n: "metrics.longPasses" },
    { text: "Long pass accuracy %", i18n: "metrics.longPassAccuracy" },
    { text: "Long passes completed per 90", i18n: "metrics.longPassesCompleted" },
    { text: "Progressive passes per 90", i18n: "metrics.progressivePasses" },
    { text: "Progressive pass accuracy %", i18n: "metrics.progressivePassAccuracy" },
    { text: "Progressive passes completed per 90", i18n: "metrics.progressivePassesCompleted" },
    { text: "Progressive passes (PAdj)", i18n: "metrics.progressivePassesAdj" },
    { text: "Passes to final third per 90", i18n: "metrics.passesToFinalThird" },
    { text: "Pass completion (to final third) %", i18n: "metrics.passCompletionFinalThird" },
    { text: "Accurate passes to final third per 90", i18n: "metrics.accuratePassesFinalThird" },
    { text: "Passes to penalty box per 90", i18n: "metrics.passesToBox" },
    { text: "Pass completion (to penalty box) %", i18n: "metrics.passCompletionToBox" },
    { text: "Accurate passes to pen box per 90", i18n: "metrics.accuratePassesToBox" },
    { text: "Through passes per 90", i18n: "metrics.throughPasses" },
    { text: "Through pass completion %", i18n: "metrics.throughPassCompletion" },
    { text: "Through passes completed per 90", i18n: "metrics.throughPassesCompleted" },
    { text: "Average pass length (m)", i18n: "metrics.averagePassLength" },
    { text: "Backward passes per 90", i18n: "metrics.backwardPasses" },
    { text: "Misplaced passes per 90", i18n: "metrics.misplacedPasses" },
    { text: "Forward pass ratio", i18n: "metrics.forwardPassRatio" },
    { text: "Backward pass ratio", i18n: "metrics.backwardPassRatio" },

    // Possession
    { text: "CATEGORY: Possession", i18n: "categories.possession" },
    { text: "Passes received per 90", i18n: "metrics.passesReceived" },
    { text: "Touches per 90", i18n: "metrics.touches" },
    { text: "Possessions lost per 90", i18n: "metrics.possessionsLost" },
    { text: "Possessions won - lost per 90", i18n: "metrics.possessionsBalance" },
    { text: "Possession +/-", i18n: "metrics.possessionPlusMinus" },
    { text: "Duels per 90", i18n: "metrics.duels" },
    { text: "Duels won %", i18n: "metrics.duelsWon" },
    { text: "Duels won per 90", i18n: "metrics.duelsWonPerNinety" },
    { text: "Progressive actions per 90", i18n: "metrics.progressiveActions" },
    { text: "Progressive action rate", i18n: "metrics.progressiveActionRate" },

    // Defending
    { text: "CATEGORY: Defending", i18n: "categories.defending" },
    { text: "Defensive duels per 90", i18n: "metrics.defensiveDuels" },
    { text: "Defensive duels won %", i18n: "metrics.defensiveDuelsWon" },
    { text: "Defensive duels won per 90", i18n: "metrics.defensiveDuelsWonPerNinety" },
    { text: "Sliding tackles per 90", i18n: "metrics.slidingTackles" },
    { text: "Sliding tackles (PAdj)", i18n: "metrics.slidingTacklesAdj" },
    { text: "Interceptions per 90", i18n: "metrics.interceptions" },
    { text: "Interceptions (PAdj)", i18n: "metrics.interceptionsAdj" },
    { text: "Possessions won per 90", i18n: "metrics.possessionsWon" },
    { text: "Aerial duels per 90", i18n: "metrics.aerialDuels" },
    { text: "Aerial duels won %", i18n: "metrics.aerialDuelsWon" },
    { text: "Aerial duels won per 90", i18n: "metrics.aerialDuelsWonPerNinety" },
    { text: "Shots blocked per 90", i18n: "metrics.shotsBlocked" },

    // Goalkeeping
    { text: "CATEGORY: Goalkeeping", i18n: "categories.goalkeeping" },
    { text: "Saves per 90", i18n: "metrics.saves" },
    { text: "Save percentage %", i18n: "metrics.savePercentage" },
    { text: "Prevented goals per 90", i18n: "metrics.preventedGoals" },
    { text: "Shots conceded per 90", i18n: "metrics.shotsConceded" },
    { text: "xG conceded per 90", i18n: "metrics.xgConceded" },
    { text: "Clean sheets", i18n: "metrics.cleanSheets" },
    { text: "Exits per 90", i18n: "metrics.exits" },

    // Set Pieces
    { text: "CATEGORY: Set Pieces", i18n: "categories.setPieces" },
    { text: "Free kicks per 90", i18n: "metrics.freeKicks" },
    { text: "Direct free kicks per 90", i18n: "metrics.directFreeKicks" },
    { text: "Direct free kicks oT %", i18n: "metrics.directFreeKicksOnTarget" },
    { text: "Corners per 90", i18n: "metrics.corners" },
    { text: "Penalties attempted", i18n: "metrics.penaltiesAttempted" },
    { text: "Penalties scored", i18n: "metrics.penaltiesScored" },
    { text: "Penalty success rate %", i18n: "metrics.penaltySuccessRate" }
];

const columnIndexMap = {};
// columnIndexMap is populated in the async init after data loads

// Function to initialize metric selector after data loads
function initializeMetricSelector() {
    metricSelect.innerHTML = ''; // Clear existing options

    customMetricOrder.forEach(metric => {
        const option = document.createElement('option');
        if (metric.text.startsWith("CATEGORY: ")) {
            option.textContent = metric.text.replace("CATEGORY: ", "");
            option.disabled = true;
            option.style.fontWeight = "bold";
            option.style.color = "#aaa";
            option.setAttribute('data-i18n', metric.i18n);
        } else {
            const metricName = isToggled ? metric.text.replace(' per 90', '') : metric.text;
            const index = currentDataArray[0].indexOf(metricName);
            if (index !== -1) {
                option.value = index;
                option.textContent = metricName;
                option.setAttribute('data-i18n', metric.i18n);
            }
        }
        metricSelect.appendChild(option);
    });

    // Find and set Minutes played as the default selection BEFORE building options
    const minutesPlayedIndex = currentDataArray[0].indexOf("Minutes played");
    if (minutesPlayedIndex !== -1) {
      metricSelect.value = minutesPlayedIndex;
    }

    metricSelect.dispatchEvent(new Event('change'));
}

toggleSortButton.addEventListener('click', toggleSortOrder); // New event listener for sort order toggle
metricSelect.addEventListener('change', () => {
    isAscending = false; // Reset to default descending order
    filterTable(); // Reapply filtering and sorting
});positionSelect.addEventListener('change', filterTable);
leagueSelect.addEventListener('change', filterTable);
ageInput.addEventListener('input', filterTable);

// Past Season Button Event Listener - moved to ensure DOM is ready
function initPastSeasonButton() {
    const pastSeasonBtn = document.getElementById('pastSeasonBtn');
    if (!pastSeasonBtn) {
        return;
    }
    
    pastSeasonBtn.addEventListener('click', async function() {
        isPastSeason = !isPastSeason;
        const button = this;
        
        // Toggle button active state and tooltip
        const pastSeasonTooltip = document.querySelector('.past-season-button .btn-tooltip-text');
        if (isPastSeason) {
            button.classList.add('active');
            const translatedText = getTranslatedText('toggles.switchToCurrentSeason', 'Switch to current season');
            pastSeasonTooltip.textContent = translatedText;
            pastSeasonTooltip.setAttribute('data-i18n', 'toggles.switchToCurrentSeason');
        } else {
            button.classList.remove('active');
            const translatedText = getTranslatedText('toggles.switchToPastSeason', 'Switch to past season');
            pastSeasonTooltip.textContent = translatedText;
            pastSeasonTooltip.setAttribute('data-i18n', 'toggles.switchToPastSeason');
        }
        
        // Reload data and refresh table
        await loadData();
        
        originalDataArray = data.split('\n').map(row => row.split(','));
        currentDataArray = originalDataArray;
        
        // Rebuild column index map
        originalDataArray[0].forEach((name, index) => {
            columnIndexMap[name] = index;
        });
        
        // Reapply any current toggle state
        if (isToggled) {
            toggleData();
        }
        
        // Refresh the table
        filterTable();
    });
}

function toggleSortOrder() {
    isAscending = !isAscending; // Toggle sort order
    filterTable(); // Reapply filtering and sorting
}

function toggleData() {
    // Toggle the state
    isToggled = !isToggled;
    
    // Update button visual state
    const toggleButton = document.getElementById('toggleMetrics');
    if (toggleButton) {
        if (isToggled) {
            toggleButton.classList.add('active');
        } else {
            toggleButton.classList.remove('active');
        }
    }
    const currentMetricValue = metricSelect.value;
    
    // Update tooltip based on new state
    const toggleTooltip = document.querySelector('.metrics-toggle-button .btn-tooltip-text');
    if (isToggled) {
        const translatedText = getTranslatedText('toggles.switchToPer90', 'Switch to per 90');
        toggleTooltip.textContent = translatedText;
        toggleTooltip.setAttribute('data-i18n', 'toggles.switchToPer90');
    } else {
        const translatedText = getTranslatedText('toggles.switchToTotal', 'Switch to total');
        toggleTooltip.textContent = translatedText;
        toggleTooltip.setAttribute('data-i18n', 'toggles.switchToTotal');
    }

    if (isToggled) {
        // Convert from per 90 to totals
        currentDataArray = originalDataArray.map((row, index) => {
            if (index === 0) {
                // Header row - remove ' per 90' from column names
                return row.map((cell, cellIndex) => {
                    if (![11, 14, 34, 44, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63].includes(cellIndex)) {
                        return cell.replace(' per 90', '');
                    } else {
                        return cell; // Keep other cells unchanged
                    }
                });
            } else {
                // Data rows - convert per 90 values to totals
                const minutesPlayed = parseFloat(row[6]);
                if (isNaN(minutesPlayed) || minutesPlayed === 0) {
                    return row; // Skip rows with invalid minutes
                }
                
                return row.map((cell, cellIndex) => {
                    // Only convert per 90 stats to totals, skip other columns
                    if (cellIndex > 4 && ![5, 6, 11, 14, 34, 44, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 66, 68, 69, 70, 72, 73, 74, 75, 76, 81, 83, 85, 106, 107, 108, 110, 113, 114, 115, 116, 117, 118, 119].includes(cellIndex)) {
                        const cellValue = parseFloat(cell);
                        if (isNaN(cellValue)) {
                            return cell; // Keep non-numeric values as is
                        }
                        
                        // Calculate total from per 90
                        const totalValue = cellValue * minutesPlayed / 90;
                        
                        // Round appropriately based on column type
                        if ([18, 35, 45, 46, 80, 82, 84, 109, 111].includes(cellIndex)) {
                            return totalValue.toFixed(2);
                        } else {
                            return Math.round(totalValue).toString();
                        }
                    } else {
                        return cell; // Keep other cells unchanged
                    }
                });
            }
        });
    } else {
        // Reset to original per 90 data
        currentDataArray = originalDataArray.map(row => row.slice()); // Create a deep copy
    }

    // Apply conditional formatting for specific metrics
    currentDataArray = currentDataArray.map(row => {
        if (parseFloat(row[16]) === 0 && parseFloat(row[18]) === 0) {
            row[82] = '';
        }
        return row;
    });

    currentDataArray = currentDataArray.map(row => {
        if (parseFloat(row[21]) === 0 && parseFloat(row[35]) === 0) {
            row[84] = '';
        }
        return row;
    });

    // Rebuild the hidden metric select options
    metricSelect.innerHTML = '';
    customMetricOrder.forEach(metric => {
        const option = document.createElement('option');
        if (metric.text.startsWith("CATEGORY: ")) {
            option.textContent = metric.text.replace("CATEGORY: ", "");
            option.disabled = true;
            option.style.fontWeight = "bold";
            option.style.color = "#aaa";
            option.setAttribute('data-i18n', metric.i18n);
        } else {
            const metricName = isToggled ? metric.text.replace(' per 90', '') : metric.text;
            const index = currentDataArray[0].indexOf(metricName);
            if (index !== -1) {
                option.value = index;
                option.textContent = metricName;
                option.setAttribute('data-i18n', metric.i18n);
            }
        }
        metricSelect.appendChild(option);
    });
    metricSelect.value = currentMetricValue;
    
    // Update custom metric selector options
    updateMetricOptions();
    
    // Find and update the selected option in the custom selector
    const selectedMetricOption = metricOptions.querySelector(`[data-value="${currentMetricValue}"]`);
    if (selectedMetricOption) {
        // Clear all previous selections
        metricOptions.querySelectorAll('.custom-select-option').forEach(opt => opt.classList.remove('selected'));
        
        // Mark the current option as selected
        selectedMetricOption.classList.add('selected');
        
        // Update the trigger text to match the selected metric
        const triggerSpan = metricTrigger.querySelector('span');
        const optionSpan = selectedMetricOption.querySelector('span');
        if (triggerSpan && optionSpan) {
            triggerSpan.textContent = optionSpan.textContent;
            triggerSpan.setAttribute('data-i18n', optionSpan.getAttribute('data-i18n'));
        }
    }
    
    // Reapply internationalization after toggling
    const preferredLanguage = getPreferredLanguage();
    applyLanguage(preferredLanguage);
    
    // Update selector restrictions after toggling
    handleSelectorsChange();
    
    filterTable(); // Ensure filtering is always applied
}

function filterTable() {
    let filteredData = currentDataArray.slice(1); // Exclude header row
    const metricIndex = metricSelect.value;
    const position = positionSelect.value;
    const league = leagueSelect.value;
    const age = ageInput.value;

    if (metricIndex === '') {
        metricHeader.style.display = 'none';
    } else {
        metricHeader.style.display = '';
        // Sort by selected metric
        if (isAscending) {
            filteredData.sort((a, b) => parseFloat(a[metricIndex]) - parseFloat(b[metricIndex]));
        } else {
            filteredData.sort((a, b) => parseFloat(b[metricIndex]) - parseFloat(a[metricIndex]));
        }    
    }

    filteredData = filteredData.filter(row => row[metricIndex] !== '');

    filteredData = filteredData.map(row => {
    if (parseFloat(row[16]) === 0 && parseFloat(row[18]) === 0) {
        const targetColumn = isToggled ? 82 : 82;  // Adjust index if needed based on toggling
        row[targetColumn] = '';
    }
    return row;
});

    filteredData = filteredData.map(row => {
        if (parseFloat(row[16]) === 0 || parseFloat(row[18]) === 0) {
            row[83] = '';
        }
        return row;
    });


    filteredData = filteredData.map(row => {
    if (parseFloat(row[21]) === 0 && parseFloat(row[35]) === 0) {
        const targetColumn = isToggled ? 84 : 84;  // Adjust index if needed based on toggling
        row[targetColumn] = '';
    }
    return row;
});

    filteredData = filteredData.map(row => {
        if (parseFloat(row[35]) === 0 || parseFloat(row[21]) === 0) {
            row[85] = '';
        }
        return row;
    });



    filteredData = filteredData.map(row => {
        if (parseFloat(row[18]) === 0 || parseFloat(row[20]) === 0) {
            row[81] = '';
        }
        return row;
    });


    filteredData = filteredData.map(row => {
        if (parseFloat(row[18]) === 0 || parseFloat(row[20]) === 0) {
            row[110] = '';
        }
        return row;
    });


    if (position === 'All') {
        // Filter out duplicates and select all players
        const uniquePlayers = {};
        filteredData = filteredData.filter(row => {
            const key = `${row[0]} ${row[1]}`; // Assuming the first column contains player names
            if (!uniquePlayers[key]) {
                uniquePlayers[key] = true;
                return true;
            }
            return false;
        });
    } else if (position !== '') {
        // Filter by selected position
        filteredData = filteredData.filter(row => row[3] === position);
    }

    if (league === 'Top 5 Leagues') {
        // Filter data to include only players from the top 5 leagues
        filteredData = filteredData.filter(row =>
            ['Premier League', 'Bundesliga', 'La Liga', 'Ligue 1', 'Serie A'].includes(row[2])
        );
    } else if (league === 'Top 7 Leagues') {
        // Filter data to include only players from the top 7 leagues
        filteredData = filteredData.filter(row =>
            ['Premier League', 'Bundesliga', 'La Liga', 'Ligue 1', 'Serie A', 'Eredivisie', 'Primeira Liga'].includes(row[2])
        );
    } else if (league === 'No Top 7') {
        // Filter data to include only players from leagues outside the Top 7
        filteredData = filteredData.filter(row =>
            ['Greece','Poland','Ukraine','Russia','Israel','Ecuador','Paraguay','Chile','Colombia','Belgium Pro League', 'Scotland Premiership', 'Austrian Bundesliga', 'Swiss Super League', 'Süper Lig', 'Denmark Superliga', 'Sweden Allsvenskan', 'Norway Eliteserien', 'Croatia HNL', 'Serbia SuperLiga', 'Czech Fortuna Liga', 'Saudi Pro League', 'J1 League', 'K League 1', 'MLS', 'LigaMX', 'Brazil Serie A', 'Argentina Primera', 'Uruguay Primera', 'Championship', 'Segunda Division', 'Serie B', 'Bundesliga 2', 'Ligue 2'].includes(row[2])
        );
    } else if (league === 'All Leagues') {
        // Filter data to include players from all available leagues
        filteredData = filteredData.filter(row =>
            ['Greece','Poland','Ukraine','Russia','Israel','Ecuador','Paraguay','Chile','Colombia','Premier League', 'Bundesliga', 'La Liga', 'Ligue 1', 'Serie A', 'Eredivisie', 'Primeira Liga', 'Belgium Pro League', 'Scotland Premiership', 'Austrian Bundesliga', 'Swiss Super League', 'Süper Lig', 'Denmark Superliga', 'Sweden Allsvenskan', 'Norway Eliteserien', 'Croatia HNL', 'Serbia SuperLiga', 'Czech Fortuna Liga', 'Saudi Pro League', 'J1 League', 'K League 1', 'MLS', 'LigaMX', 'Brazil Serie A', 'Argentina Primera', 'Uruguay Primera', 'Championship', 'Segunda Division', 'Serie B', 'Bundesliga 2', 'Ligue 2'].includes(row[2])
        );
    } else if (league === 'South America') {
        // Filter data to include only players from South American leagues
        filteredData = filteredData.filter(row =>
            ["Brazil Serie A",
             "Argentina Primera",
             "Uruguay Primera",
             "Colombia",
             "Chile",
             "Paraguay",
             "Ecuador"].includes(row[2])
        );
    } else if (league === 'Scandinavia') {
        // Filter data to include only players from Scandinavian leagues
        filteredData = filteredData.filter(row =>
            ["Norway Eliteserien",
             "Denmark Superliga",
             "Sweden Allsvenskan"].includes(row[2])
        );
    } else if (league === 'Eastern Europe') {
        // Filter data to include only players from Eastern European leagues
        filteredData = filteredData.filter(row =>
            ["Czech Fortuna Liga",
             "Serbia SuperLiga",
             "Croatia HNL",
             "Russia",
             "Ukraine",
             "Poland"].includes(row[2])
        );
    } else if (league !== '') {
        // Filter data based on selected league
        filteredData = filteredData.filter(row => row[2] === league);
    }

    if (age !== '') {
    filteredData = filteredData.filter(row => row[4] <= age + 1);
}


    displayTable(filteredData);
}

function displayTable(data) {
    // Clear existing table
    playerTable.innerHTML = '';

    if (metricSelect.value === '') {
        playerTable.style.display = 'none'; // Hide the table if no metric is selected
        return; // Exit the function
    } else {
        playerTable.style.display = ''; // Show the table if a metric is selected
    }

    // Sort the data first to ensure consistency in ranking
    // Sort data based on the current sorting order
    if (isAscending) {
        data.sort((a, b) => parseFloat(a[metricSelect.value]) - parseFloat(b[metricSelect.value]));
    } else {
        data.sort((a, b) => parseFloat(b[metricSelect.value]) - parseFloat(a[metricSelect.value]));
    }
    let previousValue = null;
    let previousIndex = 0;
    let previousRankBarWidth = 100;
    let previousRakim = 100;
    let maxValue = Math.max(...data.map(row => parseFloat(row[metricSelect.value])));
let minValue = Math.min(...data.map(row => parseFloat(row[metricSelect.value])));


    // Add table data
    data.forEach((row, index) => {
    let rankBarWidth;
    let rakim;
    if (row[metricSelect.value] === previousValue) {
        // If the current value is equal to the previous one, keep the same index and rank bar width
        rankBarWidth = previousRankBarWidth;
        rakim = previousRakim;
    } else {
        // If not tied, calculate rank bar width and index
        if (metricSelect.value === "46" || metricSelect.value === "84" || metricSelect.value === "73" || metricSelect.value === "82" || metricSelect.value === "103") {
            // Get min and max values from the entire dataset
            const allValues = data.map(r => parseFloat(r[metricSelect.value]));
            const minValue = Math.min(...allValues);
            const maxValue = Math.max(...allValues);
            const totalRange = maxValue - minValue;
            
            const value = parseFloat(row[metricSelect.value]);
            // Scale from minValue (smallest bar) to maxValue (largest bar)
            rankBarWidth = Math.max(((value - minValue) / totalRange * 100), 1.5);
            rakim = ((data.length - index) / data.length) * 100;
        } else if (row[metricSelect.value] === '0') {
            rankBarWidth = 0;
            rakim = 0;
        } else if (metricSelect.value === "5") {
            rankBarWidth = parseFloat(row[metricSelect.value]) * 100 / 99;
            rakim = ((data.length - index) / data.length) * 100;
        } else {
            rankBarWidth = Math.max(((parseFloat(row[metricSelect.value])) / (maxValue) * 100), 1.5);
            rakim = ((data.length - index) / data.length) * 100;
        }
        
        previousValue = row[metricSelect.value];
        previousIndex = index;
        previousRankBarWidth = rankBarWidth;
        previousRakim = rakim;
    }

    let red, green, blue;
        if (isAscending) {
            // Invert colors for ascending order: lower values are red, higher values are green
            red = Math.round((255 * (1 - Math.pow(((100-rakim) / 100), 1.3))));
            green = Math.round(100-rakim);
            blue = Math.round((255 * Math.pow(((100-rakim) / 100), 1.3)));
        } else {
            // Default color logic for descending order: higher values are red, lower values are green
            red = Math.round((255 * (1 - Math.pow((rakim / 100), 1.3))));
            green = Math.round(rakim);
            blue = Math.round((255 * Math.pow((rakim / 100), 1.3)));
        }
        const alpha = 0.835;
        const color = `rgba(${red}, ${green}, ${blue}, ${alpha})`;

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${previousIndex + 1}. ${row[0]}&nbsp;<span class="smaller-text">(${row[1]}, ${Math.round(row[4])})</span></td>
            <th>${row[metricSelect.value]}</th>
            <th>
                <div class="rank-bar">
                    <div class="rank-bar-fill" style="width: ${rankBarWidth}%; background-color: ${color}"></div>
                </div>
            </th>
        `;
        playerTable.appendChild(tr);
    });
}

function handleSelectorsChange() {
    const selectedMetricIndex = parseInt(metricSelect.value);
    const selectedPosition = positionSelect.value;
    const selectedLeague = leagueSelect.value;
    const metricOptions = metricSelect.querySelectorAll('option');
    const metricSelector = document.querySelector('.metric-selector');
    
    const combinationLeagues = ['Top 5 Leagues', 'Top 7 Leagues', 'No Top 7', 'All Leagues', 'South America', 'Eastern Europe', 'Scandinavia'];
    const isPerformanceIndex = selectedMetricIndex === 5;
    const isCombinationLeague = combinationLeagues.includes(selectedLeague);
    const isAllPositions = selectedPosition === 'All';

    // Show or hide the toggleSortButton and adjust metric selector width
    if (selectedMetricIndex === 43 || selectedMetricIndex === 45 || selectedMetricIndex === 82 || selectedMetricIndex === 83 || selectedMetricIndex === 84 || selectedMetricIndex === 85) {
        toggleSortButton.style.display = 'inline-block';
        metricSelector.classList.add('with-toggle');
    } else {
        toggleSortButton.style.display = 'none';
        metricSelector.classList.remove('with-toggle');
    }

    // Handle Performance Index restrictions
    if (isPerformanceIndex) {
        // Disable combination leagues when Performance Index is selected
        combinationLeagues.forEach(optionValue => {
            const option = leagueSelect.querySelector(`option[value="${optionValue}"]`);
            if (option) option.disabled = true;
        });
        
        // Disable "All positions" when Performance Index is selected
        const positionAllOption = positionSelect.querySelector('option[value="All"]');
        if (positionAllOption) positionAllOption.disabled = true;
        
        // Update custom selectors to reflect disabled state
        updateCustomSelectorsDisabledState();
    } else {
        // Enable combination leagues when Performance Index is not selected
        combinationLeagues.forEach(optionValue => {
            const option = leagueSelect.querySelector(`option[value="${optionValue}"]`);
            if (option) option.disabled = false;
        });
        
        // Enable "All positions" when Performance Index is not selected
        const positionAllOption = positionSelect.querySelector('option[value="All"]');
        if (positionAllOption) positionAllOption.disabled = false;
        
        // Update custom selectors to reflect enabled state
        updateCustomSelectorsDisabledState();
    }

    // Handle reverse restrictions - disable Performance Index when restricted options are selected
    const performanceIndexOption = metricSelect.querySelector('option[value="5"]');
    if (isCombinationLeague || isAllPositions) {
        // Disable Performance Index when combination league or "All positions" is selected
        if (performanceIndexOption) performanceIndexOption.disabled = true;
        
        // If Performance Index is currently selected, switch to another metric
        if (isPerformanceIndex) {
            metricSelect.value = "20"; // Default to "Shots per 90" or another safe metric
            // Update custom metric selector
            updateMetricCustomSelector();
            filterTable();
        }
        
        // Update custom metric selector to reflect disabled state
        updateCustomMetricSelectorDisabledState();
    } else {
        // Enable Performance Index when no restricted options are selected
        if (performanceIndexOption) performanceIndexOption.disabled = false;
        
        // Update custom metric selector to reflect enabled state
        updateCustomMetricSelectorDisabledState();
    }
}

// Helper function to update custom selectors disabled state
function updateCustomSelectorsDisabledState() {
    const combinationLeagues = ['Top 5 Leagues', 'Top 7 Leagues', 'No Top 7', 'All Leagues', 'South America', 'Eastern Europe', 'Scandinavia'];
    
    // Update league custom selector
    const leagueCustomOptions = document.querySelectorAll('#league-select-options .custom-select-option');
    leagueCustomOptions.forEach(option => {
        const optionValue = option.getAttribute('data-value');
        const isDisabled = combinationLeagues.includes(optionValue) && parseInt(metricSelect.value) === 5;
        
        if (isDisabled) {
            option.style.opacity = '0.5';
            option.style.pointerEvents = 'none';
        } else {
            option.style.opacity = '1';
            option.style.pointerEvents = 'auto';
        }
    });
    
    // Update position custom selector
    const positionCustomOptions = document.querySelectorAll('#position-select-options .custom-select-option');
    positionCustomOptions.forEach(option => {
        const optionValue = option.getAttribute('data-value');
        const isDisabled = optionValue === 'All' && parseInt(metricSelect.value) === 5;
        
        if (isDisabled) {
            option.style.opacity = '0.5';
            option.style.pointerEvents = 'none';
        } else {
            option.style.opacity = '1';
            option.style.pointerEvents = 'auto';
        }
    });
}

// Helper function to update custom metric selector disabled state
function updateCustomMetricSelectorDisabledState() {
    const metricCustomOptions = document.querySelectorAll('#metric-select-options .custom-select-option');
    const isCombinationLeague = ['Top 5 Leagues', 'Top 7 Leagues', 'No Top 7', 'All Leagues', 'South America', 'Eastern Europe', 'Scandinavia'].includes(leagueSelect.value);
    const isAllPositions = positionSelect.value === 'All';
    
    metricCustomOptions.forEach(option => {
        const optionValue = option.getAttribute('data-value');
        const isPerformanceIndex = optionValue === '5';
        const isDisabled = isPerformanceIndex && (isCombinationLeague || isAllPositions);
        
        if (isDisabled) {
            option.style.opacity = '0.5';
            option.style.pointerEvents = 'none';
        } else {
            option.style.opacity = '1';
            option.style.pointerEvents = 'auto';
        }
    });
}

// Helper function to update metric custom selector selection
function updateMetricCustomSelector() {
    const currentMetricValue = metricSelect.value;
    const selectedMetricOption = document.querySelector(`#metric-select-options [data-value="${currentMetricValue}"]`);
    
    if (selectedMetricOption) {
        // Clear all previous selections
        document.querySelectorAll('#metric-select-options .custom-select-option').forEach(opt => opt.classList.remove('selected'));
        
        // Mark the current option as selected
        selectedMetricOption.classList.add('selected');
        
        // Update the trigger text
        const triggerSpan = document.querySelector('#metric-select-trigger span');
        const optionSpan = selectedMetricOption.querySelector('span');
        if (triggerSpan && optionSpan) {
            triggerSpan.textContent = optionSpan.textContent;
            triggerSpan.setAttribute('data-i18n', optionSpan.getAttribute('data-i18n'));
        }
    }
}

// Add event listener for all selectors
metricSelect.addEventListener('change', handleSelectorsChange);
positionSelect.addEventListener('change', handleSelectorsChange);
leagueSelect.addEventListener('change', handleSelectorsChange);


  // Set Premier League as default selection
  leagueSelect.value = "Premier League";

// Initial async data load and display
(async function() {
    await loadData();
    originalDataArray = data.split('\n').map(row => row.split(','));
    currentDataArray = originalDataArray;
    
    // Build column index map
    originalDataArray[0].forEach((name, index) => {
        columnIndexMap[name] = index;
    });
    
    // Initialize metric selector after data is loaded
    initializeMetricSelector();
    
    // Update custom dropdown options (from indexhelpers.js)
    if (typeof updateMetricOptions === 'function') {
        updateMetricOptions();
    }
    
    // Initial display with Premier League filter applied
    filterTable();
})();
