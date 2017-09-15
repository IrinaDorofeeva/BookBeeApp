import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  LOCATION_UPDATE,
  LOCATION_SET,
  LOCATION_FETCH_SUCCESS
} from './types';

import GeoFire from 'geofire';


export const locationSet = ({ latitude, longitude }) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    var firebaseRef = firebase.database().ref(`/users_locations`);
    var geoFire = new GeoFire(firebaseRef);
    geoFire.set(currentUser.uid, [latitude, longitude])
    .then(() => {
      dispatch({ type: LOCATION_SET });
    });
  };
};

export const locationUpdate = ({ latitude, longitude }) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    var firebaseRef = firebase.database().ref(`/users_locations`);
    var geoFire = new GeoFire(firebaseRef);
    geoFire.remove(currentUser.uid).then(function() {
  console.log("Provided key has been removed from GeoFire");
}, function(error) {
  console.log("Error: " + error);
});
    geoFire.set(currentUser.uid, [latitude, longitude])
    .then(() => {
      dispatch({ type: LOCATION_UPDATE });
    });
  };
};
