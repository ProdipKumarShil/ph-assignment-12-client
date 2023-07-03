import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/router'
import axios from 'axios'
import AuthProvider from './provider/AuthProvider'

axios.defaults.baseURL = 'https://server-side-two-black.vercel.app/'
axios.interceptors.request.use(request => {
  // console.log('from main.jsx', request)
  return request
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
