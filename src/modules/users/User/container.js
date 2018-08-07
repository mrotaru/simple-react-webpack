import { connect } from 'react-redux'
import { fetchUser, selectUser, selectUserIsFetching } from '../store'
import User from './User'

const mapStateToProps = (state, { userId }) => ({
  userId,
  user: selectUser(state, userId),
  isLoading: selectUserIsFetching(state, userId),
})

const mapDispatchToProps = dispatch => ({
  fetchUser: userId => dispatch(fetchUser(userId))
})

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(User)

export default UserContainer
