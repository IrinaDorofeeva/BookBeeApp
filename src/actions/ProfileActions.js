import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  PROFILE_UPDATE,
  PROFILE_SET,
  PROFILE_FETCH_SUCCESS
} from './types';

export const profileUpdate = ({ prop, value }) => {
  return {
    type: PROFILE_UPDATE,
    payload: { prop, value }
  };
};

export const profileSet = ({ name}) => {
  const { currentUser } = firebase.auth();

  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/profile`)
    .set({ name })
    .then(() => {
      dispatch({ type: PROFILE_SET });
      //Actions.profile({ type: 'reset' });
    });
  };
};

export const profileFetch = () => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/profile`)
    .on('value', snapshot => {
      dispatch({ type: PROFILE_FETCH_SUCCESS, payload: snapshot.val() });
    });
  };
};
