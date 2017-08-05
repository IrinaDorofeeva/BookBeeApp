import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  PICTURE_SET,
  PICTURE_LOADING,
  PICTURE_FAIL,
  PICTURE_FETCH_SUCCESS
} from './types';


export const pictureLoading = () => {
  return {
    type: PICTURE_LOADING,
  };
};

export const pictureSet = ({ picture }) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    dispatch({ type: PICTURE_LOADING });
    firebase.database().ref(`/users/${currentUser.uid}/profile_picture`)
    .set({ picture })
    .then(() => {
      dispatch({ type: PICTURE_SET });
    //  Actions.profile({ type: 'reset' });
    });
  };
};

export const pictureFetch = () => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    dispatch({ type: PICTURE_LOADING });
    firebase.database().ref(`/users/${currentUser.uid}/profile_picture`)
    .on('value', snapshot => {
if (!snapshot.exists()){
  dispatch({ type: PICTURE_FAIL })
}
else{
  dispatch({ type: PICTURE_FETCH_SUCCESS, payload: snapshot.val() });
}
    });
  };
};
