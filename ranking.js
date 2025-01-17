const cities = [
  
    { name: 'New Delhi', aqi: 250, status: 'Hazardous', description: 'Heavy industrial activity and vehicular emissions contribute to severe air pollution levels.', level: 'hazardous' },
    { name: 'Lahore', aqi: 230, status: 'Hazardous', description: 'Rapid urbanization, coupled with agricultural burning and industrial emissions, causes high pollution.', level: 'hazardous' },
    { name: 'Dhaka', aqi: 220, status: 'Poor', description: 'Construction and vehicular emissions combined with low winds contribute to the city’s pollution.', level: 'poor' },
    { name: 'Karachi', aqi: 210, status: 'Poor', description: 'Rapid population growth and industrial emissions make Karachi one of the most polluted cities.', level: 'poor' },
    { name: 'Beijing', aqi: 200, status: 'Moderate', description: 'Despite efforts to curb pollution, Beijing still struggles with emissions from factories and traffic.', level: 'moderate' },
    { name: 'Cairo', aqi: 190, status: 'Moderate', description: 'Dust storms, vehicle emissions, and burning of agricultural waste cause high pollution levels.', level: 'moderate' },
    { name: 'Jakarta', aqi: 180, status: 'Moderate', description: 'Industrialization, deforestation, and high levels of vehicle emissions contribute to air pollution.', level: 'moderate' },
    { name: 'Mumbai', aqi: 175, status: 'Poor', description: 'Massive traffic congestion, industrial activity, and construction projects lead to high pollution.', level: 'poor' },
    { name: 'Bangkok', aqi: 170, status: 'Poor', description: 'Urban sprawl, traffic congestion, and industrialization contribute to the city’s poor air quality.', level: 'poor' },
    { name: 'Manila', aqi: 165, status: 'Moderate', description: 'High traffic and industrial emissions, combined with a tropical climate, exacerbate pollution.', level: 'moderate' },
    { name: 'Mexico City', aqi: 160, status: 'Moderate', description: 'Topography and vehicular emissions contribute to persistent smog problems.', level: 'moderate' },
    { name: 'São Paulo', aqi: 150, status: 'Moderate', description: 'Traffic and industrial activity contribute to air quality concerns in this mega-city.', level: 'moderate' },
    { name: 'Lima', aqi: 140, status: 'Moderate', description: 'Vehicle emissions and industrial activity impact air quality, compounded by geographical constraints.', level: 'moderate' },
    { name: 'Los Angeles', aqi: 130, status: 'Moderate', description: 'Despite improvements, vehicle emissions and industrial activity contribute to smog.', level: 'moderate' },
    { name: 'London', aqi: 120, status: 'Moderate', description: 'Diesel emissions and construction activities are primary contributors to air pollution.', level: 'moderate' },
    { name: 'Paris', aqi: 110, status: 'Moderate', description: 'Vehicle emissions and heating systems impact air quality, particularly in winter.', level: 'moderate' },
    { name: 'Berlin', aqi: 100, status: 'Good', description: 'Clean energy policies have reduced pollution, but traffic remains a concern.', level: 'good' },
    { name: 'Sydney', aqi: 90, status: 'Good', description: 'Generally good air quality, though occasional bushfires increase pollution temporarily.', level: 'good' },
    { name: 'Tokyo', aqi: 85, status: 'Good', description: 'Advanced technology and stringent regulations have significantly improved air quality.', level: 'good' },
    { name: 'Toronto', aqi: 80, status: 'Good', description: 'Effective urban planning and low industrial emissions keep pollution levels low.', level: 'good' },
    { name: 'San Francisco', aqi: 75, status: 'Good', description: 'Wind patterns help reduce pollution, though wildfires occasionally cause spikes.', level: 'good' },
    { name: 'Cape Town', aqi: 70, status: 'Good', description: 'Low industrial activity and good wind circulation contribute to clean air.', level: 'good' },
    { name: 'Oslo', aqi: 65, status: 'Good', description: 'Sustainable urban policies and reliance on renewable energy keep air quality excellent.', level: 'good' },
    { name: 'Helsinki', aqi: 60, status: 'Good', description: 'Clean energy and low traffic congestion maintain healthy air quality.', level: 'good' },
    { name: 'Stockholm', aqi: 55, status: 'Good', description: 'A focus on green technologies and public transportation keeps pollution low.', level: 'good' },
    { name: 'Reykjavik', aqi: 50, status: 'Good', description: 'Geothermal energy and low population density contribute to excellent air quality.', level: 'good' },
    { name: 'Vienna', aqi: 45, status: 'Good', description: 'Sustainable policies and reliance on public transportation ensure clean air.', level: 'good' },
    { name: 'Zurich', aqi: 40, status: 'Good', description: 'Clean energy and efficient urban planning keep pollution minimal.', level: 'good' },
    { name: 'Singapore', aqi: 35, status: 'Good', description: 'Strict environmental policies and urban greenery contribute to good air quality.', level: 'good' },
    { name: 'Dubai', aqi: 30, status: 'Good', description: 'Desert climate and low industrial activity contribute to relatively clean air.', level: 'good' },
    { name: 'Moscow', aqi: 25, status: 'Good', description: 'Large green spaces and low vehicle density maintain good air quality.', level: 'good' },
    { name: 'Osaka', aqi: 20, status: 'Good', description: 'Stringent air quality regulations and technological advancements help reduce pollution.', level: 'good' },
    { name: 'Seoul', aqi: 15, status: 'Good', description: 'Despite population density, proactive environmental measures keep pollution low.', level: 'good' },
    { name: 'Perth', aqi: 10, status: 'Good', description: 'Natural geography and low emissions ensure clean air.', level: 'good' },
    { name: 'Melbourne', aqi: 5, status: 'Good', description: 'Consistently good air quality due to low emissions and effective urban planning.', level: 'good' },
    { name: 'Hong Kong', aqi: 180, status: 'Moderate', description: 'High population density and industrial activities contribute to air pollution.', level: 'moderate' },
    { name: 'Kolkata', aqi: 200, status: 'Poor', description: 'Vehicle emissions and seasonal agricultural burning impact air quality.', level: 'poor' },
    { name: 'Chennai', aqi: 160, status: 'Moderate', description: 'Heavy traffic and construction contribute to air pollution.', level: 'moderate' },
    { name: 'Athens', aqi: 125, status: 'Moderate', description: 'Urban heat and traffic emissions contribute to smog.', level: 'moderate' },
    { name: 'Madrid', aqi: 95, status: 'Good', description: 'Urban green spaces and reduced traffic help maintain good air quality.', level: 'good' },
    { name: 'Buenos Aires', aqi: 105, status: 'Moderate', description: 'Vehicle emissions and urban development affect the air quality.', level: 'moderate' },
    { name: 'Baghdad', aqi: 245, status: 'Hazardous', description: 'Dust storms and industrial activity contribute to extremely poor air quality.', level: 'hazardous' },
      { name: 'Kabul', aqi: 240, status: 'Hazardous', description: 'Emissions from diesel generators and open waste burning cause severe pollution.', level: 'hazardous' },
      { name: 'Tehran', aqi: 235, status: 'Hazardous', description: 'Dense traffic and outdated vehicles are major contributors to air pollution.', level: 'hazardous' },
      { name: 'Ulaanbaatar', aqi: 225, status: 'Poor', description: 'Coal heating and vehicle emissions heavily impact air quality during winter.', level: 'poor' },
      { name: 'Hanoi', aqi: 215, status: 'Poor', description: 'Construction dust and motorbike emissions significantly degrade air quality.', level: 'poor' },
      { name: 'Ho Chi Minh City', aqi: 205, status: 'Poor', description: 'Traffic congestion and industrial zones result in high levels of pollution.', level: 'poor' },
      { name: 'Nairobi', aqi: 195, status: 'Moderate', description: 'Urban sprawl and unregulated industrial activity impact air quality.', level: 'moderate' },
      { name: 'Addis Ababa', aqi: 185, status: 'Moderate', description: 'Construction projects and growing vehicle usage contribute to air pollution.', level: 'moderate' },
      { name: 'Guangzhou', aqi: 175, status: 'Poor', description: 'Rapid industrialization and high traffic density cause poor air quality.', level: 'poor' },
      { name: 'Shenzhen', aqi: 165, status: 'Moderate', description: 'Proximity to manufacturing zones affects air quality, despite improvements.', level: 'moderate' },
      { name: 'Istanbul', aqi: 155, status: 'Moderate', description: 'Urban density and increasing vehicle numbers impact air quality.', level: 'moderate' },
      { name: 'Ankara', aqi: 150, status: 'Moderate', description: 'Seasonal pollution and heating fuel emissions reduce air quality in winter.', level: 'moderate' },
      { name: 'Riyadh', aqi: 145, status: 'Moderate', description: 'Desert dust and vehicle emissions contribute to moderate air quality issues.', level: 'moderate' },
      { name: 'Jeddah', aqi: 140, status: 'Moderate', description: 'Industrial activity and coastal climate affect air quality.', level: 'moderate' },
      { name: 'Tashkent', aqi: 135, status: 'Moderate', description: 'Heating systems and industrial zones impact winter air quality.', level: 'moderate' },
      { name: 'Bishkek', aqi: 130, status: 'Moderate', description: 'Pollution peaks during winter due to coal burning for heating.', level: 'moderate' },
      { name: 'Almaty', aqi: 125, status: 'Moderate', description: 'Mountain topography traps pollution from traffic and industry.', level: 'moderate' },
      { name: 'Colombo', aqi: 120, status: 'Moderate', description: 'Vehicular emissions and construction activities lead to air quality concerns.', level: 'moderate' },
      { name: 'Harare', aqi: 115, status: 'Moderate', description: 'Urbanization and unregulated industrial emissions impact air quality.', level: 'moderate' },
      { name: 'Santiago', aqi: 110, status: 'Moderate', description: 'Air pollution worsens in winter due to wood-burning stoves and vehicle emissions.', level: 'moderate' },
      { name: 'Kigali', aqi: 105, status: 'Moderate', description: 'Growing urbanization and construction activities increase air pollution.', level: 'moderate' },
      { name: 'Accra', aqi: 100, status: 'Good', description: 'Traffic congestion and open waste burning occasionally affect air quality.', level: 'good' },
      { name: 'Port-au-Prince', aqi: 95, status: 'Good', description: 'Open burning of trash and limited regulation impact urban air quality.', level: 'good' },
      { name: 'Kingston', aqi: 90, status: 'Good', description: 'Coastal winds help maintain relatively good air quality.', level: 'good' },
      { name: 'Casablanca', aqi: 85, status: 'Good', description: 'Proximity to the Atlantic Ocean keeps pollution levels manageable.', level: 'good' },
      { name: 'Quito', aqi: 80, status: 'Good', description: 'High altitude and moderate emissions contribute to good air quality.', level: 'good' },
      { name: 'Panama City', aqi: 75, status: 'Good', description: 'Low industrial activity and good ventilation help keep pollution low.', level: 'good' },
      { name: 'Bogotá', aqi: 70, status: 'Good', description: 'Mountain location helps disperse pollution despite vehicle emissions.', level: 'good' },
      { name: 'Kuala Lumpur', aqi: 65, status: 'Good', description: 'Frequent rain improves air quality, despite traffic congestion.', level: 'good' },
      { name: 'Havana', aqi: 60, status: 'Good', description: 'Low industrialization and ocean breezes maintain clean air.', level: 'good' },
      { name: 'Dakar', aqi: 55, status: 'Good', description: 'Seasonal dust storms affect air quality occasionally.', level: 'good' },
      { name: 'Monrovia', aqi: 50, status: 'Good', description: 'Moderate urbanization and ample vegetation contribute to good air quality.', level: 'good' },
      { name: 'Windhoek', aqi: 45, status: 'Good', description: 'Sparse population and low industrial activity ensure excellent air quality.', level: 'good' },
      { name: 'Canberra', aqi: 40, status: 'Good', description: 'Low emissions and efficient urban planning maintain clean air.', level: 'good' },
      { name: 'Auckland', aqi: 35, status: 'Good', description: 'Proximity to the ocean ensures consistent air quality.', level: 'good' },
      { name: 'Wellington', aqi: 30, status: 'Good', description: 'Strong winds and low emissions contribute to very clean air.', level: 'good' },
      { name: 'Brisbane', aqi: 25, status: 'Good', description: 'Effective environmental policies keep air pollution minimal.', level: 'good' },
      { name: 'Edinburgh', aqi: 20, status: 'Good', description: 'Green spaces and low vehicle emissions maintain good air quality.', level: 'good' },
      { name: 'Glasgow', aqi: 15, status: 'Good', description: 'Urban planning and renewable energy initiatives ensure clean air.', level: 'good' }
  
  

  ];
  
  function filterCities() {
    const searchTerm = document.getElementById('citySearch').value.toLowerCase();
    const filteredCities = cities.filter(city => city.name.toLowerCase().includes(searchTerm));
    displayCities(filteredCities);
  }
  
  function displayCities(cityList) {
    const cityListContainer = document.getElementById('cityList');
    cityListContainer.innerHTML = '';  // Clear previous results
  
    if (cityList.length === 0) {
      cityListContainer.innerHTML = '<p class="no-results">No cities found. Try again with different keywords.</p>';
    } else {
      cityList.forEach((city, index) => {
        const cityRow = document.createElement('div');
        cityRow.classList.add('city-row');
  
        const rankingCell = document.createElement('div');
        rankingCell.classList.add('city-cell');
        rankingCell.textContent = index + 1;
  
        const nameCell = document.createElement('div');
        nameCell.classList.add('city-cell', 'city-name');
        nameCell.textContent = city.name;
  
        const pollutionCell = document.createElement('div');
        pollutionCell.classList.add('city-cell', 'city-level');
        pollutionCell.textContent = `${city.aqi} AQI`;
  
        const statusCell = document.createElement('div');
        statusCell.classList.add('city-cell', 'city-status');
        statusCell.textContent = city.status;
  
        const descriptionCell = document.createElement('div');
        descriptionCell.classList.add('city-cell');
        descriptionCell.textContent = city.description;
  
        cityRow.appendChild(rankingCell);
        cityRow.appendChild(nameCell);
        cityRow.appendChild(pollutionCell);
        cityRow.appendChild(statusCell);
        cityRow.appendChild(descriptionCell);
  
        cityListContainer.appendChild(cityRow);
      });
    }
  }
  
  // Initialize city list
  displayCities(cities);
  