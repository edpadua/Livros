import { configureStore } from '@reduxjs/toolkit';
import booksSlice from "./books";


const store = configureStore({
  reducer: {
   
    books: booksSlice,
   
  }
});

export default store;