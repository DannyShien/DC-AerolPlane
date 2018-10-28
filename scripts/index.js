// FLIGHT
const starterElement = document.querySelector('[data-flightStarter]');

// WEATHER
const weatherElement = document.querySelector('[data-weatherStarter]');

// MAP
const mapElement = document.querySelector('[data-mapStarter]');

//testing airport code to city to weather
const testElement = document.querySelector('[data-testing]');

// Flight info API
function getFlightInfo(){
    console.log("Button is good for Plane");

    // Holds onto submitted info from form
    event.preventDefault();
    
    // Fetch API and convert to Json
    fetch("http://aviation-edge.com/v2/public/flights?key=5f3420-01f81d")
    .then(r => r.json())

    // Extracts flight info
    .then((data) =>{
        // Connecting with <form>
        const userFlightInput = document.querySelector('[data-inputInfo]').value;
        let planeObj = data.filter((planeFinder) =>{
            return userFlightInput === planeFinder.flight.iataNumber;
        });
        // console.log(planeObj);
        return planeObj;
    })

    // Filtering through flight info and putting it into array
    .then((result) =>{
        // compiling collected data
        let dataCollector = [];

        // Filters through flight into
        const dataFinder = result.map((finder) =>{

            //Flight number
            const flightIataNumber = finder.flight.iataNumber;
            const textZero = `Flight Number: ${flightIataNumber}`;
            let zero = dataCollector.push(textZero);

            //Status
            const currentStatus = finder.status;
            const textOne = `Status: "${currentStatus}"`;
            let one = dataCollector.push(textOne);

            //Coordinates
            const lat = finder.geography.latitude;
            const long = finder.geography.longitude;
            const textTwo = `Coordinates: (${lat}, ${long})`;
            let three = dataCollector.push(textTwo);

            //Departure
            const depart = finder.departure.iataCode;
            const textThree = `Departure Airport: ${depart}`;
            let four = dataCollector.push(textThree);

            //Arrival
            const arrive = finder.arrival.iataCode;
            const textFour = `Arrival Airport: ${arrive}`;
            let five = dataCollector.push(textFour);

            //Speed
            const mph = finder.speed.horizontal;
            const textFive = `Speed of Aircraft: ${mph} MPH`;
            let six = dataCollector.push(textFive);

            //Altitude
            const alt = finder.geography.altitude;
            const textSix = `Altitude of Aircraft: ${alt} ft`;
            let seven = dataCollector.push(textSix);
        });
        return dataCollector;
    })
    
    // Appending each data to document
    .then((send) =>{

        const flightInfoElement = document.querySelector('[data-flightInfo]');
        const flightInfoTwoElement = document.querySelector('[data-flightInfoTwo]');

        //Flight Number
        const infoZero = document.createElement('li');
        infoZero.textContent = send[0];
        flightInfoElement.appendChild(infoZero);

        //Status
        const infoOne = document.createElement('li');
        infoOne.textContent = send[1];
        flightInfoElement.appendChild(infoOne);
        
        //Coordinates
        const infoTwo = document.createElement('li');
        infoTwo.textContent = send[2];
        flightInfoElement.appendChild(infoTwo);

        //Departure
        const infoThree = document.createElement('li');
        infoThree.textContent = send[3];
        flightInfoTwoElement.appendChild(infoThree);

        //Arrival
        const infoFour = document.createElement('li');
        infoFour.textContent = send[4];
        flightInfoTwoElement.appendChild(infoFour);

        //Speed
        const infoFive = document.createElement('li');
        infoFive.textContent = send[5];
        flightInfoTwoElement.appendChild(infoFive);

        //Altitude
        const infoSix = document.createElement('li');
        infoSix.textContent = send[6];
        flightInfoTwoElement.appendChild(infoSix);

        return send;
    })
};


// Gathering coordinates info to display on Google Map API
function getCoordinatesForMap(){
    console.log("Button is good for Map");

    // Holds onto submitted info from form
    event.preventDefault();

    // Fetch Flight API and convert to Json to grab the coordinates
    fetch("http://aviation-edge.com/v2/public/flights?key=5f3420-01f81d")
    .then(r => r.json())
    //getting coordinates
    .then((data) =>{
        // Connecting with <form>
        const userFlightInput = document.querySelector('[data-inputInfo]').value;
        let planeObj = data.filter((planeFinder) =>{
            return userFlightInput === planeFinder.flight.iataNumber;
        })
        // console.log(planeObj);
        return planeObj;
    })
    // Filtering through flight info to grab the coordinates
    .then((result) =>{
        const grid = [];
        // Filters through flight into
        const dataFinder = result.map((finder) =>{
            //Coordinates
            const lat = finder.geography.latitude;
            const long = finder.geography.longitude;
            const xx = grid.push(lat);
            const yy = grid.push(long);
        });
        // console.log(grid);
        return grid;
    })
    .then(initMap)
};

// Displaying the map
function initMap(gridlock){
    // console.log(gridlock);
const x = parseInt(gridlock[0]);
const y = parseInt(gridlock[1]);

const displayElement = document.querySelector('[data-display]');

// The location of place
let plane = {lat: x, lng: y};
// The map, centered at plane
let map = new google.maps.Map(displayElement, {zoom: 6, center: plane});
// The marker, positioned at place
var marker = new google.maps.Marker({position: plane, map: map});
};




// flight info to airport to city to weather
function testing(){
    console.log("testing testing");
    event.preventDefault();

    // Fetch API and convert to Json
    fetch("http://aviation-edge.com/v2/public/flights?key=5f3420-01f81d")
    .then(r => r.json())
    // Extracts flight info
    .then((data) =>{
        // Connecting with <form>
        const userFlightInput = document.querySelector('[data-inputInfo]').value;
        let planeObj = data.filter((planeFinder) =>{
            return userFlightInput === planeFinder.flight.iataNumber;
        });
        // console.log(planeObj);
        return planeObj;
    })
    // Filtering through flight info to grab airport IATACODE
    .then((result) =>{
        // Filters through flight into
        const dataFinder = result.filter((finder) =>{
            // Arrival city airport code
            const airportIataCode = finder.arrival.iataCode;
            return airportIataCode;
        });
        // debugger;
        return dataFinder;
    })
    // Using airport IATACODE to compare it to airport API to grab airport info
    .then((compare) => {
        // console.log(compare);
        console.log(compare)
        return compare
    })
    .then((get) => {
        fetch("https://aviation-edge.com/v2/public/airportDatabase?key=5f3420-01f81d");
        return get;
    })
    .then((s) => {
        s.json()
        return s;
    })   
    .then((airportCode) =>{
        // debugger;
        const levelOne = airportCode.filter((cityFinder) =>{
            if (compare.arrival.iataCode === (cityFinder.codeIataAirport)){
                // console.log(cityFinder.codeIataCity);                    
                return cityFinder.codeIataCity;
            };
        // console.log(levelOne);
        return levelOne;
        });
    })
    .then((cityCode) =>{
       console.log(cityCode);
    })



    // fetch("https://aviation-edge.com/v2/public/cityDatabase?key=5f3420-01f81d")
    // .then(r => r.json())
    // .then((data) =>{
    //     const userFlightInput = document.querySelector('[data-inputInfo]').value;
    //     let planeObj = data.filter((planeFinder) =>{
    //         return userFlightInput === planeFinder.flight.iataNumber;
    //     });
    //     return planeObj;
    // })
    // .then((airportCode) =>{
    //     const codeFinder = airportCode.map((finder) =>{
    //         if ((finder.arrival.iataCode) === ())
    //     })
    // })
};


//  Find weather API
function getWeatherInfo () {
    console.log('Getting weather');
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=Atlanta&APPID=dee07fae47d614b4f9cb0a8cd0a2cfeb`)
    .then(r => r.json())
    
    .then(temp => {
        let mainTemp = temp.main.temp;
        let mainDeg = ((mainTemp - 273.15) * 9/5 + 32).toFixed(1);
        // console.log('Returned temp');
        
        let minTemp  = temp.main.temp_min;
        let minDeg = ((minTemp - 273.15) * 9/5 + 32).toFixed(1); 
        // console.log('Returned min temp');

        let maxTemp = temp.main.temp_max;
        let maxDeg = ((maxTemp - 273.15) * 9/5 + 32).toFixed(1);
        // console.log('Returned max temp');

        let temperatures = []; 
        temperatures.push(mainDeg);
        temperatures.push(minDeg);
        temperatures.push(maxDeg);
        

        return temperatures;
    }) 

    .then(larry => {
        const getTemp = document.querySelector('[data-weatherInfo]');
        const mainTemp = document.createElement('li');
        mainTemp.textContent = `${larry[0]} °F`;
        getTemp.appendChild(mainTemp);
        // console.log(mainTemp);

        const getMin = document.querySelector('[data-weatherInfo]');
        const minTemp = document.createElement('li');
        minTemp.textContent = `${larry[1]} °F`;
        getMin.appendChild(minTemp);
        // console.log(minTemp);

        const getMax = document.querySelector('[data-weatherInfo]');
        const maxTemp = document.createElement('li');
        maxTemp.textContent = `${larry[2]} °F`;
        getMax.appendChild(maxTemp);
        // console.log(maxTemp);
    })
    return
};






function main(){
    starterElement.addEventListener('click', getFlightInfo);
    mapElement.addEventListener('click', getCoordinatesForMap);
    weatherElement.addEventListener('click', getWeatherInfo);

    testElement.addEventListener('click', testing);
};

main();
