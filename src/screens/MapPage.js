import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Text, View, Image, StatusBar, KeyboardAvoidingView, StyleSheet } from 'react-native';
import { Card, CardSection, Input, ChatButton, Spinner, SmallButton} from '../components/common';
import { TouchableOpacity } from "react-native";
import Logout from '../components/topButtons/Logout';


import {Logo, Title, Slogan} from '../components/design';
import {Header} from 'react-native-elements'
import {Dimensions } from 'react-native';
import MapView from 'react-native-maps';

import {locationSet, locationUpdate, otherProfileFetch} from '../actions';
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
      readerPosition: {
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
    this.setState({readerPosition: initialRegion})
  }, (error)=>alert(JSON.stringify(error)),
  {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000})
  this.watchID = navigator.geolocation.watchPosition((position)=>{
    var lat = parseFloat(position.coords.latitude)
    var long = parseFloat(position.coords.longitude)
    this.props.locationUpdate({ latitude: lat, longitude: long});
    var lastRegion = {
      latitude: lat,
      longitude:long,
      latitudeDelta: LATTITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    }
    this.setState({initialPosition: lastRegion})
    this.setState({readerPosition: lastRegion})
  })
}
componentWillUnmount() {
  navigator.geolocation.clearWatch(this.watchID)
}

otherMarkers() {
  const { currentUser } = firebase.auth();
  var firebaseRef = firebase.database().ref(`/users_locations`);
  var geoFire = new GeoFire(firebaseRef);
  var geoQuery = geoFire.query({
    center: [this.state.initialPosition.latitude, this.state.initialPosition.longitude],
    radius: (this.state.initialPosition.latitudeDelta)*100
  });
  var markers = [];

  console.log(this.state.initialPosition.latitude + " " + this.state.initialPosition.longitude);

  var onKeyEnteredRegistration = geoQuery.on("key_entered", function(key, location, distance) {
    var marker = {key: 0, location: 0};
    marker.key = key;
    marker.location= location;

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
});
return markers;
}

  render() {
    return (
      <View style ={{ flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
      <View style = {styles.container}>
      < MapView
      style ={styles.map}
      region={this.state.initialPosition}
      onRegionChange={ initialPosition => this.setState({initialPosition}) }
      onRegionChangeComplete={ initialPosition => this.setState({initialPosition}) }
      >
    <MapView.Marker
    coordinate={this.state.readerPosition}
    image={require('../components/images/YouPin.png')}
    >
    <View style={styles.marker} />

    <MapView.Callout style={{ width: 100 }} >
                  <View style={{ flex: 1, alignItems: 'center', flexDirection: 'column', flexWrap: 'wrap' }}>
                  <Text style={ styles.author }>This is your location!</Text>
                </View>

            </MapView.Callout>

    </MapView.Marker>

      {this.otherMarkers().map(function(object, index) {
        return (

          <MapView.Marker
          key={index}
          coordinate={{
            latitude: object.location[0],
            longitude:object.location[1]
          }}
          >
          <View style={styles.markers}/>

          <MapView.Callout style={{ width: 100 }} >
          						  <View style={{ flex: 1, alignItems: 'center', flexDirection: 'column', flexWrap: 'wrap' }}>
                        <Text style={styles.name}>{object.name}</Text>
                        <Text style={ styles.now }>is now reading</Text>
                        <Text style={ styles.book }>{object.book}</Text>
                        <Text style={ styles.by }>by</Text>
                        <Text style={ styles.author }>{object.author}</Text>

                        <ChatButton>Chat</ChatButton>

          						</View>

          				</MapView.Callout>


          </MapView.Marker>
        );})
      }

      <MapView.Marker
    coordinate={this.state.initialPosition}>
    <View style={styles.marker}/>
    </MapView.Marker>
    </MapView>
    </View>
    </View>
    );
  }
  }
const styles = StyleSheet.create({

  marker: {
    height:1,
    width:1,
    borderWidth:1,
    borderColor: 'transparent',
    borderRadius: 20/2,
    overflow: 'hidden',
    backgroundColor: 'transparent',

  },

  markers: {
    height:20,
    width:20,
    borderWidth:4,
    borderColor: 'orange',
    borderRadius: 20/2,
    overflow: 'hidden',
    backgroundColor: 'white'
  },

  reader_marker: {
    height:20,
    width:20,
    borderWidth:4,
    borderColor: 'orange',
    borderRadius: 20/2,
    overflow: 'hidden',
    backgroundColor: '#e6991f'
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
},

  name: {
    flex: 0.8,
    fontSize: 18,
    fontWeight: '800',
    textAlign: 'center',
    color: '#dfa553'
  },
  now: {
    flex: 0.8,
    fontSize: 10,
    fontStyle: 'italic',
    fontWeight: '500',
    textAlign: 'center',
    color: '#9b9b9b'
  },

  book: {
    flex: 0.8,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: '#5f5f5f'
  },

  by: {
    flex: 0.8,
    fontSize: 10,
    fontWeight: '400',
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#9b9b9b'
  },

  author: {
    flex: 0.8,
    fontSize: 14,
    fontWeight: '600',
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#9b9b9b'
  }

})

const mapStateToProps = state => {
const map = state.map;
const otherProfile = state.otherProfile;

  return { map, otherProfile };
};
export default connect(mapStateToProps, { locationSet, locationUpdate, otherProfileFetch })(MapPage);
