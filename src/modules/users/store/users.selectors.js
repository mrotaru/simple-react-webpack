export const selectUsers = state => state.users.list.default.items
export const selectUsersFetching = state => state.users.list.default.isFetching
export const selectUsersError = state => state.users.list.default.error
