import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { Api } from '~/services';

import { UPDATE_PROFILE_REQUEST } from './actionTypes';
import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
  try {
    const { name, email, avatar_id, ...rest } = payload.data;

    const profile = {
      name,
      email,
      avatar_id,
      ...(rest.oldPassword && rest),
    };

    const response = yield call(Api.put, 'users', profile);

    toast.success('Profile updated successfully.');
    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    toast.error('Cannot update profile information, please try again later.');
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest(UPDATE_PROFILE_REQUEST, updateProfile)]);
