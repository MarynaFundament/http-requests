


const weatherFormEl = document.querySelector('.js-search-form')
// console.log(weatherFormEl)
const weatherWrapperEl = document.querySelector('.weather_wrapper')
// console.log(weatherWrapperEl)

import {fetchWeatherByCityName} from './weather-api'
// console.log(fetchWeatherByCityName)

const convertSecondsToHoursAndMinutes = seconds => {
    const date = new Date(seconds * 1000);
    return `${date.getHours()}:${date.getMinutes()}`;
}

const handleWeatherFormSubmit = (event) => {
  event.preventDefault();

const searchCity = event.target.elements.user_country.value.trim()
// console.log(searchCity)


fetchWeatherByCityName(searchCity)
.then(data => {
    const newData ={
        ...data, 
        sys:{
            sunrise: convertSecondsToHoursAndMinutes (data.sys.sunrise),
            sunset: convertSecondsToHoursAndMinutes (data.sys.sunset)
             
        }
    }
    return newData
})
// .then(data => console.log(data))
.then(data => createMarkup(data)) // Викликайте createMarkup тут і передайте дані
.catch(error => {
    weatherWrapperEl.innerHTML = 'Seeked city doesnt exist';
    console.error(error);
});
}

weatherFormEl.addEventListener('submit', handleWeatherFormSubmit)


    function createMarkup(weatherData) {
        console.log(weatherData)
    
        const cityName = weatherData.name;
        const temp = weatherData.main.temp;
        const feelsLike = weatherData.main.feels_like;
        const sunrise = weatherData.sys.sunrise;
        const sunset = weatherData.sys.sunset;
        const clouds = weatherData.clouds.all;
        
        const markup = `<div class="weather_card">
                <h2 class="city-name">${cityName}</h2>
                <ul class="weather-info list">
                    <li class="weather-info-item">
                        <p class="temp"> Температура: ${temp} &#8451;</p>
                    </li>
                    <li class="weather-info-item">
                        <p class="feels-like-temp"> Відчувається як: ${feelsLike} &#8451;</p>
                    </li>
                    <li class="weather-info-item">
                        <p>Схід сонця: ${(sunrise)}</p>
                    </li>
                    <li class="weather-info-item">
                        <p>Захід сонця: ${(sunset)}</p>
                    </li>
                    <li class="weather-info-item">
                        <p>Хмарність: ${clouds}%</p>
                    </li>
                </ul>
            </div>`;
    
        weatherWrapperEl.innerHTML = markup;
    }
    

