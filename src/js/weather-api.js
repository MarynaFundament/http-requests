const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'a1f446d78926e645ec409a2ea0b5f127';


export const fetchWeatherByCityName = cityName => 
fetch(`${BASE_URL}?q=${cityName}&lang=en&units=metric&appid=${API_KEY}`)
.then(response => {
  if (!response.ok) {
    throw new Error(response.status);
  }
  return response.json();
})
// .then(json => console.log(json))
.catch(err => {
  console.warn(err);
});
