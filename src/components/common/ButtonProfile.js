import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const ButtonProfile = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity
    onPress={onPress}
    style={buttonStyle}
    >
      <Text
      style={textStyle}
      >
      {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#e0a64b',
    fontSize: 18,
    fontWeight: '700',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#e0a64b',
    marginLeft: 0,
    marginRight: 0
    
  }
};
export { ButtonProfile };
