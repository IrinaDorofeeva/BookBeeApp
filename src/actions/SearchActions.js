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

                     firebase.database().ref(`/users_search/${currentUser.uid}/`)
                     .push(snap.key).then(() => {  console.log('key for book found pushed');});
                   });

                    firebase.database().ref('users_authors').orderByChild('author').startAt(text.searchText)
                   .endAt(text.searchText +"\uf8ff").on('child_added', function(snap){

                     firebase.database().ref(`/users_search/${currentUser.uid}/`)
                     .push(snap.key).then(() => {console.log('key for author found pushed');});
                                             });

                    firebase.database().ref('users_genres').orderByChild('genre').startAt(text.searchText)
                    .endAt(text.searchText +"\uf8ff").on('child_added', function(snap){

                      firebase.database().ref(`/users_search/${currentUser.uid}/`)
                      .push(snap.key).then(() => {console.log('key for genre found pushed');});

                    });


                    firebase.database().ref(`/users_search/${currentUser.uid}/`).on('value', snap => {
                          const uids = [];
                          snap.forEach(uid => {
                              const u = uid.val();
                              uids.push({
                                  _id: uid.key,
                              });
                          });

                          /**
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
                        });*/



                          dispatch({ type: SEARCH_SUCCESS,
                            payload: uids });
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

  const { currentUser } = firebase.auth();
  firebase.database().ref(`/users_search/${currentUser.uid}`).remove();


  return (dispatch) => {
        dispatch({ type: EMPTY_SEARCH });
  };
};
