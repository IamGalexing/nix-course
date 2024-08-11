import { actionTypes } from './actionTypes'

export const fetchRepositoriesRequest = () => ({
  type: actionTypes.REQUEST,
})

export const fetchRepositoriesSuccess = (repositories) => ({
  type: actionTypes.SUCCESS,
  payload: repositories,
})

export const fetchRepositoriesFailure = (error) => ({
  type: actionTypes.FAILURE,
  payload: error,
})

export const fetchRepositories = (username) => {
  return async (dispatch) => {
    dispatch(fetchRepositoriesRequest())
    try {
      const response = await fetch(`https://api.github.com/users/${username}/repos`)
      if (response.ok) {
        const repositories = await response.json()
        dispatch(fetchRepositoriesSuccess(repositories))
      } else {
        dispatch(fetchRepositoriesFailure(response.status))
      }
    } catch (error) {
      throw new Error(error.message)
    }
  }
}
