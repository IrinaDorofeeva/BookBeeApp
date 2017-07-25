import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {TopButton} from '../common';
import { profileUpdate } from '../../actions';
import { Dimensions, View } from 'react-native';

class EditProfile extends Component {
  onButtonPress() {
    Actions.profileedit();

  };
  render() {
    return (
      <View style={{  width: (Dimensions.get('window').width)/6  }}>
      <TopButton onPress={this.onButtonPress.bind(this)}>
      Edit
      </TopButton>
      </View>
    );
  };
  }

  const mapStateToProps = (state) => {
  const { name } = state.profileForm;

  return { name };
};
  export default connect(null, { profileUpdate })(EditProfile);
