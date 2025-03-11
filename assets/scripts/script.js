document.addEventListener('DOMContentLoaded', () => {
    const cont = document.querySelector('.container');
    const inputBox = cont.querySelector('.search-box .input-box');
    const searchBtn = cont.querySelector('.search-box .search-btn');
    const weatherImg = cont.querySelector('.weather-body .weather-img');
    const weatherTemp = cont.querySelector('.weather-body .weather-info .weather-temparature');
    const weatherDesc = cont.querySelector('.weather-body .weather-info .weather-description');
    const weatherHum = cont.querySelector('.weather-body .weather-details .weather-humidity #humidity');
    const weatherWind = cont.querySelector('.weather-body .weather-details .weather-wind #wind-speed');
    const weatherBody = cont.querySelector('.weather-body');
    const weatherErr = cont.querySelector('.weather-error');
  
    const weatherIcons = {
      Clouds: "assets/images/cloud.png",
      Clear: "assets/images/clear.png",
      Rain: "assets/images/rain.png",
      Mist: "assets/images/mist.png",
      Snow: "assets/images/snow.png"
    };
  
    const apiKey = "70c88da3173304683a870392cfc608ea";
  
    // ✅ Function to Fetch Weather Data
    const checkWeather = async (city) => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  
      try {  
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const weatherData = await response.json();
        return weatherData;
      } catch (error) {
        console.error(`Error fetching weather data for ${city}:`, error);
        return null;
      } 
    };
  
    // ✅ Function to Update UI with Weather Data
    const updateWeatherUI = (weatherData, city) => {
      if (!weatherData) {
        weatherBody.classList.add('hide');
        weatherErr.querySelector('p').textContent = `Could not get weather data for :- ${city}`;
        console.log(`Could not get weather data for ${city}`);
        weatherErr.classList.remove('hide');
    
        setTimeout(() => {
          weatherErr.classList.add('hide');
        }, 5000);
        return;
      }
  
      console.log(weatherData);
  
      weatherBody.classList.remove('hide');
  
      // 🌡️ Temperature
      weatherTemp.innerHTML = `${Math.round(weatherData.main.temp - 273.15)} <sup>°C</sup>`;
  
      // 🌥️ Weather Description
      weatherDesc.textContent = weatherData.weather[0]?.description || "N/A";
  
      // 💦 Humidity
      weatherHum.textContent = `${weatherData.main.humidity}%`;
  
      // 💨 Wind Speed (Converted to Km/H)
      weatherWind.textContent = `${(weatherData.wind.speed * 3.6).toFixed(2)} Km/H`;
  
      // 🌤️ Weather Icon
      const weatherCondition = weatherData.weather[0]?.main;
      weatherImg.src = weatherIcons[weatherCondition] || "assets/images/cloud.png";
    };
  
    // ✅ Function to Handle Search
    const handleSearch = async () => {
      const city = inputBox.value.trim();
      if (city === "") return;
  
      const weatherData = await checkWeather(city);
      updateWeatherUI(weatherData, city);
  
      inputBox.value = ""; // Clear input after search
    };
  
    // ✅ Event Listeners
    searchBtn.addEventListener('click', handleSearch);
    inputBox.addEventListener('keypress', (e) => {
      if (e.key === "Enter") handleSearch();
    });
  });
  