
const starterElement = document.querySelector('[data-flightStarter]');
const flightInfoElement = document.querySelector('[data-flightInfo]');
const flightInfoTwoElement = document.querySelector('[data-flightInfoTwo]');

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
        // console.log(result);
        // console.log(result[0].status);

        // compiling collected data
        let dataCollector = [];

        // Filters through flight into
        const dataFinder = result.map((finder) =>{

            //Flight number
            const flightIataNumber = finder.flight.iataNumber;
            let zero = dataCollector.push(flightIataNumber);

            //Status
            const currentStatus = finder.status;
            let one = dataCollector.push(currentStatus);

            //Coordinates
            const lat = finder.geography.latitude;
            const long = finder.geography.longitude;
            let coordinates = [];
            let x = coordinates.push(lat);
            let y = coordinates.push(long);
            let three = dataCollector.push(coordinates);

            //Departure
            const depart = finder.departure.iataCode;
            let four = dataCollector.push(depart);

            //Arrival
            const arrive = finder.arrival.iataCode;
            let five = dataCollector.push(arrive);

            //Speed
            const mph = finder.speed.horizontal;
            let six = dataCollector.push(mph);

            //Altitude
            const alt = finder.geography.altitude;
            let seven = dataCollector.push(alt);
        })
        // console.log(dataCollector);
        return dataCollector;
    })

    // Appending each data to document
    .then((send) =>{
        // console.log(show);

        //Flight Number
        const infoZero = document.createElement('li');
        const textZero = `Flight Number: ${infoZero}`;
        infoZero.textContent = send[0];
        flightInfoElement.appendChild(infoZero);

        //Status
        const infoOne = document.createElement('li');
        // const textOne = `Status: ${infoOne}`;
        infoOne.textContent = send[1];
        flightInfoElement.appendChild(infoOne);
        
        //Coordinates
        const infoTwo = document.createElement('li');
        // const textTwo = `Coordinates: (${infoTwo})`;
        infoTwo.textContent = send[2];
        flightInfoElement.appendChild(infoTwo);

        //Departure
        const infoThree = document.createElement('li');
        // const textThree = `Departed Airport: ${infoThree}`; //May need to change wording
        infoThree.textContent = send[3];
        flightInfoTwoElement.appendChild(infoThree);

        //Arrival
        const infoFour = document.createElement('li');
        // const textFour = `Arriving Airport: ${infoFour}`; //May need to change wording
        infoFour.textContent = send[4];
        flightInfoTwoElement.appendChild(infoFour);

        //Speed
        const infoFive = document.createElement('li');
        // const textFive = `Speed of Aircraft: ${infoFive}mph`;
        infoFive.textContent = send[5];
        flightInfoTwoElement.appendChild(infoFive);

        //Altitude
        const infoSix = document.createElement('li');
        // const textSix = `Altitude of Aircraft: ${infoSix}ft`;
        infoSix.textContent = send[6];
        flightInfoTwoElement.appendChild(infoSix);

        return send;
    })
};


function main(){
    starterElement.addEventListener('click', getFlightInfo);
};
main();
