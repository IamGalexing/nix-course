import { actionTypes } from '../actions/actionTypes'

const initialState = {
  repositories: [],
  isLoading: false,
  error: null,
}

export const repositoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      }
    case actionTypes.SUCCESS:
      return {
        ...state,
        repositories: action.payload,
        isLoading: false,
        error: null,
      }
    case actionTypes.FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export const selectRepositories = (state) => state.repositories
export const selectIsLoading = (state) => state.isLoading
export const selectError = (state) => state.error
