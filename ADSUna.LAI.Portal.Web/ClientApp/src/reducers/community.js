const initialState = {
  postList: []
};

export const communityReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_POST_LIST":
      return {
        ...state,
        postList: action.payload
      };
    case "ADD_POST":
      return {
        ...state,
        postList: [action.payload, ...state.postList]
      };
    case "DELETE_POST":
      return {
        ...state,
        postList: state.postList.filter(post => post.postId != action.payload)
      };
    default:
      return state;
  }
};
