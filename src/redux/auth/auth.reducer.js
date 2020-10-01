import { AuthActionTypes } from "./auth.action";

const _INITIAL_STATE = {
  user: null,
  error: "",
};

const authReducer = (state = _INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthActionTypes.FETCH_USER_SUCCESS:
      return { ...state, user: action.payload, error: "" };
    case AuthActionTypes.FETCH_USER_FAILURE:
      return { ...state, error: action.payload };
    // case AuthActionTypes.HANDLE_PAYMEN_FAILURE:
    //   return { ...state, error: action.payload };
    // case AuthActionTypes.FETCH_USER_FAILURE:
    //   return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default authReducer;
