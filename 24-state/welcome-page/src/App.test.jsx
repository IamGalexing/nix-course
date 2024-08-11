import { fireEvent, render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  test('should render the welcome message with default name', () => {
    render(<App />)

    const welcomeMessage = screen.getByText('Welcome, Gest!')
    expect(welcomeMessage).toBeInTheDocument()
  })

  test('should render the welcome message with custom name', () => {
    render(<App />)

    const nameInput = screen.getByLabelText('Name:')

    fireEvent.change(nameInput, { target: { value: 'John' } })

    const welcomeMessage = screen.getByText('Welcome, John!')
    expect(welcomeMessage).toBeInTheDocument()
  })
})
