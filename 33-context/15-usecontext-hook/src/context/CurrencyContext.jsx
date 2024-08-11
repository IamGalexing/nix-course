import { createContext, useEffect, useState } from 'react'
import { COLORS } from '../constants'
import PropTypes from 'prop-types'
import { getCurrenciesData } from '../api/getCurrenciesData'

export const CurrencyContext = createContext()

export const CurrencyContextProvider = ({ children }) => {
  const [currencies, setCurrencies] = useState({})
  const [convertRates, setConvertRates] = useState({})
  const [selectedCurrency, setSelectedCurrency] = useState({})
  const [colors, setColors] = useState([])
  const [selectedColor, setSelectedColor] = useState('')
  const [price, setPrice] = useState(0)
  const [dataFetched, setDataFetched] = useState(false)

  useEffect(() => {
    async function getData() {
      const currencies = await getCurrenciesData('currencies')
      const convertRates = await getCurrenciesData('convertRates')

      if (currencies && convertRates) {
        const currency = currencies.USD
        const price = parseFloat(convertRates[currency.code].value).toFixed(currency.decimal_digits)

        setPrice(price)
        setCurrencies(currencies)
        setConvertRates(convertRates)
        setSelectedCurrency(currency)
        setColors(COLORS)
        setSelectedColor(COLORS[0])
        setDataFetched(true)
      }
    }

    getData()
  }, [])

  useEffect(() => {
    if (dataFetched) {
      const price = convertRates[selectedCurrency.code].value.toFixed(selectedCurrency.decimal_digits)
      setPrice(price)
    }
  }, [convertRates, dataFetched, selectedCurrency])

  const updateCurrency = (newCurrency) => {
    setSelectedCurrency(newCurrency)
  }

  const updateColor = (newColor) => {
    setSelectedColor(newColor)
  }

  return (
    <CurrencyContext.Provider
      value={{ selectedCurrency, updateCurrency, selectedColor, updateColor, price, currencies, colors }}
    >
      {children}
    </CurrencyContext.Provider>
  )
}

CurrencyContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
