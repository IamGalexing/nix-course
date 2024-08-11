import { render, screen } from '@testing-library/react'
import { Sidebar } from './Sidebar'
import { BrowserRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'

describe('Sidebar', () => {
  const setIsAuth = vi.fn()
  const user = userEvent.setup()

  test('should renders the Sidebar component', () => {
    render(<Sidebar isAuth={false} setIsAuth={setIsAuth} />, { wrapper: BrowserRouter })

    expect(screen.getByText(/Home/i)).toBeInTheDocument()
    expect(screen.getByText(/Cart/i)).toBeInTheDocument()
    expect(screen.getByText(/Contacts/i)).toBeInTheDocument()
    expect(screen.getByText(/Login/i)).toBeInTheDocument()
  })

  test('should call function setIsAuth when the login button is pressed', async () => {
    render(<Sidebar isAuth={false} setIsAuth={setIsAuth} />, { wrapper: BrowserRouter })

    await user.click(screen.getByText(/Login/i))
    expect(setIsAuth).toHaveBeenCalledTimes(1)
  })
})
