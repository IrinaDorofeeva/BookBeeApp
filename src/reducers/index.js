import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import ProfileReducer from './ProfileReducer';
import PictureReducer from './PictureReducer';
import ProfileFormReducer from './ProfileFormReducer';
import MapReducer from './MapReducer';
import SearchReducer from './SearchReducer';

export default combineReducers({
  auth: AuthReducer,
  profileForm: ProfileFormReducer,
  profile: ProfileReducer,
  pictureState: PictureReducer,
  map: MapReducer,
  search: SearchReducer
});
