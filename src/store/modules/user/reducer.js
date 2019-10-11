import produce from 'immer';

import {
  SIGN_IN_SUCCESS,
  SIGN_UP_SUCCESS,
  RESET_PASSWORD_SUCCESS,
  SIGN_OUT,
} from '../auth/actionTypes';

import {
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAILURE,
} from './actionTypes';

const initialState = {
  profile: null,
  isLoading: false,
};

export default function user(state = initialState, action) {
  return produce(state, draft => {
    switch (action.type) {
      case SIGN_IN_SUCCESS: {
        draft.profile = action.payload.user;
        break;
      }

      case SIGN_UP_SUCCESS: {
        draft.profile = action.payload.user;
        break;
      }

      case RESET_PASSWORD_SUCCESS: {
        draft.profile = action.payload.user;
        break;
      }

      case SIGN_OUT: {
        draft.profile = null;
        break;
      }

      case UPDATE_PROFILE_REQUEST: {
        draft.isLoading = true;
        break;
      }

      case UPDATE_PROFILE_SUCCESS: {
        draft.profile = action.payload.profile;
        draft.isLoading = false;
        break;
      }

      case UPDATE_PROFILE_FAILURE: {
        draft.isLoading = false;
        break;
      }

      default:
        break;
    }
  });
}
