import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { Private } from './Private.jsx'
import { Public } from './Public.jsx'

test('renders private component when authenticated', () => {
  render(
    <MemoryRouter initialEntries={['/private']}>
      <Private isAuth={true} />
    </MemoryRouter>
  )
  const privateElement = screen.getByText(/Private/i)
  expect(privateElement).toBeInTheDocument()
})

test('redirects to home when not authenticated', () => {
  render(
    <MemoryRouter initialEntries={['/private']}>
      <Private isAuth={false} />
      <Routes>
        <Route path="/" element={<Public />} />
      </Routes>
    </MemoryRouter>
  )
  expect(screen.getByText(/Private/i)).toBeInTheDocument()
})
