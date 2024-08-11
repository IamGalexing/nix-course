import PropTypes from 'prop-types'

export const SingleCard = ({ title, price, rating, categories }) => {
  return (
    <div className="card-item" data-testid="card-item">
      <p>title: {title}</p>
      <p>
        price: <span data-testid="card-price">{price}</span>
      </p>
      <p>
        rating: <span data-testid="card-rating">{rating}</span>
      </p>
      <p data-testid="card-categories">categories: {categories.toLowerCase()}</p>
    </div>
  )
}

SingleCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  categories: PropTypes.string.isRequired,
}
