export function createWeatherArray(weatherData, timeData) {

      let allDayHours = [];

      timeData.week.forEach((day) => {
            let hours = [];
            weatherData.hourly.time.forEach((hour, i) => {
                  if (day.date.fulldate === hour.substr(0, 10)) {
                        let hour = {
                              apparentTemp: weatherData.hourly.apparent_temperature[i],
                              rain: weatherData.hourly.rain[i],
                              temp: weatherData.hourly.temperature_2m[i],
                              weathercode: weatherData.hourly.weathercode[i],
                              windDirection: weatherData.hourly.winddirection_10m[i],
                              windSpeed: weatherData.hourly.windspeed_10m[i],
                              pressure: weatherData.hourly.pressure_msl[i],
                              humidity: weatherData.hourly.relativehumidity_2m[i],
                              visibility: weatherData.hourly.visibility[i],
                        };
                        hours.push(hour);
                  }
            })
            allDayHours.push(hours);
      })

      let weatherArray = timeData.week.map((day, i) => 
            ({...day,
            daily: {
                  precipitationSum: weatherData.daily.precipitation_sum[i],
                  tempMax: weatherData.daily.temperature_2m_max[i],
                  tempMin: weatherData.daily.temperature_2m_min[i],
                  weathercode: weatherData.daily.weathercode[i],
            },
            hourly: allDayHours[i],
            })
      )
      return weatherArray;
}