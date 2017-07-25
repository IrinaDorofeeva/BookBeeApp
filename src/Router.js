import React from 'react';
import { Scene, Router, TabBar, Modal, Schema, Actions, Reducer, ActionConst } from 'react-native-router-flux';
import SigninPage from './screens/SigninPage';
import ProfileScreen from './screens/ProfileScreen';
import ProfileEditScreen from './screens/ProfileEditScreen';
import SecondPage from './screens/SecondPage';
import SignupPage from './screens/SignupPage';
import ResetPage from './screens/ResetPage';
import { Text, View, Image, StatusBar, KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import Tabs from 'react-native-tabs';
//import Icon from 'react-native-vector-icons/FontAwesome';


class RouterComponent extends React.Component {
render(){

  return (

    <Router>
    <Scene key="root">

      <Scene key="login" component={SigninPage}  hideNavBar={true} initial />
      <Scene key="signup" component={SignupPage} hideNavBar={true} />
      <Scene key="pwdreset" component={ResetPage} hideNavBar={true} />


        <Scene key="tabbar" tabs={true}  tabBarStyle={{backgroundColor: '#e0a64b'}}>

          <Scene key="first" title="profile" icon={()=>(<Icon name="person" size={30} color='white' />)}>
          <Scene key="profile" component={ProfileScreen} hideNavBar={true} />
          <Scene key="profileedit" component={ProfileEditScreen} hideNavBar={true} />
          </Scene>

          <Scene key="second"  title="map" icon={()=>(<Icon name="globe" size={30} color='white' />)} >
          <Scene key="secondscreen" component={SecondPage} hideNavBar={true} />
          </Scene>

          <Scene key="third"  title="search" icon={()=>(<Icon name="search" size={27} color='white' />)} >
          <Scene key="thirdscreen" component={SecondPage} hideNavBar={true} />
          </Scene>

          <Scene key="fourth"  title="chat" icon={()=>(<Icon name="comment" size={29} color='white' />)} >
          <Scene key="fourthscreen" component={SecondPage} hideNavBar={true} />
          </Scene>

        </Scene>


    </Scene>

    </Router>
  );
};
}

export default RouterComponent;
