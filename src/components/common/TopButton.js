import React from 'react';
import { Text, TouchableOpacity, Dimensions } from 'react-native';

const TopButton = ({ onPress, children }) => {
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
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
    paddingTop: 3
  },
  buttonStyle: {
    backgroundColor: '#e0a64b',
    borderRadius: 25
  }
};
export { TopButton };
