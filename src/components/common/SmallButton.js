import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const SmallButton = ({ onPress, children }) => {
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
    alignSelf: 'flex-start',
    color: '#f0d6ad',
    fontSize: 18,
    fontWeight: '700',
    paddingTop: 10,
    paddingBottom: 10,
  },
  buttonStyle: {
    
    backgroundColor: '#e0a64b',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#e0a64b',
    marginLeft: 10,
    marginRight: 10
  }
};
export { SmallButton };
