import React from 'react'
import ReactDOM from 'react-dom/client'
import { router, createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import App from './App.jsx'

const router = createBrowserRouter([{
  path: "/",
  element: <NavBar />
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
