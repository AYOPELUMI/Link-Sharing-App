import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ProfileDetails } from './LinkSharingApp/assets/profileDetails/ProfileDetails'
import { Dashboard } from './LinkSharingApp/Dashboard/dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ProfileDetails>
    <Dashboard  />
    </ProfileDetails>
  )
}

export default App
