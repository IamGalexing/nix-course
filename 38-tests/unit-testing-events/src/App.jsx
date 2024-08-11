window.global ||= window
import { useState } from 'react'
import { Tooltip } from 'react-tooltip'
import useEventListener from '@use-it/event-listener'
import axios from 'axios'

function App() {
  const [users, setUsers] = useState([])
  const [isGetting, setIsGetting] = useState(false)
  const [keyPress, setKeyPress] = useState('')

  // Load the data from the server

  const getUsers = async () => {
    setIsGetting(true)
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    setUsers(response.data)
    setIsGetting(false)
  }

  function handler({ key }) {
    setKeyPress(key)
    setTimeout(() => {
      setKeyPress('')
    }, '1000')
  }
  useEventListener('keydown', handler)

  return (
    <div className="App">
      <div>{users.length ? 'Users:' : 'Empty list'}</div>
      {users.length ? (
        <ul data-testid="user-list">
          {users.map((user) => (
            <li key={user.id} className="user" data-testid="user-item">
              <span>{user.name}</span>
            </li>
          ))}
        </ul>
      ) : (
        <>
          <button data-tooltip-id="my-tooltip" data-testid="get-btn" onClick={getUsers}>
            {isGetting ? 'Getting data ... ' : 'Get Data'}
          </button>
          <p>Press f to pay respect</p>
          <Tooltip id="my-tooltip">
            <p>Button to load data</p>
          </Tooltip>
          {keyPress == 'f' && (
            <div className="stage">
              <p className="box respect-text">+1 respect for the user</p>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default App
