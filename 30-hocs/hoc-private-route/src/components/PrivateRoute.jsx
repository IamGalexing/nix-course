import { Navigate } from 'react-router-dom'
import PropTypes from 'prop-types'

export const PrivateRoute = ({ children, isLoggedIn }) => {
  return isLoggedIn ? children : <Navigate to="/" replace />
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
}
