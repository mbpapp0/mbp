import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { AuthConxtextProvider } from './context/AuthContext'
import { BrowserRouter } from 'react-router-dom'


function Te() {
  return(
    <h2>does this fucking mic work</h2>
)
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthConxtextProvider>
      <BrowserRouter>
        <Te />
      </BrowserRouter>
    </AuthConxtextProvider>
  </React.StrictMode>
)
