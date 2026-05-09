document.addEventListener("DOMContentLoaded", getWeather);

async function getWeather() {
  const weatherBox =
    document.getElementById("weatherBox");

  if (!weatherBox) return;

  try {
    const { LAT, LON } = APP_CONFIG.WEATHER;

    const res = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}&current=temperature_2m,relative_humidity_2m,wind_speed_10m`
    );

    const data = await res.json();
    const current = data.current;

    weatherBox.innerHTML =
      `${current.temperature_2m}°C • Humidity ${current.relative_humidity_2m}%`;
  } catch (err) {
    weatherBox.textContent =
      "Weather unavailable";
  }
}