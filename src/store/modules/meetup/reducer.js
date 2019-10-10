import produce from 'immer';

import {
  CREATE_MEETUP_REQUEST,
  CREATE_MEETUP_SUCCESS,
  CREATE_MEETUP_FAILURE,
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

      default:
        break;
    }
  });
}
