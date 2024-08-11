import PropTypes from 'prop-types'

export const Button = ({ className, onClick, children }) => {
  return (
    <button type="button" className={className} onClick={onClick}>
      {children}
    </button>
  )
}

Button.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}
