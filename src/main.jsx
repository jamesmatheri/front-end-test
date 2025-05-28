import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'
import Main from './pages/Main'
import Login from './pages/Login'
import Register from './pages/Register'
import AuthProvider from './componets/AuthenticationContext';
import ProtectedRoute from './componets/ProtectedRoute';


const router = createBrowserRouter([
  {
    path: "/",
    element: (

      <ProtectedRoute>
        <Main />
      </ProtectedRoute>
    ),
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
  
  <AuthProvider>
       <RouterProvider router={router} />
  </AuthProvider>

  </StrictMode>
);




















