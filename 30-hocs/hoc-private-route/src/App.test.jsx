import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'

test('renders log in button', async () => {
  render(<App />, { wrapper: BrowserRouter })
  const buttonElement = screen.getByText(/Log in/i)
  expect(buttonElement).toBeInTheDocument()
})

test('toggles authentication state when log in button is clicked', () => {
  render(<App />, { wrapper: BrowserRouter })
  const buttonElement = screen.getByText(/Log in/i)
  fireEvent.click(buttonElement)
  const loggedOutButtonElement = screen.getByText(/Log out/i)
  expect(loggedOutButtonElement).toBeInTheDocument()
})
