export default class NewsApiService {
    constructor(){
        this.searchRes = '';
        this.page = 1

    }

fetchArticles(){
// console.log(this)
const url = 'https://newsapi.org/v2/everything';
const key = '804bc0200109426fb85911ce598d0c70'

return fetch(`${url}?q=${this.searchRes}&apiKey=${key}&language=en&pageSize=5&page=${this.page}`)
    .then(r => r.json())
    // .then(art => console.log())
    .then(data => {
        this.page += 1
        
        return data.articles
    })
  
} 

resetPage(){
    this.page = 1
}

get query(){
    return this.searchRes
}

set query(newRes){
    this.searchRes = newRes;
}

}

