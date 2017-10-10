import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { SEARCH_TEXT_CHANGED,
  SEARCH_SUCCESS,
  SEARCH_FAIL,
  SEARCH_STARTS,
  EMPTY_SEARCH } from './types';


export const searchTextChanged = (text) => {
  return {
    type: SEARCH_TEXT_CHANGED,
    payload: text
  };
};

export const searchStarts = (text) => {
  return (dispatch) => {
    dispatch({ type: SEARCH_STARTS });

  /*firebase.auth().signInWithEmailAndPassword(email, password)
  .then(user => loginUserSuccess(dispatch, user))
      .catch(() => loginUserFail(dispatch));

      firebase.database().ref(`/users/${key}/profile`)
      .on('value', snapshot => {
      if (snapshot.exists()){
      var value = snapshot.val();
      marker.book = value.book;
      marker.name = value.name;
      marker.author = value.author;
      }
      else {
      }
      });
      if(key!=currentUser.uid){
      markers.push(marker);
    }
    databaseReference.orderByChild('_searchLastName')
                 .startAt(queryText)
                 .endAt(queryText+"\uf8ff")
                 .once("value")



      firebase.database().ref(`/users/profile/book`).orderByKey()
                   .startAt(text)
                   .endAt(text +"\uf8ff")
                   .once('value', function(snap) {
                     console.log('*******');
                     console.log(snap.val());
                   });

      firebase.database().ref(`/users/`).child('profile').orderByChild('name').equalTo(text);


      firebase.database().ref(`/users`)
                   .child('profile')
                   .child('name').orderByChild('name')
                   .startAt(text.toString())
                   .endAt(text.toString() +"\uf8ff")
                   .once('value', function(snap) {
                     console.log('*******');
                     console.log(snap.val());
                   });
                   */

                   firebase.database().ref(`/users`)
                                .child('profile')
                                .child('name').orderByChild('name')
                                .equalTo(text.toString())
                                .once('value').then(function(snap){
                                  console.log('*');
                                  console.log(snap.val());
                                });
  };
};

const searchFail = (dispatch) => {
  dispatch({ type: SEARCH_FAIL });
};
const searchSuccess = (dispatch, users) => {
  dispatch({
    type: SEARCH_SUCCESS,
    payload: users
  });
};



export const emptySearch = (dispatch) => {

  return (dispatch) => {
        dispatch({ type: EMPTY_SEARCH });
  };
};
