import produce from 'immer';

import {
  CREATE_MEETUP_REQUEST,
  CREATE_MEETUP_SUCCESS,
  CREATE_MEETUP_FAILURE,
  UPDATE_MEETUP_REQUEST,
  UPDATE_MEETUP_SUCCESS,
  UPDATE_MEETUP_FAILURE,
  CANCEL_MEETUP,
} from './actionTypes';

const initialState = {
  isLoading: false,
};

export default function meetup(state = initialState, action) {
  return produce(state, draft => {
    switch (action.type) {
      case CREATE_MEETUP_REQUEST: {
        draft.isLoading = true;
        break;
      }

      case CREATE_MEETUP_SUCCESS: {
        draft.isLoading = false;
        break;
      }

      case CREATE_MEETUP_FAILURE: {
        draft.isLoading = false;
        break;
      }

      case UPDATE_MEETUP_REQUEST: {
        draft.isLoading = true;
        break;
      }

      case UPDATE_MEETUP_SUCCESS: {
        draft.isLoading = false;
        break;
      }

      case UPDATE_MEETUP_FAILURE: {
        draft.isLoading = false;
        break;
      }

      case CANCEL_MEETUP:
        break;

      default:
        break;
    }
  });
}
