import React, { Component } from 'react';
import {AsyncStorage} from 'react-native';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Text, View, Image, StatusBar, KeyboardAvoidingView } from 'react-native';
import { Card, CardSection, Input, Button, Spinner, SmallButton, TopBar} from '../components/common';
import { TouchableOpacity } from "react-native";
import Logout from '../components/topButtons/Logout';
import EditProfile from '../components/topButtons/EditProfile';
import {Logo, Title, Slogan} from '../components/design';
import {Header} from 'react-native-elements'
import {Dimensions } from 'react-native';
import {profileFetch} from '../actions';
import ProfileRender from '../components/ProfileRender';
import ProfileSetForm from '../components/ProfileSetForm';




class ProfileScreen extends Component {

  componentWillMount(){
  this.props.profileFetch();
    console.log(this.props.profile);
}
renderRightEditButton(){
  if (this.props.profile){
    return (<EditProfile />)
  }
  else{
  return (<View style={{  width: (Dimensions.get('window').width)/6  }}/>)
  }
}

renderContent(){
    if (this.props.profile){
      return (<ProfileRender />)
    }
    else{
      return (<ProfileSetForm />)
    }

}

  render() {
    return (
      <View style ={{ flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
      <Header
        leftComponent={<Logout />}
        centerComponent={{ text: 'PROFILE', style: { color: '#fff', fontSize: 20,
        fontWeight: '500' } }}
        rightComponent={this.renderRightEditButton()}
        outerContainerStyles={{ backgroundColor: '#e0a64b' }}
      />

      <Text> Profile Screen</Text>
      {this.renderContent()}
    </View>


    );
  }
  }

    const mapStateToProps = state => {
    const profile = state.profile;

      return { profile };
    };
    export default connect(mapStateToProps, { profileFetch })(ProfileScreen);
