async function loadWeather(){

  const weatherBox =
  document.getElementById("weatherBox");

  if(!weatherBox) return;

  weatherBox.innerHTML =
  "Loading weather...";

  try{

    const response =
    await fetch(

      "https://api.open-meteo.com/v1/forecast?latitude=28.61&longitude=77.20&current_weather=true"

    );

    const data =
    await response.json();

    const weather =
    data.current_weather;

    weatherBox.innerHTML = `

      <p>🌡 Temperature: ${weather.temperature}°C</p>

      <p>🌬 Wind Speed: ${weather.windspeed} km/h</p>

      <p>🧭 Wind Direction: ${weather.winddirection}°</p>

      <p>⏰ Updated Live</p>

    `;

  }

  catch(error){

    weatherBox.innerHTML =
    "Weather unavailable";

  }

}

loadWeather();