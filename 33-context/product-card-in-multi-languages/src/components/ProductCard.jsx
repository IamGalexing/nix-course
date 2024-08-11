import { useContext } from 'react'
import { LanguageContext } from '../providers/LanguageProvider'
import PropTypes from 'prop-types'

export const ProductCard = ({ product }) => {
  const { language } = useContext(LanguageContext)
  const { name, price, img, description } = product[language]

  return (
    <li className="product-card">
      <h2 className="product-card-title">{name}</h2>
      <div className="product-card-context">
        <img className="product-card-img" src={img} alt={name} />
        <p className="product-card-descr">{description}</p>
      </div>
      <div className="product-card-buy">
        <p className="product-card-price">{price}</p>
        <button className="product-card-btn" type="button">
          Add To Cart
        </button>
      </div>
    </li>
  )
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    en: PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
    ua: PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}
