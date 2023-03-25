const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

export const getTime = (data) => {
    const locationTime = new Date(data.current_weather.time)
    const weekdayArray = [];
    
    data.daily.time.forEach((day) => {
        let obj = {
            name: weekday[new Date(day).getDay()],
            date: {
              day: new Date(day).getDate(),
              month: (new Date(day).getMonth()) + 1,
              year: new Date(day).getFullYear(),
              fulldate: ((new Date(day)).toISOString()).substr(0, 10),
            },
        }
        weekdayArray.push(obj);
    })
    
    let timeObj = {
        currentTime : (data.current_weather.time).substr(11, 2),     
        week: weekdayArray,
    }


    return timeObj;
}