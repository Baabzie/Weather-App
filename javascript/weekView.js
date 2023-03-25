import { weatherIcon } from "./weatherIcon.js";

export function createWeekView(currentWeatherObject, weatherArray) {
    const weekViewDiv = document.getElementById("weekViewDiv");

    // Creating content to show current weather.
    console.log(currentWeatherObject)
    weekViewDiv.innerHTML = `
    <div id="currentDiv">
        <div class="current-view">
            <h1>Your position</h1>
            <div class="date-info-div">
                <h2>${weatherArray[0].name}</h2>
                <h2>${weatherArray[0].date.day}/${weatherArray[0].date.month}</h2>
            </div>
            <div class="weather-info-div">
                <img class="current-icon" src="/content/icons/${weatherIcon(currentWeatherObject.weathercode)}.svg" alt="" srcset="">
                <p>${currentWeatherObject.temp}°</p>
            </div>
        </div>
    </div>
    `


    //Creating list with buttons for every weekday and a header to them.
    const weekDiv = document.createElement("div");
    weekDiv.setAttribute("id", "weekDiv");
    weekViewDiv.append(weekDiv);
    const weekDayList = document.createElement("div");
    weekDayList.classList.add("week-day-list");
    weekDiv.append(weekDayList);
    //First creating the "header"
    weekDayList.innerHTML = `
    <div class="week-day-header">
        <p>Weather</p>
        <div>
            <p>High</p>
            <p>Low</p>
        </div>
    </div>
    `
    //Creating a button for every weekday.
    weatherArray.forEach((weekDay) => {
        const dayButton = document.createElement("button");
        dayButton.classList.add("week-day-btn");
        dayButton.innerHTML = `
        <div class="date-info-div">
            <h2>${weekDay.name}</h2>
            <h3>${weekDay.date.day}/${weekDay.date.month}</h3>
        </div>
        <div class="weather-info-div">
            <img class="week-day-icon" src="/content/icons/${weatherIcon(weekDay.daily.weathercode)}.svg" alt="${weatherIcon(weekDay.daily.weathercode)}">
            <div class="week-day-temperature-div">
                <h3>${weekDay.daily.tempMax}°</h3>
                <h3>${weekDay.daily.tempMin}°</h3>
            </div>
        </div>
        `
        weekDayList.append(dayButton);
    })
}