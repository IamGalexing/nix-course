import PropTypes from 'prop-types'

export const User = ({ name, profession, city }) => {
  return (
    <li>
      <div>User name: {name}</div>
      <div>User city: {city}</div>
      <div>User profession: {profession}</div>
    </li>
  )
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
}
