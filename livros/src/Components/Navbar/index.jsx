import React from 'react'

import { FaBook } from "react-icons/fa"

import styles from "./Navbar.module.sass"

import Search from '../Search'

function Navbar() {
    return (
        <nav className={styles.cabecalho}>
            <FaBook style={{ fontSize: '30px', color: "#ffffff" }} />


            <Search />

            <div className={styles.icones}>

            </div>
        </nav>
    )
}

export default Navbar
