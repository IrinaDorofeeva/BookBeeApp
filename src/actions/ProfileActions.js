import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  PROFILE_UPDATE,
  PROFILE_SET,
  PROFILE_FETCH_SUCCESS,
  PROFILE_LOADING
} from './types';

export const profileUpdate = ({ prop, value }) => {
  return {
    type: PROFILE_UPDATE,
    payload: { prop, value }
  };
};

export const profileSet = ({ name, book, author, genre, about }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/profile`)
    .set({ name, book, author, genre, about })
    .then(() => {
      dispatch({ type: PROFILE_SET });
      Actions.profile({ type: 'reset' });
    });
  };
};

export const profileFetch = () => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    dispatch({ type: PROFILE_LOADING });
    firebase.database().ref(`/users/${currentUser.uid}/profile`)
    .on('value', snapshot => {
      dispatch({ type: PROFILE_FETCH_SUCCESS, payload: snapshot.val() });
if (!snapshot.exists()){
  Actions.profilecreate();
}
else {
  Actions.profile();
}
    });
  };
};
