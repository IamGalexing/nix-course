import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { BlogPage } from './components/BlogPage'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <Header />
      <BlogPage />
      <Footer />
    </ThemeProvider>
  )
}

export default App
