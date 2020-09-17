import { combineReducers } from "redux";
import authReducer from "./auth/auth.reducer";

const combinedReducer = combineReducers({
  auth: authReducer,
});

export default combinedReducer;
