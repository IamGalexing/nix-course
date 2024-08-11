import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter, MemoryRouter } from 'react-router-dom'

import App from './App'

describe('App', () => {
  const user = userEvent.setup()

  test('should renders the Home Page by default', async () => {
    render(<App />, { wrapper: BrowserRouter })

    expect(screen.getByText(/Home Page/i))
  })

  test('should renders the Contacts Page when selecting Contacts in the menu ', async () => {
    render(<App />, { wrapper: BrowserRouter })

    await user.click(screen.getByText(/Contacts/i))
    expect(screen.getByText('Contacts Page')).toBeInTheDocument()
  })

  test('should not displayed Shopping cart page for non-logged user', async () => {
    render(<App />, { wrapper: BrowserRouter })

    await user.click(screen.getByText(/Cart/i))
    expect(screen.queryByText('Contacts Page')).not.toBeInTheDocument()
  })

  test('should show cart page for logged user', async () => {
    render(<App />, { wrapper: BrowserRouter })

    await user.click(screen.getByText(/Login/i))

    await user.click(screen.getByText('Cart'))
    expect(screen.queryByText(/Contacts Page/i)).not.toBeInTheDocument()
  })

  test('should display Not Found page for a non-existent route ', () => {
    const badRoute = '/some/bad/route'

    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <App />
      </MemoryRouter>
    )

    expect(screen.getByText('Not Found')).toBeInTheDocument()
  })

  test('should not render Cart page if a user is login', async () => {
    const { getByText } = render(<App />, { wrapper: BrowserRouter })

    expect(getByText(/Login/i)).toBeInTheDocument()

    await user.click(getByText('Cart'))

    expect(getByText(/Home page/i)).toBeInTheDocument()
  })

  test('should render Cart page if user is login', async () => {
    const { getByText } = render(<App />, { wrapper: BrowserRouter })

    expect(getByText(/Login/i)).toBeInTheDocument()

    await user.click(getByText(/Login/i))

    await user.click(getByText(/Cart/i))

    expect(getByText(/Cart page/i)).toBeInTheDocument()
  })
})
