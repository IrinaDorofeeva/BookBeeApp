import React, { Component } from 'react';
import { View, Text, Picker, Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { pictureFetch, pictureSet } from '../actions';
import { ProfileCardSection, InputProfile, ProfileCard, Spinner } from './common';
import {Dimensions } from 'react-native';

class PictureRender extends Component {


  render() {
    return (
      <ProfileCard>
      {
         (() => {
           console.log('this.props.loading');
           console.log(this.props.loading);
             switch (this.props.loading) {
             case true:{
                return (
                <View style={ styles.conteiner }>
                <Spinner size="large" />
                </View>)
              }
             case false:{
                 switch (this.props.uploaded) {
                     case true:
                     return (
                       <View style={ styles.container }>
                       <Image
                         source={{ uri: this.props.picture }}
                         style={ styles.image }
                       />
                       </View>)
                     case false:
                     return (
                     <View style={ styles.container } >
                       <Image
                         source={require('./images/dummy.png')}
                         style={ styles.image }
                       />
                     </View>)}
               }
           }
         })()}
      </ProfileCard>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    height: 120,
    width: 120,
    resizeMode: 'cover',
    borderRadius: 60,
    marginBottom: 5,
    marginTop: 5
}
})



const mapStateToProps = (state) => {
const { picture, loading, uploaded} = state.pictureState;
  return { picture, loading, uploaded };
};

export default connect(mapStateToProps, { pictureFetch, pictureSet })(PictureRender);
