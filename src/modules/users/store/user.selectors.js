import get from 'lodash.get'

export const selectUser = (state, userId) =>
  get(state, `users.byId.${userId}.payload`)

export const selectUserIsFetching = (state, userId) =>
  get(state, `users.byId.${userId}.meta.isFetching`)

export const selectUserError = (state, userId) =>
  get(state, `users.byId.${userId}.error`)
