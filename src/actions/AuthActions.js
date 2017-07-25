import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { EMAIL_CHANGED,
  PASSWORD_CHANGED,
  REPASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  SIGNUP_USER_SUCCESS,
LOGIN_USER_FAIL,
SIGNUP_USER_FAIL,
LOGIN_USER,
EMPTY_AUTH,
PASSWORD_RESET,
PASSWORD_RESET_SUCCESS,
PASSWORD_RESET_FAIL,
PASSWORD_MISMATCH,
SIGNUP_USER } from './types';


export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const repasswordChanged = (text) => {
  return {
    type: REPASSWORD_CHANGED,
    payload: text
  };
};


export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then(user => loginUserSuccess(dispatch, user))
      .catch(() => loginUserFail(dispatch));
  };
};
const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};
const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
  Actions.first();
};

export const signupUser = ({ email, password, repassword }) => {
  return (dispatch) => {
    dispatch({ type: SIGNUP_USER });
    if (password === repassword){
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => signupUserSuccess(dispatch, user))
      .catch(() => signupUserFail(dispatch));

    }
    else{
        dispatch({ type: PASSWORD_MISMATCH });
        console.log(password);
        console.log(repassword);
      }
      };
  };
const signupUserFail = (dispatch) => {
  dispatch({ type: SIGNUP_USER_FAIL });
};
const signupUserSuccess = (dispatch, user) => {
  dispatch({
    type: SIGNUP_USER_SUCCESS,
    payload: user
  });
  Actions.first();
};


export const emptyAuth = (dispatch) => {

  return (dispatch) => {
        dispatch({ type: EMPTY_AUTH });
  };
};

export const logout = (dispatch) => {
  return (dispatch) => {
    firebase.auth().signOut().then(() => {
        dispatch({ type: EMPTY_AUTH });
        Actions.login();
      });
  };
};

export const passwordReset = ({ email }) => {
  return (dispatch) => {
    dispatch({ type: PASSWORD_RESET });
        firebase.auth().sendPasswordResetEmail(email)
        .then(() => passwordResetSuccess(dispatch))
        .catch(() => passwordResetFail(dispatch));
      };
  };

  const passwordResetFail = (dispatch) => {
    dispatch({ type: PASSWORD_RESET_FAIL });
  };
  const passwordResetSuccess = (dispatch) => {
    dispatch({
      type: PASSWORD_RESET_SUCCESS,
    });
    Actions.login();
  };
