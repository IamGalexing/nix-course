import { Route, Routes } from 'react-router-dom'
import { UserPage } from './components/UserPage'
import { RegisterForm } from './components/RegisterForm'

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<RegisterForm />} />
      <Route path="/user" element={<UserPage />} />
    </Routes>
  )
}

export default App
