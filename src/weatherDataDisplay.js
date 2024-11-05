class WeatherDataDisplay {
    static #currentWeatherData;
    static oneDayView = true;
    static sevenDayView = false;

    static setWeatherData(weatherData) {
         this.#currentWeatherData = weatherData;
    }

    static displayWeatherData() {

    }
}

export { WeatherDataDisplay };