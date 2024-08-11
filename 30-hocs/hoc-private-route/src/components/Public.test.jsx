import { render, screen } from '@testing-library/react'

import { Public } from './Public.jsx'

test('renders public component', () => {
  render(<Public />)
  const publicElement = screen.getByText(/Public/i)
  expect(publicElement).toBeInTheDocument()
})
