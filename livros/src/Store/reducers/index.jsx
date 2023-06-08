import { configureStore } from '@reduxjs/toolkit';
import categoriasSlice from "./books";


const store = configureStore({
  reducer: {
   
    books: booksSlice,
   
  }
});

export default store;