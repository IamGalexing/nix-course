import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import ProductCard from './components/ProductCard.jsx'
import { CurrencyContextProvider } from './context/CurrencyContext.jsx'

describe('ProductCard', () => {
  test('should shows value from provider', () => {
    render(
      <CurrencyContextProvider>
        <ProductCard />
      </CurrencyContextProvider>
    )

    const productName = screen.getByText('Zebronics head phone')
    const productDescription = screen.getByText(
      'A portable headphone with a battery life of 20 hours and IP67 rating. Comes with a 3 years warranty.'
    )
    const reviewLink = screen.getByText('Read reviews')

    expect(productName).toBeInTheDocument()
    expect(productDescription).toBeInTheDocument()
    expect(reviewLink).toBeInTheDocument()
  })

  test('should change currency and value on currency change', async () => {
    render(
      <CurrencyContextProvider>
        <ProductCard />
      </CurrencyContextProvider>
    )
    await waitFor(() => expect(screen.getByTestId('currency')).toBeInTheDocument())
    const currencySelect = screen.getByTestId('currency')
    fireEvent.change(currencySelect, { target: { value: 'EUR' } })
    const price = screen.getByTestId('price')
    expect(price.textContent).include('€')
  })

  test('should change currency and value on currency change', async () => {
    render(
      <CurrencyContextProvider>
        <ProductCard />
      </CurrencyContextProvider>
    )
    await waitFor(() => expect(screen.getByTestId('blue')).toBeInTheDocument())
    const colorSelect = screen.getByTestId('blue')
    fireEvent.click(colorSelect)
    expect(colorSelect).toHaveClass('selected')
  })
})
