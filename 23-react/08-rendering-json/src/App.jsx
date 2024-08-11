import { useState, useEffect } from 'react'
import Card from './Card'
import db from '../data.json'
import './App.css'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    setData([...db])
  }, [])

  return (
    <div className="cards">
      {data.map((card) => (
        <Card key={card.id} cardData={card} />
      ))}
    </div>
  )
}

export default App
