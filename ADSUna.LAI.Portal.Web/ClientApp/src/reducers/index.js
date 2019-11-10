import { authReducer } from "./auth";
import { combineReducers } from "redux";
import { reducer as toastrReducer } from "react-redux-toastr";

export const reducers = combineReducers({
  authState: authReducer,
  toastr: toastrReducer
});
