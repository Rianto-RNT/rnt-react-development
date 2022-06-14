import userActionTypes from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  error: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // this able to stack case like this-
    // Dont need to write two seperate case statement-
    // with exac identical/same  return state.
    case userActionTypes.GOOGLE_SIGN_IN_SUCCESS:
    case userActionTypes.EMAIL_SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };

    case userActionTypes.GOOGLE_SIGN_IN_FAILURE:
    case userActionTypes.EMAIL_SIGN_IN_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
