import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reduxLogger from 'redux-logger'
import { combineReducers } from 'redux'

import { reducer as UsersReducer } from './modules/users/store'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default function configureStore(initialState, services = {}) {
  return createStore(
    combineReducers({
      users: UsersReducer,
    }),
    initialState,
    composeEnhancers(
      applyMiddleware(thunk.withExtraArgument(services), reduxLogger),
    ),
  )
}
