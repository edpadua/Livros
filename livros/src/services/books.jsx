import instance from "../common/config/api"

const booksService = {
  buscar: async () => {
    const resp = await instance.get('/books');
    console.log("books",resp.data);
    return resp.data;
  }
}

export default booksService;