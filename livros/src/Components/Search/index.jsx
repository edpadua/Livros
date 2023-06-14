import React from 'react'

import { useSelector, useDispatch } from 'react-redux'; 

import { useEffect } from 'react';

import { changeSearch, resetSearch } from "../../Store/reducers/search"

import styles from "./Search.module.sass"

function Search() {

    const search = useSelector(state => state.search);
    const dispatch = useDispatch();
  
    useEffect(() => {
     
      dispatch(resetSearch()); 
    }, [dispatch])
  
 

  return (
    <div className={styles.search}>
       <input
        className={styles.input}
        placeholder="Digite o nome do livro"
        value={search}
        onChange={evento => dispatch(changeSearch(evento.target.value))}
      />
     
    </div>
   
  )
}

export default Search
