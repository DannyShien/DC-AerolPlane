///////////////
//attempted with a whole bunch of trial and errors..
// By steventaesungkim@github


// // ===========================
// // Global Cache
// // ===========================


// // ===========================
// // Global Variable
// // ===========================


// // ===========================
// // Constants
// // ===========================


// // ===========================
// // DOM selection
// // ===========================
// let locationForm = document.querySelector('[data-form]');

// // Button activator
// const flightElement = document.querySelector('[data-flightStarter]');
// const mapElement = document.querySelector('[data-mapStarter]');
// const weatherElement = document.querySelector('[data-weatherStarter]');

// // Appends to flight info column
// const infoOneElement = document.querySelector('[data-infoOne]');
// const infoTwoElement = document.querySelector('[data-infoTwo]');

// // Appends to weather info column
// const weatherInfoElement = document.querySelector('[data-weatherInfo]');

// // Display map 
// const mapDisplayElement = document.querySelector('[data-mapDisplay]');


// // ===========================
// // Helper functions
// // ===========================
// // ++++++++
// // Flight info
// // ++++++++

// function getFlightInfo(event){
//     // Check to see if the button is activated
//     // console.log("Button is good for flight, let's begin");
    
//     // Holds onto submitted info from form
//     event.preventDefault();
    
//     // Connecting with <form>
//     const userFlightInput = document.querySelector('[data-inputInfo]').value;
    
//     // Setting variables to fetch individual apis for Flight info
//     // let aircraftPromise = fetch("http://aviation-edge.com/v2/public/flights?key=5f3420-01f81d"); // aircrafts in flight
//     let aircraftDeparturePromise = fetch("http://aviation-edge.com/v2/public/timetable?key=5f3420-01f81d&iataCode=ATL&type=departure");//.then(r => r.json());  // this is only for departures at ATL airport
//     let aircraftArrivalPromise = fetch("http://aviation-edge.com/v2/public/timetable?key=5f3420-01f81d&iataCode=ATL&type=arrival");//.then(r => r.json()); // this is only for arrivals at ATL airport
//     // let aircraftDestinationPromise = fetch("https://aviation-edge.com/v2/public/countryDatabase?key=5f3420-01f81d&nameCountry=Andorra"); // this is destination country set to Andorra
    
//     // Fetches all the apis and promises all into an array
//     Promise.all([aircraftDeparturePromise, aircraftArrivalPromise])  // add later aircraftDestinationPromise, aircraftPromise
//     // fetch("http://aviation-edge.com/v2/public/timetable?key=5f3420-01f81d&iataCode=ATL&type=departure")
    
//     // converts to json
//         .then((responseArray) => {
//             // console.log(responseArray);
//             let newArray = responseArray.map(eachArray => eachArray.json())
//             return Promise.all(newArray);
//             })
//     // extracting specific info from api and returning the complete result as an array
//         .then((data) => { //aircraft holds all the info [2]
//             // console.log(data);
//             // console.log(data[1][0].type);
//             // debugger;
//             // Finding the right level
//             let departData = data[0];
//             let arrivalData = data[1];
//             let departType = data[0];
//             let arrivalType = data[1];

//             // Connecting with <form>
//             const userFlightInput = document.querySelector('[data-inputInfo]').value;
//             // const userTypeInput = "departure or arrival"  //make it into document.querySelector('[data-typeInfo]').value
//             // filtering through each array seperately
//             // debugger;
//             let departObj = departData.filter((departFinder) => { /////
//                 if (userFlightInput === departFinder.flight.iataNumber){
//                     return userFlightInput === departFinder.flight.iataNumber;
//                     }if ("departure" === departFinder.type){
//                         return true;
//                     }if (true && true){
//                         return userFlightInput === departFinder.flight.iataNumber;
//                     }else{
//                         console.log("not here for departure");
//                 }
//             });             
//             let departObj = departData.filter((departFinder) => {
//                 debugger;
//                 if (userFlightInput === departFinder.flight.iataNumber){
//                     return userFlightInput === departFinder.flight.iataNumber;
//                 }else if ("arrival" === departFinder.type){
//                     return true;
//                 }else{
//                     console.log("not here for arrival");
//                 }
//             });
//             let departTypeObj = departType.filer((departTypeFinder) => {
//                 if ("departure" === departTypeFinder.type){
//                     return departTypeObj === departTypeFinder.type;
//                 }else if (departObj === departTypeObj){
//                     return userFlightInput === departFinder.flight.iataNumber;
//                 }
//             });

//             let arrivalObj = arrivalData.filter((arrivalFinder) => {
//                 if (userFlightInput === arrivalFinder.flight.iataNumber){
//                     return userFlightInput === arrivalFinder.flight.iataNumber;
//                 }if ("arrival" === arrivalFinder.type){
//                     return true;
//                 }else{
//                     console.log("not here for arrival");
//                 }
//             });
//             // let arrivalTypeObj = arrivalType.filer((arrivalTypeFinder) => {
//             //     if ("arrival" === arrivalTypeFinder.type){
//             //         return arrivalTypeObj=== arrivalTypeFinder.type;
//             //     }if (arrivalObj === arrivalTypeObj){
//             //         return userFlightInput === arrivalFinder.flight.iataNumber;
//             //     }
//             // });    

//             console.log(departObj);
//             console.log(arrivalObj);
//                 return flightNumbers;
//         })
//     // display those specific info received from api
//     // .then(assortAndDisplayFlightInfo)
// };

// // function assortAndDisplayFlightInfo(resultsArray){
//     // console.log(resultsArray);
//     // console.log(resultsArray[0]) 
// // };

// // // Maps through the array to convert to json
// // function convertToJson(responseArray){
// //     let response = responseArray.map(aircraft => aircraft.json());
// //     // console.log(response);
// //     return response;
// // };

// // function extractFlightInfo(promiseArray){
// //     console.log(promiseArray)
// // };
// // // Extracts from json to retrieve specific data 
// // function extractFlightInfo((data) => { //aircraft holds all the info [4]
// //     // Holds onto submitted info from form
// //     event.preventDefault();
    
// //     // Connecting with <form>
// //     const userFlightInput = document.querySelector('[data-inputInfo]').value;

// //     // console.log(data);
// //     // debugger;
// //     let valuePath = userFlightInput;
// //     let flightNumbers = data.filter(placement => {
// //         return valuePath === placement.flight.iataNumber})
// //         // console.log(flightNumbers);
// //         return flightNumbers;
// //     }       
// // )

// //     .then(r => r.json())
// //     .then((data) => {
// //         // console.log(data);
// //         // debugger;
// //         let valuePath = userFlightInput;
// //         let flightNumbers = data.filter(placement => {
// //             return valuePath === placement.flight.iataNumber})
// //             // console.log(flightNumbers);
// //             return flightNumbers;
// //     })
// //     .then(assortAndDisplayFlightInfo)
// // };









// // // Initiates getting flight info by going through convertToJson -> extractFlightInfo -> displayFlightInfo
// // function getFlightInfo(){
// //     // Check to see if the button is activated
// //     console.log("Button is good for flight, let's begin");

// //     // Setting variables to fetch individual apis for Flight info
// //     let aircraftPromise = fetch("http://aviation-edge.com/v2/public/flights?key=f098eb-24953d"); // aircrafts in flight
// //     let aircraftDeparturePromise = fetch("http://aviation-edge.com/v2/public/timetable?key=f098eb-24953d&iataCode=JFK&type=departure"); // this is only for departures at JFK airport
// //     let aircraftArrivalPromise = fetch("http://aviation-edge.com/v2/public/timetable?key=f098eb-24953d&iataCode=JFK&type=arrival"); // this is only for arrivals at JFK airport
// //     let aircraftDestinationPromise = fetch("https://aviation-edge.com/v2/public/countryDatabase?key=f098eb-24953d&nameCountry=Andorra"); // this is destination country set to Andorra

// //     // fetches all the apis and promises all into an array
// //     Promise.all([aircraftPromise, aircraftDeparturePromise, aircraftArrivalPromise, aircraftDestinationPromise])
// //         // converts to json
// //         .then(convertToJson)
// //         // extracting specific info from api and returning the complete result as an array
// //         .then(extractFlightInfo)
// //         // // display those specific info received from api
// //         // .then(displayFlightInfo)
// // };

// // // Maps through the array to convert to json
// // function convertToJson(responseArray){
// //     let response = responseArray.map(aircraft => aircraft.json());
// //     // console.log(response);
// //     return response;
// // };

// // // Extracts from json to retrieve specific data 
// // function extractFlightInfo(aircraft){ //aircraft holds all the info [4]
// //     console.log(aircraft)


// // Extracting departure info
//     // Departure: country
//     // Departure: city
//     // Departure: state
//     // Departure: act. depart time

// // Extracting arrival info
//     // Arrival: country
//     // Arrival: city
//     // Arrival: state
//     // Arrival: est. arrival time
//         // if landed => arrived time

// // Extracting plane info
//     // Coordinates: (latitude, longitude)
//     // Speed of aircraft: (MPH)
//     // Status of flight

// // Extracting Destination info ("arrival info")
//     // Timezone of destination
//     // Currency of destination

// // make an empty object {departureInfoObject} and .assign() departureInfo

// // make an empty object {arrivalInfoObject} and .assign() arrivalInfo

// // make an empty object {planeInfoObject} and .assign() planeInfo

// // make an empty object {destinationInfoObject} and .assign() destinationInfo

// // Set an empty array [totalFlightInfoArray] to push 4 objects [{departureInfo}, {arrivalInfo}, {planeInfo}, {destinationInfo}]

// // return totalInfoArray
// // };

// // // Appending and displaying the data on browser
// // function displayFlightInfo(){
// // // debugger to check what data is received. It should be array[{departureInfo}, {arrivalInfo}, {planeInfo}, {destinationInfo}]

// // // set variables and .map through the array to the objects to get the info

// // // text.content each variables

// // // appendchild using data attributes ([data-infoOne], [data-infoTwo])

// // // return the array
// // };


// // // ++++++++
// // // Weather info
// // // ++++++++
// // // Initiates getting weather info by going through convertToJson -> extractWeatherInfo -> displayWeatherInfo
// // function getWeatherInfo(){
// //     // check to see if the button is actived
// //     console.log("Button is good for weather, lets begin");
// //     // receives weather data from api
// //     fetch("URL")
// //         // converts to json
// //         .then(convertToJson)
// //         // extracting specific info from api
// //         .then(extractWeatherInfo)
// //         // display those specific info received from api
// //         .then(displayWeatherInfo)
// // };

// // // Converts to json
// // function convertToJson(r){
// //     return r.json();
// // };

// // // Extracts from json to retrieve specific data 
// // function extractWeatherInfo(){
// // // Extact weather info for destination
// //     // Current Temperature
// //     // High
// //     // Low
// //     // Description (ex:"Partly Cloudly")
// //     // Humidity
// //     // Precipitation
// //     // Location (City)
// //                                                                 // Retrieve info using js (add later)
// //                                                                     // Day

// // // make an empty object {weatherInfoObject} and .assign() weatherInfo
// // };

// // // Appending and displaying the data on browser
// // function displayWeatherInfo(){
// // // debugger to check what data is received. It should be object {weatherInfoObject}

// // // set variables and loop through the object to get the info

// // // text.content each variables

// // // appendchild using data attributes ([data-weatherInfo)

// // // return the object
// // };


// // // ++++++++
// // // Map info
// // // ++++++++
// // // Initiates getting map info and displaying it by going through convertToJson -> extractWeatherInfo -> displayWeatherInfo
// // function getLocator(){
// //     // check to see if the button is actived
// //     console.log("Button is good for map, lets begin");
// //     // receives weather data from api
// //     fetch(URL)
// //         .then(ConvertToJson)
// //         .then(extractCoordinates)
// //         .then(initMap)
// // };

// // // Converts to json
// // function ConvertToJson(r){
// //     return r.json();
// // };

// // function extractCoordinates(){
// //     // extract coordinates of flight
// //     let latitude = coordinate.x_position.latitude; // lookup at api
// //     let longitude = coordinate.y_position.longitude; // lookup at api
// //     // create a new array and push the two coordinates
// //     let coordinateInfoArray = [];
// //     let xx = coordinate.push(latitude);
// //     let yy = coordinate.push(longitude);
// //     return coordinate;
// // };
// // // Initialize and add the map
// // function initMap(){
// // // debugger to check what data is received. It should be an array [coordinateInfoArray]

// // //Loop through array to get coordinates and substitute into the coordinates of flight
// //     const x = parseInt(coordinates_lat);
// //     const y = parseInt(coordinates_long);

// //     // The coordinates of flight
// //     let flightCoordinates = {lat: x, lng: y};
// //     // Displaying the map and centered on flight
// //     let flightTrack = new google.maps.Map(mapDisplayElement, {zoom: 4, center: flightCoordinates});
// //     // Displaying the marker and positioning on flight
// //     var tracker = new google.maps.Marker({position: flightCoordinates, map: flightTrack});
// //     return tracker;
// // };









// // ===========================
// // Main event Listener
// // ===========================
// function main(){
//     // flightElement.addEventListener('click', getFlightInfo); // Ignited by click, go to getFlightInfo
//     // weatherElement.addEventListener('click', getWeatherInfo); // Ignited by click, go to getWeatherInfo
//     // mapElement.addEventListener('click', getLocator); // Ignited by click, go to getLocator
//     locationForm.addEventListener('submit', getFlightInfo); // Ignited by submit, receiving input user's info and processing it in getFlightInfo
    
//     // //testing
//     // testingElement.addEventListener('click', mergeAll); 
//     console.log("Listening");
// };
// main();









// //+======+++++++++++=========+++++++++++++NOTES==========+++++++++++++
// // tracking down to specific object using flightnumber
// // function getFlightInfo(event){
//     //     event.preventDefault();
//     //     const userFlightInput = document.querySelector('[data-inputInfo]').value;
//     //     fetch("http://aviation-edge.com/v2/public/timetable?key=5f3420-01f81d&iataCode=JFK&type=departure")
//     //     .then(r => r.json())
//     //     .then((data) => {
//         //         // console.log(data);
//         //         const labelInfoElement = document.querySelector('[data-inputInfo]');
//         //         debugger;
//         //         let valuePath = labelInfoElement;
//         //         // debugger;
//         //         let valuePath = userFlightInput;
//         //         let flightNumbers = data.filter(placement => {
//             //             return valuePath === placement.flight.iataNumber})
//             //             // console.log(flightNumbers);
            
// ///=-=-=-=-=---=-=-==-=
// one function that will run all the other functions
function function_one() {
    function_two(); // considering the next alert, I figured you wanted to call function_two first
    alert("The function called 'function_one' has been called.");
}
    
function function_two() {
    alert("The function called 'function_two' has been called.");
}
        
    function_one();

// //0909090909090909090909090909090
// // // // ~~~~~~~~~~~~~~~~~~~~~~~~~
// // // // promise.all testing
// // // // ~~~~~~~~~~~~~~~~~~~~~~~~~
// // //                                     // -------------
// // //                                     // make sure to delete data-tesing at button element
// // //                                     // -------------
// // // // Triggering with button
// // // const testingElement = document.querySelector('[data-testing]');
// // // // two url to test promise.all

// // // function mergeAll(){
// // //     let promiseOne = fetch("http://aviation-edge.com/v2/public/flights?key=f098eb-24953d");
// // //     let promiseTwo = fetch("http://api.openweathermap.org/data/2.5/weather?q=Atlanta&APPID=dee07fae47d614b4f9cb0a8cd0a2cfeb");

// // //     Promise.all([promiseOne, promiseTwo])
// // //         .then(convertToJson)
// // //         .then(extractData)
// // // };

// // // function convertToJson(responseArray){
// // //     let response = responseArray.map(jeff => jeff.json());
// // //     return response;
// // // };

// // // // console logging two info from two different api
// // // function extractData(resultsArray){
// // //     console.log(resultsArray);
// // //     // debugger;
// // //     // console.log("are you there"); //connected
// // //     // console.log(data[0][0].speed.vertical);

// // // };

// //111111111111111111111111111111111111111111111111111111111111111
//      // Initiates getting flight info by going through convertToJson -> extractFlightInfo -> displayFlightInfo
// // function getFlightInfo(){
// //     // Check to see if the button is activated
// //     console.log("Button is good for flight, let's begin");

// //     // Setting variables to fetch individual apis for Flight info
// //     let aircraftPromise = fetch("http://aviation-edge.com/v2/public/flights?key=f098eb-24953d"); // aircrafts in flight
// //     let aircraftDeparturePromise = fetch("http://aviation-edge.com/v2/public/timetable?key=f098eb-24953d&iataCode=JFK&type=departure"); // this is only for departures at JFK airport
// //     let aircraftArrivalPromise = fetch("http://aviation-edge.com/v2/public/timetable?key=f098eb-24953d&iataCode=JFK&type=arrival"); // this is only for arrivals at JFK airport
// //     let aircraftDestinationPromise = fetch("https://aviation-edge.com/v2/public/countryDatabase?key=f098eb-24953d&nameCountry=Andorra"); // this is destination country set to Andorra

// //     // fetches all the apis and promises all into an array
// //     Promise.all([aircraftPromise, aircraftDeparturePromise, aircraftArrivalPromise, aircraftDestinationPromise])
// //         // converts to json
// //         .then(convertToJson)
// //         // extracting specific info from api and returning the complete result as an array
// //         .then(extractFlightInfo)
// //         // // display those specific info received from api
// //         // .then(displayFlightInfo)
// // };

// // // Maps through the array to convert to json
// // function convertToJson(responseArray){
// //     let response = responseArray.map(aircraft => aircraft.json());
// //     // console.log(response);
// //     return response;
// // };

// // // Extracts from json to retrieve specific data 
// // function extractFlightInfo(aircraft){ //aircraft holds all the info [4]
// //     console.log(aircraft)


///00000000000000000000Reset.. copied over code that we decided to not use for phase 1 but will need for phase 2..000000000000000000000
// // Departure API
// function getDepartureInfo(){
//     console.log("Button is good for Departure");

//     // Holds onto submitted info from form
//     event.preventDefault();

//     //Fetch API and convert to Json
//     fetch("http://aviation-edge.com/v2/public/timetable?key=5f3420-01f81d&iataCode=ATL&type=departure")
//     .then(r => r.json())
//     //extracts departure
//     .then((data) =>{
//         // Connecting with <form>
//         const userFlightInput = document.querySelector('[data-inputInfo]').value;
//         let departureObj = data.filter((departureFinder) =>{
//             return userFlightInput === departureFinder.flight.iataNumber;
//         });
//         // console.log(departureObj);
//         return departureObj
//     })
//     //Displays departure
//     .then((result) =>{
//         console.log(result);

//     })
// };

// //Arrival API
// function getArrivalInfo(){
//     console.log("Button is good for Arrival");

//     // Holds onto submitted info from form
//     event.preventDefault();

//     //Fetch API and convert to Json
//     fetch("http://aviation-edge.com/v2/public/timetable?key=5f3420-01f81d&iataCode=ATL&type=arrival")
//     .then(r => r.json())
//     //extracts departure
//     .then((data) =>{
//         // Connecting with <form>
//         const userFlightInput = document.querySelector('[data-inputInfo]').value;
//         let arrivalObj = data.filter((arrivalFinder) =>{
//             return userFlightInput === arrivalFinder.flight.iataNumber;
//         });
//         // console.log(arrivalObj);
//         return arrivalObj
//     })
//     //Displays departure
//     .then((result) =>{
//         console.log(result);

//     })
// };

// function main(){
//     starterElement.addEventListener('click', getDepartureInfo);
//     starterElement.addEventListener('click', getArrivalInfo);
// };
// main();

//end............ of phase 2../////////////