import UnsplashApi from './components/pictures.js'

const form = document.querySelector('.js-search-unsplashform')
const input = document.querySelector('.js-search-unsplashinput')
const submitBtn = document.querySelector('.search-unsplashbtn')
const wrapperEl = document.querySelector('.unsplash_wrapper')
// console.log(submitBtn)

const unsplashApi = new UnsplashApi()

form.addEventListener('submit', handleSearchResult)

function handleSearchResult(e){
    e.preventDefault()
 
    const searchResult = e.target.elements.search_result.value.trim()
    console.log(searchResult)

    unsplashApi.query = e.target.elements.search_result.value.trim() 
    unsplashApi.fetchFunc()
    .then(createMarkup)
    
}

function createMarkup(searchResult) {
    console.log(searchResult);

    const { results } = searchResult; // Отримуємо масив результатів

    // Створюємо змінну для зберігання всієї розмітки
    let allMarkup = '';

    results.forEach(({ urls, alt_description }) => {
        const markup = `<li class='gallery_item'>
            <img src="${urls.small}" alt="${alt_description}">
        </li>`;

        // Додаємо розмітку до загальної розмітки
        allMarkup += markup;
    });

    // Вставляємо всю розмітку одночасно
    wrapperEl.innerHTML = allMarkup;
}







