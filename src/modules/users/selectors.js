import get from 'lodash.get'

export const selectUser = (state, userId) =>
  get(state, `posts.byId.${userId}.payload`)

export const selectIsFetchingUser = (state, userId) =>
  get(state, `posts.byId.${userId}.meta.isFetching`)

export const selectUserError = (state, userId) =>
  get(state, `posts.byId.${userId}.error`)
