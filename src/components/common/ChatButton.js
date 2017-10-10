import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const ChatButton = ({ onPress, children }) => {
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
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 3,
    paddingBottom: 3
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#e0a64b',
    borderRadius: 18,
    borderWidth: 0,
    borderColor: '#e0a64b',
    marginLeft: 0,
    marginRight: 0,
    marginTop: 5,
  }
};
export { ChatButton};
