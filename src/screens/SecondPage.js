import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Text, View, Image, StatusBar, KeyboardAvoidingView } from 'react-native';
import { Card, CardSection, Input, Button, Spinner, SmallButton} from '../components/common';
import { TouchableOpacity } from "react-native";
import Logout from '../components/topButtons/Logout';

import {Logo, Title, Slogan} from '../components/design';
import {Header} from 'react-native-elements'
import {Dimensions } from 'react-native';


class SecondPage extends Component {
  render() {
    return (
      <View style ={{ flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
      <Header
        leftComponent={<Logout />}
        centerComponent={{ text: 'MAP', style: { color: '#fff', fontSize: 20,
        fontWeight: '500' } }}
        rightComponent={<View style={{  width: (Dimensions.get('window').width)/6  }}/>}
        outerContainerStyles={{ backgroundColor: '#e0a64b' }}
      />

      <Text> Map Screen</Text>
    </View>
    );
  }
  }


  export default SecondPage;
