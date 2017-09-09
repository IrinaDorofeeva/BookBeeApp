import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { ProfileCard, ProfileCardSection } from './common';
import { connect } from 'react-redux';
import {profileFetch} from '../actions';
import {Dimensions, StyleSheet } from 'react-native';
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

        <ProfileCardSection style ={{borderBottomWidth: 0}}>
        <Text style={ styles.name }>{this.props.profile.name}</Text>
        </ProfileCardSection>

        <ProfileCardSection style ={{borderBottomWidth: 0, marginTop: 0}}>
        <Text style={ styles.now }>is now reading a book</Text>
        </ProfileCardSection>

        <ProfileCardSection style ={{borderBottomWidth: 0, marginTop: 25}}>
        <Text style={ styles.book }>{this.props.profile.book}</Text>
        </ProfileCardSection>

        <ProfileCardSection style ={{borderBottomWidth: 0, marginTop: 15}}>
        <Text style={ styles.author }>by {this.props.profile.author} </Text>
        </ProfileCardSection>


        <ProfileCardSection style ={{borderBottomWidth: 0}}>
        <Text style={ styles.genre }>{this.props.profile.genre}</Text>
        </ProfileCardSection>

        <ProfileCardSection style ={{borderBottomWidth: 2}}>

        </ProfileCardSection>

        <ProfileCardSection style ={{borderBottomWidth: 0}}>
        <Text style={ styles.quote }> "{this.props.profile.about}" ~ {this.props.profile.name} </Text>
        </ProfileCardSection>

        </ProfileCard>

        </ProfileCard>
      );
    }
  }

  const styles = StyleSheet.create({
    name: {
      flex: 1,
      fontSize: 22,
      fontWeight: '600',
      textAlign: 'center',
      color: '#dfa553'
    },
    now: {

      flex: 1,
      fontSize: 15,
      fontWeight: '500',
      fontStyle: 'italic',
      textAlign: 'center',
      color: '#9b9b9b'
    },

    book: {
      flex: 1,
      fontSize: 22,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#4a4a4a'
    },

    author: {
      flex: 1,
      fontSize: 18,
      fontWeight: '700',
      fontStyle: 'italic',
      textAlign: 'center',
      color: '#6a6a6a'
    },


    genre: {
      flex: 1,
      fontSize: 15,
      fontWeight: '500',
      textAlign: 'center',
      color: '#dfa553'
    },
    quote: {
      flex: 1,
      fontSize: 15,
      fontStyle: 'italic',
      fontWeight: '500',
      textAlign: 'center',
      color: '#dfa553'
    },

    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    image: {
      height: 200,
      width: 200,
      resizeMode: 'cover',
      borderRadius: 100,
    },
    upload: {
      textAlign: 'center',
      color: '#dfa553',
      padding: 5,
      marginTop: 3,
      marginBottom: -13,
      borderWidth: 1,
      borderRadius: 14,
      borderColor: '#dfa553'
    },
  })
const mapStateToProps = state => {
const profile = state.profile;
return {  profile };
};

export default connect(mapStateToProps, { profileFetch })(ProfileRender);
