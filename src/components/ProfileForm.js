import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { profileUpdate } from '../actions';
import { CardSection, Input, Card } from './common';


class ProfileForm extends Component {
  render() {
    return (
      <View>
      <CardSection>
      <Input
      label="Name"
      placeholder="Mary"
      value={this.props.name}
      onChangeText={value => this.props.profileUpdate({ prop: 'name', value })}
      />
      </CardSection>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
const { name } = state.profileForm;
return { name };
};
export default connect(mapStateToProps, { profileUpdate })(ProfileForm);
