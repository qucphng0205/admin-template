import { combineReducers } from "redux";
import authReducer from "./auth/auth.reducer";
import postReducer from "./post/post.reducer";
import commentReducer from "./comment/comment.reducer";

const combinedReducer = combineReducers({
  authReducer,
  postReducer,
  commentReducer,
});

export default combinedReducer;
