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
    weatherArray[dayIndex].hourly.forEach((hour, i) => {
        let hourDiv = document.createElement("div");
        hourDiv.classList.add("hour");
        hourDiv.innerHTML = `
            <span>${i}:00</span>
            <div class="info">
                <p>10</p>
                <p>3</p>
                <img class="hour-icon" src="content/icons/cloud-bolt.svg" alt="">
                <div class="temp">
                    <p>-4°</p>
                </div>
            </div>
        `
        dayList.append(hourDiv);
    })
}