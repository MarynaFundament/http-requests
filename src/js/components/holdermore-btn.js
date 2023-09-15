
export default class PlaceHolderService {
page = 1
count = 2
   
    fetchResult() {
      return fetch(`https://jsonplaceholder.typicode.com/photos?_limit=${this.count}&_page=${this.page}`)
        .then((response) => response.json())
        // .then(res => console.log(res));
    }


    
  }

