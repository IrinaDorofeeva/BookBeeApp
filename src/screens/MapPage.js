import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Text, View, Image, StatusBar, KeyboardAvoidingView, StyleSheet } from 'react-native';
import { Card, CardSection, Input, Button, Spinner, SmallButton} from '../components/common';
import { TouchableOpacity } from "react-native";
import Logout from '../components/topButtons/Logout';

import {Logo, Title, Slogan} from '../components/design';
import {Header} from 'react-native-elements'
import {Dimensions } from 'react-native';
import MapView from 'react-native-maps';

import {locationSet, locationUpdate} from '../actions';
import firebase from 'firebase';
import GeoFire from 'geofire';

const {width, height} = Dimensions.get('window')
const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width
const ASPECT_RATIO= width/ height
const LATTITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATTITUDE_DELTA * ASPECT_RATIO

class MapPage extends Component {

  constructor(props){
    super(props)
    this.state = {
      initialPosition: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0
      },
      markerPosition: {
        latitude: 0,
        longitude: 0
      }
    }
  }

watchID: ?number = null
componentDidMount() {
  navigator.geolocation.getCurrentPosition((position) => {
    var lat = parseFloat(position.coords.latitude)
    var long = parseFloat(position.coords.longitude)
      this.props.locationSet({ latitude: lat, longitude: long});
    var initialRegion = {
      latitude: lat,
      longitude: long,
      latitudeDelta: LATTITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    }
    this.setState({initialPosition: initialRegion})
    this.setState({markerPosition: initialRegion})
  }, (error)=>alert(JSON.stringify(error)),
  {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000})
  this.watchID = navigator.geolocation.watchPosition((position)=>{
    var lat = parseFloat(position.coords.latitude)
    var long = parseFloat(position.coords.longitude)
    this.props.locationUpdate({ latitude: lat, longitude: long});
    var firebaseRef = firebase.database().ref(`/users_locations`);
    var geoFire = new GeoFire(firebaseRef);
    var geoQuery = geoFire.query({
      center: [lat, long],
      radius: 10.5
    });

    var onKeyEnteredRegistration = geoQuery.on("key_entered", function(key, location, distance) {
  console.log(key + " entered query at " + location + " (" + distance + " km from center)");
});
    var lastRegion = {
      latitude: lat,
      longitude:long,
      latitudeDelta: LATTITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    }
    this.setState({initialPosition: lastRegion})
    this.setState({markerPosition: lastRegion})
  })
}
componentWillUnmount() {
  navigator.geolocation.clearWatch(this.watchID)
}

renderMarkers() {
  var firebaseRef = firebase.database().ref(`/users_locations`);
  var geoFire = new GeoFire(firebaseRef);
  var geoQuery = geoFire.query({
    center: [37, -122],
    radius: 10.5
  });
  var onKeyEnteredRegistration = geoQuery.on("key_entered", function(key, location, distance) {
  return (
    <MapView.Marker
    coordinate={location}>

    </MapView.Marker>
  );
});
}


  render() {
    return (
      <View style ={{ flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
      <Header
        leftComponent={<Logout />}
        centerComponent={{ text: 'MAP', style: { color: '#fff', fontSize: 20,
        fontWeight: '500' } }}
        rightComponent={<View style={{  width: (Dimensions.get('window').width)/6  }}/>}
        outerContainerStyles={{ backgroundColor: '#e0a64b' }}
      />

      <View style = {styles.container}>
      < MapView
      style ={styles.map}
      region={this.state.initialPosition}>


      <MapView.Marker
      coordinate={this.state.initialPosition}>
      <View style={styles.radius}>
      <View style={styles.marker}/>
      </View>
      </MapView.Marker>

      {this.renderMarkers()}

      </MapView>
        </View>
    </View>
    );
  }
  }
const styles = StyleSheet.create({
  radius: {
    height: 50,
    width: 50,
    borderRadius: 50/2,
    overflow: 'hidden',
    backgroundColor: 'rgba(0,122,255,0.1)',
    borderWidth: 1,
    borderColor: 'rgba(0,122,255,0.3)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  marker: {
    height:20,
    width:20,
    borderWidth:3,
    borderColor: 'white',
    borderRadius: 20/2,
    overflow: 'hidden',
    backgroundColor: '#007AFF'
  },
container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'blue'
},
map: {
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  position: 'absolute'
}

})

const mapStateToProps = state => {
const map = state.map;

  return { map };
};
export default connect(mapStateToProps, { locationSet, locationUpdate })(MapPage);