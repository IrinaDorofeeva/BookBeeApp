import React from 'react';
import { Text, View, TextInput, Keyboard } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {

const { inputStyle, labelStyle, containerStyle } = styles;
  return (
    <View style={containerStyle}>
    <Text style={labelStyle}>{label}</Text>
    <TextInput
    secureTextEntry={secureTextEntry}
    placeholder={placeholder}
    autoCorrect={false}
    style={inputStyle}
    value={value}
    onChangeText={onChangeText}
    returnKeyType={'default'}
    blurOnSubmit={true}
    />
    </View>
  );
};

const styles = {
inputStyle: {
  color: 'white',
  paddingRight: 0,
  paddingLeft: 5,
  fontSize: 16,
  fontWeight: '600',
  lineHeight: 23,
  flex: 2
},
labelStyle: {
  color: '#f0d6ad',
  fontSize: 16,
  fontWeight: '600',
  paddingLeft: 0,
  flex: 1
},
containerStyle: {
  height: 40,
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center'
}
};

export { Input };
