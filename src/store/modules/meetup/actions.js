import {
  CREATE_MEETUP_REQUEST,
  CREATE_MEETUP_SUCCESS,
  CREATE_MEETUP_FAILURE,
  UPDATE_MEETUP_REQUEST,
  UPDATE_MEETUP_SUCCESS,
  UPDATE_MEETUP_FAILURE,
} from './actionTypes';

export function createMeetupRequest(data) {
  return {
    type: CREATE_MEETUP_REQUEST,
    payload: { data },
  };
}

export function createMeetupSuccess(meetup) {
  return {
    type: CREATE_MEETUP_SUCCESS,
    payload: { meetup },
  };
}

export function createMeetupFailure() {
  return {
    type: CREATE_MEETUP_FAILURE,
  };
}

export function updateMeetupRequest(data) {
  return {
    type: UPDATE_MEETUP_REQUEST,
    payload: { data },
  };
}

export function updateMeetupSuccess(meetup) {
  return {
    type: UPDATE_MEETUP_SUCCESS,
    payload: { meetup },
  };
}

export function updateMeetupFailure() {
  return {
    type: UPDATE_MEETUP_FAILURE,
  };
}
