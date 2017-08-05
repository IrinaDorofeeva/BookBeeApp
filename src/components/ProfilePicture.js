import React, {Component} from 'react';
import {View, Text, StyleSheet, Platform, Image} from 'react-native';

class ProfilePicture extends Component{
  render(){
    return(
      <View style={ styles.conteiner } >
        <Image
          source={require('./images/dummy.png')}
          style={ styles.image }
        />
      </View>
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
    marginBottom: 15,
    marginTop: 5
}
})


export default ProfilePicture
