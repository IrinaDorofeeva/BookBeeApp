import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { View } from 'react-native';
import {SmallButton} from '../common';
import { emptyAuth } from '../../actions';

class BackProfile extends Component {
  onButtonPress() {
    Actions.profile();
  };
  render() {
    return (
      <View style={{paddingTop: 12, paddingLeft: 2}}>
      <SmallButton onPress={this.onButtonPress.bind(this)}>
      Back
      </SmallButton>
      </View>
    );
  };
  }
  export default BackProfile;
