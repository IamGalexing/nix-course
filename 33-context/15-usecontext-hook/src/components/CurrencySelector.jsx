import { useContext } from 'react'
import { CurrencyContext } from '../context/CurrencyContext'

const CurrencySelector = () => {
  const { selectedCurrency, updateCurrency, currencies } = useContext(CurrencyContext)

  const currencySelect = (e) => {
    const newCurrency = e.target.value
    updateCurrency(currencies[newCurrency])
  }

  return (
    <select data-testid="currency" value={selectedCurrency?.code} onChange={currencySelect}>
      {Object.keys(currencies).map((currency) => (
        <option key={currency} value={currency}>
          {currency}
        </option>
      ))}
    </select>
  )
}

export default CurrencySelector
