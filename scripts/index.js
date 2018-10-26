
const starterElement = document.querySelector('[data-flightStarter]');

//Plane API
function getPlaneInfo(){
    console.log("Button is good for Plane");

    // Holds onto submitted info from form
    event.preventDefault();
    
    //Fetch API and convert to Json
    fetch("http://aviation-edge.com/v2/public/flights?key=5f3420-01f81d")
    .then(r => r.json())
    //extracts departure
    .then((data) =>{
        // Connecting with <form>
        const userFlightInput = document.querySelector('[data-inputInfo]').value;
        let planeObj = data.filter((planeFinder) =>{
            return userFlightInput === planeFinder.flight.iataNumber;
        });
        // console.log(planeObj);
        return planeObj
    })
    // Displays departure
    .then((result) =>{
        console.log(result);
        
    })
};


function main(){
    starterElement.addEventListener('click', getPlaneInfo);
};
main();
