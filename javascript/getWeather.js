export async function getWeather(latitude, longitude) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=relativehumidity_2m,pressure_msl,visibility,temperature_2m,weathercode,apparent_temperature,rain,windspeed_10m,winddirection_10m&windspeed_unit=ms&daily=uv_index_max,winddirection_10m_dominant,temperature_2m_max,temperature_2m_min,weathercode,precipitation_sum&timezone=auto`;
    const res = await fetch(url);
    const data = await res.json();
    return data;
  }