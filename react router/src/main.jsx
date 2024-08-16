import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Github from './components/Github/Github.jsx'
import User from './components/User/User.jsx'

const router = createBrowserRouter(
  [
  {
  path: '/',
  element: <Layout/>,
  children:[
    {
      path:'',
      element:<Home/>
    },
    {
      path: 'about',
      element:<About/>
    },
    {
      path: 'contact-us',
      element:<Contact/>
    },
    {
      path: 'user/:id',
      element:<User/>
    },
    {
      path: 'github',
      // loader:{GithubInfoLoder},
      element:<Github/>
    }
  ]
}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
