import Button from './components/Button'

function App() {
  const handleButtonClick = (event) => {
    alert(`You clicked on ${event.target.textContent}`)
  }

  return (
    <div>
      <Button onClick={handleButtonClick}>Button 1</Button>
      <Button onClick={handleButtonClick}>Button 2</Button>
      <Button onClick={handleButtonClick}>Button 3</Button>
    </div>
  )
}

export default App
