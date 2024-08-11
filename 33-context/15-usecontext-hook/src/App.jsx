import ProductCard from './components/ProductCard'
import { CurrencyContextProvider } from './context/CurrencyContext'

function App() {
  return (
    <CurrencyContextProvider>
      <ProductCard />
    </CurrencyContextProvider>
  )
}

export default App
