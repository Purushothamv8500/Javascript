const API_KEY = 'your_api_key'; // Replace with your OpenWeatherMap API key

async function getWeather() {
    const city = document.getElementById('city').value;
    const weatherResult = document.getElementById('weatherResult');

    if (!city) {
        weatherResult.innerText = 'Please enter a city name.';
        return;
    }

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        
        if (!response.ok) {
            throw new Error('City not found');
        }

        const data = await response.json();
        weatherResult.innerHTML = `
            Weather in ${data.name}: ${data.weather[0].description}<br>
            Temperature: ${data.main.temp}°C<br>
            Humidity: ${data.main.humidity}%
        `;
    } catch (error) {
        weatherResult.innerText = error.message;
    }
}
