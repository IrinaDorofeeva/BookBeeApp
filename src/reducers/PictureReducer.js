import {
  PICTURE_SET,
  PICTURE_LOADING,
  PICTURE_FAIL,
  PICTURE_FETCH_SUCCESS
} from '../actions/types';



const INITIAL_STATE = {
  picture: '',
  loading: true,
  uploaded: false
};

export default (state = INITIAL_STATE, action) => {
console.log('picture action');
console.log(action);
switch (action.type) {
  case PICTURE_FETCH_SUCCESS:
  return {  loading: false, picture: action.payload.picture, uploaded: true};
  case PICTURE_SET:
  return {  loading: true, picture: action.payload.picture, uploaded: true};
  case PICTURE_LOADING:
  return { ...state, loading: true, uploaded: false}
  case PICTURE_FAIL:
  return { ...state, loading: false, uploaded: false}
  default:
  return state;
}
};
