import React, { Component } from 'react';
import {AsyncStorage, Dimensions} from 'react-native';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Text, View, Image, StatusBar, KeyboardAvoidingView } from 'react-native';
import { Card, CardSection, InputProfile, ButtonProfile, Spinner, SmallButton, TopBar} from '../components/common';
import { TouchableOpacity } from "react-native";
import Logout from '../components/topButtons/Logout';
import EditProfile from '../components/topButtons/EditProfile';
import {Logo, Title, Slogan} from '../components/design';
import {Header} from 'react-native-elements'
import {profileFetch} from '../actions';
import ProfileRender from '../components/ProfileRender';
import ProfileSetForm from '../components/ProfileSetForm';
import StatusBarBackground  from '../components/StatusBarBackground';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';




class ProfileScreen extends Component {

  componentWillMount(){
  this.props.profileFetch();
    console.log(this.props.profile);
}


renderContent(){
    if (this.props.profile){
      return (<ProfileSetForm />)
    }
    else{
      return (
        <ProfileSetForm />
      )
    }

}

  render() {
    return (

      <KeyboardAwareScrollView style={{backgroundColor: '#fff', flex: 1}} resetScrollToCoords={{ x: 0, y: 0 }}
      scrollEnabled={true} automaticallyAdjustContentInsets={false}>

      <View style={{marginTop : 40}}>
      {this.renderContent()}
      </View>


    </KeyboardAwareScrollView>



    );
  }
  }

    const mapStateToProps = state => {
    const profile = state.profile;

      return { profile };
    };
    export default connect(mapStateToProps, { profileFetch })(ProfileScreen);
