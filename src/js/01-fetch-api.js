/*
 * - HTTP-запросы в браузере
 *  - Fetch API
 *  - Владка Network
 *  - HTTP-методы
 *  - Заголовки
 *  - MIME-типы
 *  - Параметры запроса
 * - Документация REST API
 * - Обработка 404 с fetch
 * - Аутентификация
 * - Библиотеки-обёртки
 * - https://pokeapi.co/
 */

const pokemonFormEl = document.querySelector('.js-search-form')
const pokemonWrapperEl = document.querySelector('.js-card-container')
const submitBtn = document.querySelector('.btn-primary')
// console.log(pokemonFormEl)
// console.log(pokemonWrapperEl)
// console.log(submitBtn)

import '../css/common.css';




pokemonFormEl.addEventListener('submit', handleDinosaurSearch)

function handleDinosaurSearch(event){
event.preventDefault();

const searchRes = event.target.elements.query.value.trim()
 
function fetchpokemonById(argument){
  return fetch (`https://pokeapi.co/api/v2/pokemon/${searchRes}`)
 .then(response => response.json())
 }

fetchpokemonById()
.then(createMarkup)
.catch(error => console.log(error))



}



function createMarkup(pokemonData){

    const { name,sprites,weight,height,ability} = pokemonData;
    // console.log(pokemonData);

    const markup = `<div class="card">
    <div class="card-img-top">
      <img src="${sprites.front_default}" alt="${name}"> 
    </div>
    <div class="card-body">
      <h2 class="card-title">Імʼя: ${name}</h2>
      <p class="card-text">Вага: ${weight}</p>
      <p class="card-text">Ріст:${height}</p>
  
    </div>
  </div>`

  pokemonWrapperEl.innerHTML= markup

  // src="${sprites.front_default}
  
      // <p class="card-text"><b>Умения</b></p>
      // // <ul class="list-group"></ul>
      // //   <li class="list-group-item">${ability}</li>
    
      // // </ul>
}







// const url = 'https://newsapi.org/v2/everything?q=cars'
// const options = {
//   headers: {
//     Authorization: 'fe04efdf84594838934256a6f8030665'
//   }
// }


// fetch (url, options)
// .then(r  => r.json())
// .then(console.log)


// // Practice 

// fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => {

//         if(!response.ok){
//           throw new Error(response.status)
//         }

//        return response.json()
        
//       })
//       .then(json => console.log(json))
//       .catch (err => {
//         console.warn(err) 
//       })








