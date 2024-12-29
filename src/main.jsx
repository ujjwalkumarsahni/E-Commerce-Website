import React from 'react'

import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Error from './components/Error/Error.jsx'
import Marketplace from './components/Marketplace/Marketplace.jsx'
import Account from './components/Account/Account.jsx'
import { ProductDetail } from './components/SingleProduct/ProductDetail.jsx'
import AddToCard from './components/AddToCard/AddToCard.jsx'
import AddToWish from './components/AddToWish/AddToWish.jsx'
import Checkout from './components/CheckOutPage/Checkout.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/marketplace",
        element: <Marketplace />
      },
      {
        path: "/account",
        element: <Account />
      },
      {
        path: "/product/:id",
        element: <ProductDetail />
      },
      {
        path: "/card",
        element: <AddToCard />
      },
      {
        path: "/wishlist",
        element: <AddToWish />
      },
      {
        path: "/checkout",
        element: <Checkout />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)