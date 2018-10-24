const flightData = {
    "geography": {
        "latitude": 46.0996,
        "longitude": -79.0054,
        "altitude": 11890.2,
        "direction": 144
    },
    "speed": {
        "horizontal": 964.001,
        "isGround": 0,
        "vertical": 0
    },
    "departure": {
        "iataCode": "ICN",
        "icaoCode": "RKSI"
    },
    "arrival": {
        "iataCode": "JFK",
        "icaoCode": "KJFK"
    },
    "aircraft": {
        "regNumber": "HL7634",
        "icaoCode": "A388",
        "icao24": "71BE34",
        "iataCode": "A388"
    },
    "airline": {
        "iataCode": "OZ",
        "icaoCode": "AAR"
    },
    "flight": {
        "iataNumber": "OZ222",
        "icaoNumber": "AAR222",
        "number": "222"
    },
    "system": {
        "updated": "1540307703",
        "squawk": "7401"
    },
    "status": "en-route"
};

const statusData = [
    {
        "type": "departure",
        "status": "landed",
        "departure": {
            "iataCode": "JFK",
            "icaoCode": "KJFK",
            "terminal": "8",
            "gate": "1",
            "scheduledTime": "2018-10-23T11:00:00.000",
            "estimatedTime": "2018-10-23T10:50:00.000",
            "actualTime": "2018-10-23T10:50:00.000",
            "estimatedRunway": "2018-10-23T11:05:00.000",
            "actualRunway": "2018-10-23T11:05:00.000"
        },
        "arrival": {
            "iataCode": "SFO",
            "icaoCode": "KSFO",
            "terminal": "2",
            "gate": "58A",
            "baggage": "2",
            "scheduledTime": "2018-10-23T14:23:00.000",
            "estimatedTime": "2018-10-23T14:05:00.000",
            "actualTime": "2018-10-23T14:05:00.000",
            "estimatedRunway": "2018-10-23T13:57:00.000",
            "actualRunway": "2018-10-23T13:57:00.000"
        },
        "airline": {
            "name": "British Airways",
            "iataCode": "BA",
            "icaoCode": "BAW"
        },
        "flight": {
            "number": "4347",
            "iataNumber": "BA4347",
            "icaoNumber": "BAW4347"
        },
        "codeshared": {
            "airline": {
                "name": "American Airlines",
                "iataCode": "AA",
                "icaoCode": "AAL"
            },
            "flight": {
                "number": "179",
                "iataNumber": "AA179",
                "icaoNumber": "AAL179"
            }
        }
    },
    {
        "type": "arrival",
        "status": "landed",
        "departure": {
            "iataCode": "FRA",
            "icaoCode": "EDDF",
            "terminal": "1",
            "gate": "B46",
            "scheduledTime": "2018-10-23T08:35:00.000",
            "estimatedTime": "2018-10-23T08:34:00.000",
            "actualTime": "2018-10-23T08:34:00.000",
            "estimatedRunway": "2018-10-23T08:51:00.000",
            "actualRunway": "2018-10-23T08:51:00.000"
        },
        "arrival": {
            "iataCode": "JFK",
            "icaoCode": "KJFK",
            "terminal": "4",
            "scheduledTime": "2018-10-23T11:10:00.000",
            "estimatedTime": "2018-10-23T10:52:00.000",
            "actualTime": "2018-10-23T10:52:00.000",
            "estimatedRunway": "2018-10-23T10:34:00.000",
            "actualRunway": "2018-10-23T10:34:00.000"
        },
        "airline": {
            "name": "Singapore Airlines",
            "iataCode": "SQ",
            "icaoCode": "SIA"
        },
        "flight": {
            "number": "26",
            "iataNumber": "SQ26",
            "icaoNumber": "SIA26"
        }
    }
];

const cityData = {
    "cityId": "1",
    "nameCity": "Anaa",
    "codeIataCity": "AAA",
    "codeIso2Country": "PF",
    "nameTranslations": "Anaa,Anaa,????,?????,??",
    "latitudeCity": "-17.05",
    "longitudeCity": "-145.41667",
    "timezone": "Pacific/Tahiti",
    "GMT": "-10",
    "geonameId": "0"
};

const countryData = {
    "countryId": "1",
    "nameCountry": "Andorra",
    "codeIso2Country": "AD",
    "codeIso3Country": "AND",
    "numericIso": "20",
    "nameTranslations": "Андорра,An đô ra,Andorra,อันดอร์รา,安道爾,Andorra,Andorra,Андорра,Ανδόρα,안도라,安道 尔,安道爾,アンドラ,Andorra,Andorra,Andorra,Andorre,Andorra,Andorra,Andora,Andorra,Andora,Andora,Andora,أندور,Andorra,安道尔,Андорра,Andorre,Andorra,Andorra,ประเทศอันดอร์รา",
    "population": "84000",
    "capital": "Andorra la Vella",
    "continent": "EU",
    "nameCurrency": "Euro",
    "codeCurrency": "EUR",
    "codeFips": "AN",
    "phonePrefix": "376"
};

const weatherData = {
    "coord": {
        "lon": -84.39,
        "lat": 33.75
    },
    "weather": [
        {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 287.15,
        "pressure": 1024,
        "humidity": 62,
        "temp_min": 284.15,
        "temp_max": 290.15
    },
    "visibility": 16093,
    "wind": {
        "speed": 1.16,
        "deg": 115.004
    },
    "clouds": {
        "all": 1
    },
    "dt": 1540251300,
    "sys": {
        "type": 1,
        "id": 749,
        "message": 0.0039,
        "country": "US",
        "sunrise": 1540295336,
        "sunset": 1540335256
    },
    "id": 4180439,
    "name": "Atlanta",
    "cod": 200
};
