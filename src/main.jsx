import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Home from './components/Home/Home.jsx';
import DefaultPage from './DefaultPage/DefaultPage.jsx';
import Friends from './components/Friends/Friends.jsx';
import FriendDetails from './components/FriendDetails/FriendDetails.jsx';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>Default page</div>,
//   },
//   {
//     path:"/about",
//     element:<About></About>
//   },
//   {
//     path:"/contact",
//     element:<Contact></Contact>
//   },
// ]);
const router =createBrowserRouter([
  {
    path:"/",
    element:<Home></Home>,
    children:[
      {
        path:"/",
        element:<DefaultPage></DefaultPage>
      },
      {
        path:"/friends",
        element:<Friends></Friends>,
        loader:() => fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path:'friend/:friendId',
        element: <FriendDetails></FriendDetails>
      },
      {
        path:"/about",
        element:<About></About>
      },
      {
        path:"/contact",
        element:<Contact></Contact>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
