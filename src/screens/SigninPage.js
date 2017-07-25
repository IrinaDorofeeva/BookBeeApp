import firebase from 'firebase';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, Image, StatusBar, KeyboardAvoidingView, AsyncStorage } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Card, CardSection, Input, Button, Spinner, SmallButton} from '../components/common';
import { TouchableOpacity } from "react-native";
import { Actions } from 'react-native-router-flux';
import LoginForm from '../components/LoginForm';
import { Logo, Title, Slogan } from '../components/design';
import { emptyAuth } from '../actions';


class SigninPage extends Component {

  componentWillMount () {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        Actions.first();
      }
    });
  }

  onSignupButtonPress() {
    this.props.emptyAuth();
    Actions.signup();
  };
  onResetButtonPress() {
    this.props.emptyAuth();
    Actions.pwdreset();
  };
  render() {
    return (

      <KeyboardAwareScrollView style={{backgroundColor: '#e0a64b', flex: 1}} resetScrollToCoords={{ x: 0, y: 0 }}
      scrollEnabled={false}>
      <StatusBar barStyle="light-content" />
      <Logo />
      <Title />
      <Slogan />
      <LoginForm />

      <View style ={{ flex: 1, flexDirection: 'row',
      justifyContent: 'center'
    }}>
    <SmallButton onPress={this.onSignupButtonPress.bind(this)}>
    Sign Up
    </SmallButton>
    <SmallButton onPress={this.onResetButtonPress.bind(this)}>
    Reset Password
    </SmallButton>
    </View>
    </KeyboardAwareScrollView>
  );
}
}

export default connect(null, { emptyAuth })(SigninPage);
