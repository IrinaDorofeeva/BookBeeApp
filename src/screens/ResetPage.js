import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, Image, StatusBar, KeyboardAvoidingView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Card, CardSection, Input, Button, Spinner, SmallButton} from '../components/common';
import { TouchableOpacity } from "react-native";
import { Actions } from 'react-native-router-flux';
import ResetForm from '../components/ResetForm';
import {Logo, Title, Slogan} from '../components/design';
import Back from '../components/topButtons/Back';
import Logout from '../components/topButtons/Logout';


class ResetPage extends Component {

  render() {
    return (
      <KeyboardAwareScrollView style={{backgroundColor: '#e0a64b', flex: 1}} resetScrollToCoords={{ x: 0, y: 0 }}
      scrollEnabled={false}>
      <StatusBar barStyle="light-content" />
      <Back />
      <View style={styles.containerStyle}>
      <Image source={require('../components/images/Bee_Logo.png')} />
      </View>
      <Title />
      <Slogan />
      <ResetForm />
      </KeyboardAwareScrollView>
    );
  }}
  const styles = {
    containerStyle: {
      alignSelf: 'center',
      borderWidth: 1,
      borderRadius: 2,
      borderColor: '#e0a64b',
      borderBottomWidth: 0,
      shadowColor: '#e0a64b',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 5,
      marginLeft: 45,
      marginRight: 45,
      marginTop: 30
    }
  };

  export default ResetPage;
