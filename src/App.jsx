import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ProfileDetails } from './LinkSharingApp/assets/profileDetails/ProfileDetails'
import { Dashboard } from './LinkSharingApp/Dashboard/dashboard'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import { SignUp } from './LinkSharingApp/SignUp Page/SignUp'
import { LoginPage } from './LinkSharingApp/LoginPage/LoginPage'

function App() {


  const router =createBrowserRouter([
    {
      path : "/dashboard",
      element:<Dashboard />
    },
    {
        path : "/",
        element: <LoginPage />
    },
    {
      path: "/register",
      element :<SignUp />
    }
  ])

  return (
    <ProfileDetails>
      <RouterProvider router ={router}>

      </RouterProvider>
    </ProfileDetails>
  )
}

export default App
