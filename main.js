import { getWeather } from "./javascript/getWeather.js";
import { getTime } from "./javascript/getTime.js";
import { createCurrentWeatherObject } from "./javascript/createCurrentWeatherObject.js";
import { createWeatherArray } from "./javascript/createWeatherArray.js";
import { createWeekView } from "./javascript/weekView.js";
import { getYourPositionData } from "./javascript/getYourPositonData.js";

// Function that tries to find location of users device on visit to the site.
const onVisit = async () => {
    navigator.geolocation.getCurrentPosition(success, error);
}

// If "onVisit" is successfull in finding the users device:
async function success(pos) {
    const crd = pos.coords;
    const position = await getYourPositionData(crd.latitude, crd.longitude);
    createWeatherData(position, crd.latitude, crd.longitude);
}

// If "onVisit" is not successfull in finding the users device:
function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
    console.log(`We can't find your location!`);
}

const createWeatherData = async (position, latitude, longitude) => {
    const weatherData = await getWeather(latitude, longitude);
    const timeData = getTime(weatherData);
    const currentWeatherObject = createCurrentWeatherObject(weatherData, timeData)
    const weatherArray = createWeatherArray(weatherData, timeData);
    console.log(weatherArray);
    createWeekView(position,currentWeatherObject, weatherArray);
}

onVisit();
