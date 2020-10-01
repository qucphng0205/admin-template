import { takeLatest, put, call, all } from "redux-saga/effects";
import {
  AuthActionTypes,
  fetchUserFailure,
  fetchUserSuccess,
  handlePaymentSuccess,
  handlePaymentFailure,
} from "./auth.action";

export function* ga_FetchUser() {
  try {
    const user = yield call(() =>
      fetch("/api/current_user").then((res) => res.json())
    );
    yield put(fetchUserSuccess(user));
  } catch (e) {
    console.log(e);
    yield put(fetchUserFailure("Fetch user error - " + e));
  }
}

export function* sa_FetchUser() {
  yield takeLatest(AuthActionTypes.FETCH_USER_REQUEST, ga_FetchUser);
}

export function* ga_HandlePaymentToken(action) {
  const requestOption = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(action.payload),
  };
  try {
    const res = yield call(() =>
      fetch("/api/stripe", requestOption).then((res) => res.json())
    );
    yield put(handlePaymentSuccess());
    yield put(fetchUserSuccess(res));
  } catch (e) {
    yield put(handlePaymentFailure("Handle payment error - " + e));
  }
}

export function* sa_HandlePaymentToken() {
  yield takeLatest(
    AuthActionTypes.HANDLE_PAYMEN_REQUEST,
    ga_HandlePaymentToken
  );
}

export default function* userSagas() {
  yield all([call(sa_FetchUser), call(sa_HandlePaymentToken)]);
}
