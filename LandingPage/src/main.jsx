import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from '../../react router/src/Layout.jsx'
import Button from './Button'
import Company from './Company'
import Feature from './Feature'
import Learn from './Learn'
import MarketPlace from './MarketPlace'
import Product from './Product'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    chidren: [
      {
        path: '/feature',
        element: <Feature />,
        },
        {
          path: '/product',
          element: <Product />,
        },
        {
          path: '/company',
          element: <Company />,
        },
        {
          path: '/market-place',
          element: <MarketPlace />,
        },
        {
          path: '/learn',
          element: <Learn />,
        },
        {
          path: '/login',
          element: <Login/>
        }


    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
