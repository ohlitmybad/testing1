const leagues = {

  "MLS": [
    "Columbus Crew",
    "Chicago Fire",
    "St. Louis City ",
    "Minnesota United",
    "Colorado Rapids",
    "Vancouver Whitecaps",
    "Philadelphia Union",
    "Dallas",
    "Charlotte FC",
    "SJ Earthquakes",
    "Los Angeles FC",
    "Orlando City",
    "Toronto",
    "New York RB",
    "CF Montréal",
    "Austin FC",
    "New England",
    "Los Angeles Galaxy",
    "Inter Miami",
    "Sporting KC",
    "New York City",
    "Real Salt Lake",
    "DC United",
    "Seattle Sounders",
    "Nashville SC",
    "Houston Dynamo",
    "San Diego",
    "Atlanta United",
    "Cincinnati",
    "Portland Timbers"
  ],
  "Argentina Primera": [
    "Vélez Sarsfield",
    "Lanús",
    "Godoy Cruz",
    "Racing Club",
    "Talleres Córdoba",
    "Platense",
    "Independiente",
    "Atlético Tucumán",
    "Newell's Old Boys",
    "River Plate",
    "Boca Juniors",
    "Gimnasia La Plata",
    "Unión Santa Fe",
    "Sarmiento",
    "Barracas Central",
    "Rosario Central",
    "Independiente Rivadavia",
    "Tigre",
    "Deportivo Riestra",
    "Banfield",
    "Huracán",
    "Argentinos Juniors",
    "San Martín San Juan",
    "Aldosivi",
    "Central Córdoba SdE",
    "Defensa y Justicia",
    "Estudiantes",
    "San Lorenzo",
    "Belgrano",
    "Instituto"
  ],
  "J1 League": [
    "Kashiwa Reysol",
    "Vissel Kobe",
    "Machida Zelvia",
    "Kashima Antlers",
    "Tokyo",
    "Tokyo Verdy",
    "Fagiano Okayama",
    "Gamba Osaka",
    "Yokohama F. Marinos",
    "Avispa Fukuoka",
    "Albirex Niigata",
    "Kawasaki Frontale",
    "Yokohama",
    "Cerezo Osaka",
    "Shimizu S-Pulse",
    "Shonan Bellmare",
    "Urawa Reds",
    "Nagoya Grampus",
    "Kyoto Sanga",
    "Sanfrecce Hiroshima"
  ],
  "K League 1": [
    "Ulsan Hyundai",
    "Jeju United",
    "Daejeon Citizen",
    "Seoul",
    "Pohang Steelers",
    "Gimcheon Sangmu",
    "Gwangju",
    "Suwon",
    "Gangwon",
    "Daegu",
    "Anyang",
    "Jeonbuk Motors"
  ],
  "Colombia": [
    "Millonarios",
    "Atlético Nacional",
    "Tolima",
    "Atlético Bucaramanga",
    "Medellín",
    "Fortaleza (COL)",
    "Once Caldas",
    "Santa Fe",
    "América de Cali",
    "Llaneros",
    "Águilas Doradas",
    "Deportivo Pereira",
    "Boyacá Chicó",
    "La Equidad",
    "Deportivo Pasto",
    "Unión Magdalena",
    "Alianza",
    "Envigado",
    "Deportivo Cali",
    "Junior"
  ],
  "Ecuador": [
    "Barcelona (ECU)",
    "Orense",
    "Técnico Universitario",
    "Emelec",
    "Mushuc Runa",
    "Aucas",
    "Universidad",
    "Delfin",
    "El Nacional",
    "LDU Quito",
    "Manta",
    "Macará",
    "Deportivo Cuenca",
    "Libertad (ECU)",
    "Vinotinto de Ecuador",
    "Independiente del Valle"
  ],
  "Chile": [
    "Universidad de Chile",
    "O'Higgins",
    "Unión Española",
    "Audax Italiano",
    "Palestino",
    "Ñublense",
    "Everton (CHI)",
    "La Serena",
    "Cobresal",
    "Deportes Iquique",
    "Coquimbo Unido",
    "Universidad Católica",
    "Unión La Calera",
    "Huachipato",
    "Deportes Limache",
    "Colo Colo"
  ],
  "Paraguay": [
    "Nacional Asunción",
    "Libertad",
    "Guaraní",
    "Sportivo Trinidense",
    "Cerro Porteño",
    "Deportivo Recoleta",
    "Sportivo Ameliano",
    "Sportivo Luqueño",
    "2 de Mayo",
    "General Caballero JLM",
    "Atlético Tembetary",
    "Olimpia"
  ],
  "Uruguay Primera": [
    "Defensor Sporting",
    "Liverpool (URU)",
    "Nacional (URU)",
    "Peñarol",
    "Progreso",
    "Torque",
    "Miramar Misiones",
    "River Plate (URU)",
    "Plaza Colonia",
    "Juventud",
    "Cerro",
    "Danubio",
    "Racing",
    "Boston River",
    "Cerro Largo",
    "Wanderers"
  ],
  "Norway Eliteserien": [
    "Brann",
    "Fredrikstad",
    "HamKam",
    "Haugesund",
    "KFUM",
    "Kristiansund",
    "Molde",
    "Rosenborg",
    "Sandefjord",
    "Sarpsborg 08",
    "Strømsgodset",
    "Tromsø",
    "Vålerenga",
    "Viking",
    "Bryne",
    "Bodø / Glimt"
  ],
  "Sweden Allsvenskan": [
    "Brommapojkarna",
    "Djurgården",
    "Elfsborg",
    "GAIS",
    "Häcken",
    "Halmstad",
    "Hammarby",
    "IFK Göteborg",
    "Degerfors",
    "IFK Norrköping",
    "Malmö FF",
    "Mjällby",
    "Sirius",
    "Värnamo",
    "Öster",
    "AIK"
  ],
  "Brazil Serie A": [
    "Bahia",
    "Botafogo",
    "Corinthians",
    "Ceará",
    "Sport Recife",
    "Cruzeiro",
    "Santos",
    "Flamengo",
    "Fluminense",
    "Fortaleza",
    "Grêmio",
    "Internacional",
    "Juventude",
    "Mirassol",
    "Palmeiras",
    "Red Bull Bragantino",
    "São Paulo",
    "Vasco da Gama",
    "Vitória",
    "Atlético Mineiro"
  ],

"Ukraine": [
"Shakhtar Donetsk", "Dynamo Kyiv", "Polissya", "Vorskla", "Rukh Lviv", "Kryvbas KR", "Zorya", "Veres", "Obolon", "Livyi Bereh", "LNZ Cherkasy", "Inhulets", "Karpaty", "Oleksandria", "Chornomorets", "Kolos Kovalivka", 
   ],

   "Poland": [
"Cracovia Kraków", "Pogoń Szczecin", "Lech Poznań", "Korona Kielce", "Legia Warszawa", "Śląsk Wrocław", "Zagłębie Lubin", "Jagiellonia Białystok", "Widzew Łódź", "Raków Częstochowa", "Piast Gliwice", "Puszcza Niepołomice", "Stal Mielec", "Lechia Gdańsk", "Katowice", "Motor Lublin", "Górnik Zabrze", "Radomiak Radom", 
   ],

   "Russia": [
"Lokomotiv Moskva", "Spartak Moskva", "Krylya Sovetov", "CSKA Moskva", "Zenit", "Krasnodar", "Orenburg", "Rubin Kazan'", "Dinamo Moskva", "Akhmat Grozny", "Nizhny Novgorod", "Fakel", "Akron Togliatti", "Dynamo Makhachkala", "Khimki", "Rostov", "Ural", "Baltika", "Sochi", 
   ],

   "Israel": [
"Hapoel Haifa", "Maccabi Petah Tikva", "Ironi Kiryat Shmona", "Beitar Jerusalem", "Hapoel Jerusalem", "Maccabi Tel Aviv", "Maccabi Bnei Raina", "Ashdod", "Maccabi Netanya", "Ironi Tiberias", "Hapoel Hadera", "Bnei Sakhnin", "Hapoel Be'er Sheva", "Maccabi Haifa", 
   ],

   "Greece": [
"PAOK", "Panathinaikos", "Olympiacos Piraeus", "AEK Athens", "Panetolikos FC", "OFI", "Atromitos", "Aris", "Volos NFC", "Asteras Tripolis", "Panserraikos", "Lamia", "Levadiakos", "Athens Kallithea", "Ergotelis", "PAE Chania", "Diagoras Rodou", "AO Xanthi", "Ionikos", "Trikala", "Panachaiki", "Doxa Dramas", "Apollon Larisas", "Karaiskakis Artas", "Ierapetras",
   ],

"Championship": [
"Burnley", "Leeds United", "Sunderland", "Preston North End", "Luton Town", "Stoke City", "Derby County", "Bristol City", "Coventry City", "Norwich City", "Queens Park Rangers", "Watford", "Middlesbrough", "Hull City", "Cardiff City", "West Bromwich Albion", "Blackburn Rovers", "Sheffield United", "Oxford United", "Plymouth Argyle", "Millwall", "Portsmouth", "Swansea City", "Sheffield Wednesday", 
],
"Süper Lig": [
"Fenerbahçe", "Trabzonspor", "Kayserispor", "İstanbul Başakşehir", "Rizespor", "Göztepe", "Eyüpspor", "Galatasaray", "Beşiktaş", "Bodrumspor", "Samsunspor", "Antalyaspor", "Konyaspor", "Kasımpaşa", "Gaziantep", "Hatayspor", "Sivasspor", "Alanyaspor", "Adana Demirspor",
],

"Segunda Division": [
"Almería", "Granada", "Sporting Gijón", "Racing Santander", "Cádiz", "Elche", "Real Oviedo", "Deportivo La Coruña", "Burgos", "Cartagena", "Eldense", "Real Zaragoza", "Eibar", "Castellón", "Racing Ferrol", "Málaga", "Levante", "Córdoba", "Huesca", "Tenerife", "Albacete", "Mirandés",
],

"Scotland Premiership": [
"Rangers", "Celtic", "Hibernian", "Hearts", "Aberdeen", "Kilmarnock", "Dundee United", "Ross County", "St. Mirren", "Dundee", "St. Johnstone", "Motherwell", 
],

"Belgium Pro League": [
"Cercle Brugge", "OH Leuven", "Union Saint-Gilloise", "Club Brugge", "Genk", "Gent", "Antwerp", "Kortrijk", "Beerschot-Wilrijk", "Standard Liège", "Sint-Truiden", "Dender", "Westerlo", "Mechelen", "Anderlecht", "Charleroi", 
],

"Swiss Super League": [
"Lugano", "Young Boys", "Yverdon Sport", "St. Gallen", "Grasshopper", "Lausanne Sport", "Sion", "Zürich", "Servette", "Winterthur", "Basel", "Luzern",
],

"Austrian Bundesliga": [
"Sturm Graz", "LASK", "Salzburg", "Rapid Wien", "Hartberg", "Wolfsberger AC", "Rheindorf Altach", "WSG Swarovski Tirol", "Austria Wien", "Grazer AK", "Blau-Weiß Linz", "Austria Klagenfurt", 
],

"Saudi Pro League": [
"Al Nassr", "Al Ittihad", "Al Hilal", "Al Ahli", "Al Qadisiyah", "Al Taawon", "Al Ettifaq", "Al Orubah", "Al Wehda", "Al Khaleej", "Al Shabab", "Al Fateh", "Al Kholood", "Al Riyadh", "Al Akhdoud", "Dhamk", "Al Raed", "Al Feiha", 
],

"LigaMX": [
"América", "Cruz Azul", "Santos Laguna", "Necaxa", "Pachuca", "Guadalajara", "Monterrey", "Toluca", "Atlas", "Club Tijuana", "Puebla", "Atlético de San Luis", "Juárez", "Tigres UANL", "Pumas UNAM", "Mazatlán", "Querétaro", "León", 
],

"Denmark Superliga": [
"Brøndby", "Viborg", "Nordsjælland", "København", "Midtjylland", "SønderjyskE", "Sønderjyske", "AaB", "Silkeborg", "Randers", "Lyngby", "Vejle", "AGF",
],

"Czech Fortuna Liga": [
"Sparta Praha", "Viktoria Plzeň", "Hradec Králové", "Teplice", "Baník Ostrava", "Mladá Boleslav", "Slovan Liberec", "Pardubice", "Sigma Olomouc", "Dukla Praha", "České Budějovice", "Slovácko", "Karviná", "Bohemians 1905", "Jablonec", "Slavia Praha",
],

"Serbia SuperLiga": [
"Bačka Topola", "Partizan", "Spartak Subotica", "Radnički Niš", "Crvena Zvezda", "Napredak Kruševac", "OFK Beograd", "Vojvodina", "Novi Pazar", "Radnički Kragujevac", "Čukarički", "Tekstilac Odžaci", "Jedinstvo Ub", "Mladost Lučani", "Železničar Pancevo", "IMT Novi Beograd",
],

"Croatia HNL": [
"Hajduk Split", "Dinamo Zagreb", "Osijek", "Istra 1961", "Rijeka", "Varaždin", "Slaven Belupo", "Lokomotiva Zagreb", "Gorica", "Šibenik", 
],

"Bundesliga 2": [
"Köln", "Hertha BSC", "Fortuna Düsseldorf", "Kaiserslautern", "Darmstadt 98", "Magdeburg", "Hamburger SV", "Jahn Regensburg", "Paderborn", "Eintracht Braunschweig", "Greuther Fürth", "Hannover 96", "Nürnberg", "Karlsruher SC", "Schalke 04", "Ulm", "Preußen Münster", "Elversberg", 
],

"Serie B": [
"Pisa", "Palermo", "Cittadella", "Bari", "Catanzaro", "Modena", "Cremonese", "Frosinone", "Carrarese", "Sampdoria", "Salernitana", "Cosenza", "Juve Stabia", "Brescia", "Cesena", "Mantova", "Sassuolo", "Spezia", "Reggiana", "Südtirol",
],

"Ligue 2": [
"Lorient","Caen", "Paris", "Pau", "Guingamp", "Rodez", "Annecy", "Metz", "Red Star", "Dunkerque", "Grenoble", "Ajaccio", "Laval", "Amiens SC", "Troyes", "Bastia", "Martigues", "Clermont", "Rodez ",
],

"Liga Portugal": [
"Porto", "Benfica", "Sporting CP", "Sporting Braga", "Vitória Guimarães", "Gil Vicente", "Farense", "Moreirense", "Nacional", "Arouca", "Estoril", "Rio Ave", "Santa Clara", "Boavista", "Casa Pia AC", "Famalicão", "Estrela Amadora", "AVS", "AVS ",
],

"Ligue 1": [
"PSG", "Lille", "Nice", "Lens", "Nantes", "Reims", "Olympique Lyonnais", "Monaco", "Olympique Marseille", "Brest", "Saint-Étienne", "Montpellier", "Angers SCO", "Le Havre", "Rennes", "Auxerre", "Strasbourg", "Toulouse", 
],

"Premier League": [
"Manchester City", "Tottenham Hotspur", "Arsenal", "Manchester United", "Aston Villa", "Liverpool", "Southampton", "Everton", "Chelsea", "Brighton", "Newcastle United", "Wolverhampton Wanderers", "Fulham", "Crystal Palace", "Brentford", "Bournemouth", "West Ham United", "Leicester City", "Nottingham Forest", "Ipswich Town", "Wolverhampton",
],

"Bundesliga": [
"Borussia Dortmund", "Stuttgart", "Wolfsburg", "Bayer Leverkusen", "Borussia M'gladbach", "Augsburg", "Union Berlin", "Eintracht Frankfurt", "Bayern München", "Hoffenheim", "Mainz 05", "Werder Bremen", "RB Leipzig", "St. Pauli", "Holstein Kiel", "Freiburg", "Heidenheim", "Bochum", "Borussia Mgladbach",
],

"Eredivisie": [
"PSV", "Feyenoord", "Sparta Rotterdam", "Twente", "Utrecht", "Groningen", "PEC Zwolle", "Almere City", "NAC Breda", "NEC", "Fortuna Sittard", "Go Ahead Eagles", "Heerenveen", "Willem II", "Heracles", "AZ", "RKC Waalwijk", "Ajax",
],

"La Liga": [
"Valencia", "Atlético Madrid", "Barcelona", "Real Madrid", "Real Sociedad", "Real Betis", "Osasuna", "Deportivo Alavés", "Getafe", "Athletic Bilbao", "Girona", "Mallorca", "Villarreal", "Real Valladolid", "Rayo Vallecano", "Leganés", "Sevilla", "Las Palmas", "Celta de Vigo", "Espanyol",
],

"Serie A": [
"Milan", "Juventus", "Atalanta", "Lazio", "Napoli", "Roma", "Monza", "Internazionale", "Lecce", "Torino", "Parma", "Udinese", "Genoa", "Hellas Verona", "Bologna", "Fiorentina", "Cagliari", "Venezia", "Como", "Empoli", 
],

};


const allData1 = [];
  const allData2 = [];
  const allData3 = [];
  const allData4 = [];
  const allData5 = [];
  const allData6 = [];
  const allData7 = [];
  const allData8 = [];
  const allData9 = [];
  const allData10 = [];
  const allData11 = [];
  const allData12 = [];
    let allDataAsString1 = '';
    let allDataAsString2 = '';
    let allDataAsString3 = '';
    let allDataAsString4 = '';
    let allDataAsString5 = '';
    let allDataAsString6 = '';


    const urls1 = [
    'https://datamb.football/database/CURRENT/RATOP72425/GK/GK.xlsx',
];

    const urls2 = [
    'https://datamb.football/database/CURRENT/RAPRO2425/GK/GK.xlsx',
'https://datamb.football/database/CURRENT/RAPRO2025/GK/GK.xlsx',

    ]

    const urls3 = [
    'https://datamb.football/database/CURRENT/RATOP72425/CB/CB.xlsx',
  ];

    const urls4 = [
  
    'https://datamb.football/database/CURRENT/RAPRO2425/CB/CB.xlsx',
'https://datamb.football/database/CURRENT/RAPRO2025/CB/CB.xlsx',


    ]

    const urls5 = [
    'https://datamb.football/database/CURRENT/RATOP72425/FB/FB.xlsx',

  
];

    const urls6 = [
    'https://datamb.football/database/CURRENT/RAPRO2425/FB/FB.xlsx',
'https://datamb.football/database/CURRENT/RAPRO2025/FB/FB.xlsx',


    ]
    

    const urls7 = [
    'https://datamb.football/database/CURRENT/RATOP72425/CM/CM.xlsx',
];

    const urls8 = [
    'https://datamb.football/database/CURRENT/RAPRO2425/CM/CM.xlsx',
    'https://datamb.football/database/CURRENT/RAPRO2025/CM/CM.xlsx',
    ]

    const urls9 = [
    'https://datamb.football/database/CURRENT/RATOP72425/FW/FW.xlsx',

];

    const urls10 = [
    'https://datamb.football/database/CURRENT/RAPRO2425/FW/FW.xlsx',
    'https://datamb.football/database/CURRENT/RAPRO2025/FW/FW.xlsx',


    ]

    const urls11 = [
    'https://datamb.football/database/CURRENT/RATOP72425/ST/ST.xlsx',

];

    const urls12 = [
   'https://datamb.football/database/CURRENT/RAPRO2425/ST/ST.xlsx',
    'https://datamb.football/database/CURRENT/RAPRO2025/ST/ST.xlsx',

    ]


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
                row.splice(12, 0, row.splice(4, 1)[0]);
                row.splice(7, 0, row.splice(11, 1)[0]);
                row.splice(9, 0, row.splice(10, 1)[0]);
                row[15] = `${row[1]}`;
                row.splice(16, 1);
    
                // Reorder columns
                const reorderedRow = [
                    row[0],
                    row[15],
                    row[2],
                    row[4],
                    row[5],
                    row[11],
                    row[6],
                    row[10],
                    row[8],
                    row[9],
                    row[7],
                    row[3]
                ];
                allData1.push(reorderedRow);
            });
         

function getTeamLeague1(team) {
          for (const [league, teams] of Object.entries(leagues)) {
              if (teams.includes(team)) {
                  return league;
              }
          }
          return "Unknown League";
      }

      const outputLines = [];
      allData1.forEach(row => {
          if (row.length >= 3) {
              const team = row[2];
              const league = getTeamLeague1(team);
              row[12] = league; // Replace the third element with the league information
              outputLines.push(row.join(",")); // Join the modified parts back into a line
          } else {
              // Handle rows that don't have at least 3 elements as needed
              outputLines.push(row.join(","));
          }
      });
        });
    
        // Extract values from columns 4, 5, 6, 7, 8, 9, and 10
        const columnsToConvert = [3, 4, 5, 6, 7, 8, 9];
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
                row.splice(12, 0, row.splice(4, 1)[0]);
                row.splice(7, 0, row.splice(11, 1)[0]);
                row.splice(9, 0, row.splice(10, 1)[0]);
                row[15] = `${row[1]}`;
                row.splice(16, 1);
    
                const reorderedRow = [
                    row[0],
                    row[15],
                    row[2],
                    row[4],
                    row[5],
                    row[11],
                    row[6],
                    row[10],
                    row[8],
                    row[9],
                    row[7],
                    row[3]
                ];
    
                allData2.push(reorderedRow);
            });
           

function getTeamLeague2(team) {
          for (const [league, teams] of Object.entries(leagues)) {
              if (teams.includes(team)) {
                  return league;
              }
          }
          return "Unknown League";
      }

      const outputLines = [];
      allData2.forEach(row => {
          if (row.length >= 3) {
              const team = row[2];
              const league = getTeamLeague2(team);
              row[12] = league; // Replace the third element with the league information
              outputLines.push(row.join(",")); // Join the modified parts back into a line
          } else {
              // Handle rows that don't have at least 3 elements as needed
              outputLines.push(row.join(","));
          }
      });
        });
    
        // Extract values from columns 4, 5, 6, 7, 8, 9, and 10
        const columnsToConvert = [3, 4, 5, 6, 7, 8, 9];
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
            processAndStoreData1(responses);
    
        
            // Fetch and process the remaining files
            Promise.all(fetchPromises2)
                .then(responses2 => {
                    processAndStoreData2(responses2);
    

                    // Concatenate intermediate data with new data
                    const finalData = allData1.concat(allData2);
    
                    // Reset and assign new unique IDs
                    finalData.forEach((row, index) => {
                        row[0] = `${index + 1}`;
                    });
                    
                    finalData.forEach(row => {
                        allDataAsString1 += row.join(',') + '\n';
                    });
    
// Replace all '\n' characters with actual new rows in the CSV
let csvData1 = allDataAsString1.split('\\n').join('\n');

// Convert the CSV string into an array of rows
let rows = csvData1.split('\n');

// Remove the last row
rows.pop();

// Join the rows back into a single string
csvData1 = rows.join('\n');


const fetchPromises3 = urls3.map(url => fetch(url).then(response => response.arrayBuffer()));
const fetchPromises4 = urls4.map(url => fetch(url).then(response => response.arrayBuffer()));

    function processAndStoreData3(dataArray) {
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
                row.splice(12, 0, row.splice(4, 1)[0]);
                row.splice(7, 0, row.splice(11, 1)[0]);
                row.splice(9, 0, row.splice(10, 1)[0]);
                row[15] = `${row[1]}`;
                row[14] = (row[9] * row[10]) / 100;  // Equivalent formula
                row.splice(16, 1);
    
                // Reorder columns
                const reorderedRow = [
                    row[0],
                    row[15],
                    row[2],
                    row[14],
                    row[11],
                    row[7],
                    row[4],
                    row[5],
                    row[6],
                    row[8],
                    row[12],
                    row[3]
                ];
                allData3.push(reorderedRow);
            });
         

function getTeamLeague3(team) {
          for (const [league, teams] of Object.entries(leagues)) {
              if (teams.includes(team)) {
                  return league;
              }
          }
          return "Unknown League";
      }

      const outputLines = [];
      allData3.forEach(row => {
          if (row.length >= 3) {
              const team = row[2];
              const league = getTeamLeague3(team);
              row[12] = league; // Replace the third element with the league information
              outputLines.push(row.join(",")); // Join the modified parts back into a line
          } else {
              // Handle rows that don't have at least 3 elements as needed
              outputLines.push(row.join(","));
          }
      });
        });
    
        // Extract values from columns 4, 5, 6, 7, 8, 9, and 10
        const columnsToConvert = [3, 4, 5, 6, 7, 8, 9];
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
                row.splice(12, 0, row.splice(4, 1)[0]);
                row.splice(7, 0, row.splice(11, 1)[0]);
                row.splice(9, 0, row.splice(10, 1)[0]);
                row[15] = `${row[1]}`;
                row[14] = (row[9] * row[10]) / 100;  // Equivalent formula
                row.splice(16, 1);
    
                // Reorder columns
                const reorderedRow = [
                    row[0],
                    row[15],
                    row[2],
                    row[14],
                    row[11],
                    row[7],
                    row[4],
                    row[5],
                    row[6],
                    row[8],
                    row[12],
                    row[3]
                ];
    
                allData4.push(reorderedRow);
            });
           

function getTeamLeague4(team) {
          for (const [league, teams] of Object.entries(leagues)) {
              if (teams.includes(team)) {
                  return league;
              }
          }
          return "Unknown League";
      }

      const outputLines = [];
      allData4.forEach(row => {
          if (row.length >= 3) {
              const team = row[2];
              const league = getTeamLeague4(team);
              row[12] = league; // Replace the third element with the league information
              outputLines.push(row.join(",")); // Join the modified parts back into a line
          } else {
              // Handle rows that don't have at least 3 elements as needed
              outputLines.push(row.join(","));
          }
      });
        });
    
        // Extract values from columns 4, 5, 6, 7, 8, 9, and 10
        const columnsToConvert = [3, 4, 5, 6, 7, 8, 9];
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

  

    
    Promise.all(fetchPromises3)
        .then(responses3 => {
            processAndStoreData3(responses3);
    
        
            // Fetch and process the remaining files
            Promise.all(fetchPromises4)
                .then(responses4 => {
                    processAndStoreData4(responses4);
    

                    // Concatenate intermediate data with new data
                    const finalData = allData3.concat(allData4);
    
                    // Reset and assign new unique IDs
                    finalData.forEach((row, index) => {
                        row[0] = `${index + 1}`;
                    });
                    
                    finalData.forEach(row => {
                        allDataAsString2 += row.join(',') + '\n';
                    });
    

                    let csvData2 = allDataAsString2.split('\\n').join('\n');
let rows2 = csvData2.split('\n');
rows2.pop();
csvData2 = rows2.join('\n');

const fetchPromises5 = urls5.map(url => fetch(url).then(response => response.arrayBuffer()));
const fetchPromises6 = urls6.map(url => fetch(url).then(response => response.arrayBuffer()));

    function processAndStoreData5(dataArray) {
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

                row[15] = `${row[1]}`;
    
                // Reorder columns
                const reorderedRow = [
                row[0],
                row[15],
                row[2],
                row[8],
                row[10],
                row[11],
                row[5],
                row[6],
                row[7],
                row[9],
                row[4],
                row[3]
                ];
                allData5.push(reorderedRow);
            });
         

function getTeamLeague5(team) {
          for (const [league, teams] of Object.entries(leagues)) {
              if (teams.includes(team)) {
                  return league;
              }
          }
          return "Unknown League";
      }

      const outputLines = [];
      allData5.forEach(row => {
          if (row.length >= 3) {
              const team = row[2];
              const league = getTeamLeague5(team);
              row[12] = league; // Replace the third element with the league information
              outputLines.push(row.join(",")); // Join the modified parts back into a line
          } else {
              // Handle rows that don't have at least 3 elements as needed
              outputLines.push(row.join(","));
          }
      });
        });
    
        // Extract values from columns 4, 5, 6, 7, 8, 9, and 10
        const columnsToConvert = [3, 4, 5, 6, 7, 8, 9];
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

                row[15] = `${row[1]}`;
                const reorderedRow = [
                row[0],
                row[15],
                row[2],
                row[8],
                row[10],
                row[11],
                row[5],
                row[6],
                row[7],
                row[9],
                row[4],
                row[3]
                ];
    
                allData6.push(reorderedRow);
            });
           

function getTeamLeague6(team) {
          for (const [league, teams] of Object.entries(leagues)) {
              if (teams.includes(team)) {
                  return league;
              }
          }
          return "Unknown League";
      }

      const outputLines = [];
      allData6.forEach(row => {
          if (row.length >= 3) {
              const team = row[2];
              const league = getTeamLeague6(team);
              row[12] = league; // Replace the third element with the league information
              outputLines.push(row.join(",")); // Join the modified parts back into a line
          } else {
              // Handle rows that don't have at least 3 elements as needed
              outputLines.push(row.join(","));
          }
      });
        });
    
        // Extract values from columns 4, 5, 6, 7, 8, 9, and 10
        const columnsToConvert = [3, 4, 5, 6, 7, 8, 9];
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

  

    
    Promise.all(fetchPromises5)
        .then(responses5 => {
            processAndStoreData5(responses5);
    
        
            // Fetch and process the remaining files
            Promise.all(fetchPromises6)
                .then(responses6 => {
                    processAndStoreData6(responses6);
    

                    // Concatenate intermediate data with new data
                    const finalData = allData5.concat(allData6);
    
                    // Reset and assign new unique IDs
                    finalData.forEach((row, index) => {
                        row[0] = `${index + 1}`;
                    });
                    
                    finalData.forEach(row => {
                        allDataAsString3 += row.join(',') + '\n';
                    });
    

                    let csvData3 = allDataAsString3.split('\\n').join('\n');
let rows3 = csvData3.split('\n');
rows3.pop();
csvData3 = rows3.join('\n');


const fetchPromises7 = urls7.map(url => fetch(url).then(response => response.arrayBuffer()));
const fetchPromises8 = urls8.map(url => fetch(url).then(response => response.arrayBuffer()));

    function processAndStoreData7(dataArray) {
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

                row[15] = `${row[1]}`;
    
                // Reorder columns
                const reorderedRow = [
                row[0],
                row[15],
                row[2],
                row[5],
              row[6],
              row[7],
              row[8],
              row[9],
              row[10],
              row[11],
              row[4],
                row[3]
                ];
                allData7.push(reorderedRow);
            });
         

function getTeamLeague7(team) {
          for (const [league, teams] of Object.entries(leagues)) {
              if (teams.includes(team)) {
                  return league;
              }
          }
          return "Unknown League";
      }

      const outputLines = [];
      allData7.forEach(row => {
          if (row.length >= 3) {
              const team = row[2];
              const league = getTeamLeague7(team);
              row[12] = league; // Replace the third element with the league information
              outputLines.push(row.join(",")); // Join the modified parts back into a line
          } else {
              // Handle rows that don't have at least 3 elements as needed
              outputLines.push(row.join(","));
          }
      });
        });
    
        // Extract values from columns 4, 5, 6, 7, 8, 9, and 10
        const columnsToConvert = [3, 4, 5, 6, 7, 8, 9];
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

                row[15] = `${row[1]}`;
    
                const reorderedRow = [
                row[0],
                row[15],
                row[2],
                row[5],
              row[6],
              row[7],
              row[8],
              row[9],
              row[10],
              row[11],
              row[4],
                row[3]
                ];
    
                allData8.push(reorderedRow);
            });
           

function getTeamLeague8(team) {
          for (const [league, teams] of Object.entries(leagues)) {
              if (teams.includes(team)) {
                  return league;
              }
          }
          return "Unknown League";
      }

      const outputLines = [];
      allData8.forEach(row => {
          if (row.length >= 3) {
              const team = row[2];
              const league = getTeamLeague8(team);
              row[12] = league; // Replace the third element with the league information
              outputLines.push(row.join(",")); // Join the modified parts back into a line
          } else {
              // Handle rows that don't have at least 3 elements as needed
              outputLines.push(row.join(","));
          }
      });
        });
    
        // Extract values from columns 4, 5, 6, 7, 8, 9, and 10
        const columnsToConvert = [3, 4, 5, 6, 7, 8, 9];
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

  

    
    Promise.all(fetchPromises7)
        .then(responses7 => {
            processAndStoreData7(responses7);
    
        
            // Fetch and process the remaining files
            Promise.all(fetchPromises8)
                .then(responses8 => {
                    processAndStoreData8(responses8);
    

                    // Concatenate intermediate data with new data
                    const finalData = allData7.concat(allData8);
    
                    // Reset and assign new unique IDs
                    finalData.forEach((row, index) => {
                        row[0] = `${index + 1}`;
                    });
                    
                    finalData.forEach(row => {
                        allDataAsString4 += row.join(',') + '\n';
                    });
    


                    let csvData4 = allDataAsString4.split('\\n').join('\n');
let rows4 = csvData4.split('\n');
rows4.pop();
csvData4 = rows4.join('\n');



const fetchPromises9 = urls9.map(url => fetch(url).then(response => response.arrayBuffer()));
const fetchPromises10 = urls10.map(url => fetch(url).then(response => response.arrayBuffer()));

    function processAndStoreData9(dataArray) {
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

                row[15] = `${row[1]}`;
                row[14] = (row[9] * row[10]) / 100;  // Equivalent formula
              row[16] = (row[7] + row[12]);  // Equivalent formula


                // Reorder columns
                const reorderedRow = [
                row[0],
                row[15],
                row[2],
                row[11],
                  row[14],
                  row[6],
                  row[16],
                  row[8],
                  row[13],
                  row[5],
                  row[4],
                row[3]
                ];
                allData9.push(reorderedRow);
            });
         

function getTeamLeague9(team) {
          for (const [league, teams] of Object.entries(leagues)) {
              if (teams.includes(team)) {
                  return league;
              }
          }
          return "Unknown League";
      }

      const outputLines = [];
      allData9.forEach(row => {
          if (row.length >= 3) {
              const team = row[2];
              const league = getTeamLeague9(team);
              row[12] = league; // Replace the third element with the league information
              outputLines.push(row.join(",")); // Join the modified parts back into a line
          } else {
              // Handle rows that don't have at least 3 elements as needed
              outputLines.push(row.join(","));
          }
      });
        });
    
        // Extract values from columns 4, 5, 6, 7, 8, 9, and 10
        const columnsToConvert = [3, 4, 5, 6, 7, 8, 9];
        const columnValues = columnsToConvert.map(col => allData9.map(row => parseFloat(row[col])));
    
        // Calculate percentiles
        const percentiles = columnValues.map(values => {
            const sorted = [...values].sort((a, b) => a - b);
            return values.map(value => {
                const rank = sorted.indexOf(value) + 1;
                return (rank / sorted.length);
            });
        });
    
        // Replace original values with percentiles
        allData9.forEach((row, rowIndex) => {
            columnsToConvert.forEach((col, colIndex) => {
                row[col] = percentiles[colIndex][rowIndex].toFixed(3);
            });
        });
    }

    function processAndStoreData10(dataArray) {
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

                row[15] = `${row[1]}`;
                row[14] = (row[9] * row[10]) / 100;  // Equivalent formula
              row[16] = (row[7] + row[12]);  // Equivalent formula
    
                const reorderedRow = [
                row[0],
                row[15],
                row[2],
                row[11],
                  row[14],
                  row[6],
                  row[16],
                  row[8],
                  row[13],
                  row[5],
                  row[4],
                row[3]
                ];
    
                allData10.push(reorderedRow);
            });
           

function getTeamLeague10(team) {
          for (const [league, teams] of Object.entries(leagues)) {
              if (teams.includes(team)) {
                  return league;
              }
          }
          return "Unknown League";
      }

      const outputLines = [];
      allData10.forEach(row => {
          if (row.length >= 3) {
              const team = row[2];
              const league = getTeamLeague10(team);
              row[12] = league; // Replace the third element with the league information
              outputLines.push(row.join(",")); // Join the modified parts back into a line
          } else {
              // Handle rows that don't have at least 3 elements as needed
              outputLines.push(row.join(","));
          }
      });
        });
    
        // Extract values from columns 4, 5, 6, 7, 8, 9, and 10
        const columnsToConvert = [3, 4, 5, 6, 7, 8, 9];
        const columnValues = columnsToConvert.map(col => allData10.map(row => parseFloat(row[col])));
    
        // Calculate percentiles
        const percentiles = columnValues.map(values => {
            const sorted = [...values].sort((a, b) => a - b);
            return values.map(value => {
                const rank = sorted.indexOf(value) + 1;
                return (rank / sorted.length);
            });
        });
    
        // Replace original values with percentiles
        allData10.forEach((row, rowIndex) => {
            columnsToConvert.forEach((col, colIndex) => {
                row[col] = percentiles[colIndex][rowIndex].toFixed(3);
            });
        });
    }

  

    
    Promise.all(fetchPromises9)
        .then(responses9 => {
            processAndStoreData9(responses9);
    
        
            // Fetch and process the remaining files
            Promise.all(fetchPromises10)
                .then(responses10 => {
                    processAndStoreData10(responses10);
    

                    // Concatenate intermediate data with new data
                    const finalData = allData9.concat(allData10);
    
                    // Reset and assign new unique IDs
                    finalData.forEach((row, index) => {
                        row[0] = `${index + 1}`;
                    });
                    
                    finalData.forEach(row => {
                        allDataAsString5 += row.join(',') + '\n';
                    });
    

                    let csvData5 = allDataAsString5.split('\\n').join('\n');
let rows5 = csvData5.split('\n');
rows5.pop();
csvData5 = rows5.join('\n');

const fetchPromises11 = urls11.map(url => fetch(url).then(response => response.arrayBuffer()));
const fetchPromises12 = urls12.map(url => fetch(url).then(response => response.arrayBuffer()));

    function processAndStoreData11(dataArray) {
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

                row[15] = `${row[1]}`;
    
                const reorderedRow = [
                row[0],
                row[15],
                row[2],
                row[9],
              row[5],
              row[7],
              row[8],
              row[11],
              row[10],
              row[6],
              row[4],
                row[3]
                ];
                allData11.push(reorderedRow);
            });
         

function getTeamLeague11(team) {
          for (const [league, teams] of Object.entries(leagues)) {
              if (teams.includes(team)) {
                  return league;
              }
          }
          return "Unknown League";
      }

      const outputLines = [];
      allData11.forEach(row => {
          if (row.length >= 3) {
              const team = row[2];
              const league = getTeamLeague11(team);
              row[12] = league; // Replace the third element with the league information
              outputLines.push(row.join(",")); // Join the modified parts back into a line
          } else {
              // Handle rows that don't have at least 3 elements as needed
              outputLines.push(row.join(","));
          }
      });
        });
    
        // Extract values from columns 4, 5, 6, 7, 8, 9, and 10
        const columnsToConvert = [3, 4, 5, 6, 7, 8, 9];
        const columnValues = columnsToConvert.map(col => allData11.map(row => parseFloat(row[col])));
    
        // Calculate percentiles
        const percentiles = columnValues.map(values => {
            const sorted = [...values].sort((a, b) => a - b);
            return values.map(value => {
                const rank = sorted.indexOf(value) + 1;
                return (rank / sorted.length);
            });
        });
    
        // Replace original values with percentiles
        allData11.forEach((row, rowIndex) => {
            columnsToConvert.forEach((col, colIndex) => {
                row[col] = percentiles[colIndex][rowIndex].toFixed(3);
            });
        });
    }

    function processAndStoreData12(dataArray) {
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

                row[15] = `${row[1]}`;
    
                const reorderedRow = [
                row[0],
                row[15],
                row[2],
                row[9],
              row[5],
              row[7],
              row[8],
              row[11],
              row[10],
              row[6],
              row[4],
                row[3]
                ];
                allData12.push(reorderedRow);
            });
           

function getTeamLeague12(team) {
          for (const [league, teams] of Object.entries(leagues)) {
              if (teams.includes(team)) {
                  return league;
              }
          }
          return "Unknown League";
      }

      const outputLines = [];
      allData12.forEach(row => {
          if (row.length >= 3) {
              const team = row[2];
              const league = getTeamLeague12(team);
              row[12] = league; // Replace the third element with the league information
              outputLines.push(row.join(",")); // Join the modified parts back into a line
          } else {
              // Handle rows that don't have at least 3 elements as needed
              outputLines.push(row.join(","));
          }
      });
        });
    
        // Extract values from columns 4, 5, 6, 7, 8, 9, and 10
        const columnsToConvert = [3, 4, 5, 6, 7, 8, 9];
        const columnValues = columnsToConvert.map(col => allData12.map(row => parseFloat(row[col])));
    
        // Calculate percentiles
        const percentiles = columnValues.map(values => {
            const sorted = [...values].sort((a, b) => a - b);
            return values.map(value => {
                const rank = sorted.indexOf(value) + 1;
                return (rank / sorted.length);
            });
        });
    
        // Replace original values with percentiles
        allData12.forEach((row, rowIndex) => {
            columnsToConvert.forEach((col, colIndex) => {
                row[col] = percentiles[colIndex][rowIndex].toFixed(3);
            });
        });
    }

  

    
    Promise.all(fetchPromises11)
        .then(responses11 => {
            processAndStoreData11(responses11);
    
        
            // Fetch and process the remaining files
            Promise.all(fetchPromises12)
                .then(responses12 => {
                    processAndStoreData12(responses12);
    

                    // Concatenate intermediate data with new data
                    const finalData = allData11.concat(allData12);
    
                    // Reset and assign new unique IDs
                    finalData.forEach((row, index) => {
                        row[0] = `${index + 1}`;
                    });
                    
                    finalData.forEach(row => {
                        allDataAsString6 += row.join(',') + '\n';
                    });
    

                    let csvData6 = allDataAsString6.split('\\n').join('\n');
let rows6 = csvData6.split('\n');
rows6.pop();
csvData6 = rows6.join('\n');


let selectedLeague = "All"; // Declare the selectedLeague variable outside the event listener

document.getElementById('league').addEventListener('change', function () {
  selectedLeague = this.value;
});
    // Store data for each dataset in separate arrays
    const dataArray1 = csvData1.split('\n').map(line => line.split(','));
    const dataArray2 = csvData2.split('\n').map(line => line.split(','));
    const dataArray3 = csvData3.split('\n').map(line => line.split(','));
    const dataArray4 = csvData4.split('\n').map(line => line.split(','));
    const dataArray5 = csvData5.split('\n').map(line => line.split(','));
    const dataArray6 = csvData6.split('\n').map(line => line.split(','));





 const metricNames1 = [
      'Def actions',
      'Aerials',
      'Exit line',
      'Passes',
      'Long pass%',
      'Short pass%',
      'PSxG - GA'
    ];

    // Metric names for CB
    const metricNames2 = [
      'Passes',
      'Forward pass%',
      'Prog passes',
      'Def actions',
      'Def duel%',
      'Aerial%',
      'Prog carries'
    ];

    // Metric names for FB
    const metricNames3 = [
      'Cross%',
      'xA',
      'Prog passes',
      'Def actions',
      'Def duel%',
      'Aerial%',
      'Prog carries'
    ];

    // Metric names for CM
    const metricNames4 = [
      'Duel%',
      'Def actions',
      'Prog carries',
      'Forward passes',
      'Forward pass%',
      'Key passes',
      'Prog passes'
    ];

    // Metric names for FW
    const metricNames5 = [
      'Prog carries',
      'Dribbles',
      'NPG',
      'xG+xA',
      'Assists',
      'Key passes',
      'Off actions'
    ];

    // Metric names for ST
    const metricNames6 = [
      'Pass received',
      'Aerial%',
      'NPG',
      'xG',
      'Pass to pen',
      'xA',
      'Off actions'
    ];


    // Function to update metric labels based on the selected dataset
  function updateMetricLabels(dataset) {
    const labels = document.querySelectorAll('label[for]');
    const inputs = document.querySelectorAll('input[type="number"]');
    let position = '';
    let metricNames = [];
    
    // Determine position code and metric names based on dataset
    switch(dataset) {
      case 'dataset1': 
        position = 'gk'; 
        metricNames = metricNames1;
        break;
      case 'dataset2': 
        position = 'cb'; 
        metricNames = metricNames2;
        break;
      case 'dataset3': 
        position = 'fb'; 
        metricNames = metricNames3;
        break;
      case 'dataset4': 
        position = 'cm'; 
        metricNames = metricNames4;
        break;
      case 'dataset5': 
        position = 'fw'; 
        metricNames = metricNames5;
        break;
      case 'dataset6': 
        position = 'st'; 
        metricNames = metricNames6;
        break;
    }

    // Map the form fields to their corresponding index in the metricNames array
    const fieldToIndexMap = {
      'defensiveActions': 0,
      'aerialsContested': 1,
      'exitLine': 2,
      'passes': 3,
      'longPassPercentage': 4,
      'shortPassPercentage': 5,
      'psxg': 6
    };

    // Create a mapping of translation keys for each position
    const translationKeyMap = {
      'gk': {
        0: 'metrics.gk.def_actions',
        1: 'metrics.gk.aerials',
        2: 'metrics.gk.exit_line',
        3: 'metrics.gk.passes',
        4: 'metrics.gk.long_pass',
        5: 'metrics.gk.short_pass',
        6: 'metrics.gk.psxg_ga'
      },
      'cb': {
        0: 'metrics.cb.passes',
        1: 'metrics.cb.forward_pass',
        2: 'metrics.cb.prog_passes',
        3: 'metrics.cb.def_actions',
        4: 'metrics.cb.def_duel',
        5: 'metrics.cb.aerial',
        6: 'metrics.cb.prog_carries'
      },
      'fb': {
        0: 'metrics.fb.cross',
        1: 'metrics.fb.xa',
        2: 'metrics.fb.prog_passes',
        3: 'metrics.fb.def_actions',
        4: 'metrics.fb.def_duel',
        5: 'metrics.fb.aerial',
        6: 'metrics.fb.prog_carries'
      },
      'cm': {
        0: 'metrics.cm.duel',
        1: 'metrics.cm.def_actions',
        2: 'metrics.cm.prog_carries',
        3: 'metrics.cm.forward_passes',
        4: 'metrics.cm.forward_pass',
        5: 'metrics.cm.key_passes',
        6: 'metrics.cm.prog_passes'
      },
      'fw': {
        0: 'metrics.fw.prog_carries',
        1: 'metrics.fw.dribbles',
        2: 'metrics.fw.npg',
        3: 'metrics.fw.xg_xa',
        4: 'metrics.fw.assists',
        5: 'metrics.fw.key_passes',
        6: 'metrics.fw.off_actions'
      },
      'st': {
        0: 'metrics.st.pass_received',
        1: 'metrics.st.aerial',
        2: 'metrics.st.npg',
        3: 'metrics.st.xg',
        4: 'metrics.st.pass_to_pen',
        5: 'metrics.st.xa',
        6: 'metrics.st.off_actions'
      }
    };

    // Update each label with the appropriate metric name
    for (const [field, index] of Object.entries(fieldToIndexMap)) {
      updateLabel(field, metricNames[index], translationKeyMap[position][index]);
    }


  }

  // Update a label with the actual metric name and set the translation key
  function updateLabel(forAttribute, metricName, translationKey) {
    const label = document.querySelector(`label[for="${forAttribute}"]`);
    if (label) {
      // Set the data-i18n attribute for potential translation
      label.setAttribute('data-i18n', translationKey);
      
      // Set the actual metric name directly
      label.textContent = metricName;
      
      // If translations are available, try to use them
      if (translations) {
        const translation = getNestedTranslation(translations, translationKey);
        if (translation) {
          label.textContent = translation;
        }
      }
    }
  }

  document.getElementById('datasetSelector').addEventListener('change', function () {
    const selectedDataset = document.getElementById('datasetSelector').value;
    updateMetricLabels(selectedDataset);
    clearSearchInputs();
  });

  // Initialize the metric labels based on the default dataset
  updateMetricLabels('dataset1');



    function clearSearchInputs() {
      // Clear all input fields
      const inputs = document.querySelectorAll('input[type="number"]');
      inputs.forEach(input => (input.value = ''));

      // Clear the results container
      const resultsContainer = document.getElementById('resultsContainer');
      resultsContainer.innerHTML = '';
    }

    document.getElementById('searchForm').addEventListener('submit', function (event) {
  event.preventDefault();

  // Get the selected dataset and league
  const selectedDataset = document.getElementById('datasetSelector').value;
  selectedLeague = document.getElementById('league').value;

  // Check if we're searching with the same dataset (position)
  const sameDataset = selectedDataset === previousDataset;
  // Store current dataset for next search
  previousDataset = selectedDataset;
  
  // Save current sort state only if same dataset
  const savedSortColumnIndex = sameDataset ? sortColumnIndex : -1;
  const savedAscending = sameDataset ? ascending : true;

  // Get the user-entered percentile values from the form
  const defensiveActionsLow = parseInt(document.getElementById('defensiveActionsLow').value);
  const aerialsContestedLow = parseInt(document.getElementById('aerialsContestedLow').value);
  const exitLineLow = parseInt(document.getElementById('exitLineLow').value);
  const passesLow = parseInt(document.getElementById('passesLow').value);
  const longPassPercentageLow = parseInt(document.getElementById('longPassPercentageLow').value);
  const shortPassPercentageLow = parseInt(document.getElementById('shortPassPercentageLow').value);
  const psxgLow = parseInt(document.getElementById('psxgLow').value);
  const ageLow = parseInt(document.getElementById('ageLow').value);
  const ageHigh = parseInt(document.getElementById('ageHigh').value);
  const minutesPlayedLow = parseInt(document.getElementById('minutesPlayedLow').value);
  const minutesPlayedHigh = parseInt(document.getElementById('minutesPlayedHigh').value);

  // Determine the dataArray based on the selected dataset
  let dataArray;
  switch (selectedDataset) {
    case 'dataset2':
      dataArray = dataArray2;
      break;
    case 'dataset3':
      dataArray = dataArray3;
      break;
    case 'dataset4':
      dataArray = dataArray4;
      break;
    case 'dataset5':
      dataArray = dataArray5;
      break;
    case 'dataset6':
      dataArray = dataArray6;
      break;
    default:
      dataArray = dataArray1;
  }

  // Filter the dataArray based on user-entered percentiles
  const restrictedPlayers = reverseSearch(
[
  [defensiveActionsLow],
  [aerialsContestedLow],
  [exitLineLow],
  [passesLow],
  [longPassPercentageLow],
  [shortPassPercentageLow],
  [psxgLow],
  [ageLow, ageHigh],
  [minutesPlayedLow, minutesPlayedHigh]
],
dataArray, // Pass the dataArray as a parameter
selectedLeague // Pass the selected league as a parameter
);
const resultsContainer = document.getElementById('resultsContainer');
resultsContainer.innerHTML = '';

if (restrictedPlayers.length === 0) {
  const noResultsMessage = document.createElement('p');
  noResultsMessage.setAttribute('data-i18n', 'search.no_results');
  noResultsMessage.textContent = 'No Players Found'; // Default text for users without translations
  noResultsMessage.classList.add('no-results-message'); // Add a class to the element
  resultsContainer.appendChild(noResultsMessage);
  applyLanguage(getPreferredLanguage()); // Use getPreferredLanguage() to get the current preferred language
} else {
  // Create the table element
  const table = document.createElement('table');

  // Create the table header
  const tableHeader = createTableHeader();
  table.appendChild(tableHeader);

  // Create the table body
  const tableBody = document.createElement('tbody');

  // Add the player data rows to the table body
  restrictedPlayers.forEach(playerData => {
    const playerRow = document.createElement('tr');
    tableBody.appendChild(playerRow);

    // Add the player name and other info in the first column
    const playerNameCell = document.createElement('td');
    const playerName = playerData[1];
    const playerData2 = playerData[2];
    const playerData11 = playerData[11];
    const playerData10 = playerData[10];


    // Create a formatted HTML string
    const formattedText = `<span>${playerName}</span><br><span class="player-info">${playerData11}, ${playerData2}, ${playerData10} min</span>`;

    // Set the formatted HTML as the content of playerNameCell
    playerNameCell.innerHTML = formattedText;
    playerRow.appendChild(playerNameCell);

    // Add the player metric values in the subsequent columns
      for (let i = 3; i <= 9; i++) {
  const metricValueCell = document.createElement('td');
  const numericValue = (parseFloat(playerData[i]) * 100).toFixed(2);

  // Apply the color inline style based on the value range
  metricValueCell.textContent = numericValue;
  if (numericValue >= 75 && numericValue <= 100) {
    metricValueCell.style.color = 'green';
  } else if (numericValue >= 0 && numericValue <= 25) {
    metricValueCell.style.color = 'red';
  }
  
  playerRow.appendChild(metricValueCell);
}
  });

  // Append the table body to the table
  table.appendChild(tableBody);

  // Append the table to the wrapper container
  const tableWrapper = document.getElementById('tableWrapper');
  tableWrapper.innerHTML = ''; // Clear any previous content
  tableWrapper.appendChild(table);
  
  // Restore sorting if we had a previous sort state for the same dataset
  if (savedSortColumnIndex !== -1) {
    sortColumnIndex = savedSortColumnIndex;
    ascending = savedAscending;
    
    // Get the table body rows and sort them
    const tableBody = table.querySelector('tbody');
    const rows = Array.from(tableBody.querySelectorAll('tr'));
    
    // Sort the rows based on the saved column index
    rows.sort((row1, row2) => {
      const value1 = parseFloat(row1.children[sortColumnIndex + 1].textContent);
      const value2 = parseFloat(row2.children[sortColumnIndex + 1].textContent);
      
      if (ascending) {
        return value1 - value2;
      } else {
        return value2 - value1;
      }
    });
    
    // Clear and re-append the sorted rows
    tableBody.innerHTML = '';
    rows.forEach(row => {
      tableBody.appendChild(row);
    });
    
    // Update sort indicators to match the restored sort state
    document.querySelectorAll('.sort-indicator').forEach((indicator, index) => {
      if (index === sortColumnIndex) {
        indicator.textContent = ascending ? '↑' : '↓';
      } else {
        indicator.textContent = '';
      }
    });
  }
}

    });

let sortColumnIndex = -1;
let ascending = true;
let previousDataset = '';

function createTableHeader() {
  const tableHeader = document.createElement('thead');
  const headerRow = document.createElement('tr');
  const selectedDataset = document.getElementById('datasetSelector').value;
  let metricLabels;
  let position = '';
  
  // Determine position code based on dataset
  switch(selectedDataset) {
    case 'dataset2':
      position = 'cb';
      metricLabels = metricNames2;
      break;
    case 'dataset3':
      position = 'fb';
      metricLabels = metricNames3;
      break;
    case 'dataset4':
      position = 'cm';
      metricLabels = metricNames4;
      break;
    case 'dataset5':
      position = 'fw';
      metricLabels = metricNames5;
      break;
    case 'dataset6':
      position = 'st';
      metricLabels = metricNames6;
      break;
    default:
      position = 'gk';
      metricLabels = metricNames1;
      break;
  }

  const emptyHeaderCell = document.createElement('th');
  emptyHeaderCell.textContent = '';
  headerRow.appendChild(emptyHeaderCell);

  // Create array of metric keys based on position
  const metricKeys = position === 'gk' ? 
    ['def_actions', 'aerials', 'exit_line', 'passes', 'long_pass', 'short_pass', 'psxg_ga'] :
    position === 'cb' ?
    ['passes', 'forward_pass', 'prog_passes', 'def_actions', 'def_duel', 'aerial', 'prog_carries'] :
    position === 'fb' ?
    ['cross', 'xa', 'prog_passes', 'def_actions', 'def_duel', 'aerial', 'prog_carries'] :
    position === 'cm' ?
    ['duel', 'def_actions', 'prog_carries', 'forward_passes', 'forward_pass', 'key_passes', 'prog_passes'] :
    position === 'fw' ?
    ['prog_carries', 'dribbles', 'npg', 'xg_xa', 'assists', 'key_passes', 'off_actions'] :
    ['pass_received', 'aerial', 'npg', 'xg', 'pass_to_pen', 'xa', 'off_actions'];

  for (let i = 0; i < metricLabels.length; i++) {
    const headerCell = document.createElement('th');
    const translationKey = `metrics.${position}.${metricKeys[i]}`;
    const translation = getNestedTranslation(translations, translationKey);
    
    // Create a container for the text and sort indicator
    const headerContent = document.createElement('div');
    headerContent.className = 'header-content';
    headerContent.style.display = 'flex';
    headerContent.style.alignItems = 'center';
    headerContent.style.justifyContent = 'center';
    headerContent.style.gap = '4px';
    
    // Add the text
    const headerText = document.createElement('span');
    headerText.textContent = translation || metricLabels[i];
    headerContent.appendChild(headerText);
    
    // Add sort indicator
    const sortIndicator = document.createElement('span');
    sortIndicator.className = 'sort-indicator';
    sortIndicator.style.fontSize = '0.8em';
    
    // Set the initial sort indicator based on current sort state
    if (sortColumnIndex === i) {
      sortIndicator.textContent = ascending ? '↑' : '↓';
    } else {
      sortIndicator.textContent = '';
    }
    
    headerContent.appendChild(sortIndicator);
    headerCell.appendChild(headerContent);
    headerCell.style.cursor = 'pointer';

    // Add click event listener to the header cell for sorting
    headerCell.addEventListener('click', () => {
      sortColumn(i);
      
      // Update all sort indicators
      document.querySelectorAll('.sort-indicator').forEach((indicator, index) => {
        if (index === i) {
          indicator.textContent = ascending ? '↑' : '↓';
        } else {
          indicator.textContent = '';
        }
      });
    });

    headerRow.appendChild(headerCell);
  }

  tableHeader.appendChild(headerRow);
  return tableHeader;
}


function sortColumn(columnIndex) {
  // Check if it's a different column or the same column that needs to be reversed
  if (sortColumnIndex === columnIndex) {
    ascending = !ascending;
  } else {
    ascending = false;
    sortColumnIndex = columnIndex;
  }

  // Get the table body rows
  const tableBody = document.querySelector('tbody');
  const rows = Array.from(tableBody.querySelectorAll('tr'));

  // Sort the rows based on the selected column
  rows.sort((row1, row2) => {
    const value1 = parseFloat(row1.children[columnIndex + 1].textContent);
    const value2 = parseFloat(row2.children[columnIndex + 1].textContent);

    if (ascending) {
      return value1 - value2;
    } else {
      return value2 - value1;
    }
  });

  // Clear the current table body content
  tableBody.innerHTML = '';

  // Append the sorted rows to the table body
  rows.forEach(row => {
    tableBody.appendChild(row);
  });
}


  document.getElementById('datasetSelector').addEventListener('change', function () {
    const selectedDataset = document.getElementById('datasetSelector').value;

    // Call the function with the selected dataset to update the metric labels
    switch (selectedDataset) {
      case 'dataset2':
        updateMetricLabels('dataset2');
        break;
      case 'dataset3':
        updateMetricLabels('dataset3');
        break;
      case 'dataset4':
        updateMetricLabels('dataset4');
        break;
      case 'dataset5':
        updateMetricLabels('dataset5');
        break;
      case 'dataset6':
        updateMetricLabels('dataset6');
        break;
      default:
        updateMetricLabels('dataset1');
        break;
    }

    // Clear the search inputs and results when the dataset selector changes
    clearSearchInputs();
});

function reverseSearch(percentiles, dataArray, selectedLeague) {
  return dataArray.filter(data => {
    for (let i = 3; i <= 9; i++) {
      const metricValue = parseFloat(data[i]) * 100;
      if (metricValue < percentiles[i - 3][0]) {
        return false;
      }
    }

    const age = parseInt(data[11]);
    if (age < percentiles[7][0] || age > percentiles[7][1]) {
      return false;
    }

    const minutesPlayed = parseInt(data[10]);
    if (minutesPlayed < percentiles[8][0] || (percentiles[8][1] && minutesPlayed > percentiles[8][1])) {
      return false;
    }

    if (selectedLeague !== "All") {
  if (selectedLeague === "Top 7 Leagues") {
    const topSevenLeagues = [
      "Premier League",
      "La Liga",
      "Bundesliga",
      "Serie A",
      "Ligue 1",
      "Eredivisie",
      "Liga Portugal"
    ];
    const playerLeague = data[12]; // Assuming the league is in the 12th column (index 11)
    if (!topSevenLeagues.includes(playerLeague)) {
      return false;
    }
  } else if (selectedLeague === "Top 5 Leagues") {
    const topFiveLeagues = [
      "Premier League",
      "La Liga",
      "Bundesliga",
      "Serie A",
      "Ligue 1"
    ];
    const playerLeague = data[12]; // Assuming the league is in the 12th column (index 11)
    if (!topFiveLeagues.includes(playerLeague)) {
      return false;
    }
  } else if (selectedLeague === "Non Top 7 Leagues") {
    const dataMBProLeagues = [
      "Scotland Premiership",
      "Belgium Pro League",
      "Swiss Super League",
      "Ukraine",
      "Poland",
      "Greece",
      "Israel",
      "Russia",
      "Colombia",
      "Chile",
      "Paraguay",
      "Ecuador",
      "Austrian Bundesliga",
      "Süper Lig",
      "Saudi Pro League",
      "Brazil Serie A",
      "Argentina Primera",
      "Uruguay Primera",
      "LigaMX",
      "MLS",
      "K League 1",
      "J1 League",
      "Norway Eliteserien",
      "Denmark Superliga",
      "Sweden Allsvenskan",
      "Czech Fortuna Liga",
      "Serbia SuperLiga",
      "Croatia HNL",
      "Championship",
      "Segunda Division",
      "Bundesliga 2",
      "Serie B",
      "Ligue 2",
      "Unknown League"
    ];
    const playerLeague = data[12]; // Assuming the league is in the 12th column (index 11)
    if (!dataMBProLeagues.includes(playerLeague)) {
      return false;
    }
  } else if (selectedLeague === "South America") {
    const southAmericaLeagues = [
      "Brazil Serie A",
      "Argentina Primera",
      "Uruguay Primera",
      "Colombia",
      "Chile",
      "Paraguay",
      "Ecuador",
    ];
    const playerLeague = data[12]; // Assuming the league is in the 12th column (index 11)
    if (!southAmericaLeagues.includes(playerLeague)) {
      return false;
    }
  } else if (selectedLeague === "Scandinavia") {
    const scandinaviaLeagues = [
      "Norway Eliteserien",
      "Denmark Superliga",
      "Sweden Allsvenskan"
    ];
    const playerLeague = data[12]; // Assuming the league is in the 12th column (index 11)
    if (!scandinaviaLeagues.includes(playerLeague)) {
      return false;
    }
  } else if (selectedLeague === "Balkans") {
    const balkansLeagues = [
      "Czech Fortuna Liga",
      "Serbia SuperLiga",
      "Croatia HNL",
      "Russia",
      "Ukraine",
      "Poland"
    ];
    const playerLeague = data[12]; // Assuming the league is in the 12th column (index 11)
    if (!balkansLeagues.includes(playerLeague)) {
      return false;
    }
  } else if (selectedLeague === "Top 5 Leagues - 2nd Div.") {
    const secondDivLeagues = [
      "Championship",
      "Segunda Division",
      "Bundesliga 2",
      "Serie B",
      "Ligue 2"
    ];
    const playerLeague = data[12]; // Assuming the league is in the 12th column (index 11)
    if (!secondDivLeagues.includes(playerLeague)) {
      return false;
    }
  } else {
    const playerLeague = data[12]; // Assuming the league is in the 12th column (index 11)
    if (playerLeague !== selectedLeague) {
      return false;
    }
  }
}

return true;
});
}

  // Initialize with preferred or default language
  document.addEventListener('DOMContentLoaded', () => {
    const preferredLanguage = getPreferredLanguage();
    loadTranslations(preferredLanguage);
  });

})}) })}) })}) })}) })}) })}) 

