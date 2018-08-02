import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { reduxLogger } from 'redux-logger'
import { combineReducers } from 'redux'

import { reducer as UsersReducer } from './modules/users'

export default function configureStore(initialState = {}) {
  return createStore(
    combineReducers({
      users: UsersReducer,
    }),
    initialState,
    applyMiddleware(
      process.env.NODE_ENV === 'production' ? [thunk] : [thunk, reduxLogger],
    ),
  )
}
