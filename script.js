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
  
  // Fetch AQI data for a location (latitude, longitude)
  function fetchAQIData(lat, lon) {
    const apiKey = 'your_openweathermap_api_key'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const aqi = data.list[0].main.aqi;
        const pm25 = data.list[0].components.pm2_5;
        const pm10 = data.list[0].components.pm10;
        const no2 = data.list[0].components.no2;
        const so2 = data.list[0].components.so2;
        const locationName = data.city.name || 'Unknown Location';
  
        // Update AQI data on the page
        document.getElementById('pm25').textContent = `${pm25} µg/m³`;
        document.getElementById('pm10').textContent = `${pm10} µg/m³`;
        document.getElementById('no2').textContent = `${no2} ppb`;
        document.getElementById('so2').textContent = `${so2} ppb`;
  
        // Display AQI status
        let aqiStatus = '';
        switch (aqi) {
          case 1:
            aqiStatus = 'Good';
            break;
          case 2:
            aqiStatus = 'Fair';
            break;
          case 3:
            aqiStatus = 'Moderate';
            break;
          case 4:
            aqiStatus = 'Poor';
            break;
          case 5:
            aqiStatus = 'Very Poor';
            break;
          default:
            aqiStatus = 'Unknown';
        }
        document.getElementById('aqi-status').textContent = `AQI: ${aqiStatus} (${aqi})`;
  
        // Display location name
        document.getElementById('search-result').textContent = `Location: ${locationName}`;
  
        // Display a bar graph for the past 24 hours
        fetchPollutionHistory(lat, lon);
  
        // Update map with a marker for the location
        updateMap(lat, lon);
      })
      .catch(error => {
        console.error('Error fetching AQI data:', error);
        alert('Error fetching AQI data. Please try again later.');
      });
  }
  
  // Fetch the pollution data for the last 24 hours
  function fetchPollutionHistory(lat, lon) {
    const apiKey = 'your_openweathermap_api_key';
    const url = `https://api.openweathermap.org/data/2.5/air_pollution/history?lat=${lat}&lon=${lon}&start=1683585600&end=1683672000&appid=${apiKey}`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const times = [];
        const pm25Values = [];
        const pm10Values = [];
  
        data.forEach((entry) => {
          times.push(new Date(entry.timestamp * 1000).toLocaleTimeString());
          pm25Values.push(entry.components.pm2_5);
          pm10Values.push(entry.components.pm10);
        });
  
        // Create the bar chart
        createBarChart(times, pm25Values, pm10Values);
      })
      .catch(error => console.error('Error fetching pollution history:', error));
  }
  
  // Create the bar chart for pollution levels
  function createBarChart(times, pm25Values, pm10Values) {
    const ctx = document.getElementById('aqi-bar-chart').getContext('2d');
    const chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: times,
        datasets: [{
          label: 'PM2.5 (µg/m³)',
          data: pm25Values,
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        }, {
          label: 'PM10 (µg/m³)',
          data: pm10Values,
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            max: 200
          }
        }
      }
    });
  }
  
  // Function to handle search for a location
  function searchLocation() {
    const location = document.getElementById('location-input').value;
    const apiKey = 'your_openweathermap_api_key'; // Replace with your OpenWeatherMap API key
    const geoUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;
  
    fetch(geoUrl)
      .then(response => response.json())
      .then(data => {
        const lat = data.coord.lat;
        const lon = data.coord.lon;
        fetchAQIData(lat, lon);
      })
      .catch(error => {
        console.error('Error fetching location data:', error);
        alert('Error fetching location. Please try again.');
      });
  }
  
  // Initialize the map with a default location
  function updateMap(lat, lon) {
    const map = L.map('map').setView([lat, lon], 13);
  
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  
    L.marker([lat, lon]).addTo(map)
      .bindPopup('Location: ' + lat + ', ' + lon)
      .openPopup();
  }


  // Sample AQI Data (Replace with actual API data)
const aqiData = {
    "2024-12-01": 35,
    "2024-12-02": 120,
    "2024-12-03": 50,
    "2024-12-04": 80,
    "2024-12-05": 180,
    "2024-12-06": 55,
    "2024-12-07": 200,
    "2024-12-08": 90,
    "2024-12-09": 70,
    // More data...
  };
  
  let currentMonth = new Date().getMonth();
  let currentYear = new Date().getFullYear();
  
  // Function to get AQI category class
  function getAQIClass(aqi) {
    if (aqi <= 50) return 'qi-good';
    if (aqi <= 100) return 'qi-moderate';
    if (aqi <= 150) return 'qi-poor';
    if (aqi <= 200) return 'qi-very-poor';
    return 'qi-hazardous';
  }
  
  // Generate the calendar for the current month and year
  function generateCalendar(month, year) {
    const monthYearDisplay = document.getElementById('calendar-month-year');
    const calendarDaysContainer = document.querySelector('.calendar-days');
    
    // Set month and year display
    monthYearDisplay.textContent = `${new Date(year, month).toLocaleString('default', { month: 'long' })} ${year}`;
    
    // Get first and last day of the month
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    
    // Clear previous days
    calendarDaysContainer.innerHTML = '';
  
    // Generate empty slots for the days before the first day of the month
    for (let i = 0; i < firstDay.getDay(); i++) {
      const emptySlot = document.createElement('div');
      calendarDaysContainer.appendChild(emptySlot);
    }
  
    // Generate days of the month
    for (let i = 1; i <= lastDay.getDate(); i++) {
      const date = new Date(year, month, i);
      const dateString = date.toISOString().split('T')[0];
      const dayElement = document.createElement('div');
      
      // Assign AQI class based on the data
      const aqi = aqiData[dateString] || 0;
      const aqiClass = getAQIClass(aqi);
      dayElement.className = `calendar-day ${aqiClass}`;
      dayElement.textContent = i;
      
      // Add click event for AQI info
      dayElement.addEventListener('click', () => {
        alert(`AQI for ${dateString}: ${aqiData[dateString] || 'No data available'}`);
      });
      
      calendarDaysContainer.appendChild(dayElement);
    }
  }
  
  // Previous month button functionality
  document.getElementById('prev-month').addEventListener('click', () => {
    if (currentMonth === 0) {
      currentMonth = 11;
      currentYear -= 1;
    } else {
      currentMonth -= 1;
    }
    generateCalendar(currentMonth, currentYear);
  });
  
  // Next month button functionality
  document.getElementById('next-month').addEventListener('click', () => {
    if (currentMonth === 11) {
      currentMonth = 0;
      currentYear += 1;
    } else {
      currentMonth += 1;
    }
    generateCalendar(currentMonth, currentYear);
  });
  
  // Initialize calendar for current month
  generateCalendar(currentMonth, currentYear);
  
  