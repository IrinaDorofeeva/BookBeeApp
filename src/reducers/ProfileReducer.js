import {
  PROFILE_FETCH_SUCCESS,
  PROFILE_LOADING
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
switch (action.type) {
  case PROFILE_FETCH_SUCCESS:
  return action.payload;
  case PROFILE_LOADING:
  return { ...state, loading: true};

  //return { ...state, [action.payload.prop]: action.payload.value };
  default:
  return state;
}
};
