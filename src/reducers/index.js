import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import ProfileReducer from './ProfileReducer';
import PictureReducer from './PictureReducer';
import ProfileFormReducer from './ProfileFormReducer';

export default combineReducers({
  auth: AuthReducer,
  profileForm: ProfileFormReducer,
  profile: ProfileReducer,
  pictureState: PictureReducer

});
