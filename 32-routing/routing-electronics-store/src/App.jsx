import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { ContactsPage } from './pages/ContactsPage'
import { ElectronicsPage } from './pages/ElectronicsPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { Sidebar } from './components/Sidebar'
import { PrivateRoute } from './routes/PrivateRoute'
import { ElectronicsSubCategory } from './components/ElectronicsSubCategory'
import { ItemCard } from './components/ItemCard'
import { ListCards } from './components/ListCards'

function App() {
  const [isAuth, setIsAuth] = useState(false)

  const handleIsAuth = () => {
    setIsAuth(!isAuth)
  }

  return (
    <div className="app-container">
      <Sidebar isAuth={isAuth} setIsAuth={handleIsAuth} />
      <Routes>
        <Route index element={<HomePage />} />
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/contacts" element={<ContactsPage />} />
        <Route
          exact
          path="/electronics"
          element={
            <PrivateRoute isAuth={isAuth}>
              <ElectronicsPage />
            </PrivateRoute>
          }
        >
          <Route path=":category" element={<ElectronicsSubCategory />}>
            <Route path=":mark" element={<ListCards />} />
            <Route path=":mark/:model" element={<ItemCard />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}
export default App
