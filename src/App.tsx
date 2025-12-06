import { useState } from 'react'
import Login from './Login'
import Profile from './Profile'
import './index.css'

function App() {
  // Check URL for nologin parameter
  const searchParams = new URLSearchParams(window.location.search)
  const skipLogin = searchParams.get('nologin') === 'true'

  const [isAuthenticated, setIsAuthenticated] = useState(skipLogin)

  const handleLogin = () => {
    setIsAuthenticated(true)
  }

  if (isAuthenticated) {
    return <Profile />
  }

  return <Login onLogin={handleLogin} />
}

export default App
