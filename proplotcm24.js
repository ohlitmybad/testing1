// Global updateChart function declaration
var updateChart;
var updateChartDimensions;

// We'll initialize the custom selectors after the data is loaded
let initializeCustomSelectors = function(header) {
    // Define custom metric order with categories
    const customMetricOrder = [
        { text: "Minutes played", dataI18n: "minutes_played" },
      


{text: "CATEGORY: Passing", dataI18n: "passing"},
{text: "Passes per 90", dataI18n: "metrics.passes-per-90"},
{text: "Pass completion %", dataI18n: "metrics.pass-completion-pct"},
{text: "Passes completed per 90", dataI18n: "metrics.passes-completed-per-90"},
{text: "Forward passes per 90", dataI18n: "metrics.forward-passes-per-90"},
{text: "Forward pass completion %", dataI18n: "metrics.forward-pass-completion-pct"},
{text: "Forward passes completed per 90", dataI18n: "metrics.forward-passes-completed-per-90"},
{text: "Short passes per 90", dataI18n: "metrics.short-passes-per-90"},
{text: "Short pass completion %", dataI18n: "metrics.short-pass-completion-pct"},
{text: "Short passes completed per 90", dataI18n: "metrics.short-passes-completed-per-90"},
{text: "Long passes per 90", dataI18n: "metrics.long-passes-per-90"},
{text: "Long pass accuracy %", dataI18n: "metrics.long-pass-accuracy-pct"},
{text: "Long passes completed per 90", dataI18n: "metrics.long-passes-completed-per-90"},
{text: "Progressive passes per 90", dataI18n: "metrics.progressive-passes-per-90"},
{text: "Progressive pass accuracy %", dataI18n: "metrics.progressive-pass-accuracy-pct"},
{text: "Progressive passes completed per 90", dataI18n: "metrics.progressive-passes-completed-per-90"},
{text: "Progressive passes (PAdj)", dataI18n: "metrics.progressive-passes-(padj)"},
{text: "Passes to final third per 90", dataI18n: "metrics.passes-to-final-third-per-90"},
{text: "Pass completion (to final third) %", dataI18n: "metrics.pass-completion-(to-final-third)-pct"},
{text: "Accurate passes to final third per 90", dataI18n: "metrics.accurate-passes-to-final-third-per-90"},
{text: "Passes to penalty box per 90", dataI18n: "metrics.passes-to-penalty-box-per-90"},
{text: "Pass completion (to penalty box) %", dataI18n: "metrics.pass-completion-(to-penalty-box)-pct"},
{text: "Accurate passes to penalty box per 90", dataI18n: "metrics.accurate-passes-to-penalty-box-per-90"},
{text: "Through passes per 90", dataI18n: "metrics.through-passes-per-90"},
{text: "Through pass completion %", dataI18n: "metrics.through-pass-completion-pct"},
{text: "Through passes completed per 90", dataI18n: "metrics.through-passes-completed-per-90"},
{text: "Average pass length (m)", dataI18n: "metrics.average-pass-length-(m)"},
{text: "Backward passes per 90", dataI18n: "metrics.backward-passes-per-90"},
{text: "Misplaced passes per 90", dataI18n: "metrics.misplaced-passes-per-90"},
{text: "Forward pass ratio", dataI18n: "metrics.forward-pass-ratio"},
{text: "Backward pass ratio", dataI18n: "metrics.backward-pass-ratio"},


{text: "CATEGORY: Possession", dataI18n: "possession"},
{text: "Passes received per 90", dataI18n: "metrics.passes-received-per-90"},
{text: "Touches per 90", dataI18n: "metrics.touches-per-90"},
{text: "Possessions lost per 90", dataI18n: "metrics.possessions-lost-per-90"},
{text: "Possessions won - lost per 90", dataI18n: "metrics.possessions-won---lost-per-90"},
{text: "Possession +/-", dataI18n: "metrics.possession-+/-"},
{text: "Duels per 90", dataI18n: "metrics.duels-per-90"},
{text: "Duels won %", dataI18n: "metrics.duels-won-pct"},
{text: "Duels won per 90", dataI18n: "metrics.duels-won-per-90"},
{text: "Progressive actions per 90", dataI18n: "metrics.progressive-actions-per-90"},
{text: "Progressive action rate", dataI18n: "metrics.progressive-action-rate"},


{text: "CATEGORY: Defending", dataI18n: "defending"},
{text: "Defensive duels per 90", dataI18n: "metrics.defensive-duels-per-90"},
{text: "Defensive duels won %", dataI18n: "metrics.defensive-duels-won-pct"},
{text: "Defensive duels won per 90", dataI18n: "metrics.defensive-duels-won-per-90"},
{text: "Sliding tackles per 90", dataI18n: "metrics.sliding-tackles-per-90"},
{text: "Sliding tackles (PAdj)", dataI18n: "metrics.sliding-tackles-(padj)"},
{text: "Interceptions per 90", dataI18n: "metrics.interceptions-per-90"},
{text: "Interceptions (PAdj)", dataI18n: "metrics.interceptions-(padj)"},
{text: "Possessions won per 90", dataI18n: "metrics.possessions-won-per-90"},
{text: "Aerial duels per 90", dataI18n: "metrics.aerial-duels-per-90"},
{text: "Aerial duels won %", dataI18n: "metrics.aerial-duels-won-pct"},
{text: "Aerial duels won per 90", dataI18n: "metrics.aerial-duels-won-per-90"},
{text: "Shots blocked per 90", dataI18n: "metrics.shots-blocked-per-90"},


{text: "CATEGORY: Ball Carrying", dataI18n: "dribbling"},
{text: "Dribbles attempted per 90", dataI18n: "metrics.dribbles-attempted-per-90"},
{text: "Dribble success rate %", dataI18n: "metrics.dribble-success-rate-pct"},
{text: "Successful dribbles per 90", dataI18n: "metrics.successful-dribbles-per-90"},
{text: "Dribbles per 100 touches", dataI18n: "metrics.dribbles-per-100-touches"},
{text: "Successful attacking actions per 90", dataI18n: "metrics.successful-attacking-actions-per-90"},
{text: "Offensive duels per 90", dataI18n: "metrics.offensive-duels-per-90"},
{text: "Offensive duels won %", dataI18n: "metrics.offensive-duels-won-pct"},
{text: "Offensive duels won per 90", dataI18n: "metrics.offensive-duels-won-per-90"},
{text: "Progressive carries per 90", dataI18n: "metrics.progressive-carries-per-90"},
{text: "Ball-carrying frequency", dataI18n: "metrics.ball-carrying-frequency"},
{text: "Accelerations per 90", dataI18n: "metrics.accelerations-per-90"},
{text: "Fouls suffered per 90", dataI18n: "metrics.fouls-suffered-per-90"},


      
{text: "CATEGORY: Goal Scoring", dataI18n: "goal-scoring"},
{text: "Goals per 90", dataI18n: "metrics.goals-per-90"},
{text: "Non-penalty goals per 90", dataI18n: "metrics.non-penalty-goals-per-90"},
{text: "xG per 90", dataI18n: "metrics.xg-per-90"},
{text: "xG/Shot", dataI18n: "metrics.xg/shot"},
{text: "npxG per 90", dataI18n: "metrics.npxg-per-90"},
{text: "npxG/Shot", dataI18n: "metrics.npxg/shot"},
{text: "Goals per 100 touches", dataI18n: "metrics.goals-per-100-touches"},
{text: "xG per 100 touches", dataI18n: "metrics.xg-per-100-touches"},
{text: "Shot frequency", dataI18n: "metrics.shot-frequency"},
{text: "Shots per 90", dataI18n: "metrics.shots-per-90"},
{text: "Shots on target %", dataI18n: "metrics.shots-on-target-pct"},
{text: "Shots on target per 90", dataI18n: "metrics.shots-on-target-per-90"},
{text: "Goal conversion %", dataI18n: "metrics.goal-conversion-pct"},
{text: "Goals - xG per 90", dataI18n: "metrics.goals---xg-per-90"},
{text: "Headed goals per 90", dataI18n: "metrics.headed-goals-per-90"},
{text: "Touches in box per 90", dataI18n: "metrics.touches-in-box-per-90"},

{text: "CATEGORY: Goal Creation", dataI18n: "goal-creation"},
{text: "Assists per 90", dataI18n: "metrics.assists-per-90"},
{text: "xA per 90", dataI18n: "metrics.xa-per-90"},
{text: "xA per 100 passes", dataI18n: "metrics.xa-per-100-passes"},
{text: "Goals + Assists per 90", dataI18n: "metrics.goals-+-assists-per-90"},
{text: "NPG+A per 90", dataI18n: "metrics.npg+a-per-90"},
{text: "xG+xA per 90", dataI18n: "metrics.xg+xa-per-90"},
{text: "npxG+xA per 90", dataI18n: "metrics.npxg+xa-per-90"},
{text: "Key passes per 90", dataI18n: "metrics.key-passes-per-90"},
{text: "Chance creation ratio", dataI18n: "metrics.chance-creation-ratio"},
{text: "Assists - xA per 90", dataI18n: "metrics.assists---xa-per-90"},
{text: "Shot assists per 90", dataI18n: "metrics.shot-assists-per-90"},
{text: "Pre-assists per 90", dataI18n: "metrics.pre-assists-per-90"},
{text: "Crosses per 90", dataI18n: "metrics.crosses-per-90"},
{text: "Cross accuracy %", dataI18n: "metrics.cross-accuracy-pct"},
{text: "Accurate crosses per 90", dataI18n: "metrics.accurate-crosses-per-90"},
{text: "Crosses to box per 90", dataI18n: "metrics.crosses-to-box-per-90"},
{text: "Deep completions per 90", dataI18n: "metrics.deep-completions-per-90"},



{text: "CATEGORY: Discipline", dataI18n: "disciplinary"},
{text: "Fouls per 90", dataI18n: "metrics.fouls-per-90"},
{text: "Yellow cards per 90", dataI18n: "metrics.yellow-cards-per-90"},
{text: "Red cards per 90", dataI18n: "metrics.red-cards-per-90"},


{text: "CATEGORY: Set Pieces", dataI18n: "set-pieces"},
{text: "Free kicks per 90", dataI18n: "metrics.free-kicks-per-90"},
{text: "Direct free kicks per 90", dataI18n: "metrics.direct-free-kicks-per-90"},
{text: "Direct free kicks oT %", dataI18n: "metrics.direct-free-kicks-ot-pct"},
{text: "Corners per 90", dataI18n: "metrics.corners-per-90"},
{text: "Penalties attempted", dataI18n: "metrics.penalties-attempted"},
{text: "Penalties scored", dataI18n: "metrics.penalties-scored"},
{text: "Penalty success rate %", dataI18n: "metrics.penalty-success-rate-pct"}
        
    ];

    // Add "None" option only for size metric
    const sizeMetricOrder = [
        { text: "None", dataI18n: "metrics.none" },
        ...customMetricOrder
    ];

    // Define age options array
    const ageOptionsArray = [
        { text: "All Ages", value: "all", dataI18n: "age" },
        { text: "U17", value: "17"},
        { text: "U18", value: "18" },
        { text: "U19", value: "19" },
        { text: "U20", value: "20" },
        { text: "U21", value: "21" },
        { text: "U22", value: "22" },
        { text: "U23", value: "23" },
        { text: "U24", value: "24" },
        { text: "U25", value: "25" },
        { text: "U26", value: "26" },
        { text: "U27", value: "27" },
        { text: "U28", value: "28" },
        { text: "U29", value: "29" },
        { text: "U30", value: "30" },
        { text: "U35", value: "35" }
    ];

    // Function to populate age options
    function populateAgeOptions(container, options, currentValue) {
        container.innerHTML = ''; // Clear existing options
        
        options.forEach(option => {
            const optionElement = document.createElement('div');
            optionElement.className = 'custom-select-option';
            if (currentValue === option.value) {
                optionElement.classList.add('selected');
            }
            optionElement.setAttribute('data-value', option.value);
            optionElement.innerHTML = `<span data-i18n="${option.dataI18n}">${option.text}</span>`;
            container.appendChild(optionElement);
        });
    }

    // Age selector functionality
    const ageTrigger = document.getElementById('age-select-trigger');
    const ageOptionsElement = document.getElementById('age-select-options');
    const ageSelect = document.getElementById('select-age');
    
    // Populate age options
    populateAgeOptions(ageOptionsElement, ageOptionsArray, ageSelect.value);
    setupCustomSelect(ageTrigger, ageOptionsElement, ageSelect);

    // League selector functionality
    // Function to populate metric options with categories
    function populateMetricOptionsWithCategories(container, metrics, currentValue, isSize = false) {
        container.innerHTML = ''; // Clear existing options
        
        // Use sizeMetricOrder if it's the size selector, otherwise use customMetricOrder
        const metricsToUse = isSize ? sizeMetricOrder : metrics;
        
        metricsToUse.forEach(metric => {
            const option = document.createElement('div');
            
            if (metric.text.startsWith('CATEGORY:')) {
                // This is a category header
                option.className = 'metric-category-header';
                option.innerHTML = `<span data-i18n="${metric.dataI18n}">${metric.text.replace('CATEGORY: ', '')}</span>`;
            } else {
                // This is a metric option
                option.className = 'custom-select-option';
                if (currentValue === metric.text) {
                    option.classList.add('selected');
                }
                option.setAttribute('data-value', metric.text);
                option.innerHTML = `<span data-i18n="${metric.dataI18n}">${metric.text}</span>`;
            }
            
            container.appendChild(option);
        });
        
        // Apply translations immediately after creating all elements
        if (window.currentTranslations) {
            container.querySelectorAll('[data-i18n]').forEach(element => {
                const keys = element.getAttribute('data-i18n').split('.');
                let value = window.currentTranslations;
                
                // Navigate through the nested keys
                for (const key of keys) {
                    if (value && value[key]) {
                        value = value[key];
                    } else {
                        value = null;
                        break;
                    }
                }
                
                // Apply translation if found
                if (value && typeof value === 'string') {
                    element.textContent = value;
                }
            });
        }
    }

    // League selector functionality
    const leagueTrigger = document.getElementById('league-select-trigger');
    const leagueOptions = document.getElementById('league-select-options');
    const leagueSelect = document.getElementById('select-league');
    
    setupCustomSelect(leagueTrigger, leagueOptions, leagueSelect);
    
    // X metric selector functionality
    const xTrigger = document.getElementById('x-metric-trigger');
    const xOptions = document.getElementById('x-metric-options');
    const xSelect = document.getElementById('select-x');
    
    // Populate metric options with categories
    populateMetricOptionsWithCategories(xOptions, customMetricOrder, xSelect.value, false);
    setupCustomSelect(xTrigger, xOptions, xSelect);
    
    // Y metric selector functionality
    const yTrigger = document.getElementById('y-metric-trigger');
    const yOptions = document.getElementById('y-metric-options');
    const ySelect = document.getElementById('select-y');
    
    // Populate Y metric options with categories
    populateMetricOptionsWithCategories(yOptions, customMetricOrder, ySelect.value, false);
    setupCustomSelect(yTrigger, yOptions, ySelect);
    
    // Size metric selector functionality
    const sizeTrigger = document.getElementById('size-metric-trigger');
    const sizeOptions = document.getElementById('size-metric-options');
    const sizeSelect = document.getElementById('select-size');
    
    // Populate size metric options with categories, including "None"
    populateMetricOptionsWithCategories(sizeOptions, customMetricOrder, sizeSelect.value, true);
    setupCustomSelect(sizeTrigger, sizeOptions, sizeSelect);
};

// Function to populate metric options
function populateMetricOptions(optionsContainer, metrics, callback) {
    // Clear existing options
    optionsContainer.innerHTML = '';
    
    // Create a custom option for each metric
    metrics.forEach(function(metric) {
        const customOption = document.createElement('div');
        customOption.className = 'metric-select-option';
        customOption.setAttribute('data-value', metric);
        
        const span = document.createElement('span');
        span.textContent = metric;
        
        // Add data-i18n attribute for translation
        const metricKey = metric.toLowerCase().replace(/ /g, '-').replace(/%/g, 'pct');
        span.setAttribute('data-i18n', 'metrics.' + metricKey);
        
        customOption.appendChild(span);
        
        // Call the callback to potentially add selected class
        if (callback) callback(customOption, metric);
        
        optionsContainer.appendChild(customOption);
    });
}

// Function to set up a custom select
function setupCustomSelect(trigger, options, selectElement, callback) {
    // Toggle dropdown when clicking the trigger
    trigger.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent event from bubbling to document click handler
        // Close all other open dropdowns first
        document.querySelectorAll('.custom-select-trigger.open, .metric-select-trigger.open').forEach(function(openTrigger) {
            if (openTrigger !== trigger) {
                openTrigger.classList.remove('open');
                const openOptions = openTrigger.nextElementSibling;
                if (openOptions) openOptions.style.display = 'none';
            }
        });
        
        // Toggle this dropdown
        trigger.classList.toggle('open');
        const isOpen = trigger.classList.contains('open');
        options.style.display = isOpen ? 'block' : 'none';
        });
    
    // Handle option selection using event delegation
    options.addEventListener('click', function(e) {
        const option = e.target.closest('.custom-select-option, .metric-select-option');
        if (!option) return; // Click wasn't on an option
        
        e.stopPropagation(); // Prevent event from bubbling to document click handler
        
        // Skip category headers
        if (option.classList.contains('metric-category-header')) return;
        
        // Update selected option
        options.querySelectorAll('.custom-select-option, .metric-select-option').forEach(opt => opt.classList.remove('selected'));
        option.classList.add('selected');
        
        // Update trigger content
        const text = option.querySelector('span').textContent;
        const dataI18n = option.querySelector('span').getAttribute('data-i18n');
        const icon = option.querySelector('iconify-icon');
        
        trigger.innerHTML = '';
        
        if (icon) {
            const clonedIcon = icon.cloneNode(true);
            clonedIcon.style.marginRight = '8px';
            trigger.appendChild(clonedIcon);
        }
        
        const span = document.createElement('span');
        span.textContent = text;
        if (dataI18n) {
            span.setAttribute('data-i18n', dataI18n);
        }
        trigger.appendChild(span);
        
        // Update hidden select and trigger change event
        const value = option.getAttribute('data-value');
        selectElement.value = value || text;
        
        // Trigger the change event on the hidden select
        const event = new Event('change');
        selectElement.dispatchEvent(event);
        
        // Call callback function if provided, otherwise try to call updateChart if it exists
        if (typeof callback === 'function') {
            callback();
        } else if (typeof updateChart === 'function') {
            updateChart();
        }
        
        // Close dropdown
        trigger.classList.remove('open');
        options.style.display = 'none';
    });
    
    // Add keyboard navigation

    let searchTerm = '';

    let searchTimeout;

    

    // Add keydown event listener to the document

    document.addEventListener('keydown', function(e) {

        // Only process keyboard input when dropdown is open

        if (!trigger.classList.contains('open')) return;

        

        // Handle arrow keys for navigation

        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {

            e.preventDefault();

            

            const visibleOptions = Array.from(optionElements);

            const currentIndex = visibleOptions.findIndex(opt => opt.classList.contains('selected'));

            let newIndex;

            

            if (e.key === 'ArrowDown') {

                newIndex = currentIndex < visibleOptions.length - 1 ? currentIndex + 1 : 0;

            } else {

                newIndex = currentIndex > 0 ? currentIndex - 1 : visibleOptions.length - 1;

            }

            

            // Update selection

            optionElements.forEach(opt => opt.classList.remove('selected'));

            visibleOptions[newIndex].classList.add('selected');

            

            // Ensure the selected option is visible in the dropdown

            visibleOptions[newIndex].scrollIntoView({ block: 'nearest' });

            

            return;

        }

        

        // Handle Enter key to select the currently highlighted option

        if (e.key === 'Enter') {

            e.preventDefault();

            const selectedOption = options.querySelector('.selected');

            if (selectedOption) {

                selectedOption.click();

            }

            return;

        }

        

        // Handle Escape key to close the dropdown

        if (e.key === 'Escape') {

            e.preventDefault();
            trigger.classList.remove('open');
            options.style.display = 'none';
            return;

}



        // Handle typing to search (any printable character)
        if (e.key.length === 1 && e.key.match(/[a-zA-Z0-9%\s\-\+\(\)]/)) {
            e.preventDefault(); // Prevent default for all printable characters (including space)
            clearTimeout(searchTimeout);
            searchTerm += e.key.toLowerCase();
            // Find the first option that starts with the search term
            const matchingOption = Array.from(optionElements).find(option => {
                const optionText = option.querySelector('span').textContent.toLowerCase();
                return optionText.startsWith(searchTerm);
            });
            // If a matching option is found, select it
            if (matchingOption) {
                optionElements.forEach(opt => opt.classList.remove('selected'));
                matchingOption.classList.add('selected');
                matchingOption.scrollIntoView({ block: 'nearest' });
            }
            // Reset the search term after 1 second of inactivity
            searchTimeout = setTimeout(() => {
                searchTerm = '';
            }, 400);
        }
    });
}

// Close dropdowns when clicking outside
document.addEventListener('click', function(e) {
    const triggers = document.querySelectorAll('.custom-select-trigger, .metric-select-trigger');
    const optionsContainers = document.querySelectorAll('.custom-select-options, .metric-select-options');

    let clickedInsideDropdown = false;
    
    triggers.forEach(function(trigger, index) {
        const options = optionsContainers[index];
        
        if (trigger && options && (trigger.contains(e.target) || options.contains(e.target))) {
            clickedInsideDropdown = true;

        }
    });
    
    if (!clickedInsideDropdown) {
        triggers.forEach(function(trigger, index) {
            if (trigger && optionsContainers[index]) {
                trigger.classList.remove('open');
                optionsContainers[index].style.display = 'none';
            }
        });
        

    }
});






const allData = [];

const urls = [
'https://summer-dream-8f33.datamb-football.workers.dev',
];

const fetchPromises = urls.map(url => 
fetch(url, {
method: 'GET',
// The Worker checks the Origin header automatically, so no need to add custom headers
}).then(response => response.arrayBuffer())
);
Promise.all(fetchPromises)
.then(responses => {
responses.forEach((data, index) => {
    const url = urls[index]; // Get the URL of the current file being processed
    const workbook = XLSX.read(new Uint8Array(data), { type: 'array' });
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

    // Perform transformations
    // 1. Cut column C and paste it to the end
    const columnC = jsonData.map(row => row[2]);
    jsonData.forEach((row, index) => row.push(columnC[index]));
    jsonData.forEach(row => row.splice(2, 1));

    // 2. Delete specified columns
    const columnsToDelete = [27, 28, 29, 30, 40, 47, 48, 49, 55, 59, 61, 70, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 92, 105, 107, 123, 128];
    columnsToDelete.sort((a, b) => b - a); // Sort in descending order
    columnsToDelete.forEach(col => {
        jsonData.forEach(row => row.splice(col, 1));
    });

    // 3. Insert new columns and fill with appropriate values
    jsonData.forEach(row => row.unshift(null)); // Insert empty column at the beginning
    jsonData[0][0] = "ID"; // Set header for the new column
 
    // Fill ID column
    for (let i = 1; i < jsonData.length; i++) {
        jsonData[i][0] = i;
    }

    // 4. Replace ", m" with " m" and ", %" with " %"
    jsonData.forEach(row => {
        for (let i = 0; i < row.length; i++) {
            if (typeof row[i] === 'string') {
                row[i] = row[i].replace(', m', ' m').replace(', %', ' %');
            }
        }
    });

    // 5. Collect the transformed data (including header row)
    allData.push(...jsonData);
});

const leagues = {

"MLS": [ "Columbus Crew", "Chicago Fire", "St. Louis City ", "Minnesota United", "Colorado Rapids", "Vancouver Whitecaps", "Philadelphia Union", "Dallas", "Charlotte FC", "SJ Earthquakes", "Los Angeles FC", "Orlando City", "Toronto", "New York RB", "CF Montréal", "Austin FC", "New England", "Los Angeles Galaxy", "Inter Miami", "Sporting KC", "New York City", "Real Salt Lake", "DC United", "Seattle Sounders", "Nashville SC", "Houston Dynamo", "San Diego", "Atlanta United", "Cincinnati", "Portland Timbers"
],

"Brazil Serie A": [ "Bahia", "Botafogo", "Corinthians", "Ceará", "Sport Recife", "Cruzeiro", "Santos", "Flamengo", "Fluminense", "Fortaleza", "Grêmio", "Internacional", "Juventude", "Mirassol", "Palmeiras", "Red Bull Bragantino", "São Paulo", "Vasco da Gama", "Vitória", "Atlético Mineiro"
],

"Argentina Primera": [ "Vélez Sarsfield", "Lanús", "Godoy Cruz", "Racing Club", "Talleres Córdoba", "Platense", "Independiente", "Atlético Tucumán", "Newell's Old Boys", "River Plate", "Boca Juniors", "Gimnasia La Plata", "Unión Santa Fe", "Sarmiento", "Barracas Central", "Rosario Central", "Independiente Rivadavia", "Tigre", "Deportivo Riestra", "Banfield", "Huracán", "Argentinos Juniors", "San Martín San Juan", "Aldosivi", "Central Córdoba SdE", "Defensa y Justicia", "Estudiantes", "San Lorenzo", "Belgrano", "Instituto"
],

"Colombia": [ "Millonarios", "Atlético Nacional", "Tolima", "Atlético Bucaramanga", "Medellín", "Fortaleza (COL)", "Once Caldas", "Santa Fe", "América de Cali", "Llaneros", "Águilas Doradas", "Deportivo Pereira", "Boyacá Chicó", "La Equidad", "Inter Bogotá", "Deportivo Pasto", "Unión Magdalena", "Alianza", "Envigado", "Deportivo Cali", "Junior"
],

"Ecuador": [ "Barcelona (ECU)", "Orense", "Técnico Universitario", "Emelec", "Mushuc Runa", "Aucas", "Universidad", "Delfin", "El Nacional", "LDU Quito", "Manta", "Macará", "Deportivo Cuenca", "Libertad (ECU)", "Vinotinto de Ecuador", "Independiente del Valle"
],

"Chile": [ "Universidad de Chile", "O'Higgins", "Unión Española", "Audax Italiano", "Palestino", "Ñublense", "Everton (CHI)", "La Serena", "Cobresal", "Deportes Iquique", "Coquimbo Unido", "Universidad Católica", "Unión La Calera", "Huachipato", "Deportes Limache", "Colo Colo"
],

"Paraguay": [ "Nacional Asunción", "Libertad", "Guaraní", "Sportivo Trinidense", "Cerro Porteño", "Deportivo Recoleta", "Sportivo Ameliano", "Sportivo Luqueño", "2 de Mayo", "General Caballero JLM", "Atlético Tembetary", "Olimpia"
],

"Uruguay Primera": [ "Defensor Sporting", "Liverpool (URU)", "Nacional (URU)", "Peñarol", "Progreso", "Torque", "Miramar Misiones", "River Plate (URU)", "Plaza Colonia", "Juventud", "Cerro", "Danubio", "Racing", "Boston River", "Cerro Largo", "Wanderers"
],

"Norway Eliteserien": [ "Brann", "Fredrikstad", "HamKam", "Haugesund", "KFUM", "Kristiansund", "Molde", "Rosenborg", "Sandefjord", "Sarpsborg 08", "Strømsgodset", "Tromsø", "Vålerenga", "Viking", "Bryne", "Bodø / Glimt"
],

"Sweden Allsvenskan": [ "Brommapojkarna", "Djurgården", "Elfsborg", "GAIS", "Häcken", "Halmstad", "Hammarby", "IFK Göteborg", "Degerfors", "IFK Norrköping", "Malmö FF", "Mjällby", "Sirius", "Värnamo", "Öster", "AIK"
],

"J1 League": [ "Kashiwa Reysol", "Vissel Kobe", "Machida Zelvia", "Kashima Antlers", "Tokyo", "Tokyo Verdy", "Fagiano Okayama", "Gamba Osaka", "Yokohama F. Marinos", "Avispa Fukuoka", "Albirex Niigata", "Kawasaki Frontale", "Yokohama", "Cerezo Osaka", "Shimizu S-Pulse", "Shonan Bellmare", "Urawa Reds", "Nagoya Grampus", "Kyoto Sanga", "Sanfrecce Hiroshima"
],

"K League 1": [ "Ulsan Hyundai", "Jeju SK", "Daejeon Citizen", "Seoul", "Pohang Steelers", "Gimcheon Sangmu", "Gwangju", "Suwon", "Gangwon", "Daegu", "Anyang", "Jeonbuk Motors"
],



"Scotland Premiership": [
"Rangers", "Celtic", "Hibernian", "Hearts", "Aberdeen", "Kilmarnock", "Dundee United", "Falkirk", "St. Mirren", "Dundee", "Livingston", "Motherwell", 
],

"Belgium Pro League": [
"Cercle Brugge", "OH Leuven", "Union Saint-Gilloise", "Club Brugge", "Genk", "Gent", "Antwerp", "Zulte-Waregem", "La Louvière", "Standard Liège", "Sint-Truiden", "Dender", "Westerlo", "Mechelen", "Anderlecht", "Charleroi", 
],

"Swiss Super League": [
"Lugano", "Young Boys", "Thun", "St. Gallen", "Grasshopper", "Lausanne Sport", "Sion", "Zürich", "Servette", "Winterthur", "Basel", "Luzern",
],

"Austrian Bundesliga": [
"Sturm Graz", "LASK", "Salzburg", "Rapid Wien", "Hartberg", "Wolfsberger AC", "Rheindorf Altach", "WSG Swarovski Tirol", "Austria Wien", "Grazer AK", "Blau-Weiß Linz", "Ried", 
],

"Denmark Superliga": [
"Brøndby", "Viborg", "Nordsjælland", "København", "Midtjylland", "SønderjyskE", "Fredericia", "Silkeborg", "Randers", "OB", "Vejle", "AGF", "Sønderjyske"
],

"Czech Fortuna Liga": [
"Sparta Praha", "Viktoria Plzeň", "Hradec Králové", "Teplice", "Baník Ostrava", "Mladá Boleslav", "Slovan Liberec", "Pardubice", "Sigma Olomouc", "Dukla Praha", "Zlín", "Slovácko", "Karviná", "Bohemians 1905", "Jablonec", "Slavia Praha",
],

"Serbia SuperLiga": [
"Bačka Topola", "Partizan", "Spartak Subotica", "Radnički Niš", "Radnik Surdulica", "Crvena Zvezda", "Napredak Kruševac", "OFK Beograd", "Vojvodina", "Novi Pazar", "Radnički Kragujevac", "Čukarički", "Javor Ivanjica", "OFK Beograd", "Mladost Lučani", "Železničar Pancevo", "IMT Novi Beograd",
],

"Croatia HNL": [
"Hajduk Split", "Dinamo Zagreb", "Osijek", "Istra 1961", "Rijeka", "Varaždin", "Slaven Belupo", "Lokomotiva Zagreb", "Gorica", "Vukovar", 
],

"Greece": [
"PAOK", "Panathinaikos", "Olympiacos Piraeus", "AEK Athens", "Panetolikos FC", "OFI", "Atromitos", "Aris", "Volos NFC", "Asteras Tripolis", "Panserraikos", "Larissa", "Levadiakos", "Kifissia", "Ergotelis", "PAE Chania", "Diagoras Rodou", "AO Xanthi", "Ionikos", "Trikala", "Panachaiki", "Doxa Dramas", "Apollon Larisas", "Karaiskakis Artas", "Ierapetras",
],

"Ukraine": [
"Shakhtar Donetsk", "Dynamo Kyiv", "Polissya", "Metalist 1925 Kharkiv", "Rukh Lviv", "Kryvbas KR", "Zorya", "Veres", "Obolon", "Epitsentr Kamyanets-Podilskyi", "LNZ Cherkasy", "Kudrivka", "Karpaty", "Oleksandria", "SK Poltava", "Kolos Kovalivka", 
],

"Poland": [
"Cracovia Kraków", "Pogoń Szczecin", "Lech Poznań", "Korona Kielce", "Legia Warszawa", "Arka Gdynia", "Zagłębie Lubin", "Jagiellonia Białystok", "Widzew Łódź", "Raków Częstochowa", "Piast Gliwice", "Wisła Płock", "Nieciecza", "Lechia Gdańsk", "Katowice", "Motor Lublin", "Górnik Zabrze", "Radomiak Radom", 
],

"Russia": [
"Lokomotiv Moskva", "Spartak Moskva", "Krylya Sovetov", "CSKA Moskva", "Zenit", "Krasnodar", "Orenburg", "Rubin Kazan'", "Dinamo Moskva", "Akhmat Grozny", "Nizhny Novgorod", "Fakel", "Akron Togliatti", "Dynamo Makhachkala", "Khimki", "Rostov", "Ural", "Baltika", "Sochi", 
],

"Israel": [
"Hapoel Haifa", "Hapoel Petah Tikva", "Ironi Kiryat Shmona", "Beitar Jerusalem", "Hapoel Jerusalem", "Maccabi Tel Aviv", "Maccabi Bnei Raina", "Ashdod", "Maccabi Netanya", "Ironi Tiberias", "Hapoel Tel Aviv", "Bnei Sakhnin", "Hapoel Be'er Sheva", "Maccabi Haifa", 
],

"Süper Lig": [
"Fenerbahçe", "Trabzonspor", "Kayserispor", "İstanbul Başakşehir", "Rizespor", "Göztepe", "Eyüpspor", "Galatasaray", "Beşiktaş", "Fatih Karagümrük", "Samsunspor", "Antalyaspor", "Konyaspor", "Kasımpaşa", "Gaziantep", "Kocaelispor", "Gençlerbirliği", "Alanyaspor", "Adana Demirspor",
],

"Saudi Pro League": [
"Al Nassr", "Al Ittihad", "Al Hilal", "Al Ahli", "Al Qadisiyah", "Al Taawon", "Al Ettifaq", "Al Hazem", "Al Najma", "Al Khaleej", "Al Shabab", "Al Fateh", "Al Kholood", "Al Riyadh", "Al Akhdoud", "Dhamk", " NEOM", " NEOM ", "NEOM ", "NEOM", "Al Feiha", 
],

"LigaMX": [
"América", "Cruz Azul", "Santos Laguna", "Necaxa", "Pachuca", "Guadalajara", "Monterrey", "Toluca", "Atlas", "Club Tijuana", "Puebla", "Atlético de San Luis", "Juárez", "Tigres UANL", "Pumas UNAM", "Mazatlán", "Querétaro", "León", 
],

"Championship": [
"Southampton", "Charlton Athletic", "Wrexham", "Preston North End", "Ipswich Town", "Stoke City", "Derby County", "Bristol City", "Coventry City", "Norwich City", "Queens Park Rangers", "Watford", "Middlesbrough", "Hull City", "Leicester City", "West Bromwich Albion", "Blackburn Rovers", "Sheffield United", "Oxford United", "Birmingham City", "Millwall", "Portsmouth", "Swansea City", "Sheffield Wednesday", 
],

"Segunda Division": [
"Almería", "Granada", "Sporting Gijón", "Racing Santander", "Cádiz", "Las Palmas", "Real Valladolid", "Deportivo La Coruña", "Burgos", "Ceuta", "Cultural Leonesa", "Real Zaragoza", "Eibar", "Castellón", "FC Andorra", "Málaga", "Leganés", "Córdoba", "Huesca", "Real Sociedad B", "Albacete", "Mirandés",
],

"Bundesliga 2": [
"Arminia Bielefeld", "Hertha BSC", "Fortuna Düsseldorf", "Kaiserslautern", "Darmstadt 98", "Magdeburg", "Holstein Kiel", "Dynamo Dresden", "Paderborn", "Eintracht Braunschweig", "Greuther Fürth", "Hannover 96", "Nürnberg", "Karlsruher SC", "Schalke 04", "Bochum", "Preußen Münster", "Elversberg", 
],

"Serie B": [
"Monza", "Palermo", "Virtus Entella", "Bari", "Catanzaro", "Modena", "Empoli", "Frosinone", "Carrarese", "Sampdoria", "Avellino", "Pescara", "Juve Stabia", "Padova", "Cesena", "Mantova", "Venezia", "Spezia", "Reggiana", "Südtirol",
],

"Ligue 2": [
"Boulogne","Nancy", "Montpellier", "Pau", "Guingamp", "Rodez", "Annecy", "Le Mans", "Red Star", "Dunkerque", "Grenoble", "Reims", "Laval", "Amiens SC", "Troyes", "Bastia", "Saint-Étienne", "Clermont", "Rodez ",
],




"Premier League": [
"Manchester City", "Tottenham Hotspur", "Arsenal", "Manchester United", "Aston Villa", "Liverpool", "Leeds United", "Everton", "Chelsea", "Brighton", "Newcastle United", "Wolverhampton Wanderers", "Fulham", "Crystal Palace", "Brentford", "Bournemouth", "West Ham United", "Burnley", "Nottingham Forest", "Sunderland", "Wolverhampton",
],

"La Liga": [
"Valencia", "Atlético Madrid", "Barcelona", "Real Madrid", "Real Sociedad", "Real Betis", "Osasuna", "Deportivo Alavés", "Getafe", "Athletic Club", "Girona", "Mallorca", "Villarreal", "Real Oviedo", "Rayo Vallecano", "Levante", "Sevilla", "Elche", "Celta de Vigo", "Espanyol",
],

"Serie A": [
"Milan", "Juventus", "Atalanta", "Lazio", "Napoli", "Roma", "Sassuolo", "Internazionale", "Lecce", "Torino", "Parma", "Udinese", "Genoa", "Hellas Verona", "Bologna", "Fiorentina", "Cagliari", "Cremonese", "Como", "Pisa", 
],

"Bundesliga": [
"Borussia Dortmund", "Stuttgart", "Wolfsburg", "Bayer Leverkusen", "Borussia M'gladbach", "Augsburg", "Union Berlin", "Eintracht Frankfurt", "Bayern München", "Hoffenheim", "Mainz 05", "Werder Bremen", "RB Leipzig", "St. Pauli", "Köln", "Freiburg", "Heidenheim", "Hamburger SV", "Borussia Mgladbach",
],

"Ligue 1": [
"PSG", "Lille", "Nice", "Lens", "Nantes", "Paris", "Olympique Lyonnais", "Monaco", "Olympique Marseille", "Brest", "Metz", "Lorient", "Angers SCO", "Le Havre", "Rennes", "Auxerre", "Strasbourg", "Toulouse", 
],

"Eredivisie": [
"PSV", "Feyenoord", "Sparta Rotterdam", "Twente", "Utrecht", "Groningen", "PEC Zwolle", "Volendam", "NAC Breda", "NEC", "Fortuna Sittard", "Go Ahead Eagles", "Heerenveen", "Telstar", "Heracles", "AZ", "Excelsior", "Ajax",
],

"Primeira Liga": [
"Porto", "Benfica", "Sporting CP", "Sporting Braga", "Vitória Guimarães", "Gil Vicente", "Alverca", "Moreirense", "Nacional", "Arouca", "Estoril", "Rio Ave", "Santa Clara", "Tondela", "Casa Pia AC", "Famalicão", "Estrela Amadora", "AVS", "AVS ",
],


};


function getTeamLeague(team) {
    for (const [league, teams] of Object.entries(leagues)) {
        if (teams.includes(team)) {
            return league;
        }
    }
    return "Unknown League";
}

const outputLines = [];
let playerId = 1; // Initialize player ID counter

allData.forEach((row, index) => {
// Skip the header row (index 0)
if (index === 0) {
outputLines.push(row.join(","));
return;
}
// Ensure row has at least 3 elements
if (row.length >= 3) {
const team = row[2];
const league = getTeamLeague(team);
row[0] = playerId++; // Update the first element with the incremented player ID
row.push(team); // Copy the team column to the end of the dataframe  
row[2] = league; // Replace the third element with the league information
outputLines.push(row.join(",")); // Join the modified parts back into a line
} else {
// Handle rows that don't have at least 3 elements as needed
outputLines.push(row.join(","));
}
});

const output_data = outputLines.join("\n");

// Concatenate the extra header row with the fetched CSV data
let csvData = output_data;



// Replace all '\n' characters with actual new rows in the CSV
csvData = csvData.split('\\n').join('\n');




var rows = csvData.trim().split('\n');
var header = rows[0].split(',');
var data = rows.slice(1).map(function(row) {
return row.split(',').map(function(d, i) {
// Check if this is the team column (last column) or if it's a numeric column
if (i === row.split(',').length - 1) {
// This is the team column at the end, keep it as string
return d;
} else if (i >= 3) { // Assuming columns 3 and onwards contain numeric values
const parsedValue = parseFloat(d);
return isNaN(parsedValue) ? 0 : parsedValue;
} else {
return d;
}
});
});

var margin = { top: 0, right: 0, bottom: 0, left: 0 };
var width = 1082 - margin.left - margin.right;
var height = 770 - margin.top - margin.bottom;

// Define league colors for clicked circles
var leagueColors = {
    "Premier League": "rgb(255, 0, 0, 0.7)",         // 1
    "La Liga": "rgb(255, 223, 0, 0.7)",             // 2
    "Bundesliga": "rgb(85, 209, 73, 0.7)",          // 3
    "Serie A": "rgb(0, 191, 255, 0.7)",             // 4
    "Ligue 1": "rgb(153, 50, 204, 0.7)",            // 5
    "Eredivisie": "rgb(255, 140, 0, 0.7)",          // 6
    "Primeira Liga": "rgb(255, 20, 147, 0.7)",      // 7
    "Championship": "rgb(220, 20, 60, 0.7)",         // 8
    "Segunda Division": "rgb(0, 71, 171, 0.7)",      // 9
    "Serie B": "rgb(255, 198, 0, 0.7)",             // 10
    "Belgium Pro League": "rgb(255, 255, 0, 0.7)",   // 11
    "Ligue 2": "rgb(135, 206, 235, 0.7)",           // 12
    "Bundesliga 2": "rgb(0, 128, 0, 0.7)",          // 13
    "Scotland Premiership": "rgb(147, 112, 219, 0.7)", // 14
    "Swiss Super League": "rgb(246, 38, 129, 0.7)",  // 15
    "Austrian Bundesliga": "rgb(240, 128, 128, 0.7)", // 16
    "Süper Lig": "rgb(255, 69, 0, 0.7)",            // 17
    "Denmark Superliga": "rgb(70, 130, 180, 0.7)",   // 18
    "Sweden Allsvenskan": "rgb(255, 245, 104, 0.7)", // 19
    "Norway Eliteserien": "rgb(34, 139, 34, 0.7)",   // 20
    "Croatia HNL": "rgb(30, 144, 255, 0.7)",         // 21
    "Serbia SuperLiga": "rgb(208, 32, 144, 0.7)",    // 22
    "Czech Fortuna Liga": "rgb(238, 130, 238, 0.7)", // 23
    "Poland": "rgb(255, 99, 71, 0.7)",               // 24
    "Ukraine": "rgb(65, 105, 225, 0.7)",             // 25
    "Russia": "rgb(255, 215, 0, 0.7)",               // 26
    "Greece": "rgb(255, 250, 160, 0.7)",             // 27
    "Israel": "rgb(60, 179, 113, 0.7)",              // 28
    "J1 League": "rgb(0, 206, 209, 0.7)",            // 29
    "K League 1": "rgb(197, 142, 255, 0.7)",         // 30
    "Saudi Pro League": "rgb(46, 139, 87, 0.7)",     // 31
    "MLS": "rgb(255, 105, 180, 0.7)",                // 32
    "LigaMX": "rgb(255, 165, 0, 0.7)",              // 33
    "Brazil Serie A": "rgb(255, 207, 95, 0.7)",      // 34
    "Argentina Primera": "rgb(255, 182, 193, 0.7)",  // 35
    "Uruguay Primera": "rgb(102, 205, 170, 0.7)",    // 36
    "Chile": "rgb(48, 98, 251, 0.7)",                // 37
    "Colombia": "rgb(186, 85, 211, 0.7)",            // 38
    "Ecuador": "rgb(123, 104, 238, 0.7)",            // 39
    "Paraguay": "rgb(0, 128, 128, 0.7)",             // 40
};


// Function to get color based on league
function getLeagueColor(league) {
    return leagueColors[league] || "rgba(255, 0, 0, 0.7)"; // Default to red if league not found
}

// Calculate container width to center the chart
updateChartDimensions = function() {
    var containerWidth = document.querySelector('.chart-wrapper').clientWidth;
    var containerHeight = window.innerHeight * 0.7; // Use 70% of viewport height as max height
    
    // Set consistent side margins regardless of screen size
    var sideMargin = 30; // Consistent side margin in pixels
    var svgWidth = Math.min(1082, containerWidth - (sideMargin * 2));
    
    // Detect if we're on a vertical screen (mobile)
    var isVerticalScreen = window.innerWidth / window.innerHeight < 1;
    
    // Set consistent margins that work for both orientations
    if (isVerticalScreen) {
        // Mobile/vertical layout
        margin = { 
            top: 40,          // Space for title/labels
            right: 30, // Consistent right margin
            bottom: 60,       // Space for x-axis labels
            left: 75          // Space for y-axis labels
        };
        
        // For vertical screens, make the chart taller
        var verticalAspectRatio = 1.4; // Taller than wide
        var svgHeight = Math.min(containerHeight, svgWidth * verticalAspectRatio);
        
        // Ensure minimum height for mobile
        svgHeight = Math.max(svgHeight, 500);
    } else {
        // Desktop/horizontal layout
        margin = { 
            top: 40,          // Space for title/labels
            right: 30, // Consistent right margin
            bottom: 60,       // Space for x-axis labels
            left: 79         // Space for y-axis labels
        };
        
        // For horizontal screens, use a fixed aspect ratio
        var horizontalAspectRatio = 0.7; // Width:height ratio
        var svgHeight = svgWidth * horizontalAspectRatio;
    }
    
    // Update dimensions
    width = svgWidth - margin.left - margin.right;
    height = svgHeight - margin.top - margin.bottom;
    
    // Update SVG dimensions
    d3.select("#scatter-plot")
        .attr("width", svgWidth)
        .attr("height", svgHeight);
        
    // Update the chart container to match SVG size
    document.querySelector('.chart-container').style.height = svgHeight + 'px';
}

window.addEventListener('resize', function() {
    // Update dimensions immediately
    updateChartDimensions();
    // Use requestAnimationFrame for smoother updates
    requestAnimationFrame(function() {
        updateChart(); // Redraw the chart with new dimensions
    });
});

// Initial call to set dimensions
updateChartDimensions();

// Debounce function to limit how often the resize handler fires
function debounce(func, wait) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            func.apply(context, args);
        }, wait);
    };
}

// Track previous window dimensions to detect orientation changes
var prevWindowWidth = window.innerWidth;
var prevWindowHeight = window.innerHeight;

// Add debounced resize handler
window.addEventListener('resize', debounce(function() {
    // Check if orientation has changed (width/height ratio flipped)
    var wasVertical = prevWindowWidth / prevWindowHeight < 1;
    var isVertical = window.innerWidth / window.innerHeight < 1;
    
    // Update previous dimensions
    prevWindowWidth = window.innerWidth;
    prevWindowHeight = window.innerHeight;
    
    // Always update the chart on resize - use requestAnimationFrame for smoother updates
    requestAnimationFrame(function() {
        updateChart();
    });
}, 50)); // Use a much shorter wait time for more responsive feel


var medianLinesVisible = false;

var selectX = d3.select("#select-x");
var selectY = d3.select("#select-y");
var selectSize = d3.select("#select-size");

var names = data.map(function(row) {
    return row[1];
});

// Populate the select dropdowns
header.slice(3).forEach(function(metric) {
    selectX.append("option")
        .text(metric)
        .attr("value", metric);
    selectY.append("option")
        .text(metric)
        .attr("value", metric);
    selectSize.append("option")
        .text(metric)
        .attr("value", metric);
});

// Set default values for the selectors
selectX.property("value", header[3]);
selectY.property("value", header[3]);
selectSize.property("value", header[3]);

// Create the SVG container
var svg = d3.select("#scatter-plot")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var xMetric = header[3];
var yMetric = header[3];
var sizeMetric = header[3];

var xScale = d3.scaleLinear()
    .range([0, width]);
var yScale = d3.scaleLinear()
    .range([height, 0]);
var sizeScale = d3.scaleLinear()
    .range([6, 14.8]);

var xAxis = d3.axisBottom(xScale).tickSize(0);
var yAxis = d3.axisLeft(yScale).tickSize(0);

// Add X axis
var gXAxis = svg.append("g")
    .attr("class", "x-axis")
    .attr("transform", "translate(0," + height + ")");

// Add Y axis
var gYAxis = svg.append("g")
    .attr("class", "y-axis");

// Add axis labels
var xLabel = svg.append("text")
    .attr("class", "x-label")
    .attr("text-anchor", "end")
    .attr("x", width)
    .attr("y", height + 35)
    .style("font-family", "Inter, sans-serif")
    .style("font-size", "14px");

var yLabel = svg.append("text")
    .attr("class", "y-label")
    .attr("text-anchor", "end")
    .attr("transform", "rotate(-90)")
    .attr("y", -53)
    .attr("x", 0)
    .style("font-family", "Inter, sans-serif")
    .style("font-size", "14px");

// Create tooltip
var tooltip = d3.select("body")
    .append("div")
    .attr("class", "tooltip");

// Function to check if device is mobile
function isMobileDevice() {
    return window.innerWidth <= 768;
}

// Function to position tooltip to prevent overflow
function positionTooltip(event, tooltipElement) {
    const tooltipNode = tooltipElement.node();
    if (!tooltipNode) return { left: 0, top: 0 };
    
    const tooltipRect = tooltipNode.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    // Default position
    let left = event.pageX + 10;
    let top = event.pageY - 28;
    
    // Adjust if tooltip would overflow right edge
    if (left + tooltipRect.width > viewportWidth - 10) {
        left = event.pageX - tooltipRect.width - 10;
    }
    
    // Adjust if tooltip would overflow bottom edge
    if (top + tooltipRect.height > viewportHeight - 10) {
        top = event.pageY - tooltipRect.height - 10;
    }
    
    // Ensure tooltip doesn't go off the left or top edge
    left = Math.max(10, left);
    top = Math.max(10, top);
    
    return { left, top };
}

var clickedCircles = [];
var filteredData = data;
var filteredNames = names;
var circles;

// Function to update the chart - assign to the global variable
updateChart = function() {
    // Update chart dimensions based on current window size
    updateChartDimensions();
    
    // Update SVG dimensions without recreating it
    d3.select("#scatter-plot")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom);
        
    // Update axis positions based on new dimensions
    gXAxis.attr("transform", "translate(0," + height + ")");
    xLabel.attr("x", width)
          .attr("y", height + 35);
    yLabel.attr("x", 0);
    
    // Check if dark mode is active
    const isDarkMode = document.body.classList.contains('dark-mode');
    
    // Get the selected league
    var selectedLeague = document.getElementById("select-league").value;
    
    // Get the selected age
    var selectedAge = document.getElementById("select-age").value;
    
    // Filter data based on selected league
    if (selectedLeague === "all") {
        filteredData = data;
    } else if (selectedLeague === "Top 5 Leagues") {
        filteredData = data.filter(function(d) {
            return d[2] === "Premier League" || d[2] === "La Liga" || 
                   d[2] === "Bundesliga" || d[2] === "Serie A" || 
                   d[2] === "Ligue 1";
        });
    }
    
    else if (selectedLeague === "Top 7 Leagues") {
        filteredData = data.filter(function(d) {
            return d[2] === "Premier League" || d[2] === "La Liga" || 
                   d[2] === "Bundesliga" || d[2] === "Serie A" || 
                   d[2] === "Ligue 1" || d[2] === "Eredivisie" || 
                   d[2] === "Primeira Liga";
        });
    }
    
    else if (selectedLeague === "Outside Top 7") {
        filteredData = data.filter(function(d) {
            return d[2] === "Scotland Premiership" || d[2] === "Belgium Pro League" || 
                   d[2] === "Swiss Super League" || d[2] === "Ukraine" || 
                   d[2] === "Poland" || d[2] === "Greece" || 
                   d[2] === "Israel" || d[2] === "Russia" || 
                   d[2] === "Colombia" || d[2] === "Chile" || 
                   d[2] === "Paraguay" || d[2] === "Ecuador" || 
                   d[2] === "Austrian Bundesliga" || d[2] === "Süper Lig" || 
                   d[2] === "Saudi Pro League" || d[2] === "Brazil Serie A" || 
                   d[2] === "Argentina Primera" || d[2] === "Uruguay Primera" || 
                   d[2] === "LigaMX" || d[2] === "MLS" || 
                   d[2] === "K League 1" || d[2] === "J1 League" || 
                   d[2] === "Norway Eliteserien" || d[2] === "Denmark Superliga" || 
                   d[2] === "Sweden Allsvenskan" || d[2] === "Czech Fortuna Liga" || 
                   d[2] === "Serbia SuperLiga" || d[2] === "Croatia HNL" || 
                   d[2] === "Championship" || d[2] === "Segunda Division" || 
                   d[2] === "Bundesliga 2" || d[2] === "Serie B" || 
                   d[2] === "Ligue 2" || d[2] === "Unknown League";
        });
    }          
    

    else if (selectedLeague === "South America") {
        filteredData = data.filter(function(d) {
return d[2] === "Brazil Serie A" || d[2] === "Argentina Primera" || 
     d[2] === "Uruguay Primera" || d[2] === "Colombia" || 
     d[2] === "Chile" || d[2] === "Paraguay" || 
     d[2] === "Ecuador";
        });
    }   

    else if (selectedLeague === "Scandinavia") {
        filteredData = data.filter(function(d) {
return d[2] === "Norway Eliteserien" || d[2] === "Denmark Superliga" || 
     d[2] === "Sweden Allsvenskan";
        });
    }
    

    else if (selectedLeague === "Eastern Europe") {
        filteredData = data.filter(function(d) {
return d[2] === "Czech Fortuna Liga" || d[2] === "Serbia SuperLiga" || 
     d[2] === "Croatia HNL" || d[2] === "Russia" || 
     d[2] === "Ukraine" || d[2] === "Poland";
        });
    }
    
    


    

    else {
        filteredData = data.filter(function(d) {
            return d[2] === selectedLeague;
        });
    }

    // Apply age filter if a specific age is selected
    if (selectedAge !== "all") {
        var ageLimit = parseInt(selectedAge);
        filteredData = filteredData.filter(function(d) {
            var age = parseInt(d[header.indexOf('Age')]); // Convert age to integer
            return age <= ageLimit;
        });
    }
    
    // Update filtered names
    filteredNames = filteredData.map(function(d) {
        return d[1];
    });
    
    // Get the selected metrics
    xMetric = selectX.property("value");
    yMetric = selectY.property("value");
    sizeMetric = selectSize.property("value");
    
    // Update scales with consistent 10% padding on each side
    xScale.range([0, width])
.domain(function() {
  // Get the raw extent
  const extent = d3.extent(filteredData, function(d) { 
      return +d[header.indexOf(xMetric)]; 
  });
  
  // Apply nice() to get rounded values
  const niceScale = d3.scaleLinear().domain(extent).nice();
  const niceExtent = niceScale.domain();
  
  // Calculate the original range and the nice range
  const originalRange = extent[1] - extent[0];
  const niceRange = niceExtent[1] - niceExtent[0];
  
  // Check if nice() added more than 10% padding
  if ((niceRange / originalRange) > 1.2) { // 1.2 represents original + 20% (10% on each side)
      // If so, use manual 10% padding instead
      const padding = originalRange * 0.1;
      return [extent[0] - padding, extent[1] + padding];
  } else {
      // Otherwise use the nice rounded values
      return niceExtent;
  }
}());


          yScale.range([height, 0])
.domain(function() {
  // Get the raw extent
  const extent = d3.extent(filteredData, function(d) { 
      return +d[header.indexOf(yMetric)]; 
  });
  
  // Apply nice() to get rounded values
  const niceScale = d3.scaleLinear().domain(extent).nice();
  const niceExtent = niceScale.domain();
  
  // Calculate the original range and the nice range
  const originalRange = extent[1] - extent[0];
  const niceRange = niceExtent[1] - niceExtent[0];
  
  // Check if nice() added more than 10% padding
  if ((niceRange / originalRange) > 1.2) { // 1.2 represents original + 20% (10% on each side)
      // If so, use manual 10% padding instead
      const padding = originalRange * 0.1;
      return [extent[0] - padding, extent[1] + padding];
  } else {
      // Otherwise use the nice rounded values
      return niceExtent;
  }
}());

    // Only update sizeScale if we're not using "None"
    if (sizeMetric !== "None") {
        sizeScale.domain(d3.extent(filteredData, function(d) { 
            return d[header.indexOf(sizeMetric)]; 
        }));
    }
    
    // Update axes
    gXAxis.call(d3.axisBottom(xScale).tickSize(0));
    gYAxis.call(d3.axisLeft(yScale).tickSize(0));
    
    // Create metric key for translation
    const xMetricKey = "metrics." + xMetric.toLowerCase().replace(/ /g, '-').replace(/%/g, 'pct');
    const yMetricKey = "metrics." + yMetric.toLowerCase().replace(/ /g, '-').replace(/%/g, 'pct');
    
    // Set data-i18n attribute
    xLabel.attr("data-i18n", xMetricKey);
    yLabel.attr("data-i18n", yMetricKey);
    
    // Apply translations directly if available
    if (window.currentTranslations && window.currentTranslations.metrics) {
        const xTranslationKey = xMetric.toLowerCase().replace(/ /g, '-').replace(/%/g, 'pct');
        const yTranslationKey = yMetric.toLowerCase().replace(/ /g, '-').replace(/%/g, 'pct');
        
        const xTranslation = window.currentTranslations.metrics[xTranslationKey];
        const yTranslation = window.currentTranslations.metrics[yTranslationKey];
        
        xLabel.text(xTranslation || xMetric);
        yLabel.text(yTranslation || yMetric);
    } else {
        xLabel.text(xMetric);
        yLabel.text(yMetric);
    }

    // Remove existing circles and labels
    svg.selectAll("circle").remove();
    svg.selectAll(".team-label").remove();
    svg.selectAll(".xy-line").remove(); // Remove any existing diagonal reference line
    svg.selectAll(".xy-line-bg").remove(); // Remove line background
    svg.selectAll(".xy-line-label").remove(); // Remove line label
    svg.selectAll(".xy-line-label-bg").remove(); // Remove label background
    svg.selectAll(".performance-label").remove(); // Remove performance labels
    svg.selectAll("linearGradient#line-gradient").remove(); // Remove gradient definition
    svg.selectAll("marker#arrow-over, marker#arrow-under").remove(); // Remove arrow markers
    svg.selectAll(".xy-line-hover").remove(); // Remove hover detection element
    svg.selectAll(".median-line").remove(); // Always remove median lines before potentially redrawing them
    
    // Add diagonal reference line for xG vs Goals
    if ((xMetric === 'xG per 90' && yMetric === 'Goals per 90') || 
        (xMetric === 'Goals per 90' && yMetric === 'xG per 90') ||
        (xMetric === 'Non-penalty goals per 90' && yMetric === 'npxG per 90') ||
        (xMetric === 'npxG per 90' && yMetric === 'Non-penalty goals per 90') ||
        (xMetric === 'Assists per 90' && yMetric === 'xA per 90') ||
        (xMetric === 'xA per 90' && yMetric === 'Assists per 90') ||
        (xMetric === 'NPG+A per 90' && yMetric === 'npxG+xA per 90') ||
        (xMetric === 'npxG+xA per 90' && yMetric === 'NPG+A per 90') ||
        (xMetric === 'xG conceded per 90' && yMetric === 'Goals conceded per 90') ||
        (xMetric === 'Goals conceded per 90' && yMetric === 'xG conceded per 90') ||
        (xMetric === 'xG conceded' && yMetric === 'Goals conceded') ||
        (xMetric === 'Goals conceded' && yMetric === 'xG conceded')) 
        
        {
        
        // Variable to track hover timer for the diagonal line
        var diagonalLineHoverTimer = null;
        
        // Calculate the intersection points for the x=y line
        var minX = d3.min(filteredData, function(d) { return d[header.indexOf(xMetric)]; });
        var maxX = d3.max(filteredData, function(d) { return d[header.indexOf(xMetric)]; });
        var minY = d3.min(filteredData, function(d) { return d[header.indexOf(yMetric)]; });
        var maxY = d3.max(filteredData, function(d) { return d[header.indexOf(yMetric)]; });
        
        // Get the smaller max between the x and y axes
        var maxVal = Math.min(maxX, maxY);
        
        // Get the larger min between the x and y axes
        var minVal = Math.max(minX, minY);
        
        // Now draw the line only within these bounds
        svg.append("line")
            .attr("class", "xy-line")
            .attr("x1", xScale(minVal))
            .attr("y1", yScale(minVal))
            .attr("x2", xScale(maxVal))
            .attr("y2", yScale(maxVal))
            .style("stroke", "#2ecc71") // Simple green color
            .style("stroke-width", "2")
            .style("stroke-dasharray", "5,3");
        
        // Add invisible wider line for better hover detection
        svg.append("line")
            .attr("class", "xy-line-hover")
            .attr("x1", xScale(minVal))
            .attr("y1", yScale(minVal))
            .attr("x2", xScale(maxVal))
            .attr("y2", yScale(maxVal))
            .style("stroke", "transparent")
            .style("stroke-width", "15")
            .style("cursor", "help")
            .on("mouseover", function() {
                // Clear any existing timer
                if (diagonalLineHoverTimer) {
                    clearTimeout(diagonalLineHoverTimer);
                }
                
                // Capture the event coordinates
                var eventX = d3.event.pageX;
                var eventY = d3.event.pageY;
                
                // Set a new timer with delay
                diagonalLineHoverTimer = setTimeout(function() {
                    tooltip.transition()
                        .duration(200)
                        .style("opacity", 0.9);
                    
                    // Use the global getTranslation function
                    var tooltipContent = "<strong>" + getTranslation("tooltip.xg-line-title", "1:1 Line") + "</strong><br/>";
                    
                    // Check which axis is which and provide the correct explanation
                    if (xMetric === 'xG per 90' && yMetric === 'Goals per 90') {
                        tooltipContent += "<span>" + getTranslation("tooltip.xg-line-above1", "Players above this line are scoring more goals than expected.") + "</span><br/>" +
                            "<span>" + getTranslation("tooltip.xg-line-below1", "Players below this line are scoring fewer goals than expected.") + "</span>";
                    } else if (xMetric === 'Goals per 90' && yMetric === 'xG per 90') {
                        tooltipContent += "<span>" + getTranslation("tooltip.xg-line-below1", "Players below this line are scoring more goals than expected.") + "</span><br/>" +
                            "<span>" + getTranslation("tooltip.xg-line-above1", "Players above this line are scoring fewer goals than expected.") + "</span>";
                    } else if (xMetric === 'NPG+A per 90' && yMetric === 'npxG+xA per 90') {
                        tooltipContent += "<span>" + getTranslation("tooltip.xg-line-above2", "Players above this line are registering more goals and assists than expected.") + "</span><br/>" +
                            "<span>" + getTranslation("tooltip.xg-line-below2", "Players below this line are registering fewer goals and assists than expected.") + "</span>";
                    } else if (xMetric === 'npxG+xA per 90' && yMetric === 'NPG+A per 90') {
                        tooltipContent += "<span>" + getTranslation("tooltip.xg-line-below2", "Players below this line are registering more goals and assists than expected.") + "</span><br/>" +
                            "<span>" + getTranslation("tooltip.xg-line-above2", "Players above this line are registering fewer goals and assists than expected.") + "</span>";
                    } else if (xMetric === 'xG conceded per 90' && yMetric === 'Goals conceded per 90') {
                        tooltipContent += "<span>" + getTranslation("tooltip.xg-line-above3", "Players above this line are conceding more goals than expected.") + "</span><br/>" +
                            "<span>" + getTranslation("tooltip.xg-line-below3", "Players below this line are conceding fewer goals than expected.") + "</span>";
                    } else if (xMetric === 'Goals conceded per 90' && yMetric === 'xG conceded per 90') {
                        tooltipContent += "<span>" + getTranslation("tooltip.xg-line-below3", "Players below this line are conceding more goals than expected.") + "</span><br/>" +
                            "<span>" + getTranslation("tooltip.xg-line-above3", "Players above this line are conceding fewer goals than expected.") + "</span>";
                    } else if (xMetric === 'xG conceded' && yMetric === 'Goals conceded') {
                        tooltipContent += "<span>" + getTranslation("tooltip.xg-line-above4", "Players above this line are conceding more goals than expected.") + "</span><br/>" +
                            "<span>" + getTranslation("tooltip.xg-line-below4", "Players below this line are conceding fewer goals than expected.") + "</span>";
                    } else if (xMetric === 'Goals conceded' && yMetric === 'xG conceded') {
                        tooltipContent += "<span>" + getTranslation("tooltip.xg-line-below4", "Players below this line are conceding more goals than expected.") + "</span><br/>" +
                            "<span>" + getTranslation("tooltip.xg-line-above4", "Players above this line are conceding fewer goals than expected.") + "</span>";
                    } else if (xMetric === 'xA per 90' && yMetric === 'Assists per 90') {
                        tooltipContent += "<span>" + getTranslation("tooltip.xg-line-above5", "Players above this line are assisting more goals than expected.") + "</span><br/>" +
                            "<span>" + getTranslation("tooltip.xg-line-below5", "Players below this line are assisting fewer goals than expected.") + "</span>";
                    } else if (xMetric === 'Assists per 90' && yMetric === 'xA per 90') {
                        tooltipContent += "<span>" + getTranslation("tooltip.xg-line-below5", "Players below this line are assisting more goals than expected.") + "</span><br/>" +
                            "<span>" + getTranslation("tooltip.xg-line-above5", "Players above this line are assisting fewer goals than expected.") + "</span>";
                    } else if (xMetric === 'npxG per 90' && yMetric === 'Non-penalty goals per 90') {
                        tooltipContent += "<span>" + getTranslation("tooltip.xg-line-above6", "Players above this line are scoring more non-penalty goals than expected.") + "</span><br/>" +
                            "<span>" + getTranslation("tooltip.xg-line-below6", "Players below this line are scoring fewer non-penalty goals than expected.") + "</span>";
                    } else if (xMetric === 'Non-penalty goals per 90' && yMetric === 'npxG per 90') {
                        tooltipContent += "<span>" + getTranslation("tooltip.xg-line-below6", "Players below this line are scoring more non-penalty goals than expected.") + "</span><br/>" +
                            "<span>" + getTranslation("tooltip.xg-line-above6", "Players above this line are scoring fewer non-penalty goals than expected.") + "</span>";
                    }
                    
                    tooltip.html(tooltipContent)
                        .style("left", (eventX + 10) + "px")
                        .style("top", (eventY - 28) + "px");
                }, 600); // 550ms delay before showing tooltip
            })
            .on("mouseout", function() {
                // Clear the timer if mouse leaves before tooltip is shown
                if (diagonalLineHoverTimer) {
                    clearTimeout(diagonalLineHoverTimer);
                    diagonalLineHoverTimer = null;
                }
                
                tooltip.transition()
                    .duration(500)
                    .style("opacity", 0);
            });
    }
    
    // Add median lines if enabled
    if (medianLinesVisible) {
        // Calculate medians
        var xMedian = d3.median(filteredData, function(d) { 
            return d[header.indexOf(xMetric)]; 
        });
        
        var yMedian = d3.median(filteredData, function(d) { 
            return d[header.indexOf(yMetric)]; 
        });
        
        // Add X median line
        svg.append("line")
            .attr("class", "median-line")
            .attr("x1", xScale(xMedian))
            .attr("y1", 0)
            .attr("x2", xScale(xMedian))
            .attr("y2", height)
            .style("stroke", "rgba(0, 0, 0, 0.3)")
            .style("stroke-dasharray", "4");
        
        // Add Y median line
        svg.append("line")
            .attr("class", "median-line")
            .attr("x1", 0)
            .attr("y1", yScale(yMedian))
            .attr("x2", width)
            .attr("y2", yScale(yMedian))
            .style("stroke", "rgba(0, 0, 0, 0.3)")
            .style("stroke-dasharray", "4");
    }
    
    // Add circles
    circles = svg.selectAll("circle")
        .data(filteredData)
        .enter()
        .append("circle")
        .attr("cx", function(d) { return xScale(d[header.indexOf(xMetric)]); })
        .attr("cy", function(d) { return yScale(d[header.indexOf(yMetric)]); })
        .attr("r", function(d) { 
     
            const value = d[header.indexOf(sizeMetric)];
            return value !== undefined ? sizeScale(value) : 8;
        })
        .style("fill", function(d) {
            // Check if this circle is in the clicked circles array
            if (clickedCircles.includes(getPlayerUniqueId(d))) {
                return getLeagueColor(d[2]);
            }
            return "rgba(70, 130, 180, 0.7)";
        })
        .style("stroke", function(d) {
            return clickedCircles.includes(getPlayerUniqueId(d)) ? "#000" : "none";
        })
        .style("stroke-width", function(d) {
            return clickedCircles.includes(getPlayerUniqueId(d)) ? 2 : 0;
        })
        .style("cursor", "pointer")
        .on("mouseover", function(d) {
            // Store the original radius for smoother transition
            const originalRadius = sizeMetric === "None" || d[header.indexOf(sizeMetric)] === undefined ? 8 : sizeScale(d[header.indexOf(sizeMetric)]);
            d3.select(this)
                .transition()
                .duration(200)
                .attr("r", originalRadius * 1.25)
                .style("fill", getLeagueColor(d[2])); // Show league color on hover
            
            tooltip.transition()
                .duration(200)
                .style("opacity", 0.9);
            
            // Create metric keys for translation
            const xMetricKey = "metrics." + xMetric.toLowerCase().replace(/ /g, '-').replace(/%/g, 'pct');
            const yMetricKey = "metrics." + yMetric.toLowerCase().replace(/ /g, '-').replace(/%/g, 'pct');
            const sizeMetricKey = sizeMetric === "None" || d[header.indexOf(sizeMetric)] === undefined ? "metrics.none" : "metrics." + sizeMetric.toLowerCase().replace(/ /g, '-').replace(/%/g, 'pct');
            
            // Get translated metric names using the global getTranslation function
            const xMetricTranslated = getTranslation(xMetricKey, xMetric);
            const yMetricTranslated = getTranslation(yMetricKey, yMetric);
            const sizeMetricTranslated = getTranslation(sizeMetricKey, sizeMetric);
            
            tooltip.html(  "<strong>" + d[1] + " <span style='font-weight:400;'>(" + d[header.indexOf('Team within selected timeframe')] + ", " + d[header.indexOf('Age')] + ")</span></strong><br/>" +
                xMetricTranslated + ": " + d[header.indexOf(xMetric)] + "<br/>" +
                yMetricTranslated + ": " + d[header.indexOf(yMetric)] + "<br/>" +
                (sizeMetric === "None" || d[header.indexOf(sizeMetric)] === undefined ? "" : sizeMetricTranslated + ": " + d[header.indexOf(sizeMetric)]));
            
            // Position tooltip to prevent overflow
            const tooltipNode = tooltip.node();
            if (tooltipNode) {
                const tooltipRect = tooltipNode.getBoundingClientRect();
                const viewportWidth = window.innerWidth;
                const viewportHeight = window.innerHeight;
                
                // Default position
                let left = d3.event.pageX + 10;
                let top = d3.event.pageY - 28;
                
                // Adjust if tooltip would overflow right edge
                if (left + tooltipRect.width > viewportWidth - 10) {
                    left = d3.event.pageX - tooltipRect.width - 10;
                }
                
                // Adjust if tooltip would overflow bottom edge
                if (top + tooltipRect.height > viewportHeight - 10) {
                    top = d3.event.pageY - tooltipRect.height - 10;
                }
                
                // Ensure tooltip doesn't go off the left or top edge
                left = Math.max(10, left);
                top = Math.max(10, top);
                
                tooltip.style("left", left + "px")
                       .style("top", top + "px");
            }
            
            // On mobile, hide tooltip after 1 second
            if (window.matchMedia('(hover: none)').matches) {
                setTimeout(function() {
                    tooltip.transition()
                        .duration(200)
                        .style("opacity", 0);
                }, 1000);
            }
        })
        .on("mouseout", function(d) {
            // Store the original radius for smoother transition
            const originalRadius = sizeMetric === "None" || d[header.indexOf(sizeMetric)] === undefined ? 8 : sizeScale(d[header.indexOf(sizeMetric)]);
            
            // Only hide tooltip on non-mobile devices (mobile has timeout)
            if (window.matchMedia('(hover: hover)').matches) {
                tooltip.transition()
                    .duration(500)
                    .style("opacity", 0);
            }
            
            // Get the original fill color
            var isClicked = clickedCircles.includes(getPlayerUniqueId(d));
            
            d3.select(this)
                .transition()
                .duration(200)
                .attr("r", originalRadius)
                .style("fill", function() {
                    // If the circle is clicked, keep the league color
                    // Otherwise, revert to the default blue
                    return isClicked ? getLeagueColor(d[2]) : "rgba(70, 130, 180, 0.7)";
                });
        })
        .on("click", function(d) {
            // Check if this is a search match
            var isSearchMatch = d3.select(this).classed("search-match");
            
            // If it's a search match, clear the search first
            if (isSearchMatch) {
                resetSearch();
            }
            
            // Get the unique ID for this player
            var uniqueId = getPlayerUniqueId(d);
            
            
            // Toggle clicked state
            var index = clickedCircles.indexOf(uniqueId);
            
            if (index === -1) {
                // Add to clicked circles
                clickedCircles.push(uniqueId);
                d3.select(this)
                    .style("fill", getLeagueColor(d[2]))
                    .style("stroke", "#000")
                    .style("stroke-width", 2);
                    
                // Add team label
                addTeamLabel(d, false);
            } else {
                // Remove from clicked circles
                clickedCircles.splice(index, 1);
                d3.select(this)
                    .style("fill", "rgba(70, 130, 180, 0.7)")
                    .style("stroke", "none");
                    
                // Remove team label - Fixed selector
                var playerId = d[0];
                var playerName = d[1];
                var teamClass = "team-label-" + playerId + "-" + playerName.toLowerCase()
                    .replace(/[^a-z0-9]/g, '-')
                    .replace(/-+/g, '-')
                    .replace(/^-|-$/g, '');
                svg.select("." + teamClass).remove();
            }
            
            // Update button text based on whether all circles are selected
            updateSelectAllButtonText();
            
            // Update the legend
            var selectedLeague = document.getElementById("select-league").value;
            updateLeagueLegend(selectedLeague);
        });
        
    // Add labels for clicked teams
    clickedCircles.forEach(function(uniqueId) {
        var teamData = filteredData.find(function(d) {
            return getPlayerUniqueId(d) === uniqueId;
        });
        
        if (teamData) {
            addTeamLabel(teamData, false);
        }
    });
        
    // Update button text based on current selection state
    updateSelectAllButtonText();
    
    // Update the legend to show only relevant leagues
    updateLeagueLegend(selectedLeague);
}

// Function to update the "Click All" button icon
function updateSelectAllButtonText() {
    var selectIcon = document.getElementById('select-icon');
    var selectTooltip = document.getElementById('select-all-tooltip');
    var allSelected = filteredData.every(function(d) {
        return clickedCircles.includes(getPlayerUniqueId(d));
    });
    
    if (allSelected) {
        selectIcon.className = "ion-ios-circle-outline"; // Icon for "Unclick All"
        if (selectTooltip) {
            // Use translations for unselect all teams
            if (window.currentTranslations && window.currentTranslations.tooltip) {
                selectTooltip.textContent = window.currentTranslations.tooltip.unselectAll || "Unselect all players";
            } else {
                selectTooltip.textContent = "Unselect all players";
            }
        }
    } else {
        selectIcon.className = "ion-ios-circle-filled"; // Icon for "Click All"
        if (selectTooltip) {
            // Use translations for select all teams
            if (window.currentTranslations && window.currentTranslations.tooltip) {
                selectTooltip.textContent = window.currentTranslations.tooltip.selectAll || "Select all players";
            } else {
                selectTooltip.textContent = "Select all players";
            }
        }
    }
}

// Add event listeners to the selectors
selectX.on("change", updateChart);
selectY.on("change", updateChart);
selectSize.on("change", updateChart);

// Function to remove special characters and diacritics for better search matching
function removeSpecialCharsAndDiacritics(str) {
    if (!str) return '';
    return str.normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
        .replace(/Ø/g, 'O')
        .replace(/ø/g, 'o')
        .replace(/ı/g, 'i')
        .replace(/ł/g, 'l')
        .replace(/Ł/g, 'L');
}

// Add search functionality
var searchBar = document.getElementById("search-bar");

searchBar.addEventListener("input", function() {
    var searchTerm = searchBar.value.toLowerCase();
    
    if (searchTerm === '') {
        resetSearch();
        return;
    }
    
    // Normalize search term to handle special characters and diacritics
    var normalizedSearchTerm = removeSpecialCharsAndDiacritics(searchTerm);
    
    // Reset previous search styling
    svg.selectAll("circle").classed("search-match", false)
        .style("fill", function(d) {
            // Restore original fill color
            return clickedCircles.includes(getPlayerUniqueId(d)) ? getLeagueColor(d[2]) : "rgba(70, 130, 180, 0.7)";
        })
        .style("stroke", function(d) {
            return clickedCircles.includes(getPlayerUniqueId(d)) ? "#000" : "none";
        })
        .style("stroke-width", function(d) {
            return clickedCircles.includes(getPlayerUniqueId(d)) ? 2 : 0;
        })
        .style("filter", "none")
        .each(function() {
            // Reset any inline styles that might interfere with our animation
            d3.select(this).style("r", null);
        });
    
    svg.selectAll(".team-label")
        .classed("search-match", false)
        .classed("search-dimmed", false);
    
    // Find matching teams
    var matchingTeams = [];
    
    // Apply new search styling
    svg.selectAll("circle").filter(function(d) {
        var teamName = d[1].toLowerCase();
        var normalizedTeamName = removeSpecialCharsAndDiacritics(teamName);
        
        // Check if the search term is in the team name
        var isMatch = normalizedTeamName.includes(normalizedSearchTerm);
        
        if (isMatch) {
            matchingTeams.push(getPlayerUniqueId(d));
        }
        
        
        return isMatch;
    })
    .classed("search-match", true)
    .each(function() {
        // Bring matching circles to front
        this.parentNode.appendChild(this);
    });
    
    // If we have matches, dim non-matching labels
    if (matchingTeams.length > 0) {
        // First dim all labels
        svg.selectAll(".team-label").classed("search-dimmed", true);
        
        // Then highlight matching labels
        svg.selectAll(".team-label").filter(function() {
            var labelText = d3.select(this).text();
            // Check if this label corresponds to any of the matching teams
            for (var i = 0; i < matchingTeams.length; i++) {
                var playerName = getPlayerNameFromId(matchingTeams[i]);
                if (labelText === playerName) {
                    return true;
                }
            }
            return false;
        })
        .classed("search-match", true)
        .classed("search-dimmed", false)
        .each(function() {
            // Bring matching labels to front
            this.parentNode.appendChild(this);
        });
        
        // Add labels for matching teams that don't have labels yet
        matchingTeams.forEach(function(uniqueId) {
            // Check if this team already has a label
            var playerName = getPlayerNameFromId(uniqueId);
            var playerId = getPlayerIdFromUniqueId(uniqueId);
            var labelClass = "team-label-" + playerId + "-" + playerName.toLowerCase()
                .replace(/[^a-z0-9]/g, '-') // Replace any non-alphanumeric character with a hyphen
                .replace(/-+/g, '-')        // Replace multiple consecutive hyphens with a single one
                .replace(/^-|-$/g, '');     // Remove leading and trailing hyphens
            
            if (svg.select("." + labelClass).size() === 0) {
                // Find the team data
                var teamData = filteredData.find(function(d) {
                    return getPlayerUniqueId(d) === uniqueId;
                });
                
                if (teamData) {
                    // Add the label with isSearchMatch=true to bypass collision detection
                    addTeamLabel(teamData, true);
                    // Apply search match styling (now done inside addTeamLabel)
                }
            }
        });
    } else {
        // No matches found - reset to default state
        // Remove all team labels
        svg.selectAll(".team-label").remove();
        
        // Re-add labels only for clicked teams, respecting collision detection
        clickedCircles.forEach(function(uniqueId) {
            var teamData = filteredData.find(function(d) {
                return getPlayerUniqueId(d) === uniqueId;
            });
            
            if (teamData) {
                // Add the label with isSearchMatch=false to respect collision detection
                addTeamLabel(teamData, false);
            }
        });
        
        // Make sure clicked circles remain highlighted
        svg.selectAll("circle")
            .style("fill", function(d) {
                return clickedCircles.includes(getPlayerUniqueId(d)) ? getLeagueColor(d[2]) : "rgba(70, 130, 180, 0.7)";
            })
            .style("stroke", function(d) {
                return clickedCircles.includes(getPlayerUniqueId(d)) ? "#000" : "none";
            })
            .style("stroke-width", function(d) {
                return clickedCircles.includes(getPlayerUniqueId(d)) ? 2 : 0;
            });
    }
});

function resetSearch() {
    // Clear the search input field
    searchBar.value = '';
    
    // Reset circle styling
    svg.selectAll("circle")
        .classed("search-match", false)
        .style("fill", function(d) {
            return clickedCircles.includes(getPlayerUniqueId(d)) ? getLeagueColor(d[2]) : "rgba(70, 130, 180, 0.7)";
        })
        .style("stroke", function(d) {
            return clickedCircles.includes(getPlayerUniqueId(d)) ? "#000" : "none";
        })
        .style("stroke-width", function(d) {
            return clickedCircles.includes(getPlayerUniqueId(d)) ? 2 : 0;
        })
        .style("filter", "none")
        .each(function() {
            // Reset any inline styles that might interfere with our animation
            d3.select(this).style("r", null);
            // Stop any ongoing animations
            d3.select(this).interrupt();
        });
        
    // Reset label styling
    svg.selectAll(".team-label")
        .classed("search-match", false)
        .classed("search-dimmed", false)
        .each(function() {
            // Stop any ongoing animations
            d3.select(this).interrupt();
        });
        
    // Remove all labels first
    svg.selectAll(".team-label").remove();
    
    // Re-add labels only for clicked teams, respecting collision detection
    clickedCircles.forEach(function(uniqueId) {
        var teamData = filteredData.find(function(d) {
            return getPlayerUniqueId(d) === uniqueId;
        });
        
        if (teamData) {
            // Add the label with isSearchMatch=false to respect collision detection
            addTeamLabel(teamData, false);
        }
    });
}

// Toggle median lines
var toggleButton = document.getElementById("toggle-median-lines");
toggleButton.addEventListener("click", function() {
    medianLinesVisible = !medianLinesVisible;
    updateChart();

    const medianTooltip = document.getElementById('median-lines-tooltip');
    // Use translations for the median lines tooltip
    if (window.currentTranslations && window.currentTranslations.tooltip) {
        medianTooltip.textContent = medianLinesVisible ? 
            (window.currentTranslations.tooltip.hideMedianLines || "Hide median lines") : 
            (window.currentTranslations.tooltip.showMedianLines || "Show median lines");
    } else {
        medianTooltip.textContent = medianLinesVisible ? "Hide median lines" : "Show median lines";
    }
});

        function selectAllCircles() {
    // Check if all circles are already selected
    var allSelected = filteredData.every(function(d) {
        return clickedCircles.includes(getPlayerUniqueId(d));
    });

    if (allSelected) {
        // Deselect all circles
        clickedCircles = [];
        svg.selectAll("circle")
            .style("fill", "rgba(70, 130, 180, 0.7)")
            .style("stroke", "none");
        
        // Remove all team labels
        svg.selectAll(".team-label").remove();
    } else {
        // Select all circles
        svg.selectAll("circle").each(function(d) {
            var uniqueId = getPlayerUniqueId(d);
            if (!clickedCircles.includes(uniqueId)) {
                clickedCircles.push(uniqueId);
                d3.select(this)
                    .style("fill", getLeagueColor(d[2]))
                    .style("stroke", "#000")
                    .style("stroke-width", 2);
            }
        });
        
        // Add labels for all teams
        filteredData.forEach(function(d) {
            addTeamLabel(d, false);
        });
    }

    // Update button text
    updateSelectAllButtonText();

    // Update the legend
    var selectedLeague = document.getElementById("select-league").value;
    updateLeagueLegend(selectedLeague);
}
// Make selectAllCircles globally accessible
window.selectAllCircles = selectAllCircles;

// Initialize the chart
updateChart();

// Initialize the custom selectors now that data is loaded
initializeCustomSelectors(header);

// Function to update the league legend based on selected league
function updateLeagueLegend(selectedLeague) {
    var legendContainer = document.getElementById('league-legend');
    
    // If only one league is selected (and it's not "all" or "Top 5 Leagues"), hide the legend completely
    if (selectedLeague !== "Top 7 Leagues" && selectedLeague !== "Top 5 Leagues"&& selectedLeague !== "South America" && selectedLeague !== "Scandinavia" && selectedLeague !== "Eastern Europe" 
    ) {
        legendContainer.style.display = 'none';
        return;
    }
    
    // Hide the legend if no teams are clicked
    if (clickedCircles.length === 0) {
        legendContainer.style.display = 'none';
        return;
    }
    
    // Check if any of the currently visible teams are selected
    var anyVisibleTeamsSelected = false;
    for (var i = 0; i < filteredData.length; i++) {
        if (clickedCircles.includes(getPlayerUniqueId(filteredData[i]))) {
            anyVisibleTeamsSelected = true;
            break;
        }
    }
    
    // Hide the legend if none of the visible teams are selected
    if (!anyVisibleTeamsSelected) {
        legendContainer.style.display = 'none';
        return;
    }
    
    // Otherwise, show the legend
    legendContainer.style.display = 'flex';
    legendContainer.innerHTML = ''; // Clear existing legend
    
    // Add a title for the legend
    var legendTitle = document.createElement('div');
    legendTitle.style.fontWeight = 'bold';
    legendTitle.style.marginRight = '15px';
    legendContainer.appendChild(legendTitle);
    
    // Determine which leagues to show in the legend
    var leaguesToShow = [];
    
    if (selectedLeague === "Top 7 Leagues") {
        // Show all leagues
        leaguesToShow = ["Premier League", "La Liga", "Bundesliga", "Serie A", "Ligue 1", "Eredivisie", "Primeira Liga"];
    } else if (selectedLeague === "Top 5 Leagues") {
        // Show only Top 5 leagues
        leaguesToShow = ["Premier League", "La Liga", "Bundesliga", "Serie A", "Ligue 1"];
           } else if (selectedLeague === "South America") {
        leaguesToShow = ["Brazil Serie A", "Argentina Primera", "Uruguay Primera", "Colombia", "Chile", "Paraguay", "Ecuador"];
    } else if (selectedLeague === "Scandinavia") {
        leaguesToShow = ["Denmark Superliga", "Sweden Allsvenskan", "Norway Eliteserien"];
    } else if (selectedLeague === "Eastern Europe") {
        leaguesToShow = ["Croatia HNL", "Serbia SuperLiga", "Czech Fortuna Liga", "Poland", "Ukraine", "Russia"];
    }
    
    // Add an item for each relevant league
    leaguesToShow.forEach(function(league) {
        var legendItem = document.createElement('div');
        legendItem.className = 'legend-item';
        
        var colorBox = document.createElement('div');
        colorBox.className = 'legend-color';
        colorBox.style.backgroundColor = leagueColors[league];
        
        var leagueText = document.createElement('span');
        
        // Use shortened names for display
        var displayName = league;
        switch(league) {
            case "Premier League": displayName = "Premier League"; break;
            case "La Liga": displayName = "La Liga"; break;
            case "Bundesliga": displayName = "Bundesliga"; break;
            case "Serie A": displayName = "Serie A"; break;
            case "Ligue 1": displayName = "Ligue 1"; break;
            case "Primeira Liga": displayName = "Primeira Liga"; break;
            case "Eredivisie": displayName = "Eredivisie"; break;
            case "Scotland Premiership": displayName = "Scotland"; break;
            case "Belgium Pro League": displayName = "Belgium"; break;
            case "Swiss Super League": displayName = "Switzerland"; break;
            case "Austrian Bundesliga": displayName = "Austria"; break;
            case "Süper Lig": displayName = "Türkiye"; break;
            case "Denmark Superliga": displayName = "Denmark"; break;
            case "Sweden Allsvenskan": displayName = "Sweden"; break;
            case "Norway Eliteserien": displayName = "Norway"; break;
            case "Croatia HNL": displayName = "Croatia"; break;
            case "Serbia SuperLiga": displayName = "Serbia"; break;
            case "Czech Fortuna Liga": displayName = "Czech Republic"; break;
            case "Brazil Serie A": displayName = "Brazil"; break;
            case "Argentina Primera": displayName = "Argentina"; break;
            case "Uruguay Primera": displayName = "Uruguay"; break;
            case "Colombia": displayName = "Colombia"; break;
            case "Chile": displayName = "Chile"; break;
            case "Paraguay": displayName = "Paraguay"; break;
            case "Ecuador": displayName = "Ecuador"; break;
            case "Championship": displayName = "Championship"; break;
            case "Segunda Division": displayName = "Spain Segunda"; break;
            case "Serie B": displayName = "Serie B"; break;
            case "Bundesliga 2": displayName = "2. Bundesliga"; break;
            case "Ligue 2": displayName = "Ligue 2"; break;
            case "LigaMX": displayName = "Mexico"; break;
            case "MLS": displayName = "MLS"; break;
            case "K League 1": displayName = "South Korea"; break;
            case "J1 League": displayName = "Japan"; break;
            case "Saudi Pro League": displayName = "Saudi Arabia"; break;
        }
        
        leagueText.textContent = displayName;
        
        // Add data-i18n attribute for translation
        // Map the league name to the corresponding key in the translation files
        var i18nKey = "";
        switch(league) {
            case "Premier League": i18nKey = "leagues.premier"; break;
            case "La Liga": i18nKey = "leagues.la"; break;
            case "Bundesliga": i18nKey = "leagues.bundesliga"; break;
            case "Serie A": i18nKey = "leagues.seriea"; break;
            case "Ligue 1": i18nKey = "leagues.ligue1"; break;
            case "Primeira Liga": i18nKey = "leagues.primeiraliga"; break;
            case "Eredivisie": i18nKey = "leagues.eredivisie"; break;
            case "Scotland Premiership": i18nKey = "leagues.scotland"; break;
            case "Belgium Pro League": i18nKey = "leagues.belgium"; break;
            case "Swiss Super League": i18nKey = "leagues.switzerland"; break;
            case "Austrian Bundesliga": i18nKey = "leagues.austria"; break;
            case "Süper Lig": i18nKey = "leagues.turkey"; break;
            case "Denmark Superliga": i18nKey = "leagues.denmark"; break;
            case "Sweden Allsvenskan": i18nKey = "leagues.sweden"; break;
            case "Norway Eliteserien": i18nKey = "leagues.norway"; break;
            case "Croatia HNL": i18nKey = "leagues.croatia"; break;
            case "Serbia SuperLiga": i18nKey = "leagues.serbia"; break;
            case "Czech Fortuna Liga": i18nKey = "leagues.czechrepublic"; break;
            case "Brazil Serie A": i18nKey = "leagues.brazil"; break;
            case "Argentina Primera": i18nKey = "leagues.argentina"; break;
            case "Uruguay Primera": i18nKey = "leagues.uruguay"; break;
            case "Colombia": i18nKey = "leagues.colombia"; break;
            case "Chile": i18nKey = "leagues.chile"; break;
            case "Paraguay": i18nKey = "leagues.paraguay"; break;
            case "Ecuador": i18nKey = "leagues.ecuador"; break;
            case "Championship": i18nKey = "leagues.championship"; break;
            case "Segunda Division": i18nKey = "leagues.spain"; break;
            case "Serie B": i18nKey = "leagues.serieb"; break;
            case "Bundesliga 2": i18nKey = "leagues.bundesliga2"; break;
            case "Ligue 2": i18nKey = "leagues.ligue2"; break;
            case "LigaMX": i18nKey = "leagues.mexico"; break;
            case "MLS": i18nKey = "leagues.unitedstates"; break;
            case "K League 1": i18nKey = "leagues.korea"; break;
            case "J1 League": i18nKey = "leagues.japan"; break;
            case "Saudi Pro League": i18nKey = "leagues.saudiarabia"; break;
        }
        
        if (i18nKey) {
            leagueText.setAttribute('data-i18n', i18nKey);
            
            // Apply translation immediately if available
            if (window.currentTranslations && window.currentTranslations.leagues) {
                const key = i18nKey.split('.')[1]; // Get the part after 'leagues.'
                if (window.currentTranslations.leagues[key]) {
                    leagueText.textContent = window.currentTranslations.leagues[key];
                }
            }
        }
        
        legendItem.appendChild(colorBox);
        legendItem.appendChild(leagueText);
        legendContainer.appendChild(legendItem);
    });
}




function addTeamLabel(d, isSearchMatch) {
var x = xScale(d[header.indexOf(xMetric)]);
var y = yScale(d[header.indexOf(yMetric)]);

// Create a unique class name for this team's label that includes the player ID
var uniqueId = getPlayerUniqueId(d);
var playerName = d[1];
var playerId = d[0];

var teamClass = "team-label-" + playerId + "-" + playerName.toLowerCase()
.replace(/[^a-z0-9]/g, '-') // Replace any non-alphanumeric character with a hyphen
.replace(/-+/g, '-')        // Replace multiple consecutive hyphens with a single one
.replace(/^-|-$/g, '');     // Remove leading and trailing hyphens

// Check if this label already exists (avoid duplicates)
if (svg.select("." + teamClass).size() > 0) {
return;
}

// Create the label temporarily to measure its width
var tempLabel = svg.append("text")
.attr("class", "temp-label")
.text(playerName)
.style("font-family", "Inter, sans-serif")
.style("font-size", "12px")
.style("opacity", 0);

var labelWidth = tempLabel.node().getComputedTextLength();
tempLabel.remove();

// Define 4 possible positions (right, left, top, bottom) - closer to the dot
var positions = [
{ dx: 8, dy: 0, anchor: "start" },      // Right (closest)
{ dx: -8, dy: 0, anchor: "end" },       // Left (closest)
{ dx: 0, dy: -8, anchor: "middle" },    // Top (closest)
{ dx: 0, dy: 8, anchor: "middle" }      // Bottom (closest)
];

// Get all existing labels' bounding boxes for quick collision detection
var existingLabelBoxes = [];
svg.selectAll("text.team-label").each(function() {
var bbox = this.getBBox();
existingLabelBoxes.push({
    x1: bbox.x - 2,
    y1: bbox.y - 2,
    x2: bbox.x + bbox.width + 2,
    y2: bbox.y + bbox.height + 2
});
});

// Find the first non-colliding position
var chosenPosition = null;
var labelHeight = 12; // Approximate height based on font size

// Get chart boundaries
var chartWidth = width;
var chartHeight = height;

// If it's a search match, we'll always show the label regardless of collisions
if (!isSearchMatch) {
for (var i = 0; i < positions.length; i++) {
    var pos = positions[i];
    var labelX = x + pos.dx;
    var labelY = y + pos.dy;
    
    // Calculate label bounds based on anchor
    var labelBox = {
        x1: pos.anchor === "end" ? labelX - labelWidth : (pos.anchor === "middle" ? labelX - labelWidth/2 : labelX),
        y1: pos.dy < 0 ? labelY - labelHeight : labelY,
        x2: pos.anchor === "start" ? labelX + labelWidth : (pos.anchor === "middle" ? labelX + labelWidth/2 : labelX),
        y2: pos.dy < 0 ? labelY : labelY + labelHeight
    };
    
    // Check if label is within chart boundaries
    if (labelBox.x1 < 0 || labelBox.x2 > chartWidth || 
        labelBox.y1 < 0 || labelBox.y2 > chartHeight) {
        continue; // Skip this position if label would be outside chart
    }
    
    // Check for collisions
    var hasCollision = false;
    for (var j = 0; j < existingLabelBoxes.length; j++) {
        var existing = existingLabelBoxes[j];
        if (!(labelBox.x2 < existing.x1 || labelBox.x1 > existing.x2 || 
              labelBox.y2 < existing.y1 || labelBox.y1 > existing.y2)) {
            hasCollision = true;
            break;
        }
    }
    
    if (!hasCollision) {
        chosenPosition = pos;
        break;
    }
}

// If all positions have collisions, check if there are too many neighbors
// If so, skip this label entirely
if (!chosenPosition) {
    // Count nearby labels (within a certain radius)
    var radius = 50; // Adjust based on chart density
    var neighborCount = 0;
    
    existingLabelBoxes.forEach(function(box) {
        var centerX = (box.x1 + box.x2) / 2;
        var centerY = (box.y1 + box.y2) / 2;
        var distance = Math.sqrt(Math.pow(centerX - x, 2) + Math.pow(centerY - y, 2));
        
        if (distance < radius) {
            neighborCount++;
        }
    });
    
    // If too crowded, skip this label
    if (neighborCount > 3) {
        return;
    }
}
}

// Use the default right position if no non-colliding position was found or if it's a search match
if (!chosenPosition) {
chosenPosition = positions[0];

// For edge cases, adjust the position to keep label within bounds
var labelX = x + chosenPosition.dx;
var labelY = y + chosenPosition.dy;

var labelBox = {
    x1: chosenPosition.anchor === "end" ? labelX - labelWidth : (chosenPosition.anchor === "middle" ? labelX - labelWidth/2 : labelX),
    y1: chosenPosition.dy < 0 ? labelY - labelHeight : labelY,
    x2: chosenPosition.anchor === "start" ? labelX + labelWidth : (chosenPosition.anchor === "middle" ? labelX + labelWidth/2 : labelX),
    y2: chosenPosition.dy < 0 ? labelY : labelY + labelHeight
};

// Adjust position if needed to keep within bounds
if (labelBox.x1 < 0) {
    chosenPosition = positions[0]; // Use right position
} else if (labelBox.x2 > chartWidth) {
    chosenPosition = positions[1]; // Use left position
}

if (labelBox.y1 < 0) {
    chosenPosition = positions[3]; // Use bottom position
} else if (labelBox.y2 > chartHeight) {
    chosenPosition = positions[2]; // Use top position
}
}

// Create the actual label with the chosen position
var label = svg.append("text")
.attr("class", "team-label " + teamClass)
.attr("x", x + chosenPosition.dx)
.attr("y", y + chosenPosition.dy)
.attr("text-anchor", chosenPosition.anchor)
.attr("dominant-baseline", chosenPosition.dy < 0 ? "auto" : "hanging")
.text(playerName)
.style("font-family", "Inter, sans-serif")
.style("font-size", "12px")
.style("font-weight", "500")
.style("fill", "#333");

// If it's a search match, add the search-match class
if (isSearchMatch) {
label.classed("search-match", true);
}

// Add this label's bounding box to the collection for future labels
var bbox = label.node().getBBox();
existingLabelBoxes.push({
x1: bbox.x - 2,
y1: bbox.y - 2,
x2: bbox.x + bbox.width + 2,
y2: bbox.y + bbox.height + 2
});
}




// Initialize median lines tooltip text on page load
document.addEventListener('DOMContentLoaded', function() {
    const medianTooltip = document.getElementById('median-lines-tooltip');
    medianTooltip.textContent = medianLinesVisible ? "Hide median lines" : "Show median lines";
});



}); // Close the leagues object
