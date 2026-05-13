async function loadWeather(){

  try{

    const response = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=23.2599&longitude=77.4126&current_weather=true"
    );

    const data = await response.json();

    const weather =
    data.current_weather;

    document.getElementById("weatherBox")
    .innerHTML = `

      <div class="weather-grid">

        <div class="weather-card">
          <h3>🌡 Temperature</h3>
          <p>${weather.temperature}°C</p>
        </div>

        <div class="weather-card">
          <h3>💨 Wind Speed</h3>
          <p>${weather.windspeed} km/h</p>
        </div>

        <div class="weather-card">
          <h3>🧭 Wind Direction</h3>
          <p>${weather.winddirection}°</p>
        </div>

        <div class="weather-card">
          <h3>⏰ Updated</h3>
          <p>${weather.time}</p>
        </div>

      </div>

    `;

  }

  catch(err){

    document.getElementById("weatherBox")
    .innerHTML =
    "Weather unavailable";

  }

}

loadWeather();