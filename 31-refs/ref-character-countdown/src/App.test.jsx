import { render } from '@testing-library/react'
import App from './App'
import userEvent from '@testing-library/user-event'

describe('Simple working test', () => {
  it('displays the initial number of characters ', () => {
    const { getByText } = render(<App />)
    const textElement = getByText(/Characters Left: 10/i)
    expect(textElement).toBeInTheDocument()
  })

  it('displays the input field ', () => {
    const { getByTestId } = render(<App />)
    const textElement = getByTestId('input-field')
    expect(textElement).toBeInTheDocument()
  })

  it('after entering one character, there should be 9 left available', async () => {
    const user = userEvent.setup()
    const { getByTestId, getByText } = render(<App />)
    const inputField = getByTestId('input-field')
    await user.type(inputField, '1')
    const textElement = getByText(/Characters Left: 9/i)
    expect(textElement).toBeInTheDocument()
  })

  it('displays the character limit message', async () => {
    const user = userEvent.setup()
    const { getByTestId, getByText } = render(<App />)
    const inputField = getByTestId('input-field')
    await user.type(inputField, '1234567890')
    const textElement = getByText(/Character limit exceeded!/i)
    expect(textElement).toBeInTheDocument()
  })
})
