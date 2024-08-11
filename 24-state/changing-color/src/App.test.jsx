/* eslint-disable */
import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import App from './App'
import { Button } from './components/Button.jsx'
import { vi } from 'vitest'
describe('App', () => {

describe('Changing Color', () => {
  test('should change background color when clicking color buttons', () => {
    // Render the App component
    const { getByText } = render(<App />)
    const divElement = getByText(/black/i)

    // Click the 'red' button
    const redButton = getByText(/red/i)
    fireEvent.click(redButton)

    // Verify that the background color of the div changes to red
    expect(divElement).toHaveStyle('background-color: red')

    // Click the 'blue' button
    const blueButton = getByText(/blue/i)
    fireEvent.click(blueButton)

    // Verify that the background color of the div changes to blue
    expect(divElement).toHaveStyle('background-color: blue')
  })
})

describe('test Button component', () => {
  const fn = vi.fn()

  test('should check on press button', () => {
    const { getByRole } = render(<Button onClick={fn} />)

    fireEvent.click(getByRole('button'))
    expect(fn).toHaveBeenCalledTimes(1)
  })
})
})
