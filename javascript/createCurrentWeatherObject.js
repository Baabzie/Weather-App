export function createCurrentWeatherObject(weatherData) {
    const currentWeatherObject = {
        temp: weatherData.current_weather.temperature,
        weathercode: weatherData.current_weather.weathercode,
        windSpeed: weatherData.current_weather.windspeed,
    }
    return currentWeatherObject;
}