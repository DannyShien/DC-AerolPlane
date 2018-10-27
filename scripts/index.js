
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
            const textFive = `Speed of Aircraft: ${mph} mph`;
            let six = dataCollector.push(textFive);

            //Altitude
            const alt = finder.geography.altitude;
            const textSix = `Altitude of Aircraft: ${alt} ft`;
            let seven = dataCollector.push(textSix);
        })
        // console.log(dataCollector);
        return dataCollector;
    })

    // Appending each data to document
    .then((send) =>{
        // console.log(show);

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

//  Find weather API
function getWeatherInfo () {
    console.log('Getting weather');
    fetch('api.openweathermap.org/data/2.5/weather?q=Atlanta&APPID=`${weateher_Key}`')
    .then(r => r.json())
    
    .then(getMainTemp)
        const destTemp = document.querySelector('[data-mainWeather]');
        let temp = obj.main.temp;
        let degree = ((temp - 273.15) * 9/5 + 32).toFixed(1);
    
    
}


function main(){
    starterElement.addEventListener('click', getFlightInfo);
};
main();
