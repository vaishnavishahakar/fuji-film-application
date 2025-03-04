import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: "Home"
  },
  {
    path: "/about",
    element: "About"
  },
  {
    path: "/contact",
    element: "Contact"
  }
]);
root.render(<RouterProvider router={router}/>);


