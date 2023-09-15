export default class UnsplashApi{

    #KEY = 'oWleK0zt6aVNxCPl4-jOES6fzc_KJruN8fKwFnBBUrw'
    #URL = 'https://api.unsplash.com'

    query = null
    page = 10
    per_page=10

    
    fetchFunc(){

        const searchParams = new URLSearchParams({
            query: this.query, 
            page: this.page, 
            client_id:this. #KEY
        })
       

        // ?client_id=${this.#KEY}

        return fetch(`${this.#URL}/search/photos?${searchParams}&${this.per_page}`)
        .then(result => result.json())
        // .then(r => console.log(r))
        .catch(error => console.error(error));
    }
    
   
}

