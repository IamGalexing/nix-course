import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

export const ItemCard = ({ id, title, model, img }) => {
  const navigate = useNavigate()

  return (
    <div className="item-card" onClick={() => navigate(`/${id}`)}>
      <div className="item-img-container">
        <img src={img} alt={id} />
      </div>
      <p>id: {id}</p>
      <hr />
      <p>title: {title}</p>
      <hr />
      <p>model: {model}</p>
    </div>
  )
}

ItemCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
}
