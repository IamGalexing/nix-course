import { FAQList } from './components/FAQList'
import FAQ from './db.json'

function App() {
  return <FAQList items={FAQ} />
}

export default App
