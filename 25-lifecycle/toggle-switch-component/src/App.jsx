import { useState } from 'react'
import ToggleSwitch from './components/ToggleSwitch'

function App() {
  const [isChecked, setIsChecked] = useState(false)

  const handleToggleSwitch = () => {
    setIsChecked(!isChecked)
  }

  return (
    <>
      <ToggleSwitch onToggle={handleToggleSwitch} />
      <p>Switch is {isChecked ? 'ON' : 'OFF'}</p>
    </>
  )
}

export default App
