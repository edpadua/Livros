import instance from "../common/config/api"

const booksService = {
  find: async (title) => {
    
   {/** const options = {
        method: 'GET',
        url: 'https://book-finder1.p.rapidapi.com/api/search',
        params: {
          title: title ,
          results_per_page: '25',
          page: '1'
        },
        headers: {
          'X-RapidAPI-Key': 'aa57a71a86msh797eb071c0f6057p1fdb5ejsn3d7fa6579a8a',
          'X-RapidAPI-Host': 'book-finder1.p.rapidapi.com'
        }
      };

      
    const resp = await instance.request(options);**/}
    const api_key=import.meta.env.VITE_API_KEY
    const url=`https://www.googleapis.com/books/v1/volumes?q=+${title}+&key=${api_key}+&maxResults=40`
    console.log("url",url);
    const resp = await instance.get(url);
        console.log("data",resp.data.items)
    
    return resp.data.items;
  }
}

export default booksService;