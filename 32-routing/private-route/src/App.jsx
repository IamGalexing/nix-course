import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Sidebar } from './components/Sidebar/Sidebar'
import { PrivateRoute } from './routes/PrivateRoute'
import { HomePage } from './components/HomePage'
import { ContactsPage } from './components/ContactsPage'
import { CartPage } from './components/CartPage'
import { NotFoundPage } from './components/NotFoundPage'

function App() {
  const [isAuth, setIsAuth] = useState(false)

  const handleIsAuth = () => {
    setIsAuth(!isAuth)
  }

  return (
    <div className="app-container">
      <Sidebar isAuth={isAuth} setIsAuth={handleIsAuth} />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/contacts" element={<ContactsPage />} />
        <Route
          exact
          path="/cart"
          element={
            <PrivateRoute isAuth={isAuth}>
              <CartPage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default App
