import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'
import { BrowserRouter, MemoryRouter } from 'react-router-dom'

describe('App', () => {
  test('should navigates to the correct item page when an item card is clicked', async () => {
    render(<App />, { wrapper: BrowserRouter })

    const firstItem = screen.getByText(/id: 0/i)
    const user = userEvent.setup()
    await user.click(firstItem)

    // check that the description in ItemPage is displayed
    const itemPageTitle = screen.getByText('description: Some description for S21')
    expect(itemPageTitle).toBeInTheDocument()
  })

  test('should navigates to the NotFoundPage', () => {
    const badRoute = '/some/bad/route'

    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <App />
      </MemoryRouter>
    )

    // check that the text from NotFoundPage is displayed
    expect(screen.getByText(/Not Found/i)).toBeInTheDocument()
  })
})
