import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { ProductList } from './components/ProductList'
import { LanguageProvider } from './providers/LanguageProvider'

function App() {
  return (
    <LanguageProvider>
      <Header />
      <ProductList />
      <Footer />
    </LanguageProvider>
  )
}

export default App
