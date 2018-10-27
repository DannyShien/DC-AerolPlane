
const starterElement = document.querySelector('[data-flightStarter]');
const flightInfoElement = document.querySelector('[data-flightInfo]');
const flightInfoTwoElement = document.querySelector('[data-flightInfoTwo]');
const weatherElement = document.querySelector('[data-weatherStarter]');


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
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=Atlanta&APPID=dee07fae47d614b4f9cb0a8cd0a2cfeb`)
    .then(r => r.json())
    
    .then(temp => {

        let mainTemp = temp.main.temp;
        let mainDeg = ((mainTemp - 273.15) * 9/5 + 32).toFixed(1);
        let mainText = `${mainDeg} °F`;
        console.log('Returned temp');

//stan 
        // let mainTemp = temp.main.temp;
        // let mainDeg = ((mainTemp - 273.15) * 9/5 + 32).toFixed(1);
        // console.log('Returned temp');
        
        let minTemp  = temp.main.temp_min;
        let minDeg = ((minTemp - 273.15) * 9/5 + 32).toFixed(1); 
        console.log('Returned min temp');

        let maxTemp = temp.main.temp_max;
        let maxDeg = ((maxTemp - 273.15) * 9/5 + 32).toFixed(1);
        console.log('Returned max temp');

        let temperatures = []; 
        temperatures.push(mainText);
        temperatures.push(minDeg);
        temperatures.push(maxDeg);
        

        return temperatures;
    }) 

    .then(larry => {
        debugger;
        let mainTemp = document.createElement('li');
        mainTemp.textContent = larry[0];
        // console.log(mainTemp);
        getTemp.appendChild(mainTemp);
        let getTemp = document.querySelector('[data-mainWeather]');
//stan
        // const getTemp = document.querySelector('[data-mainWeather]');
        // const mainTemp = document.createElement('div');
        // mainTemp.textContent = `${larry[0]} °F`;
        // console.log(mainTemp);

        // const getMin = document.querySelector('[data-minWeather]');
        // const minTemp = document.createElement('div');
        // minTemp.textContent = `${larry[1]} °F`;
        // console.log(minTemp);

        // const getMax = document.querySelector('[data-maxweather]');
        // const maxTemp = document.createElement('div');
        // maxTemp.textContent = `${larry[2]} °F`;
        // console.log(maxTemp);

        // debugger;
        // getMin.appendChild(minTemp);
        // getMax.appendChild(maxTemp);
    })

};






function main(){
    starterElement.addEventListener('click', getFlightInfo);
    weatherElement.addEventListener('click', getWeatherInfo);
};

main();
