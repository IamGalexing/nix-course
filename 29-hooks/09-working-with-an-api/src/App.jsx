import { useState, useEffect } from 'react'
import { Card } from './components/Card/Card'
import { fetchRandomUsers } from './api/fetchRandomUsers'

function App() {
  const [users, setUsers] = useState([])
  const [buttonClicked, setButtonClicked] = useState(true)

  useEffect(() => {
    if (buttonClicked) {
      const fetchData = async () => {
        try {
          const data = await fetchRandomUsers()
          setUsers(data)
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error('Error fetching data:', error.message)
        }
      }

      fetchData()
    }

    setButtonClicked(false)
  }, [buttonClicked])

  return (
    <div className="app">
      <button className="btn" onClick={() => setButtonClicked(true)}>
        Search
      </button>
      <div className="card-wrapper">
        {users.map((user) => (
          <Card
            key={user.id}
            name={user.name}
            userName={user.username}
            email={user.email}
            phone={user.phone}
            website={user.website}
          />
        ))}
      </div>
    </div>
  )
}

export default App
