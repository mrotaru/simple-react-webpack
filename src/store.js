import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reduxLogger from 'redux-logger'
import { combineReducers } from 'redux'

import PostsReducer from './modules/posts/reducer'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default function configureStore(initialState, services = {}) {
  return createStore(
    combineReducers({
      posts: PostsReducer,
    }),
    initialState,
    composeEnhancers(
      applyMiddleware(thunk.withExtraArgument(services), reduxLogger),
    ),
  )
}
