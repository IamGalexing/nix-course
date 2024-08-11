import db from './db.json'
import { Table } from './components/Table'

function App() {
  return <Table items={db} />
}

export default App
