import { useState } from 'react'
import PropTypes from 'prop-types'

export const Card = (props) => {
  const [showFront, setShowFront] = useState(true)

  const toggleCard = () => {
    setShowFront(!showFront)
  }

  return (
    <div role="user-card" className="flip-card">
      <div className="flip-card-inner">
        {showFront ? (
          <div className="flip-card-front">
            <h2>{props.name}</h2>
            <p>{props.userName}</p>
            <button className="btn" onClick={toggleCard}>
              Show back side
            </button>
          </div>
        ) : (
          <div className="flip-card-back">
            <p>{props.email}</p>
            <p>{props.phone}</p>
            <p>{props.website}</p>
            <button className="btn" onClick={toggleCard}>
              Show front side
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
}
