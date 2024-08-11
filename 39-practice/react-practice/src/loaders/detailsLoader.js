import { getData } from '../api/getData'
import { getDBpath } from '../utils/getDBpath'
import PropTypes from 'prop-types'

export const detailsLoader = async (loaderData) => {
  const { pathname } = new URL(loaderData.request.url)
  const path = '/' + pathname.split('/')[1]
  try {
    const { data } = await getData(`${getDBpath(path)}/${loaderData.params.id}`)
    return data
  } catch {
    throw new Error('Could not find the details')
  }
}

detailsLoader.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
  path: PropTypes.string.isRequired,
}
