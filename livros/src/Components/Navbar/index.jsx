import React from 'react'

import { FaBook } from "react-icons/fa"

import styles from "./Navbar.module.sass"

import Search from '../Search'

function Navbar() {
    return (
        <nav className={styles.cabecalho}>
            <FaBook style={{ fontSize: '30px', color: "#ffffff" }}  />
            <div className={styles.links}>
                <div>
                    <Link to='/' className={classNames(styles.link, {
                        [styles.selected]: location.pathname === '/'
                    })}>
                        Início
                    </Link>
                </div>
            </div>
            <div className={styles.pesquisa}>
                <Search />
            </div>
            <div className={styles.icones}>
                <Link to="/carrinho">
                    {location.pathname === '/carrinho'
                        ? <IoCartSharp {...iconeProps} />
                        : <IoCartOutline {...iconeProps} />
                    }
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
