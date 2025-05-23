import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'
import Main from './pages/Main'
import Login from './pages/Login'
import Register from './pages/Register'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "login",
    element: <Login />,
  },
   {
    path: "register",
    element: <Register />,
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);




















