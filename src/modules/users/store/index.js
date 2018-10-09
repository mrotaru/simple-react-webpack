import { combineReducers } from 'redux'
import userReducer from './user.reducer'
import usersReducer from './users.reducer'

const reducer = combineReducers({
  byId: userReducer,
  list: usersReducer,
})

export { reducer }
