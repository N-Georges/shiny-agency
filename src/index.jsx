import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Error from './components/Error'
import Freelances from './pages/Freelances'
import Results from './components/Results'
import Home from './pages/Home'
import Survey from './pages/Survey'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/survey/:questionNumber" element={<Survey />} />
        <Route exact path="/results" element={<Results />} />
        <Route exact path="/freelances" element={<Freelances />} />
        <Route exact path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

