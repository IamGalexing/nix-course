import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import App from './App'
import { Header } from './components/Header'
import { BlogPage } from './components/BlogPage'
import { Footer } from './components/Footer'
import { ThemeProvider } from './context/ThemeContext'
describe('App', () => {
  let user
  beforeEach(async () => {
    user = userEvent.setup()
  })

  it('should render the header', () => {
    render(<App />)
    const header = screen.getByText(/Header/i)
    expect(header).toBeInTheDocument()
  })

  it('should render articles', () => {
    render(<App />)
    const blogPage = screen.getByText(/title: Title one/i)
    expect(blogPage).toBeInTheDocument()
  })

  it('should render the footer', () => {
    render(<App />)
    const footer = screen.getByText(/Footer/i)
    expect(footer).toBeInTheDocument()
  })

  it('should change the theme from light to dark mode', async () => {
    render(
      <ThemeProvider>
        <Header />
        <BlogPage />
        <Footer />
      </ThemeProvider>
    )

    expect(screen.getByText(/Switch to dark mode/i)).toBeInTheDocument()
    expect(screen.queryByText(/Switch to ligth mode/i)).not.toBeInTheDocument()

    expect(document.body.style.color).toBe('rgb(51, 51, 51)')
    expect(document.body.style.backgroundColor).toBe('rgb(255, 255, 255)')

    const button = screen.getByText(/Switch to dark mode/i)
    await user.click(button)

    expect(document.body.style.color).toBe('rgb(255, 255, 255)')
    expect(document.body.style.backgroundColor).toBe('rgb(51, 51, 51)')

    expect(screen.getByText(/Switch to light mode/i)).toBeInTheDocument()
    expect(screen.queryByText(/Switch to dark mode/i)).not.toBeInTheDocument()
  })

  it('should change the theme from dark to light mode', async () => {
    render(
      <ThemeProvider>
        <Header />
        <BlogPage />
        <Footer />
      </ThemeProvider>
    )

    await user.click(screen.getByText(/Switch to dark mode/i))

    expect(document.body.style.color).toBe('rgb(255, 255, 255)')
    expect(document.body.style.backgroundColor).toBe('rgb(51, 51, 51)')

    expect(screen.getByText(/Switch to light mode/i)).toBeInTheDocument()
    expect(screen.queryByText(/Switch to dark mode/i)).not.toBeInTheDocument()

    await user.click(screen.getByText(/Switch to light mode/i))

    expect(screen.getByText(/Switch to dark mode/i)).toBeInTheDocument()
    expect(screen.queryByText(/Switch to ligth mode/i)).not.toBeInTheDocument()

    expect(document.body.style.color).toBe('rgb(51, 51, 51)')
    expect(document.body.style.backgroundColor).toBe('rgb(255, 255, 255)')
  })
})
