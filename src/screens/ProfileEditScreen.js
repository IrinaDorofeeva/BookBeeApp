import React, { Component } from 'react';
import {AsyncStorage} from 'react-native';
import _ from 'lodash';
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
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

class ProfileEditScreen extends Component {

  componentWillMount() {
      _.each(this.props.profile, (value, prop) => {
        this.props.profileUpdate({ prop, value });
      });
    }

  render() {
    return (
      <KeyboardAwareScrollView style={{backgroundColor: '#fff', flex: 1}} resetScrollToCoords={{ x: 0, y: 0 }}
      scrollEnabled={true} automaticallyAdjustContentInsets={false}>
      <View>
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
    export default connect(mapStateToProps, { profileFetch, profileUpdate })(ProfileEditScreen);
