import { PERSONS } from './constants'

function App() {
  return (
    <div>
      <ul>
        {PERSONS.map((person, index) => (
          <li key={index}>{person}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
