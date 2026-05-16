function loadWeather(){

  const weatherBox =
  document.getElementById(
    "weatherBox"
  );

  const fullWeather =
  document.getElementById(
    "fullWeather"
  );

  const weatherData = `

    <h3>
      🌤 Sunny
    </h3>

    <br>

    <p>
      🌡 Temperature:
      29°C
    </p>

    <br>

    <p>
      💧 Humidity:
      62%
    </p>

    <br>

    <p>
      🌬 Wind Speed:
      12 km/h
    </p>

    <br>

    <p>
      🌾 Good weather for irrigation.
    </p>

  `;

  if(weatherBox){

    weatherBox.innerHTML =
    weatherData;

  }

  if(fullWeather){

    fullWeather.innerHTML =
    weatherData;

  }

}

window.addEventListener(
  "load",
  loadWeather
);