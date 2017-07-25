import React, { Component } from 'react';
import {AsyncStorage} from 'react-native';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Text, View, Image, StatusBar, KeyboardAvoidingView } from 'react-native';
import { Card, CardSection, Input, Button, Spinner, SmallButton, TopBar} from '../components/common';
import { TouchableOpacity } from "react-native";
import BackProfile from '../components/topButtons/BackProfile';
import {Header} from 'react-native-elements'
import {Dimensions } from 'react-native';
import {profileFetch, profileUpdate} from '../actions';
import ProfileRender from '../components/ProfileRender';
import ProfileSetForm from '../components/ProfileSetForm';

class ProfileEditScreen extends Component {

  componentWillMount(){
  this.props.profileFetch();
  this.props.profileUpdate({prop: 'name', value: this.props.profile.name });


}

  render() {
    return (
      <View style ={{ flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
      <Header
        leftComponent={<BackProfile />}
        centerComponent={{ text: 'EDIT PROFILE', style: { color: '#fff', fontSize: 20,
        fontWeight: '500' } }}
        rightComponent={<View style={{  width: (Dimensions.get('window').width)/6  }}/>}
        outerContainerStyles={{ backgroundColor: '#e0a64b' }}
      />

      <Text> Edit Profile Screen</Text>
      <ProfileSetForm />
    </View>


    );
  }
  }

    const mapStateToProps = state => {
    const profile = state.profile;

      return { profile };
    };
    export default connect(mapStateToProps, { profileFetch, profileUpdate })(ProfileEditScreen);
