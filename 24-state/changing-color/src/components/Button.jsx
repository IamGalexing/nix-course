import PropTypes from 'prop-types'

export const Button = ({ color, onClick }) => {
  return <button onClick={() => onClick(color)}>{color}</button>
}

Button.propTypes = {
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}
