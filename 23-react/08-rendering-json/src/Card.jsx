import PropTypes from 'prop-types'

function Card({ cardData: { setup, punchline } }) {
  return (
    <div className="card">
      <h2 className="card-question">{setup}</h2>
      <p className="card-answer">{punchline}</p>
    </div>
  )
}

Card.propTypes = {
  cardData: PropTypes.shape({
    setup: PropTypes.string.isRequired,
    punchline: PropTypes.string.isRequired,
  }).isRequired,
}

export default Card
