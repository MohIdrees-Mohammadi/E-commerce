import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import Layout from './Pages/Layout'
import AboutUs from './Pages/AboutUs'
import Shop from './Pages/Shop'
import Auth from './Pages/Auth'
import Contact from './Pages/Contact'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/auth",
        element: <Auth />
      }, 
      {
        path: "/shop",
        element: <Shop />

      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/about-us",
        element: <AboutUs />
      }
    ]
  }
])


const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App