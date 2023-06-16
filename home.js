const API_KEY = "a7357ba7dc401072ec850755133d744c";
const CITY_NAME = "Torekov";
const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}&units=metric`;

function fetchWeatherData() {
  return fetch(BASE_URL).then((response) => response.json());
}

function getWeatherIconClass(iconId) {
  const iconMapping = {
    "01d": "wi wi-day-sunny",
    "01n": "wi wi-night-clear",
    "02d": "wi wi-day-cloudy",
    "02n": "wi wi-night-cloudy",
    "03d": "wi wi-day-cloudy",
    "03n": "wi wi-night-cloudy",
    "04d": "wi wi-cloudy",
    "04n": "wi wi-cloudy",
    "09d": "wi wi-day-showers",
    "09n": "wi wi-night-showers",
    "10d": "wi wi-day-rain",
    "10n": "wi wi-night-rain",
    "11d": "wi wi-day-thunderstorm",
    "11n": "wi wi-night-thunderstorm",
    "13d": "wi wi-day-snow",
    "13n": "wi wi-night-snow",
    "50d": "wi wi-day-fog",
    "50n": "wi wi-night-fog"
  };

  return iconMapping[iconId] || "";
}

function setWeatherIcon(weatherData) {
  const iconId = weatherData.weather[0].icon;
  const iconClass = getWeatherIconClass(iconId);
  const weatherIconElement = document.getElementById("weather-icon");
  weatherIconElement.className = iconClass;
}

function displayTemperature(weatherData) {
  const temperature = weatherData.main.temp.toFixed(1);
  const temperatureElement = document.getElementById("temperature");
  temperatureElement.textContent = `${temperature}°C`;
}

function displayLocalTime(weatherData) {
  const timezoneOffset = weatherData.timezone;
  const clientTimezoneOffset = new Date().getTimezoneOffset() * 60;
  const localTime = new Date(
    new Date().getTime() + (timezoneOffset + clientTimezoneOffset) * 1000
  );
  const formattedLocalTime = localTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  });

  const localTimeElement = document.getElementById("local-time");
  localTimeElement.textContent = `${formattedLocalTime}`;
}

fetchWeatherData()
  .then((weatherData) => {
    setWeatherIcon(weatherData);
    displayTemperature(weatherData);
    displayLocalTime(weatherData); // Add this line
  })
  .catch((error) => console.error("Error fetching weather data:", error));

$("[scroll=lektion]").on("click", function () {
  $("#lektion").click();
});
