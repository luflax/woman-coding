import { authReducer } from "./auth";
import { communityReducer } from "./community";
import { combineReducers } from "redux";
import { reducer as toastrReducer } from "react-redux-toastr";

export const reducers = combineReducers({
  authState: authReducer,
  communityState: communityReducer,
  toastr: toastrReducer
});
