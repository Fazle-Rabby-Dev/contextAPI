import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NameContextProvider from './provider/NameContextProvider.jsx'

createRoot(document.getElementById('root')).render(

    <NameContextProvider>
      <App />
    </NameContextProvider>
)
