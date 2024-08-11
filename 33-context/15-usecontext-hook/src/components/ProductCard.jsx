import { useContext } from 'react'
import { CurrencyContext } from '../context/CurrencyContext'
import CurrencySelector from './CurrencySelector'
import ColorSelector from './ColorSelector'

const ProductCard = () => {
  const { selectedCurrency, price } = useContext(CurrencyContext)

  return (
    <div className="card">
      <h2 className="card-title">Zebronics head phone</h2>
      <div className="card-price-box">
        <div className="price" data-testid="price">{`${selectedCurrency?.symbol ?? '€'}${price}`}</div>

        <CurrencySelector />
      </div>
      <div className="card-descr">
        A portable headphone with a battery life of 20 hours and IP67 rating. Comes with a 3 years warranty.
      </div>
      <ColorSelector />

      <button className="btn add-to-cart" type="button">
        Add to Cart
      </button>
      <button className="btn buy-now" type="button">
        Buy now
      </button>
      <a className="link-review" href="#">
        Read reviews
      </a>
    </div>
  )
}

export default ProductCard
