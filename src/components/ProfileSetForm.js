import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Input, ProfileCard, ButtonProfile, Card } from './common';
import { profileUpdate, profileSet } from '../actions';
import ProfileForm from '../components/ProfileForm';
import { Actions } from 'react-native-router-flux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

class ProfileSetForm extends Component {

  onButtonPress() {
    const { name } = this.props;
    this.props.profileSet({ name });
    Actions.profile();
  }

  render() {
    return (

<ProfileCard>



      <ProfileForm {...this.props} />


      <CardSection style={{borderBottomWidth: 0, marginTop: 10, marginLeft: 25, marginRight: 25, flex: 1,
      justifyContent:'flex-end' }}>
      <ButtonProfile onPress={this.onButtonPress.bind(this)}>
      Save
      </ButtonProfile>
      </CardSection>

      </ProfileCard>


    );
  }
}

const mapStateToProps = (state) => {
  const { name } = state.profileForm;

  return { name };
};
export default connect(mapStateToProps, { profileUpdate, profileSet })(ProfileSetForm);
