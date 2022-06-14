import { takeLatest, put, all, call } from "redux-saga/effects";

import userActionTypes from "./user.types";

import { googleSignInSuccess, googleSignInFailure } from "./user.actions";

import {
  auth,
  googleProvider,
  createUserProfileDocument,
} from "../../utils/firebase.utils";

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    // console.log(userRef);
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();
    yield put(
      googleSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
    );
  } catch (err) {
    yield put(googleSignInFailure(err));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* userSagas() {
  yield all([call(onGoogleSignInStart)]);
}
