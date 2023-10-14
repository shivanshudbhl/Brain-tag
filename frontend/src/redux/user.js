import {
  USER_LOADING,
  SET_USER,
  USER_ERROR,
  USER_LOGOUT,
} from "./actions/ActionTypes";

export const User = (
  state = { isLoading: false, error: "", isLoggedIn: false, user: {} },
  action
) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        isLoggedIn: true,
        error: "",
      };
    case USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case USER_ERROR:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        error: String(action.payload),
      };
    case USER_LOGOUT:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        user: {},
      };
    default:
      return state;
  }
};
