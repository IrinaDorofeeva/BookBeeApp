import React from 'react';
import { Scene, Router, TabBar, Modal, Schema, Actions, Reducer, ActionConst } from 'react-native-router-flux';
import SigninPage from './screens/SigninPage';
import ProfileScreen from './screens/ProfileScreen';
import LoadingScreen from './screens/LoadingScreen';
import ProfileEditScreen from './screens/ProfileEditScreen';
import ProfileCreateScreen from './screens/ProfileCreateScreen';
import BlankScreen from './screens/BlankScreen';
import PictureTest from './screens/PictureTest';
import MapPage from './screens/MapPage';
import SignupPage from './screens/SignupPage';
import ResetPage from './screens/ResetPage';
import { Text, View, Image, StatusBar, KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import Tabs from 'react-native-tabs';
import Logout from './components/topButtons/Logout';
import { logout, profileUpdate } from './actions';
import { connect } from 'react-redux';
//import Icon from 'react-native-vector-icons/FontAwesome';


class RouterComponent extends React.Component {
render(){

  return (

    <Router>
    <Scene key="root">

      <Scene key="login" component={SigninPage}  hideNavBar={true} initial />
      <Scene key="signup" component={SignupPage} hideNavBar={true} />
      <Scene key="pwdreset" component={ResetPage} hideNavBar={true} />


          <Scene key="tabbar" tabs={true} hideNavBar={true}  tabBarStyle={{backgroundColor: '#e0a64b'}}>
          <Scene key="first" title="profile" icon={()=>(  <Image
              source={require('./components/images/PersonShape.png')}
              style={ {width: 30, height : 30} }
            />)}>

          <Scene key="picturetest" component={PictureTest} hideNavBar={false}
          titleStyle={{color: '#fff', fontSize: 20,
          fontWeight: '600', paddingBottom: 2}}
          leftTitle="Logout"
          leftButtonTextStyle={{color: '#f0d6ad',fontSize: 18, fontWeight: '600'}}
          onLeft={()=>{this.props.logout()}}
          title="Your Profile" navigationBarStyle={{backgroundColor: '#e0a64b'}} />

          <Scene key="load" component={LoadingScreen} hideNavBar={false}
          titleStyle={{color: '#fff', fontSize: 20,
          fontWeight: '600', paddingBottom: 2}}
          leftTitle="Logout"
          leftButtonTextStyle={{color: '#f0d6ad',fontSize: 18, fontWeight: '600'}}
          onLeft={()=>{this.props.logout()}}
          title="Your Profile" navigationBarStyle={{backgroundColor: '#e0a64b'}} />

          <Scene key="profile" component={ProfileScreen} hideNavBar={false}
          titleStyle={{color: '#fff', fontSize: 20,
          fontWeight: '600', paddingBottom: 2}}
          leftTitle="Logout"
          leftButtonTextStyle={{color: '#f0d6ad',fontSize: 18, fontWeight: '600'}}
          onLeft={()=>{this.props.logout()}}
          rightTitle="Edit"
          rightButtonTextStyle={{color: '#f0d6ad',fontSize: 18, fontWeight: '600'}}
          onRight={()=>{Actions.profileedit()}}
          title="Your Profile" navigationBarStyle={{backgroundColor: '#e0a64b'}} />

          <Scene key="profileedit" component={ProfileEditScreen} hideNavBar={false}
          titleStyle={{color: '#fff', fontSize: 20,
          fontWeight: '600', paddingBottom: 2}}
          leftTitle="Logout"
          leftButtonTextStyle={{color: '#f0d6ad',fontSize: 18, fontWeight: '600'}}
          onLeft={()=>{this.props.logout()}}
          rightTitle="Cancel"
          rightButtonTextStyle={{color: '#f0d6ad',fontSize: 18, fontWeight: '600'}}
          onRight={()=>{Actions.profile()}}
          title="Edit Your Profile" navigationBarStyle={{backgroundColor: '#e0a64b'}} />

          <Scene key="profilecreate" component={ProfileCreateScreen} hideNavBar={false}
          titleStyle={{color: '#fff', fontSize: 20,
          fontWeight: '600', paddingBottom: 2}}
          leftTitle="Logout"
          leftButtonTextStyle={{color: '#f0d6ad',fontSize: 18, fontWeight: '600'}}
          onLeft={()=>{this.props.logout()}}
          title="Create Your Profile" navigationBarStyle={{backgroundColor: '#e0a64b'}} />

          </Scene>

          <Scene key="second"  title="map" icon={()=>(<Image
              source={require('./components/images/GlobeShape.png')}
              style={ {width: 30, height : 30} }
            />)} >
          <Scene key="secondscreen" component={MapPage} hideNavBar={false}
          titleStyle={{color: '#fff', fontSize: 20,
          fontWeight: '600', paddingBottom: 2}}
          leftTitle="Logout"
          leftButtonTextStyle={{color: '#f0d6ad',fontSize: 18, fontWeight: '600'}}
          onLeft={()=>{this.props.logout()}}
          title="Readers on Map" navigationBarStyle={{backgroundColor: '#e0a64b'}} />
          </Scene>

          <Scene key="third"  title="search" icon={()=>(<Image
              source={require('./components/images/SearchShape.png')}
              style={ {width: 30, height : 30} }
            />)} >
          <Scene key="thirdscreen" component={BlankScreen} hideNavBar={true} />
          </Scene>

          <Scene key="fourth"  title="chat" icon={()=>(<Image
              source={require('./components/images/MessagesShape.png')}
              style={ {width: 30, height : 30} }
            />)} >
          <Scene key="fourthscreen" component={BlankScreen} hideNavBar={true} />
          </Scene>

        </Scene>


    </Scene>

    </Router>
  );
};
}

export default connect(null, { logout, profileUpdate })(RouterComponent);
