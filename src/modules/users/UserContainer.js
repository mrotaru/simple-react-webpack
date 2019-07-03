import { connect } from 'react-redux'

import { fetchUser } from './actions'
import { selectUser, selectIsFetchingUser } from './selectors'
import User from './User'

const mapStateToProps = (state, { match: { params: { userId } } }) => ({
  userId,
  user: selectUser(state, userId),
  isLoading: selectIsFetchingUser(state, userId),
})

const mapDispatchToProps = dispatch => ({
  fetchUser: userId => dispatch(fetchUser(userId))
})

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(User)

export default UserContainer
