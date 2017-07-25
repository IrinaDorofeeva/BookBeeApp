import React, { Component } from 'react';
import { View, Image } from 'react-native';

const Slogan = (props) => {
  return (
    <View style={styles.containerStyle}>
    <Image source={require('../images/Slogan.png')} />
    </View>
  );
};

const styles = {
  containerStyle: {
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#e0a64b',
    borderBottomWidth: 0,
    shadowColor: '#e0a64b',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 5,
    marginLeft: 45,
    marginRight: 45,
    marginTop: 20
  }
};
export {Slogan};
