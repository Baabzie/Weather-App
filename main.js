import { getWeather } from "./javascript/getWeather.js";
import { getTime } from "./javascript/getTime.js";
import { createWeatherArray } from "./javascript/createWeatherArray.js";

// Function that tries to find location of users device on visit to the site.
const onVisit = async () => {
    navigator.geolocation.getCurrentPosition(success, error);
}

// If "onVisit" is successfull in finding the users device:
async function success(pos) {
    const crd = pos.coords;
  
    createWeatherData(crd.latitude, crd.longitude);
}

// If "onVisit" is not successfull in finding the users device:
function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
    console.log(`We can't find your location!`);
}

const createWeatherData = async (latitude, longitude) => {
    const weatherData = await getWeather(latitude, longitude);
    const timeData = getTime(weatherData);
    console.log(createWeatherArray(weatherData, timeData));
}

onVisit();
