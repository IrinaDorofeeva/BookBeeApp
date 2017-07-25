import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Input, Card, Button } from './common';
import { profileUpdate, profileSet } from '../actions';
import ProfileForm from '../components/ProfileForm';
import { Actions } from 'react-native-router-flux';

class ProfileSetForm extends Component {

  onButtonPress() {
    const { name } = this.props;
    this.props.profileSet({ name });
    Actions.profile();
  }

  render() {
    return (
      <Card>
      <CardSection>
      <Text>
      Please, fill out your profile.
      </Text>
      </CardSection>
      <ProfileForm {...this.props} />
      <CardSection>
      <Button onPress={this.onButtonPress.bind(this)}>
      Save
      </Button>
      </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name } = state.profileForm;

  return { name };
};
export default connect(mapStateToProps, { profileUpdate, profileSet })(ProfileSetForm);
