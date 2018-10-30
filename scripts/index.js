// Starter for ALL
const mainStarterElement = document.querySelector('[data-starter]');

// FLIGHT
// const starterElement = document.querySelector('[data-flightStarter]');

// WEATHER
// const weatherElement = document.querySelector('[data-weatherStarter]');

// MAP
// const mapElement = document.querySelector('[data-mapStarter]');

//testing airport code to city to weather
// const connectingElement = document.querySelector('[data-connector]');

// Clear all data
function clearAll(){

};

// Setting up to get Flight info API
function getFlightInfo(){
    console.log("Button is good for Plane");

    // Holds submitted form
    event.preventDefault();
    
    // Fetch API and convert to Json
    fetch(`http://aviation-edge.com/v2/public/flights?key=${flight_Key}`)
    .then(r => r.json())

    // Extracts flight info
    .then((data) =>{

        // Connecting with submitted form
        const userFlightInput = document.querySelector('[data-inputInfo]').value;
        let planeObj = data.filter((planeFinder) =>{
            if(userFlightInput !== planeFinder.flight.iataNumber){
                alert.window("Invalid entry, please re-enter the correct flight number.");
            }else{
                return userFlightInput === planeFinder.flight.iataNumber;
            }
            });

            // Returns flight info object
            return planeObj;
    })

    // Catches invalid entries or not available flight
    .catch(err => {
        if(err === []){
            alert.window("Flight not en-route. Please re-enter a flight en-route.");
        };
    })

    // Filtering through flight info and putting it into array
    .then((result) =>{

        // compiling collected data into array
        let dataCollector = [];

        // Filters through flight info object
        const dataFinder = result.map((finder) =>{

            // Flight number
            const flightIataNumber = finder.flight.iataNumber;
            const textZero = `Flight Number: ${flightIataNumber}`;
            let zero = dataCollector.push(textZero);

            // Status
            const currentStatus = finder.status;
            const textOne = `Status: "${currentStatus}"`;
            let one = dataCollector.push(textOne);

            // Coordinates
            const lat = finder.geography.latitude;
            const long = finder.geography.longitude;
            const textTwo = `Coordinates: (${lat}, ${long})`;
            let three = dataCollector.push(textTwo);

            // Departure
            const depart = finder.departure.iataCode;
            const textThree = `Departure Airport: ${depart}`;
            let four = dataCollector.push(textThree);

            // Arrival
            const arrive = finder.arrival.iataCode;
            const textFour = `Arrival Airport: ${arrive}`;
            let five = dataCollector.push(textFour);

            // Speed
            const mph = finder.speed.horizontal;
            const textFive = `Aircraft Speed: ${mph} mph`;
            let six = dataCollector.push(textFive);

            // Altitude
            const alt = finder.geography.altitude;
            const textSix = `Altitude: ${alt} ft`;
            let seven = dataCollector.push(textSix);
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
    fetch(`http://aviation-edge.com/v2/public/flights?key=${flight_Key}`)
    .then(r => r.json())

    // Getting coordinates
    .then((data) =>{

        // Connecting with submitted form
        const userFlightInput = document.querySelector('[data-inputInfo]').value;
        let planeObj = data.filter((planeFinder) =>{
            return userFlightInput === planeFinder.flight.iataNumber;
        })

        // Returns flight info object
        return planeObj;
    })

    // Filtering through flight info object to grab the coordinates
    .then((result) =>{
        const grid = [];

        // Filters through flight into to grab and push coordinates
        const dataFinder = result.map((finder) =>{

            // Coordinates
            const lat = finder.geography.latitude;
            const long = finder.geography.longitude;
            const xx = grid.push(lat);
            const yy = grid.push(long);
        });

        // Returns an array holding coordinates
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
function connectingFlightInfoToWeatherInfo(){
    
    // Holds submitted form
    event.preventDefault();

    // Fetch API and convert to Json
    fetch(`http://aviation-edge.com/v2/public/flights?key=${flight_Key}`)
    .then(r => r.json())
    
    // Extracts flight info
    .then((data) =>{

        // Using submitted form to match with flight info
        const userFlightInput = document.querySelector('[data-inputInfo]').value;
        let planeObj = data.filter((planeFinder) =>{
            if ((userFlightInput) === (planeFinder.flight.iataNumber)){
                return true;
            };
        });
        let arrivalCode = planeObj[0].arrival.iataCode;

        // Returns arrival code
        return arrivalCode;
    })
    
    // Using airport code from flight info to match with airport api
    .then((compare) =>{

        // Fetch Flight API and convert to Json
        fetch(`https://aviation-edge.com/v2/public/airportDatabase?key=${flight_Key}`)
        .then(s =>s.json())

        // Checking to see if airport code is equal to airport code in airport api
        .then((getAirportCode) =>{
            let levelOne = getAirportCode.filter((cityFinder) =>{
                if ((compare) === (cityFinder.codeIataAirport)){
                    return true;
                };
            })
            let cityCode = levelOne[0].codeIataCity
            
            // Returns city code
            return cityCode;
        })

        // Using city iata code grab city name from city API
        .then((city) =>{

             // Fetch Flight API and convert to Json
            fetch(`https://aviation-edge.com/v2/public/cityDatabase?key=${flight_Key}`)
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
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${weather_Key}`)
    .then(r => r.json())
    
    // Convert gathered temperatures from Kelvin to Fahrenheit 
    .then(temp => {

        // Current temperature
        let mainTemp = temp.main.temp;
        let mainDeg = (((mainTemp - 273.15) * 1.8) + 32).toFixed(0);
        // console.log('Returned temp');
        
        // Min temperature
        let minTemp  = temp.main.temp_min;
        let minDeg = (((minTemp - 273.15) * 1.8) + 32).toFixed(0); 
        // console.log('Returned min temp');

        // Max temperature
        let maxTemp = temp.main.temp_max;
        let maxDeg = (((maxTemp - 273.15) * 1.8) + 32).toFixed(0);
        // console.log('Returned max temp');

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
        // console.log(mainTemp);

        // Appending min temperature
        const getMin = document.querySelector('[data-minWeather]');
        const minTemp = document.createElement('div');
        minTemp.textContent = `${larry[1]} °F`;
        getMin.appendChild(minTemp);
        // console.log(minTemp);

        // Appending max temperature
        const getMax = document.querySelector('[data-maxWeather]');
        const maxTemp = document.createElement('div');
        maxTemp.textContent = `${larry[2]} °F`;
        getMax.appendChild(maxTemp);
        // console.log(maxTemp);
    })

    // Returns true
    return
};

// One function that will start the three other functions
function getAllFunctions(){
    clearAll();
    getFlightInfo();
    getCoordinatesForMap();
    connectingFlightInfoToWeatherInfo();
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
