import { useState } from 'react'
import { Button } from './components/Button'

function App() {
  const [backgroundColor, setBackgroundColor] = useState('black')

  const handleColorChange = (color) => {
    setBackgroundColor(color)
  }

  return (
    <>
      <div style={{ backgroundColor: backgroundColor, color: 'white', padding: '10px', marginBottom: '20px' }}>
        {backgroundColor}
      </div>
      <Button color="red" onClick={handleColorChange} />
      <Button color="blue" onClick={handleColorChange} />
    </>
  )
}

export default App
