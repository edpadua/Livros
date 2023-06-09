import React from 'react'

import styles from "./BookList.module.sass"

import { useDispatch, useSelector } from "react-redux" ;

import { useEffect } from 'react';


import { findBooks } from '../../Store/reducers/books';

import Book from '../Book';

function BookList() {

  const dispatch = useDispatch();
  const books = useSelector(state => state.books);

  useEffect(() => {
    dispatch(findBooks("Lord of the Rings"));
  }, [dispatch]);

  return (
    <div>
        {console.log("livros",books)}
        {books.map((book, index) => (
                        <li className={styles.categoria_item} key={index} >
                             <Book book={book}/>
                           
                        </li>
        ))}
    </div>
  )
}

export default BookList
