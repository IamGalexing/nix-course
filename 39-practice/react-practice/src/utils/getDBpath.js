import { ROUTES } from '../routes'
import PropTypes from 'prop-types'

export const getDBpath = (path) => {
  if (path === ROUTES.EPISODES) {
    return '/films'
  }
  return path
}

getDBpath.propTypes = {
  path: PropTypes.string.isRequired,
}
