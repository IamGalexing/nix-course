import { render, fireEvent, screen } from '@testing-library/react'
import { Layout } from './Layout'

describe('Layout', () => {
  let button

  beforeEach(() => {
    render(<Layout />)
    button = screen.getByRole('button')
  })

  it('should renders a button that can be clicked', () => {
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent(/Click Me/i)
    fireEvent.click(button)
    expect(screen.getByText('Button has been clicked: 1')).toBeInTheDocument()
  })

  it('should increments the counter when the button is clicked', () => {
    fireEvent.click(button)
    fireEvent.click(button)
    expect(screen.getByText('Button has been clicked: 2')).toBeInTheDocument()
  })
})
