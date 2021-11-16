import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Main from './pages/Main'

function App() {
  return (
    <Router className="App">
      <main>
        <Routes>
          <Route exact path="/" element={<Main />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
