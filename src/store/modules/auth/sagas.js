import { all, call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { Api, History } from '~/services';

import {
  SIGN_IN_REQUEST,
  SIGN_UP_REQUEST,
  FORGOT_PASSWORD_REQUEST,
  RESET_PASSWORD_REQUEST,
  SIGN_OUT,
} from './actionTypes';

import {
  signInSuccess,
  signUpSuccess,
  forgotPasswordSuccess,
  resetPasswordSuccess,
  authFailure,
} from './actions';

export function setAuthorizationHeader({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;
  if (token) {
    Api.defaults.headers.authorization = `Bearer ${token}`;
  }
}

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;
    const response = yield call(Api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;
    Api.defaults.headers.authorization = `Bearer ${token}`;
    yield put(signInSuccess(token, user));

    History.push('/');
  } catch (err) {
    toast.error('Authentication failed, please check your credentials.');
    yield put(authFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;
    const response = yield call(Api.post, 'users', {
      name,
      email,
      password,
    });

    const { token, user } = response.data;
    Api.defaults.headers.authorization = `Bearer ${token}`;
    yield put(signUpSuccess(token, user));

    History.push('/');
  } catch (err) {
    toast.error('Something went wrong, please try again.');
    yield put(authFailure());
  }
}

export function* forgotPassword({ payload }) {
  try {
    const { email } = payload;
    yield call(Api.post, 'forgot_password', { email });
    yield put(forgotPasswordSuccess());
  } catch (err) {
    yield put(authFailure());
  }
}

export function* resetPassword({ payload }) {
  try {
    const { token, password, passwordConfirmation } = payload;
    const response = yield call(Api.post, 'reset_password', {
      token,
      password,
      passwordConfirmation,
    });

    const { token: authToken, user } = response.data;
    Api.defaults.headers.authorization = `Bearer ${authToken}`;
    yield put(resetPasswordSuccess(authToken, user));

    History.push('/');
  } catch (err) {
    toast.error('Something went wrong, please try again.');
    yield put(authFailure());
  }
}

export function signOut() {
  History.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setAuthorizationHeader),
  takeLatest(SIGN_IN_REQUEST, signIn),
  takeLatest(SIGN_UP_REQUEST, signUp),
  takeLatest(FORGOT_PASSWORD_REQUEST, forgotPassword),
  takeLatest(RESET_PASSWORD_REQUEST, resetPassword),
  takeLatest(SIGN_OUT, signOut),
]);
