import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import uuid from 'react-uuid';
import booksService from '../../services/books';


const initialState = [];

export const findBooks = createAsyncThunk(
    'books/find',
    booksService.find
  )
  
  const booksSlice = createSlice({
    name: 'books',
    initialState: [],
    extraReducers: builder => {
      builder
      .addCase(
        findBooks.fulfilled,
        (state, { payload }) => {
          console.log('books loaded!');
          return payload;
        }
      )
      .addCase(
        findBooks.pending,
        (state, { payload }) => {
          console.log('load books');
        }
      )
      .addCase(
        findBooks.rejected,
        (state, { payload }) => {
          console.log('busca de produtos rejeitada!');
        }
      )
    }
  });




export default booksSlice.reducer;