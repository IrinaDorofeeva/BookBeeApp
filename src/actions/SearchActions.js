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

    const { currentUser } = firebase.auth();
    firebase.database().ref(`/users_search/${currentUser.uid}/`)
    .set(null).then(() => {});

                   firebase.database().ref('users_books').orderByChild('book').startAt(text.searchText)
                   .endAt(text.searchText +"\uf8ff").on('child_added', function(snap){
                     console.log('book found');
                     console.log(snap.val());
                     var profile =[];
                     firebase.database().ref(`/users/${snap.key}/profile`)
                     .on('value', snapshot => {
                     if (snapshot.exists()){
                     var value = snapshot.val();
                     profile.book = value.book;
                     profile.name = value.name;
                     profile.author = value.author;
                     firebase.database().ref(`/users_search/${currentUser.uid}/`)
                     .push(profile).then(() => {  console.log('found user profile pushed');});
                     }
                     else {}
                     });
                     });

                  /*  firebase.database().ref('users_authors').orderByChild('author').startAt(text.searchText)
                   .endAt(text.searchText +"\uf8ff").on('child_added', function(snap){

                     firebase.database().ref(`/users_search/${currentUser.uid}/`)
                     .push(snap.key).then(() => {});
                                             });

                    firebase.database().ref('users_genres').orderByChild('genre').startAt(text.searchText)
                    .endAt(text.searchText +"\uf8ff").on('child_added', function(snap){

                      firebase.database().ref(`/users_search/${currentUser.uid}/`)
                      .push(snap.key).then(() => {});

                    });*/
                    dispatch({ type: SEARCH_SUCCESS });
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

  const { currentUser } = firebase.auth();
  firebase.database().ref(`/users_search/${currentUser.uid}`).remove();


  return (dispatch) => {
        dispatch({ type: EMPTY_SEARCH });
  };
};
