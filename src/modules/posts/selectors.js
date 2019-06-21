import get from 'lodash.get'

export const selectPost = (state, postId) =>
  get(state, `posts.byId.${postId}.payload`)

export const selectIsFetchingPost = (state, postId) =>
  get(state, `posts.byId.${postId}.meta.isFetching`)

export const selectPostError = (state, postId) =>
  get(state, `posts.byId.${postId}.error`)

export const selectPosts = state => state.posts.all.items

export const selectIsFetchingPosts = state => state.posts.all.isFetching

export const selectPostsError = state => state.posts.all.error