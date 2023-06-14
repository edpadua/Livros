import { configureStore } from '@reduxjs/toolkit';
import booksSlice from "./books";
import searchSlice from './search';


const store = configureStore({
  reducer: {
   
    books: booksSlice,
    search: searchSlice,
  }
});

export default store;