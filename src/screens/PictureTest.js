import React, { Component } from 'react';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Text, View, Image, StatusBar, KeyboardAvoidingView } from 'react-native';
import { Card, CardSection, InputProfile, ButtonProfile, Spinner, SmallButton, TopBar} from '../components/common';
import { TouchableOpacity } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import PictureFormRedux from '../components/PictureFormRedux';

class PictureTest extends Component {


  render() {
    return (

      <KeyboardAwareScrollView style={{backgroundColor: '#fff', flex: 1}} resetScrollToCoords={{ x: 0, y: 0 }}
      scrollEnabled={true} automaticallyAdjustContentInsets={false}>


    <PictureFormRedux />

      </KeyboardAwareScrollView>



    );
  }
}
export default PictureTest;
