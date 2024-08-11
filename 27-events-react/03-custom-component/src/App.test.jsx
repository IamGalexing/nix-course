import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'
import { vi } from 'vitest'

describe('App Component', () => {
  window.alert = vi.fn()

  it('displays the correct text for each button', () => {
    render(<App />)
    const buttonTexts = ['Button 1', 'Button 2', 'Button 3']

    buttonTexts.forEach((buttonText) => {
      expect(screen.getByText(buttonText)).toBeInTheDocument()
    })
  })

  it('triggers the onClick event when a button is clicked', () => {
    render(<App />)
    const buttonTexts = ['Button 1', 'Button 2', 'Button 3']

    buttonTexts.forEach((buttonText) => {
      fireEvent.click(screen.getByText(buttonText))
      expect(window.alert).toHaveBeenCalledWith(`You clicked on ${buttonText}`)
    })
  })
})
