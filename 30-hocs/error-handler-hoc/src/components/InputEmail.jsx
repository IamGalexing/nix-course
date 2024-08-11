import PropTypes from 'prop-types'

export const InputEmail = ({ onInputChange }) => {
  return (
    <div className="input">
      <label className="input-label">Email:</label>
      <input type="email" onChange={onInputChange} className="input-field" placeholder="your email" />
    </div>
  )
}

InputEmail.propTypes = {
  onInputChange: PropTypes.func.isRequired,
}
