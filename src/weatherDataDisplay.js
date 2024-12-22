import snowIcon from './images/snow.svg';
import rainIcon from './images/rain.svg';
import windIcon from './images/wind.svg';
import partlyCloudyDayIcon from './images/partly-cloudy-day.svg';
import fogIcon from './images/fog.svg';
import clearNightIcon from './images/clear-night.svg';
import clearDayIcon from './images/clear-day.svg';
import partlyCloudyNightIcon from './images/partly-cloudy-night.svg';
import cloudyIcon from './images/cloudy.svg';


class WeatherDataDisplay {
    static #currentWeatherData;
    static sevenDayView = document.querySelector('div.seven-day-view');
    static oneDayView = document.querySelector('div.one-day-view');

    static setWeatherData(weatherData) {
         this.#currentWeatherData = weatherData;
         console.log(this.#currentWeatherData);
    }

    static display7DayView() {

        let weatherLocation = document.querySelector("h1.location");
        weatherLocation.textContent = this.#currentWeatherData.location;

        console.log(this.sevenDayView);
        this.sevenDayView.classList.remove("hidden");
        this.oneDayView.classList.add('hidden');

        while(this.sevenDayView.lastChild !== weatherLocation) {
            this.sevenDayView.removeChild(this.sevenDayView.lastChild);
        }

        console.log(this.#currentWeatherData);

        this.#currentWeatherData.next6days.forEach((day) => {
            console.log(day);
            this.sevenDayView.appendChild(DayRowMaker.makeDayRow(day));
        })
    }

    static display1DayView() {

    }
}

class DayRowMaker {
    static makeDayRow(dayData) {
        let dayRow = document.createElement('div');
        dayRow.classList.add('day-row');

        let dayRowDate = document.createElement('h1');
        dayRowDate.classList.add('day-row-date');
        dayRowDate.textContent = dayData.date;

        dayRow.appendChild(dayRowDate);

        let dayRowIcon = document.createElement('img');
        dayRowIcon.classList.add('day-row-icon');
        switch(dayData.icon) {
            case 'snow':
                dayRowIcon.src = snowIcon;
                break;

            case 'rain':
                dayRowIcon.src = rainIcon;
                break;

            case 'fog':
                dayRowIcon.src = fogIcon;
                break;
            
            case 'wind':
                dayRowIcon.src = windIcon;
                break;

            case 'cloudy':
                dayRowIcon.src = cloudyIcon;
                break;

            case 'partly-cloudy-day':
                dayRowIcon.src = partlyCloudyDayIcon;
                break;

            case 'partly-cloudy-night':
                dayRowIcon.src = partlyCloudyNightIcon;
                break;

            case 'clear-day':
                dayRowIcon.src = clearDayIcon;
                break;

            case 'clear-night':
                dayRowIcon.src = clearNightIcon;
                break;
        }

        dayRow.appendChild(dayRowIcon);

        let dayRowConditions = document.createElement('h1');
        dayRowConditions.classList.add('day-row-conditions');
        dayRowConditions.textContent = dayData.conditions;

        dayRow.appendChild(dayRowConditions);

        let dayRowTemps = document.createElement('div');
        dayRowTemps.classList.add('day-row-temps');

        let maxTemp = document.createElement('p');
        let minTemp = document.createElement('p');

        minTemp.textContent = dayData.minTemp;
        maxTemp.textContent = dayData.maxTemp;

        dayRowTemps.appendChild(minTemp);
        dayRowTemps.appendChild(maxTemp);

        dayRow.appendChild(dayRowTemps);

        let dayRowPrecip = document.createElement('h1');
        dayRowPrecip.classList.add('day-row-precip');
        dayRowPrecip.textContent = dayData.precip;

        dayRow.appendChild(dayRowPrecip);

        return dayRow;
    }
}

export { WeatherDataDisplay };

