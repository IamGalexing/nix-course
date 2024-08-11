import { Route, Routes } from 'react-router-dom'
import { Sidebar } from './components/SideBar'
import { Home } from './pages/Home'
import { Favorites } from './pages/Favorites'
import { NotFound } from './pages/NotFound'

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/favorites" element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
