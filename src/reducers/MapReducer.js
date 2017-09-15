import {
LOCATION_SET,
LOCATION_UPDATE,
LOCATION_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  latitude: '',
  longitude: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  //  case MAP_UPDATE:
    //action.payload === { prop: 'name', value: 'jane'}
  //  return { ...state, [action.payload.prop]: action.payload.value };
    case LOCATION_SET:
    return state;
    case LOCATION_UPDATE:
    return state;
    default:
    return state;
  }
};
