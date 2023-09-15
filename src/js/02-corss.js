/*
 * - Cross-Origin Resource Sharing (CORS)
 *  - https://pokeapi.co/
 *  - https://darksky.net/dev
 * - Proxy
 *  - Хранение API ключей и секретов
 *  - https://lpj-weather-service.herokuapp.com/
 */

import '../css/common.css';
import {NewsApiService}  from './components/load-more-btn.js'


const form = document.querySelector('.js-newssearch-form')
const searchBtn = document.querySelector('.btn-newsprimary')
const loadmoreBtn = document.querySelector('.secondbtn-newsprimary')
const wrapperEl = document.querySelector('.js-articles-container')

const newsApiService = new NewsApiService()

// console.log(form)
// console.log(searchBtn)
// console.log(loadmoreBtn)

// const url = 'https://newsapi.org/v2/everything';
// const key = '804bc0200109426fb85911ce598d0c70'


form.addEventListener('submit', handleInputForm)

function handleInputForm(e){
e.preventDefault()

newsApiService.query = e.target.elements.query.value.trim()
newsApiService.resetPage()
newsApiService.fetchArticles()
}

loadmoreBtn.addEventListener('click', handleLoadMore)

function handleLoadMore(){
newsApiService.fetchArticles()

}

function createMarkup(searchArticle){

  const markup = searchArticle.map(({ url, urlToImage, title, author, description }) => {
    return `<li>
        <article>
          <img src="${url}" alt="not found" width="50" >
          <h2>${title}</h2>
          <p>Posted by ${author}</p>
          <p>${description}</p>
        </article>
      </a>
    </li>`;
  });


wrapperEl.innerHTML = markup.join('')
}








