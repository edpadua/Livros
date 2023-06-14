import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import BookList from './Components/BookList'
import Search from './Components/Search'
import Navbar from './Components/Navbar'

function App() {
  

  return (
    <>
      <Navbar/>
      <BookList/>
    </>
  )
}

export default App
