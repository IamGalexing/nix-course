import { PlanList } from './components/PlanList'
import data from './db.json'

function App() {
  return <PlanList items={data} />
}

export default App
