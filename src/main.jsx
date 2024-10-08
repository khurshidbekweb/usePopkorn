import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import StarResult from './Star.jsx'

function Test(){
  const [movie, setMovie] = useState(0)
  return (
    <dir>
      <StarResult color="blue" maxReting={10} size={15} movie={setMovie}/>
      <p>Movie result {movie} </p>
    </dir>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
     <App /> 
  </React.StrictMode>,
)
