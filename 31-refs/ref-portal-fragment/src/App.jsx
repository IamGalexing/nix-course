import { useState } from 'react'
import { Modal } from './components/Modal'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleModalVisibility = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <>
      <button onClick={handleModalVisibility}>Show modal</button>
      {isModalOpen && <Modal onClose={handleModalVisibility} />}
    </>
  )
}

export default App
