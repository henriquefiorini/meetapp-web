import { call, put, all, takeLatest } from 'redux-saga/effects';

import { Api, History } from '~/services';

import { CREATE_MEETUP_REQUEST, UPDATE_MEETUP_REQUEST } from './actionTypes';

import {
  createMeetupSuccess,
  createMeetupFailure,
  updateMeetupSuccess,
  updateMeetupFailure,
} from './actions';

export function* createMeetup({ payload }) {
  try {
    const { title, description, date, location, banner_id } = payload.data;

    const meetup = {
      title,
      description,
      date,
      location,
      banner_id,
    };

    const response = yield call(Api.post, 'meetups', meetup);
    yield put(createMeetupSuccess(response.data));

    History.push(`/meetups/${response.data.id}`);
  } catch (err) {
    yield put(createMeetupFailure());
  }
}

export function* updateMeetup({ payload }) {
  try {
    const { id, title, description, date, location, banner_id } = payload.data;

    const meetup = {
      title,
      description,
      date,
      location,
      banner_id,
    };

    const response = yield call(Api.put, `meetups/${id}`, meetup);
    yield put(updateMeetupSuccess(response.data));

    History.push(`/meetups/${response.data.id}`);
  } catch (err) {
    yield put(updateMeetupFailure());
  }
}

export default all([
  takeLatest(CREATE_MEETUP_REQUEST, createMeetup),
  takeLatest(UPDATE_MEETUP_REQUEST, updateMeetup),
]);
