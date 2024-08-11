import { render, fireEvent } from '@testing-library/react'
import { LanguageProvider } from './providers/LanguageProvider'
import { Header } from './components/Header'
import { ProductList } from './components/ProductList'

describe('App', () => {
  it('should render the Header component', () => {
    const language = 'en'
    const { getByText } = render(
      <LanguageProvider language={language}>
        <Header />
      </LanguageProvider>
    )

    expect(getByText(/Sneakers/i)).toBeInTheDocument()
  })

  it('should render the Cards component', () => {
    const language = 'en'
    const { getAllByText } = render(
      <LanguageProvider language={language}>
        <Header />
        <ProductList />
      </LanguageProvider>
    )

    expect(getAllByText('Nike Metcon 2')[0]).toBeInTheDocument()
  })

  it('should change the language when the select input is changed', () => {
    const language = 'en'
    const { getByText, getByRole } = render(
      <LanguageProvider language={language}>
        <Header />
        <ProductList />
      </LanguageProvider>
    )

    fireEvent.change(getByRole('combobox'), { target: { value: 'ua' } })

    expect(getByText(/Кросівки/i)).toBeInTheDocument()
  })
})
