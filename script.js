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





 /*// Initialize Leaflet Map for Global View
 const map = L.map('map', {
  maxBounds: [[-85, -180], [85, 180]], // Prevent infinite scrolling
  maxBoundsViscosity: 1.0
}).setView([20, 0], 2); // Default view centered on the world

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add AQICN World Map as a Layer
L.tileLayer('https://tiles.aqicn.org/tiles/usepa-aqi/{z}/{x}/{y}.png?token=a0f8eed864ef244f62572c4611beaca3e7ea889c', {
  attribution: 'Air Quality Data © AQICN.org',
  maxZoom: 12
}).addTo(map);

let userLat, userLon;

// Get User's Location
function getAccurateLocation(retries = 5) {
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
          (position) => {
              const accuracy = position.coords.accuracy;
              userLat = position.coords.latitude;
              userLon = position.coords.longitude;

              if (accuracy <= 15 || retries <= 0) {
                  map.setView([userLat, userLon], 15);

                  const userMarker = L.marker([userLat, userLon]).addTo(map);
                  userMarker.bindPopup(`You are here! (Accuracy: ${accuracy.toFixed(2)} meters)`).openPopup();

                  // Add accuracy range circle
                  L.circle([userLat, userLon], {
                      color: 'blue',
                      fillColor: '#a4c8ff',
                      fillOpacity: 0.2,
                      radius: accuracy
                  }).addTo(map);

                  displayAQIWidgets(userLat, userLon);
              } else {
                  setTimeout(() => getAccurateLocation(retries - 1), 2000);
              }
          },
          (error) => {
              console.error("Geolocation error:", error);
              alert("Failed to retrieve location. Defaulting to global view.");
          },
          { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
      );
  } else {
      alert("Geolocation is not supported by your browser.");
  }
}

getAccurateLocation();

// Display AQI Widgets for Nearby Cities
function displayAQIWidgets(lat, lon) {
  const widgetContainer = document.getElementById('widget-container');
  const cities = ['here']; // Example city names

  widgetContainer.innerHTML = ''; // Clear existing widgets

  cities.forEach(city => {
      const widgetDiv = document.createElement('div');
      widgetDiv.className = 'widget';
      widgetDiv.innerHTML = `<iframe src="https://aqicn.org/here/#!gl!18.5729024!73.8131968" title="AQI for ${city}" aria-label="AQI for ${city}"></iframe>`;
      widgetContainer.appendChild(widgetDiv);
  });
}

// Back to Home Button Functionality
document.getElementById('home-btn').addEventListener('click', () => {
  if (userLat && userLon) {
      map.setView([userLat, userLon], 15);
  } else {
      alert("User location not available yet.");
  }
});*/