import PropTypes from 'prop-types'

export const Header = ({ name }) => {
  return <header>Welcome, {name}!</header>
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
}
