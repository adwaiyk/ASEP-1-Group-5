// Theme toggle function
function toggleTheme() {
  const body = document.body;
  const button = document.getElementById('theme-toggle');

  if (body.classList.contains('dark')) {
    body.classList.remove('dark');
    body.classList.add('light');
    button.classList.remove('dark');
    button.classList.add('light');
    button.textContent = '🌙'; // Light theme icon
  } else {
    body.classList.remove('light');
    body.classList.add('dark');
    button.classList.remove('light');
    button.classList.add('dark');
    button.textContent = '🌞'; // Dark theme icon
  }
}




const menuBtn = document.getElementById('menu-btn');
const sidebar = document.getElementById('sidebar');

menuBtn.addEventListener('click', () => {
if (sidebar.style.left === '0px') {
  sidebar.style.left = '-280px';
} else {
  sidebar.style.left = '0px';
}
});

/* script.js
document.getElementById("searchButton").addEventListener("click", fetchWeatherData);

function fetchWeatherData() {
  const city = document.getElementById("cityInput").value;
  if (!city) {
    alert("Please enter a city name!");
    return;
  }

  const apiKey = "YOUR_API_KEY"; // Replace with your weather API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      document.getElementById("temperature").textContent = `${data.main.temp} °C`;
      document.getElementById("humidity").textContent = `${data.main.humidity} %`;
      document.getElementById("windSpeed").textContent = `${data.wind.speed} m/s`;
      document.getElementById("pressure").textContent = `${data.main.pressure} hPa`;
      document.getElementById("uvIndex").textContent = "N/A"; // Add UV index logic if available
      document.getElementById("cloudCover").textContent = `${data.clouds.all} %`;
      document.getElementById("visibility").textContent = `${data.visibility / 1000} km`;
      document.getElementById("precautionText").textContent = getPrecautions(data.weather[0].main);
    })
    .catch(err => {
      alert("City not found or API limit exceeded!");
      console.error(err);
    });
}

function getPrecautions(weatherType) {
  switch (weatherType.toLowerCase()) {
    case "clear":
      return "Wear sunglasses and apply sunscreen!";
    case "rain":
      return "Carry an umbrella and avoid low-lying areas.";
    case "snow":
      return "Dress warmly and drive carefully!";
    case "thunderstorm":
      return "Stay indoors and avoid using electrical appliances.";
    default:
      return "Check local weather updates for precautions.";
  }
}*/
