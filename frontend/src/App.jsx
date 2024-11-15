import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import Add from './components/Add'
import Nav from './components/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Nav /> <br />

    <Routes>
    <Route path='/' element={<Home />}></Route> 
    <Route path='/add' element={<Add />}></Route>
      </Routes>
    </>
  )
}

export default App
