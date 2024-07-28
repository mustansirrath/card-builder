import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Mainpage from './Components/Mainpage.jsx'
import Secondcard from './Components/Secondcard.jsx'
import Thirdcard from './Components/Thirdcard.jsx'
import Card from './Components/Card.jsx'

const firstRouter = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: "",
        element: <Mainpage/>
      },
      {
        path: "card1",
        element: <Secondcard/>
      },
      {
        path: "card2",
        element: <Card/>
      },
      {
        path: "card3",
        element: <Thirdcard/>
      },
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={firstRouter}/>
  </React.StrictMode>,
)
