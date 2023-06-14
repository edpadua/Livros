import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import BookList from './Components/BookList'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

function App() {


  return (
    <>
      <Navbar />
      <div className='content'>
        <BookList />
      </div>

      <Footer />
    </>
  )
}

export default App
