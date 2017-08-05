import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { ProfileCardSection, CardSection, Input, ProfileCard, ButtonProfile, Card } from './common';
import { profileUpdate, profileSet } from '../actions';
import ProfileForm from '../components/ProfileForm';
import PictureRender from '../components/PictureRender';
import PictureChangeButton from '../components/PictureChangeButton';
import { Actions } from 'react-native-router-flux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

class ProfileSetForm extends Component {

  onButtonPress() {
    const { name, book, author, genre, about } = this.props;
    this.props.profileSet({ name, book, author, genre, about });
    Actions.profile();
  }

  render() {
    return (

      <ProfileCard>

      <ProfileCardSection style ={{borderBottomWidth: 0}}>
      <View style={{  flex: 1,
      justifyContent: 'center',
      alignItems: 'center'  }}>
      <PictureRender />
      <PictureChangeButton />
      </View>
      </ProfileCardSection>

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
  const { name, book, author, genre, about } = state.profileForm;

  return { name, book, author, genre, about };
};
export default connect(mapStateToProps, { profileUpdate, profileSet })(ProfileSetForm);
