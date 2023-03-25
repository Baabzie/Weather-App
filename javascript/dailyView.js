import { weatherIcon } from "./weatherIcon.js";

export function createDailyView(dayIndex, currentWeatherObject, weatherArray) {
    //Set the div for week view to empty to give the illusion of switching page.
    document.getElementById("weekViewDiv").innerHTML = "";
    
    const dayViewDiv = document.getElementById("dayViewDiv");
    //Creating h1 for day and then header.
    const dayList = document.createElement("div");
    dayList.classList.add("day-list");
    dayViewDiv.append(dayList);
    dayList.innerHTML = `
        <h1>${weatherArray[dayIndex].name}</h1>
            <div class="day-list-header">
                <span>Time</span>
                <div class="info">
                    <div class="wind">
                        <p>Wind</p>
                        <p>(m/s)</p>
                    </div>
                    <div class="rain">
                        <p>Rain</p>
                        <p>(mm)</p>
                    </div>
                    <p>Weather</p>
                    <p>Temp</p>
                </div>
            </div>
    `
    //Creating every hour.
    weatherArray[dayIndex].hourly.forEach((hour, i) => {
        //If its the same day as today, we will skipp already passed hours. Note to self: Maybe should use other loop as to not use "return".
        if ((currentWeatherObject.time > i) && (dayIndex === "0")) {
            return;
        };
        let hourDiv = document.createElement("div");
        //If the hour is a single digit we will add a "0" before to make it look better.
        let time = i.toString();
        if (time.length === 1){
            time = "0" + time;
        }
        hourDiv.classList.add("hour");
        hourDiv.innerHTML = `
            <span>${time}:00</span>
            <div class="info">
                <p>${Math.round(hour.windSpeed)}</p>
                <p>${Math.round(hour.rain)}</p>
                <img class="hour-icon" src="content/icons/${weatherIcon(hour.weathercode)}.svg" alt="${weatherIcon(hour.weathercode)}">
                <div class="temp">
                    <p>${Math.round(hour.temp)}°</p>
                </div>
            </div>
        `
        dayList.append(hourDiv);
    })
}