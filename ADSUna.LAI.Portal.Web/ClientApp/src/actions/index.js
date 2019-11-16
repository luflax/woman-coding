export const changeToken = token => ({
  type: "CHANGE_TOKEN",
  payload: token
});

export const changePostList = postList => ({
  type: "CHANGE_POST_LIST",
  payload: postList
});

export const addToPostList = post => ({
  type: "ADD_POST",
  payload: post
});

export const deleteFromPostList = postId => ({
  type: "DELETE_POST",
  payload: postId
});
