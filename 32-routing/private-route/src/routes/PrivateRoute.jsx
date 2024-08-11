import { Navigate } from 'react-router-dom'
import PropTypes from 'prop-types'

export const PrivateRoute = ({ isAuth, children }) => {
  return isAuth ? children : <Navigate to="/" replace />
}

PrivateRoute.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
}
