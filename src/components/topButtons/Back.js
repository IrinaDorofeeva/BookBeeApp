import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { View } from 'react-native';
import {SmallButton} from '../common';
import { emptyAuth } from '../../actions';

class Back extends Component {
  onButtonPress() {
    this.props.emptyAuth();
    Actions.login();
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
  export default connect(null, { emptyAuth })(Back);
