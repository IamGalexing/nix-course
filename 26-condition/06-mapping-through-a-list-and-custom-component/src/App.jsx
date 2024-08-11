import { User } from './components/User'
import { USERS } from './constants'

function App() {
  const filterUsersByCity = (cityToFilter) => {
    return USERS.filter((user) => user.city === cityToFilter)
  }

  return (
    <div>
      <ul>
        {filterUsersByCity('London').map((user) => (
          <User key={user.id} name={user.name} city={user.city} profession={user.profession} />
        ))}
      </ul>
    </div>
  )
}

export default App
