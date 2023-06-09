import instance from "../common/config/api"

const booksService = {
    find: async (title) => {

        const api_key = import.meta.env.VITE_API_KEY
        const url = `https://www.googleapis.com/books/v1/volumes?q=+${title}+&key=${api_key}+&maxResults=40`
        console.log("url", url);
        const resp = await instance.get(url);
        console.log("data", resp.data.items)

        return resp.data.items;
    }
}

export default booksService;