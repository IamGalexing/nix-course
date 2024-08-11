import { useState } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import SideBar from './components/SideBar'
import { Public } from './components/Public'
import { PrivateRoute } from './components/PrivateRoute'
import { Private } from './components/Private'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLoginClick = () => {
    setIsLoggedIn(!isLoggedIn)
  }

  return (
    <div className="app-container">
      <SideBar />
      <button className="login-button" onClick={handleLoginClick}>
        {isLoggedIn ? 'Log out' : 'Log in'}
      </button>
      <Routes>
        <Route exact path="/" element={<Public />} />
        <Route
          exact
          path="/private"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <Private />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}
export default App
