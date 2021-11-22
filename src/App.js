import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Main from './pages/Main'
import About from './pages/About'

function App() {
  return (
    <Router className="App">
      <main>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="about" element={<About />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
