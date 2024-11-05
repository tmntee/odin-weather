import './style.css';

async function getWeatherJSON(location) {
    try {
        let weatherResponse = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' + location + '?unitGroup=us&key=UTQY6LQMD6PSSZN8KF95JCD89&contentType=json');
        console.log(weatherResponse);

        let weatherJSON = await weatherResponse.json();
        console.log(weatherJSON);
        return weatherJSON;
    } catch {
        console.log('something went wrong');
    }
}

async function processWeatherJSON(json) {
    let weatherData = {
        location: json.resolvedAddress,
        next6days: [],
    }

    let makeDayObject = function(day) {
        let dayObject = {
            conditions: day.conditions,
            icon: day.icon,
            description: day.description,
            temperature: day.temp,
            minTemp: day.tempmin,
            maxTemp: day.tempmax,
            feelsLike: day.feelslike,
            windSpeed: day.windspeed,
            humidity: day.humidity,
            sunrise: day.sunrise,
            sunset: day.sunset,
            precip: day.precip
        }
        return dayObject;
    }

    weatherData.next6days = await new Promise(function(resolve, reject) {
        let daysArray = [];

        for (let i = 0; i < 7; i++) {
            console.log(json.days[i]);
            daysArray.push(makeDayObject(json.days[i]));
            if (daysArray[i] === null) {
                console.log('something went wrong');
                reject('missing day!');
            }
        }
        resolve(daysArray);
        console.log('finished');
    })
    return weatherData;
}

async function getWeatherData(location) {
    let weatherJSON = await getWeatherJSON(location);
    let weatherData = await processWeatherJSON(weatherJSON);
    console.log(weatherData);
}

getWeatherData('columbus');

let userSearchBtn = document.querySelector('input.submit-btn');
let userSearch = document.querySelector('input.user-search');

userSearchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
})
