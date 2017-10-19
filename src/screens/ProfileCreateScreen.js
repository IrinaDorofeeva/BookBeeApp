import React, { Component } from 'react';
import {AsyncStorage, Dimensions} from 'react-native';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Text, View, Image, StatusBar, KeyboardAvoidingView } from 'react-native';
import { Card, CardSection, InputProfile, ButtonProfile, Spinner, SmallButton, TopBar} from '../components/common';
import { TouchableOpacity } from "react-native";
import Logout from '../components/topButtons/Logout';
import EditProfile from '../components/topButtons/EditProfile';
import {Logo, Title, Slogan} from '../components/design';
import {Header} from 'react-native-elements'
import {profileFetch} from '../actions';
import ProfileRender from '../components/ProfileRender';
import ProfileSetForm from '../components/ProfileSetForm';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

class ProfileCreateScreen extends Component {
  render() {
    return (
      <KeyboardAwareScrollView style={{backgroundColor: '#fff', flex: 1}} resetScrollToCoords={{ x: 0, y: 0 }}
      scrollEnabled={true} automaticallyAdjustContentInsets={false}>
    //  <Text>Create Profile</Text>
      <View >
      <ProfileSetForm />
      </View>
     </KeyboardAwareScrollView>
    );
  }
  }
    const mapStateToProps = state => {
    const profile = state.profile;

      return { profile };
    };
    export default ProfileCreateScreen;
