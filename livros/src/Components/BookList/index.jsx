import React from 'react'

import styles from "./BookList.module.sass"

import { useDispatch, useSelector } from "react-redux";

import { useEffect } from 'react';


import { findBooks } from '../../Store/reducers/books';

import Book from '../Book';

function BookList() {

    const dispatch = useDispatch();

    const search = useSelector(state => state.search);

    const books = useSelector(state => {
        const regexp = new RegExp(state.search, 'i');
        return {
            books: state.books.filter(book => book.volumeInfo.title.match(regexp))
        }
    });

    useEffect(() => {
        console.log("Search", search)
        dispatch(findBooks(search));
    }, [search, dispatch]);

    return (
        <div className={styles.book_list}>
            {console.log("livros map", books.books)}
            {console.log("array", Array.isArray(books))}
            {console.log("lenght", books.length)}
            {books.books ?

                (books.books.map((book, index) => (

                    <Book book={book} key={index} />


                ))) : (<>Não encontrado</>)

            }
        </div>
    )
}

export default BookList
