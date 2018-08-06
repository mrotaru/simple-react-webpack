import React from 'react'
import { connect } from 'react-redux'
import UsersList from './UsersList'
import { Link } from 'react-router-dom'

import {
  fetchUsers,
  selectUsers,
  selectUsersFetching,
  selectUsersError,
} from './store'

class UsersPage extends React.Component {
  componentWillMount() {
    this.props.fetchUsers()
  }
  render() {
    const { loading, error, users } = this.props
    return (
      <div>
        {loading && <div>Loading...</div>}
        {error && <span>Error: {error}</span>}
        {users.length && <UsersList users={users} />}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    loading: selectUsersFetching(state),
    users: selectUsers(state),
    error: selectUsersError(state),
  }
}

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UsersPage)
