import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {TopButton} from '../common';
import { logout } from '../../actions';
import { Dimensions, View } from 'react-native';

class Logout extends Component {
  onButtonPress() {
    this.props.logout();

  };
  render() {
    return (
      <View style={{  width: (Dimensions.get('window').width)/6  }}>
      <TopButton onPress={this.onButtonPress.bind(this)}>
      Log Out
      </TopButton>
      </View>
    );
  };
  }





  export default connect(null, { logout })(Logout);
