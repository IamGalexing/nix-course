import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import InputWithValidation from './components/InputWithValidation.jsx'

describe('MyInputWithValidation', () => {
  test('displays error when invalid email is entered', () => {
    render(<InputWithValidation />)

    const inputElement = screen.getByRole('textbox')
    fireEvent.change(inputElement, { target: { value: 'invalidemail' } })

    const errorElement = screen.getByText('Invalid value!')
    expect(errorElement).toBeInTheDocument()
  })

  test('does not display error when a valid email is entered', () => {
    render(<InputWithValidation />)

    const inputElement = screen.getByRole('textbox')
    fireEvent.change(inputElement, { target: { value: 'valid@example.com' } })

    const errorElement = screen.queryByText('Invalid value!')
    expect(errorElement).not.toBeInTheDocument()
  })
})
