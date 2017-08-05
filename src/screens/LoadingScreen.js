import React, { Component } from 'react';
import {  View } from 'react-native';
import { Spinner } from '../components/common';
import {profileFetch, pictureFetch, pictureLoading} from '../actions';
import { connect } from 'react-redux';

class LoadingScreen extends Component {

  componentWillMount(){
    this.props.profileFetch();
    this.props.pictureFetch();
    this.props.pictureLoading();
  }
  render() {
    return (
      <View style={{backgroundColor: '#fff', flex: 1, justifyContent: 'center',
      alignItems: 'center'}} >
      <Spinner size="large" />
    </View>
    );
  }
  }

    const mapStateToProps = state => {
    const profile = state.profile;
    const {picture, loading, uploaded}  = state.pictureState;

      return { profile, picture, loading, uploaded };
    };
    export default connect(mapStateToProps, { profileFetch, pictureFetch, pictureLoading })(LoadingScreen);
