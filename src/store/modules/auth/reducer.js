import produce from 'immer';

import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  SIGN_OUT,
  AUTH_FAILURE,
} from './actionTypes';

const initialState = {
  token: null,
  isAuthenticated: false,
  isLoading: false,
};

export default function auth(state = initialState, action) {
  return produce(state, draft => {
    switch (action.type) {
      case SIGN_IN_REQUEST: {
        draft.token = null;
        draft.isAuthenticated = false;
        draft.isLoading = true;
        break;
      }

      case SIGN_IN_SUCCESS: {
        draft.token = action.payload.token;
        draft.isAuthenticated = true;
        draft.isLoading = false;
        break;
      }

      case SIGN_UP_REQUEST: {
        draft.token = null;
        draft.isAuthenticated = false;
        draft.isLoading = true;
        break;
      }

      case SIGN_UP_SUCCESS: {
        draft.token = action.payload.token;
        draft.isAuthenticated = true;
        draft.isLoading = false;
        break;
      }

      case FORGOT_PASSWORD_REQUEST: {
        draft.token = null;
        draft.isAuthenticated = false;
        draft.isLoading = true;
        break;
      }

      case FORGOT_PASSWORD_SUCCESS: {
        draft.token = null;
        draft.isAuthenticated = false;
        draft.isLoading = false;
        break;
      }

      case RESET_PASSWORD_REQUEST: {
        draft.token = null;
        draft.isAuthenticated = false;
        draft.isLoading = true;
        break;
      }

      case RESET_PASSWORD_SUCCESS: {
        draft.token = action.payload.token;
        draft.isAuthenticated = true;
        draft.isLoading = false;
        break;
      }

      case SIGN_OUT: {
        draft.token = null;
        draft.isAuthenticated = false;
        draft.isLoading = false;
        break;
      }

      case AUTH_FAILURE: {
        draft.token = null;
        draft.isAuthenticated = false;
        draft.isLoading = false;
        break;
      }

      default:
        break;
    }
  });
}
