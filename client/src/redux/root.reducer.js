import { combineReducers } from "redux";
import authReducer from "./auth/auth.reducer";
import postReducer from "./post/post.reducer";

const combinedReducer = combineReducers({
  authReducer,
  postReducer,
});

export default combinedReducer;
