import userActionTypes from "./user.types";

// ==============Google Sign in =================
export const googleSignInStart = () => ({
  type: userActionTypes.GOOGLE_SIGN_IN_START,
});

// ==============Email Sign in =================
export const emailSignInStart = (emailAndPassword) => ({
  type: userActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});

export const signInSuccess = (user) => ({
  type: userActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (error) => ({
  type: userActionTypes.SIGN_IN_FAILURE,
  payload: error,
});
