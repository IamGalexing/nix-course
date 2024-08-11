import { render } from '@testing-library/react'
import App from '../App'

describe('App component', () => {
  it('renders without crashing', () => {
    render(<App />)
  })

  it('renders the correct text', () => {
    const { getByText } = render(<App />)
    const textElement = getByText(/hello world/gi)
    expect(textElement).toBeInTheDocument()
  })
})
