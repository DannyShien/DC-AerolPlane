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
const buttonElement = document.querySelector('[data-button]');
const partOneElement = document.querySelector('[data-partOne]');
const partTwoElement = document.querySelector('[data-partTwo]');

// ===========================
// Helper functions
// ===========================
function getFlightInfo(){
    // Checks to see if the button is activated
    // console.log("Button is good, let's begin");
    // receives flight info from api
    fetch("URL");
        // converts to json
        .then(convertToJson)
        // extracting specific info from api
        .then(extractFlightInfo)
        // display those specific info received from api
        .then(displayFlightInfo)
}

function convertToJson(r){
    return r.json();
}

function extractFlightInfo(){
//Extracting departure info
    //Departure: country
    //Departure: city
    //Departure: state
    //Departure: act. depart time

//Extracting arrival info
    //Arrival: country
    //Arrival: city
    //Arrival: state
    //Arrival: est. arrival time
        //if landed => arrived time

//Extracting plane info
    //Coordinates: (latitude, longitude)
    //Speed of aircraft: (MPH)
    //Status of flight

//Extracting Destination info ("arrival info")
    //Timezone of destination
    //Currency of destination

//make an empty object (departureInfoObject) and .assign() departureInfo

//make an empty object (arrivalInfoObject) and .assign() arrivalInfo

//make an empty object (planeInfoObject) and .assign() planeInfo

//make an empty object (destinationInfoObject) and .assign() destinationInfo

//Set an empty array (totalInfoArray) to push 4 objects [{departureInfo}, {arrivalInfo}, {planeInfo}, {destinationInfo}]

// return totalInfoArray
};

function displayFlightInfo(){
//debugger to check what data is receive. It should be array[{departureInfo}, {arrivalInfo}, {planeInfo}, {destinationInfo}]

//set variables and .map through the array to the objects to get the info

//text.content each variables

//appendchild using data attributes

//return the array
};



// ===========================
// Main event Listener
// ===========================
function main(){
    buttonElement.addEventListener('click', getFlightInfo) //Ignited by click, go to getFlightInfo

main();