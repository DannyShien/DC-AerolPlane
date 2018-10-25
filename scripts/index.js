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
let locationForm = document.querySelector('[data-form]');

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

function getFlightInfo(event){
    event.preventDefault();
    const userFlightInput = document.querySelector('[data-inputInfo]').value;
    fetch("http://aviation-edge.com/v2/public/timetable?key=5f3420-01f81d&iataCode=JFK&type=departure")
    .then(r => r.json())
    .then((data) => {
        // console.log(data);
        // debugger;
        let valuePath = userFlightInput;
        let flightNumbers = data.filter(placement => {
            return valuePath === placement.flight.iataNumber})
            // console.log(flightNumbers);
            return flightNumbers;
    })
    .then(showData)
};

function showData(resultsArray){
    console.log(resultsArray); // 
};


// // Initiates getting flight info by going through convertToJson -> extractFlightInfo -> displayFlightInfo
// function getFlightInfo(){
//     // Check to see if the button is activated
//     console.log("Button is good for flight, let's begin");

//     // Setting variables to fetch individual apis for Flight info
//     let aircraftPromise = fetch("http://aviation-edge.com/v2/public/flights?key=f098eb-24953d"); // aircrafts in flight
//     let aircraftDeparturePromise = fetch("http://aviation-edge.com/v2/public/timetable?key=f098eb-24953d&iataCode=JFK&type=departure"); // this is only for departures at JFK airport
//     let aircraftArrivalPromise = fetch("http://aviation-edge.com/v2/public/timetable?key=f098eb-24953d&iataCode=JFK&type=arrival"); // this is only for arrivals at JFK airport
//     let aircraftDestinationPromise = fetch("https://aviation-edge.com/v2/public/countryDatabase?key=f098eb-24953d&nameCountry=Andorra"); // this is destination country set to Andorra

//     // fetches all the apis and promises all into an array
//     Promise.all([aircraftPromise, aircraftDeparturePromise, aircraftArrivalPromise, aircraftDestinationPromise])
//         // converts to json
//         .then(convertToJson)
//         // extracting specific info from api and returning the complete result as an array
//         .then(extractFlightInfo)
//         // // display those specific info received from api
//         // .then(displayFlightInfo)
// };

// // Maps through the array to convert to json
// function convertToJson(responseArray){
//     let response = responseArray.map(aircraft => aircraft.json());
//     // console.log(response);
//     return response;
// };

// // Extracts from json to retrieve specific data 
// function extractFlightInfo(aircraft){ //aircraft holds all the info [4]
//     console.log(aircraft)


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
// };

// // Appending and displaying the data on browser
// function displayFlightInfo(){
// // debugger to check what data is received. It should be array[{departureInfo}, {arrivalInfo}, {planeInfo}, {destinationInfo}]

// // set variables and .map through the array to the objects to get the info

// // text.content each variables

// // appendchild using data attributes ([data-infoOne], [data-infoTwo])

// // return the array
// };


// // ++++++++
// // Weather info
// // ++++++++
// // Initiates getting weather info by going through convertToJson -> extractWeatherInfo -> displayWeatherInfo
// function getWeatherInfo(){
//     // check to see if the button is actived
//     console.log("Button is good for weather, lets begin");
//     // receives weather data from api
//     fetch("URL")
//         // converts to json
//         .then(convertToJson)
//         // extracting specific info from api
//         .then(extractWeatherInfo)
//         // display those specific info received from api
//         .then(displayWeatherInfo)
// };

// // Converts to json
// function convertToJson(r){
//     return r.json();
// };

// // Extracts from json to retrieve specific data 
// function extractWeatherInfo(){
// // Extact weather info for destination
//     // Current Temperature
//     // High
//     // Low
//     // Description (ex:"Partly Cloudly")
//     // Humidity
//     // Precipitation
//     // Location (City)
//                                                                 // Retrieve info using js (add later)
//                                                                     // Day

// // make an empty object {weatherInfoObject} and .assign() weatherInfo
// };

// // Appending and displaying the data on browser
// function displayWeatherInfo(){
// // debugger to check what data is received. It should be object {weatherInfoObject}

// // set variables and loop through the object to get the info

// // text.content each variables

// // appendchild using data attributes ([data-weatherInfo)

// // return the object
// };


// // ++++++++
// // Map info
// // ++++++++
// // Initiates getting map info and displaying it by going through convertToJson -> extractWeatherInfo -> displayWeatherInfo
// function getLocator(){
//     // check to see if the button is actived
//     console.log("Button is good for map, lets begin");
//     // receives weather data from api
//     fetch(URL)
//         .then(ConvertToJson)
//         .then(extractCoordinates)
//         .then(initMap)
// };

// // Converts to json
// function ConvertToJson(r){
//     return r.json();
// };

// function extractCoordinates(){
//     // extract coordinates of flight
//     let latitude = coordinate.x_position.latitude; // lookup at api
//     let longitude = coordinate.y_position.longitude; // lookup at api
//     // create a new array and push the two coordinates
//     let coordinateInfoArray = [];
//     let xx = coordinate.push(latitude);
//     let yy = coordinate.push(longitude);
//     return coordinate;
// };
// // Initialize and add the map
// function initMap(){
// // debugger to check what data is received. It should be an array [coordinateInfoArray]

// //Loop through array to get coordinates and substitute into the coordinates of flight
//     const x = parseInt(coordinates_lat);
//     const y = parseInt(coordinates_long);

//     // The coordinates of flight
//     let flightCoordinates = {lat: x, lng: y};
//     // Displaying the map and centered on flight
//     let flightTrack = new google.maps.Map(mapDisplayElement, {zoom: 4, center: flightCoordinates});
//     // Displaying the marker and positioning on flight
//     var tracker = new google.maps.Marker({position: flightCoordinates, map: flightTrack});
//     return tracker;
// };





// // // ~~~~~~~~~~~~~~~~~~~~~~~~~
// // // promise.all testing
// // // ~~~~~~~~~~~~~~~~~~~~~~~~~
// //                                     // -------------
// //                                     // make sure to delete data-tesing at button element
// //                                     // -------------
// // // Triggering with button
// // const testingElement = document.querySelector('[data-testing]');
// // // two url to test promise.all

// // function mergeAll(){
// //     let promiseOne = fetch("http://aviation-edge.com/v2/public/flights?key=f098eb-24953d");
// //     let promiseTwo = fetch("http://api.openweathermap.org/data/2.5/weather?q=Atlanta&APPID=dee07fae47d614b4f9cb0a8cd0a2cfeb");

// //     Promise.all([promiseOne, promiseTwo])
// //         .then(convertToJson)
// //         .then(extractData)
// // };

// // function convertToJson(responseArray){
// //     let response = responseArray.map(jeff => jeff.json());
// //     return response;
// // };

// // // console logging two info from two different api
// // function extractData(resultsArray){
// //     console.log(resultsArray);
// //     // debugger;
// //     // console.log("are you there"); //connected
// //     // console.log(data[0][0].speed.vertical);

// // };




// ===========================
// Main event Listener
// ===========================
function main(){
    // flightElement.addEventListener('click', getFlightInfo); // Ignited by click, go to getFlightInfo
    // weatherElement.addEventListener('click', getWeatherInfo); // Ignited by click, go to getWeatherInfo
    // mapElement.addEventListener('click', getLocator); // Ignited by click, go to getLocator
    locationForm.addEventListener('submit', getFlightInfo);

    // //testing
    // testingElement.addEventListener('click', mergeAll); 
    console.log("Listening");
};
main();









//+======+++++++++++=========+++++++++++++
// filter method to get the specific object from a specific value
// function getFlightInfo(){
//     fetch("http://aviation-edge.com/v2/public/timetable?key=5f3420-01f81d&iataCode=JFK&type=departure")
//     .then(r => r.json())
//     .then((data) => {
//         console.log(data);
//         let flightNumbers = data.filter(placement => {
//             // debugger;
//             return '8414' === placement.flight.number})
//             console.log(flightNumbers);
//                 // debugger;
//                 // return placement;


//     //         }else{
//     //             // console.log("not here");
//     //             // return;
//     //         };
//     //         })
//     // })
//     // .then(asdfjkl)
//     });
// };

// function asdfjkl(whatisit){
    // debugger;
    // console.log(whatisit);
// };

// looping through the large array to pinpoint down to the value we want to find
// function getFlightInfo(){
//     fetch("http://aviation-edge.com/v2/public/timetable?key=5f3420-01f81d&iataCode=JFK&type=departure")
//     .then(r => r.json())
//     .then((data) => {
//         console.log(data);
//         let flightNumbers = data.map(placement => {
//             if ('8414' === placement.flight.number){
//                 // debugger;
//                 console.log(placement.flight.number);
//                 console.log(placement);
//                 // debugger;
//                 return placement;


//             }else{
//                 // console.log("not here");
//                 // return;
//             };
//             })
//     })
//     .then(asdfjkl)
// }

// function asdfjkl(whatisit){
//     // debugger;
//     console.log(whatisit);
// };
