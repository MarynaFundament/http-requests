import PlaceHolderService from './components/holdermore-btn.js'

const form = document.querySelector('.js-holdersearch-form')
const loadmoreBtn = document.querySelector('.secondbtn-holdersprimary')
const wrapperEl = document.querySelector('.js-holder-container')

// console.log(form)
// console.log(searchBtn)
// console.log(loadmoreBtn)
// console.log(wrapperEl)

const placeHolderService = new PlaceHolderService();

placeHolderService.fetchResult()
.then(createMarkup)

loadmoreBtn.addEventListener('click', handleDownloadMore)

function handleDownloadMore(){

placeHolderService.page += 1
placeHolderService.fetchResult()
.then(createMarkup)

}


function createMarkup(searchResult){
    const markup = searchResult.map(({url, title, id}) => {
        return `<li>
          <article>
            <img src="${url}" alt="not found" width="480">
            <h2>${title}</h2>
            <p>ID ${id}</p>
          </article>
      </li>`;
    })

    wrapperEl.insertAdjacentHTML('beforeend', markup);

}





