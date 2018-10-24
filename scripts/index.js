// ===========================
// Global Cache
// ===========================


// ===========================
// Global Variable
// ===========================


// ===========================
// Constants
// ===========================


// ===========================
// DOM selection
// ===========================
// Button activator
const flightElement = document.querySelector('[data-flightStarter]');
const mapElement = document.querySelector('[data-mapStarter]');
const weatherElement = document.querySelector('[data-weatherStarter]');

// Appends to flight info column
const infoOneElement = document.querySelector('[data-infoOne]');
const infoTwoElement = document.querySelector('[data-infoTwo]');

// Appends to weather info column
const weatherInfoElement = document.querySelector('[data-weatherInfo]');

// Display map 
const mapDisplayElement = document.querySelector('[data-mapDisplay]');


// ===========================
// Helper functions
// ===========================
// ++++++++
// Flight info
// ++++++++
// Initiates getting flight info by going through convertToJson -> extractFlightInfo -> displayFlightInfo
function getFlightInfo(){
    // Check to see if the button is activated
    console.log("Button is good for flight, let's begin");
    // receives flight data from api
    fetch("URL")
        // converts to json
        .then(convertToJson)
        // extracting specific info from api
        .then(extractFlightInfo)
        // display those specific info received from api
        .then(displayFlightInfo)
};

// Converts to json
function convertToJson(r){
    return r.json();
};

// Extracts from json to retrieve specific data 
function extractFlightInfo(){
// Extracting departure info
    // Departure: country
    // Departure: city
    // Departure: state
    // Departure: act. depart time

// Extracting arrival info
    // Arrival: country
    // Arrival: city
    // Arrival: state
    // Arrival: est. arrival time
        // if landed => arrived time

// Extracting plane info
    // Coordinates: (latitude, longitude)
    // Speed of aircraft: (MPH)
    // Status of flight

// Extracting Destination info ("arrival info")
    // Timezone of destination
    // Currency of destination

// make an empty object {departureInfoObject} and .assign() departureInfo

// make an empty object {arrivalInfoObject} and .assign() arrivalInfo

// make an empty object {planeInfoObject} and .assign() planeInfo

// make an empty object {destinationInfoObject} and .assign() destinationInfo

// Set an empty array [totalFlightInfoArray] to push 4 objects [{departureInfo}, {arrivalInfo}, {planeInfo}, {destinationInfo}]

// return totalInfoArray
};

// Appending and displaying the data on browser
function displayFlightInfo(){
// debugger to check what data is received. It should be array[{departureInfo}, {arrivalInfo}, {planeInfo}, {destinationInfo}]

// set variables and .map through the array to the objects to get the info

// text.content each variables

// appendchild using data attributes ([data-infoOne], [data-infoTwo])

// return the array
};


// ++++++++
// Weather info
// ++++++++
// Initiates getting weather info by going through convertToJson -> extractWeatherInfo -> displayWeatherInfo
function getWeatherInfo(){
    // check to see if the button is actived
    console.log("Button is good for weather, lets begin");
    // receives weather data from api
    fetch("URL")
        // converts to json
        .then(convertToJson)
        // extracting specific info from api
        .then(extractWeatherInfo)
        // display those specific info received from api
        .then(displayWeatherInfo)
};

// Converts to json
function convertToJson(r){
    return r.json();
};

// Extracts from json to retrieve specific data 
function extractWeatherInfo(){
// Extact weather info for destination
    // Current Temperature
    // High
    // Low
    // Description (ex:"Partly Cloudly")
    // Humidity
    // Precipitation
    // Location (City)
                                                                // Retrieve info using js (add later)
                                                                    // Day

// make an empty object {weatherInfoObject} and .assign() weatherInfo
};

// Appending and displaying the data on browser
function displayWeatherInfo(){
// debugger to check what data is received. It should be object {weatherInfoObject}

// set variables and loop through the object to get the info

// text.content each variables

// appendchild using data attributes ([data-weatherInfo)

// return the object
};


// ++++++++
// Map info
// ++++++++
// Initiates getting map info and displaying it by going through convertToJson -> extractWeatherInfo -> displayWeatherInfo
function getLocator(){
    // check to see if the button is actived
    console.log("Button is good for map, lets begin");
    // receives weather data from api
    fetch(URL)
        .then(ConvertToJson)
        .then(extractCoordinates)
        .then(initMap)
};

// Converts to json
function ConvertToJson(r){
    return r.json();
};

function extractCoordinates(){
    // extract coordinates of flight
    let latitude = coordinate.x_position.latitude; // lookup at api
    let longitude = coordinate.y_position.longitude; // lookup at api
    // create a new array and push the two coordinates
    let coordinateInfoArray = [];
    let xx = coordinate.push(latitude);
    let yy = coordinate.push(longitude);
    return coordinate;
};
// Initialize and add the map
function initMap(){
// debugger to check what data is received. It should be an array [coordinateInfoArray]

//Loop through array to get coordinates and substitute into the coordinates of flight
    const x = parseInt(coordinates_lat);
    const y = parseInt(coordinates_long);

    // The coordinates of flight
    let flightCoordinates = {lat: x, lng: y};
    // Displaying the map and centered on flight
    let flightTrack = new google.maps.Map(mapDisplayElement, {zoom: 4, center: flightCoordinates});
    // Displaying the marker and positioning on flight
    var tracker = new google.maps.Marker({position: flightCoordinates, map: flightTrack});
    return tracker;
};


// ===========================
// Main event Listener
// ===========================
function main(){
    flightElement.addEventListener('click', getFlightInfo); // Ignited by click, go to getFlightInfo
    weatherElement.addEventListener('click', getWeatherInfo); // Ignited by click, go to getWeatherInfo
    mapElement.addEventListener('click', getLocator); // Ignited by click, go to getLocator
    console.log("Listening");
};
main();

