import { render, fireEvent, screen } from '@testing-library/react'

import App from './App'

describe('App', () => {
  test('should renders the App component', () => {
    render(<App />)

    expect(screen.getByRole('combobox', { hidden: true })).toBeInTheDocument()
    expect(screen.getByText(/Product list:/i)).toBeInTheDocument()
  })

  test('should displays all products when no filter is selected', () => {
    render(<App />)

    expect(screen.getByText(/title: Product 1/i)).toBeInTheDocument()
    expect(screen.getByText(/title: Product 3/i)).toBeInTheDocument()
  })

  test('should displays filtered products when a category filter is selected', () => {
    render(<App />)

    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'Sport' } })

    expect(screen.getByText(/title: Product 2/i)).toBeInTheDocument()
    expect(screen.getByText(/title: Product 6/i)).toBeInTheDocument()
  })
})
