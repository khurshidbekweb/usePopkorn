import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import StarResult from './Star.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StarResult maxReting={10} color="red" size={15}/>
    <StarResult maxReting={5} color="#FDE767" size={20} message={["Terrible","Bad", "Okay", "Goog", "Amezing"]}/>
    {/* <App /> */}
  </React.StrictMode>,
)
