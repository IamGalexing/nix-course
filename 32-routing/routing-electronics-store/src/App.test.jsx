import { render, screen } from '@testing-library/react'
import { BrowserRouter, MemoryRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import { ELECTRONICS } from './constants/electronics'
import App from './App'

describe('App', () => {
  const user = userEvent.setup()

  test('The navigation button exists', async () => {
    render(<App />, { wrapper: BrowserRouter })

    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Contacts')).toBeInTheDocument()
    expect(screen.getByText('Electronics')).toBeInTheDocument()
  })

  test('should be existed navigation buttons', async () => {
    render(<App />, { wrapper: BrowserRouter })

    expect(screen.getByText('login')).toBeInTheDocument()
  })

  test('should be existed that Сontact page opened', async () => {
    render(<App />, { wrapper: BrowserRouter })

    await user.click(screen.getByText('Contacts'))

    expect(screen.getByText('Contacts page')).toBeInTheDocument()
  })

  test('should be existed that Electronics page does not open for non-authorized user', async () => {
    render(<App />, { wrapper: BrowserRouter })

    await user.click(screen.getByText('Electronics'))

    expect(screen.getByText('Home page')).toBeInTheDocument()
  })

  test('should be existed that Electronics page open when user is authorized', async () => {
    render(<App />, { wrapper: BrowserRouter })

    await user.click(screen.getByText('login'))

    await user.click(screen.getByText('Electronics'))

    expect(screen.getByText('Electronics page')).toBeInTheDocument()
    expect(screen.getByText('telephones')).toBeInTheDocument()
    expect(screen.getByText('laptops')).toBeInTheDocument()
  })

  test('should be open the laptop page when click on the laptops link', async () => {
    render(<App />, { wrapper: BrowserRouter })

    await user.click(screen.getByText('login'))
    await user.click(screen.getByText('Electronics'))
    await user.click(screen.getByText('laptops'))

    expect(screen.getByText('Apple')).toBeInTheDocument()
    expect(screen.getByText('Lenovo')).toBeInTheDocument()
  })

  test('should show a Not Found page for a non-existent route', () => {
    const badRoute = '/some/bad/route'

    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <App />
      </MemoryRouter>
    )

    expect(screen.getByText(/Not Found/i)).toBeInTheDocument()
  })

  describe('should check the output of all models ', () => {
    const user = userEvent.setup()
    beforeEach(async () => {
      render(<App />, { wrapper: BrowserRouter })

      await user.click(screen.getByText('login'))

      await user.click(screen.getByText('Electronics'))
    })

    describe('should check the output of all telephones models ', () => {
      beforeEach(async () => {
        await user.click(screen.getByText('telephones'))
      })

      test('should check that all Samsung telephones are displayed', async () => {
        await user.click(screen.getByText('Samsung'))

        ELECTRONICS.telephones[1].model.forEach((el) => {
          expect(screen.getByText(`model: ${el.model}`)).toBeInTheDocument()
        })
      })
      test('should check that all Apple telephones are displayed', async () => {
        await user.click(screen.getByText('Apple'))

        ELECTRONICS.telephones[0].model.forEach((el) => {
          expect(screen.getByText(`model: ${el.model}`)).toBeInTheDocument()
        })
      })
    })

    describe('should check the output of all laptops models ', () => {
      beforeEach(async () => {
        await user.click(screen.getByText('laptops'))
      })

      test('should check that all Apple laptops are displayed', async () => {
        await user.click(screen.getByText('Apple'))

        ELECTRONICS.laptops[0].model.forEach((el) => {
          expect(screen.getByText(`model: ${el.model}`)).toBeInTheDocument()
        })
      })

      test('should check that all lenovo laptops are displayed', async () => {
        await user.click(screen.getByText('Lenovo'))

        ELECTRONICS.laptops[1].model.forEach((el) => {
          expect(screen.getByText(`model: ${el.model}`)).toBeInTheDocument()
        })
      })
    })

    describe('check the output of all laptops models ', () => {
      beforeEach(async () => {
        await user.click(screen.getByText('telephones'))
      })

      test('only one product is displayed on the product page ', async () => {
        await user.click(screen.getByText('Apple'))

        await user.click(screen.getByText('model: iPhone 5'))

        expect(screen.getByText('model: iPhone 5')).toBeInTheDocument()
        expect(screen.queryByText('model: iPhone 6')).not.toBeInTheDocument()
      })
    })

    describe('should show correct marks', () => {
      test('should show all telephones marks', async () => {
        await user.click(screen.getByText('telephones'))

        expect(screen.getByText(ELECTRONICS.telephones[0].mark)).toBeInTheDocument()
        expect(screen.getByText(ELECTRONICS.telephones[1].mark)).toBeInTheDocument()
        expect(screen.getAllByText(ELECTRONICS.telephones[0].mark)).toHaveLength(1)
        expect(screen.queryByText(ELECTRONICS.laptops[1].mark)).not.toBeInTheDocument()
      })

      test('should show all laptops marks', async () => {
        await user.click(screen.getByText('laptops'))

        expect(screen.getAllByText(ELECTRONICS.laptops[0].mark)).toHaveLength(1)
        expect(screen.getByText(ELECTRONICS.laptops[1].mark)).toBeInTheDocument()
        expect(screen.queryByText(ELECTRONICS.telephones[1].mark)).not.toBeInTheDocument()
      })
    })
  })
})
