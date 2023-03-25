export function createCurrentWeatherObject(weatherData, timeData) {
    const currentWeatherObject = {
        temp: weatherData.current_weather.temperature,
        weathercode: weatherData.current_weather.weathercode,
        windSpeed: weatherData.current_weather.windspeed,
        time: timeData.currentTime,
    }
    return currentWeatherObject;
}