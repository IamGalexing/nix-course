import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import SideBar from './SideBar.jsx'

test('renders sidebar with home and private links', () => {
  render(
    <MemoryRouter>
      <SideBar />
    </MemoryRouter>
  )
  const homeLinkElement = screen.getByText(/Home/i)
  const privateLinkElement = screen.getByText(/Private/i)
  expect(homeLinkElement).toBeInTheDocument()
  expect(privateLinkElement).toBeInTheDocument()
})
