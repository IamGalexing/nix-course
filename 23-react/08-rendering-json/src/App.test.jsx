import { render } from '@testing-library/react'
import App from './App'
import data from '../data.json'

describe('App', () => {
  it('renders the correct content', () => {
    const { getByText } = render(<App />)
    data.forEach((element) => {
      expect(getByText(element.setup)).toBeInTheDocument()
      expect(getByText(element.punchline)).toBeInTheDocument()
    })
  })
})
