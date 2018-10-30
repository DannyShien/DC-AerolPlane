// Starter for ALL
const mainStarterElement = document.querySelector('[data-starter]');

// Input Value
const userFlightInput = document.querySelector('[data-inputInfo]').value;

// FLIGHT
// const starterElement = document.querySelector('[data-flightStarter]');

// WEATHER
// const weatherElement = document.querySelector('[data-weatherStarter]');

// MAP
// const mapElement = document.querySelector('[data-mapStarter]');

//testing airport code to city to weather
// const connectingElement = document.querySelector('[data-connector]');


// Setting up to get Flight info API
function getFlightInfo(){
    console.log("Button is good for Plane");

    // Holds submitted form
    event.preventDefault();
    
    // Fetch API and convert to Json
    fetch("http://aviation-edge.com/v2/public/flights?key=5f3420-01f81d")
    .then(r => r.json())

    // Extracts flight info
    .then((data) =>{

        // Connecting with submitted form
        let planeObj = data.filter((planeFinder) =>{
                return userFlightInput === planeFinder.flight.iataNumber;
            });

            // Returns flight info object
            return planeObj;
    })

    // Filtering through flight info and putting grabbed data into array
    .then((result) =>{

        // Adding collected data into array
        let dataCollector = [];

        // Filters through flight info object
        const dataFinder = result.map((finder) =>{

            // Flight number
            const flightIataNumber = finder.flight.iataNumber;
            const textZero = `Flight Number: ${flightIataNumber}`;
            dataCollector.push(textZero);

            // Status
            const currentStatus = finder.status;
            const textOne = `Status: "${currentStatus}"`;
            dataCollector.push(textOne);

            // Coordinates
            const lat = finder.geography.latitude;
            const long = finder.geography.longitude;
            const textTwo = `Coordinates: (${lat}, ${long})`;
            dataCollector.push(textTwo);

            // Departure
            const depart = finder.departure.iataCode;
            const textThree = `Departure Airport: ${depart}`;
            dataCollector.push(textThree);

            // Arrival
            const arrive = finder.arrival.iataCode;
            const textFour = `Arrival Airport: ${arrive}`;
            dataCollector.push(textFour);

            // Speed
            const kph = finder.speed.horizontal;
            const mph =  (kph * 0.6213711922).toFixed(0);
            const textFive = `Aircraft Speed: ${mph} mph`;
            dataCollector.push(textFive);

            // Altitude
            const meter = finder.geography.altitude;
            const feet = (meter * 3.2808).toFixed(0);
            const textSix = `Altitude: ${feet} ft`;
            dataCollector.push(textSix);
        });

        // Returns an array of flight info
        return dataCollector;
    })
    
    // Appending flight info to document
    .then((send) =>{

        // Appends it to...
        const flightInfoElement = document.querySelector('[data-flightInfo]');
        const flightInfoTwoElement = document.querySelector('[data-flightInfoTwo]');

        // Flight Number
        const infoZero = document.createElement('li');
        infoZero.textContent = send[0];
        flightInfoElement.appendChild(infoZero);

        // Status
        const infoOne = document.createElement('li');
        infoOne.textContent = send[1];
        flightInfoElement.appendChild(infoOne);
        
        // Coordinates
        const infoTwo = document.createElement('li');
        infoTwo.textContent = send[2];
        flightInfoElement.appendChild(infoTwo);

        // Departure
        const infoThree = document.createElement('li');
        infoThree.textContent = send[3];
        flightInfoTwoElement.appendChild(infoThree);

        // Arrival
        const infoFour = document.createElement('li');
        infoFour.textContent = send[4];
        flightInfoTwoElement.appendChild(infoFour);

        // Speed
        const infoFive = document.createElement('li');
        infoFive.textContent = send[5];
        flightInfoTwoElement.appendChild(infoFive);

        // Altitude
        const infoSix = document.createElement('li');
        infoSix.textContent = send[6];
        flightInfoTwoElement.appendChild(infoSix);

        // Returns array of flight info
        return send;
    })
};

// Gathering coordinates from flight info to display on Google Map API
function getCoordinatesForMap(){
    console.log("Button is good for Map");

    // Holds submitted form
    event.preventDefault();

    // Fetch Flight API and convert to Json
    fetch("http://aviation-edge.com/v2/public/flights?key=5f3420-01f81d")
    .then(r => r.json())

    // Getting coordinates
    .then((data) =>{

        // Connecting with submitted form
        let planeObj = data.filter((planeFinder) =>{
            return userFlightInput === planeFinder.flight.iataNumber;
        })

        // Returns flight info object
        return planeObj;
    })

    // Filtering through flight info object to grab the coordinates
    .then((result) =>{

        // Adding coordinates into array
        const grid = [];

        // Filters through flight into to grab and push coordinates
        const dataFinder = result.map((finder) =>{

            // Coordinates
            const lat = finder.geography.latitude;
            const long = finder.geography.longitude;
            grid.push(lat);
            grid.push(long);
        });

        // Returns coordinates array
        return grid;
    })

    // Display the Map
    .then(initMap)
};

// Displaying the map
function initMap(gridlock){
    // console.log(gridlock);
    let x = parseInt(gridlock[0]);
    let y = parseInt(gridlock[1]);

    // Appends it to..
    const displayElement = document.querySelector('[data-display]');

    // The location of plane
    let plane = {lat: x, lng: y};

    // The map, centered at plane
    let map = new google.maps.Map(displayElement, {zoom: 6, center: plane});

    // The marker, positioned at place
    var marker = new google.maps.Marker({position: plane, map: map});
};

// Connecting flight info to airport to city to weather
function connectFlightInfoToWeatherInfo(){
    
    // Holds submitted form
    event.preventDefault();

    // Fetch API and convert to Json
    fetch("http://aviation-edge.com/v2/public/flights?key=5f3420-01f81d")
    .then(r => r.json())
    
    // Extracts flight info
    .then((data) =>{

        // Using submitted form to match with flight info
        let planeObj = data.filter((planeFinder) =>{
            if ((userFlightInput) === (planeFinder.flight.iataNumber)){
                return true;
            };
        });

        // Arrival airport code
        let arrivalCode = planeObj[0].arrival.iataCode;

        // Returns arrival code
        return arrivalCode;
    })
    
    // Using airport code to match with airport api
    .then((compare) =>{

        // Fetch Flight API and convert to Json
        fetch("https://aviation-edge.com/v2/public/airportDatabase?key=5f3420-01f81d")
        .then(s =>s.json())

        // Checking to see if airport code is equal to airport code in airport api
        .then((getAirportCode) =>{
            let levelOne = getAirportCode.filter((cityFinder) =>{
                if ((compare) === (cityFinder.codeIataAirport)){
                    return true;
                };
            })

            // Destination city code
            let cityCode = levelOne[0].codeIataCity
            
            // Returns city code
            return cityCode;
        })

        // Using city iata code to grab city name from city API
        .then((city) =>{

             // Fetch Flight API and convert to Json
            fetch("https://aviation-edge.com/v2/public/cityDatabase?key=5f3420-01f81d")
            .then(t =>t.json())

            // Checking to see if city code is equal to city code in city api
            .then((getCityName) =>{
                let levelTwo = getCityName.filter((nameFinder) =>{
                    if((city) === (nameFinder.codeIataCity)){
                        return true;
                    };
                })
            
            // Append city name
            let cityName = levelTwo[0].nameCity;
            const cityNameElement = document.querySelector('[data-city]');
            const infoCityName = document.createElement('h2');
            infoCityName.textContent = cityName;
            cityNameElement.appendChild(infoCityName);

            // Return city name
            return cityName;
            })
            .then(getWeatherInfo)
        })
        
    })
};

//  Find weather API by using the return value (city name)
function getWeatherInfo (city) {
    console.log(city);

    // Fetch Flight API and convert to Json
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=dee07fae47d614b4f9cb0a8cd0a2cfeb`)
    .then(r => r.json())
    
    // Convert gathered temperatures from Kelvin to Fahrenheit 
    .then(temp => {

        // Current temperature
        let mainTemp = temp.main.temp;
        let mainDeg = (((mainTemp - 273.15) * 1.8) + 32).toFixed(0);
        
        // Min temperature
        let minTemp  = temp.main.temp_min;
        let minDeg = (((minTemp - 273.15) * 1.8) + 32).toFixed(0); 

        // Max temperature
        let maxTemp = temp.main.temp_max;
        let maxDeg = (((maxTemp - 273.15) * 1.8) + 32).toFixed(0);

        // Push the three temperatures into array
        let temperatures = []; 
        temperatures.push(mainDeg);
        temperatures.push(minDeg);
        temperatures.push(maxDeg);
        
        // Return an array
        return temperatures;
    }) 

    // Appending weather to document
    .then(larry => {

        // Appending current temperature
        const getTemp = document.querySelector('[data-mainWeather]');
        const mainTemp = document.createElement('div');
        mainTemp.textContent = `${larry[0]} °F`;
        getTemp.appendChild(mainTemp);

        // Appending min temperature
        const getMin = document.querySelector('[data-minWeather]');
        const minTemp = document.createElement('div');
        minTemp.textContent = `${larry[1]} °F`;
        getMin.appendChild(minTemp);

        // Appending max temperature
        const getMax = document.querySelector('[data-maxWeather]');
        const maxTemp = document.createElement('div');
        maxTemp.textContent = `${larry[2]} °F`;
        getMax.appendChild(maxTemp);
    })

    // Returns true
    return
};

// One function that will start the three other functions
function getAllFunctions(){
    getFlightInfo();
    getCoordinatesForMap();
    connectFlightInfoToWeatherInfo();
};

// Main starter
function main(){
    mainStarterElement.addEventListener('click', getAllFunctions);
    // starterElement.addEventListener('click', getFlightInfo);
    // mapElement.addEventListener('click', getCoordinatesForMap);
    // weatherElement.addEventListener('click', getWeatherInfo);

    // connectingElement.addEventListener('click', connectingFlightInfoToWeatherInfo);
};

main();
