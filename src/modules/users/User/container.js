import { connect } from 'react-redux'
import { fetchUser } from '../store'
import User from './User'

const mapStateToProps = (state, { userId }) => ({
  user: state.users.userId,
})

const mapDispatchToProps = dispatch => ({
  fetchUser: userId => dispatch(fetchUser(userId))
})

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(User)

export default UserContainer
