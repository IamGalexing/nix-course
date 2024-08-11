import { Route, Routes } from 'react-router-dom'
import { ItemList } from './Pages/ItemList'
import { ItemPage } from './Pages/ItemPage'
import { NotFoundPage } from './Pages/NotFoundPage'

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<ItemList />} />
      <Route path="/:id" element={<ItemPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
