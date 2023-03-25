export function createWeekView(weatherArray) {
    const weekViewDiv = document.getElementById("weekViewDiv");


    //Creating list with buttons for every weekday and a header to them.
    const weekDiv = document.createElement("div");
    weekDiv.setAttribute("id", "weekDiv");
    weekViewDiv.append(weekDiv);
    const weekDayList = document.createElement("div");
    weekDayList.classList.add("week-day-list");
    weekDiv.append(weekDayList);
    weekDayList.innerHTML = `
    <div class="week-day-header">
        <p>Weather</p>
        <div>
            <p>High</p>
            <p>Low</p>
        </div>
    </div>
    `

    weatherArray.forEach((weekDay) => {
        const dayButton = document.createElement("button");
        dayButton.classList.add("week-day-btn");
        dayButton.innerHTML = `
        <div class="date-info-div">
            <h2>${weekDay.name}</h2>
            <h3>${weekDay.date.day}/${weekDay.date.month}</h3>
        </div>
        <div class="weather-info-div">
            <img class="week-day-icon" src="/content/icons/snowflake.svg" alt="">
            <div class="week-day-temperature-div">
                <h3>${weekDay.daily.tempMax}°</h3>
                <h3>${weekDay.daily.tempMin}°</h3>
            </div>
        </div>
        `
        weekDayList.append(dayButton);
    })
}