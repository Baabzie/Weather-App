export async function createWeatherArray(weatherData, timeData) {
      console.log(timeData);
      console.log(weatherData);
      let weatherArray = timeData.week.map((day, i) => 
            ({...day,
                  daily: {
                  precipitationSum: weatherData.daily.precipitation_sum[i],
                  tempMax: weatherData.daily.temperature_2m_max[i],
                  tempMin: weatherData.daily.temperature_2m_min[i],
                  weathercode: weatherData.daily.weathercode[i],
            },
      })
      )
      console.log(weatherArray);
}