# Custo-Weather

Custo-Weather is a simple weather application that allows users to check the current weather conditions for any location. The app fetches real-time weather data using the OpenWeather API and displays information such as temperature, weather conditions, humidity, and wind speed.

## Features
- 🌦️ Fetches real-time weather data based on user input.
- 🌡️ Displays temperature in Celsius.
- 💨 Provides wind speed in Km/H.
- 💦 Shows humidity percentage.
- 🌤️ Dynamically updates weather icons based on conditions.
- ❌ Displays an error message if the city is not found.

## Technologies Used
- **HTML** - Structuring the application.
- **CSS** - Styling and responsiveness.
- **JavaScript** - Handling API requests and UI updates.
- **OpenWeather API** - Fetching weather data.

## File Structure
```
Custo-Weather/
│── index.html           # Main HTML file
│── assets/
│   ├── styles/         # Contains CSS files
│   │   ├── style.css   # Main stylesheet
│   ├── scripts/        # Contains JavaScript files
│   │   ├── script.js   # Main JavaScript file
│   ├── images/         # Weather-related images
│   ├── icons/          # Icons for wind, humidity, etc.
│── README.md           # Project documentation
```

## How to Use
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/Custo-Weather.git
   ```
2. Open the `index.html` file in a browser.
3. Enter a city name in the search box and press the search button or hit "Enter."
4. The app will fetch and display weather data for the specified location.

## API Configuration
The application uses the OpenWeather API. If you plan to modify or extend the project, you may need to replace the API key in `script.js`:
```js
const apiKey = "your_api_key_here"; // Replace with your OpenWeather API key
```

## Screenshots
| Weather Display | Error Message |
|----------------|--------------|
| ![Weather](assets/images/weather-sample.png) | ![Error](assets/images/error-sample.png) |

## Contributions
Contributions are welcome! Feel free to fork the repository, create a feature branch, and submit a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Happy Coding! 🚀

