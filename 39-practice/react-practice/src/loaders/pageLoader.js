import { getData } from '../api/getData'
import { getTitleFromRoute } from '../utils/getTitlefromRoute'
import { getDBpath } from '../utils/getDBpath'
import PropTypes from 'prop-types'
import { PER_PAGE } from '../constants'
import { redirect } from 'react-router-dom'
import { ROUTES } from '../routes'

export const pageLoader = async (loaderData) => {
  const { pathname, search } = new URL(loaderData.request.url)
  let updatedPath

  if (pathname !== ROUTES.EPISODES) {
    if (!search) return redirect(`${pathname}?_page=1`)
    updatedPath = getDBpath(pathname) + search + `&_limit=${PER_PAGE}`
  } else {
    updatedPath = getDBpath(pathname)
  }

  try {
    const { data, totalItems } = await getData(updatedPath)

    if (!data.length) throw new Error()
    const title = getTitleFromRoute(pathname)
    return { data, totalItems, title }
  } catch {
    throw new Error("Could not load the page's data")
  }
}

pageLoader.propTypes = {
  path: PropTypes.string.isRequired,
}
