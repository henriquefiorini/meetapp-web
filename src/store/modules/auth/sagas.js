import { all, call, put, takeLatest } from 'redux-saga/effects';

import { Api, History } from '~/services';

import { SIGN_IN_REQUEST, SIGN_UP_REQUEST } from './actionTypes';
import { signInSuccess, signUpSuccess, authFailure } from './actions';

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
    yield put(authFailure());
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setAuthorizationHeader),
  takeLatest(SIGN_IN_REQUEST, signIn),
  takeLatest(SIGN_UP_REQUEST, signUp),
]);