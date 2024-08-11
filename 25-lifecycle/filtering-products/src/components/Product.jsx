import PropTypes from 'prop-types'

function Product({ product }) {
  const { title, price, category } = product
  return (
    <li>
      <p>Title: {title}</p>
      <p>Price: {price}</p>
      <p>Category: {category}</p>
    </li>
  )
}

Product.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
}

export default Product
