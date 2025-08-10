import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router'
import { Toaster } from 'react-hot-toast'
import MyRoutes from './config/MyRoutes.jsx'
import { ContextProvider } from './context/MyContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Toaster />
      <ContextProvider>
        <MyRoutes />
      </ContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
