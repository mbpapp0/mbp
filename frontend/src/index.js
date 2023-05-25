import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { AuthConxtextProvider } from './context/AuthContext'
import { BrowserRouter } from 'react-router-dom'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthConxtextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthConxtextProvider>
  </React.StrictMode>
)
