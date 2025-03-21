import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './home/Home.jsx'
import Dashboard from './dashboard/Dashboard.jsx'
// import { ClerkProvider } from '@clerk/clerk-react'
import LoginSignUp from './auth/sign-In/LoginSignUp.jsx'
// import AllRecipePage from './pages/AllRecipePage.jsx'
import ContactUs from './pages/ContactUs.jsx'
import Recipe from './Recipe/recipe/Recipe.jsx'
import Categories from './Recipe/recipe-categories/Categories.jsx'
import AddRecipe from './Recipe/add-recipe/AddRecipe.jsx'
import AllRecipe from './Recipe/allRecipe/AllRecipe.jsx'
import RecipeCategory from './Recipe/recipe-categories/RecipeCategory.jsx'
import ForgotPassword from './auth/sign-In/ForgotPassword.jsx'
import { ToastContainer } from 'react-toastify';
import Profile from './pages/Profile.jsx'
import AboutUs from './pages/AboutUs.jsx'
import Search from './Recipe/searchRecipe/Search.jsx'
import { motion } from "motion/react";


// Import your Publishable Key
// const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY


const router = createBrowserRouter([
  {

    element: <App />,
    children: [
      
      {
        path: '/dashboard',
        element: <Dashboard />
      }
    ]
  },
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/auth/signIn-Login',
    element: <LoginSignUp />
  },{
    path:'/contact-us',
    element:<ContactUs/>
  },{
    path:'/recipe/:name',
    element:<Recipe/>
  },{
    path:'/Categories',
    element:<Categories/>
  }
  ,{
    path:'/add-recipe',
    element:<AddRecipe/>
  },
  {
    path:'/recipe',
    element:<AllRecipe/>
  },
  {
    path:'/recipe-category/recipe',
    element:<RecipeCategory/>
  },
  {
    path:'/forgot-password',
    element:<ForgotPassword/>
  },{
    path:'/profile',
    element:<Profile/>
  },{
    path:'/about-us',
    element:<AboutUs/>
  },{
    path:'/search',
    element:<Search/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer />
  
      <RouterProvider router={router} />
  
  </StrictMode>
)
