import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { repositoryReducer } from './reducers/repositoryReducer'

export const store = createStore(repositoryReducer, applyMiddleware(thunk))
