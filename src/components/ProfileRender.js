import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { ProfileCard, ProfileCardSection } from './common';
import { connect } from 'react-redux';
import {profileFetch} from '../actions';
import {Dimensions } from 'react-native';
import ProfilePicture from './ProfilePicture';
import PictureRender from './PictureRender';

class ProfileRender extends Component {


    render() {
      return (
        <ProfileCard>
        <ProfileCardSection style ={{borderBottomWidth: 0}}>
        <View style={{  flex: 1,
        justifyContent: 'center',
        alignItems: 'center'  }}>
        <PictureRender />
        </View>
        </ProfileCardSection>


        <ProfileCard>

        <ProfileCardSection>
        <Text>{this.props.profile.name}</Text>
        </ProfileCardSection>
        <ProfileCardSection>
        <Text>{this.props.profile.book}</Text>
        </ProfileCardSection>
        <ProfileCardSection>
        <Text>{this.props.profile.author}</Text>
        </ProfileCardSection>
        <ProfileCardSection>
        <Text>{this.props.profile.genre}</Text>
        </ProfileCardSection>
        <ProfileCardSection>
        <Text>{this.props.profile.about}</Text>
        </ProfileCardSection>

        </ProfileCard>

        </ProfileCard>
      );
    }
  }
const mapStateToProps = state => {
const profile = state.profile;
return {  profile };
};

export default connect(mapStateToProps, { profileFetch })(ProfileRender);
