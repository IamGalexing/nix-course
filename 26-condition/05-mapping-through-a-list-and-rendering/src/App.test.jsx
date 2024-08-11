import { PERSONS } from './constants'
import { render } from '@testing-library/react'
import App from './App'

describe('Render list', () => {
  it('list item must have all elements', () => {
    const { getByText } = render(<App />)

    PERSONS.forEach((person) => {
      expect(getByText(person)).toBeInTheDocument()
    })
  })
})
