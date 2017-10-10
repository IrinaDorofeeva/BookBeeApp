import React from 'react';
import { Text, View, TextInput, Keyboard } from 'react-native';

const InputSearch = ({ label, value, onChangeText, placeholder, secureTextEntry, maxLength, style }) => {

const { inputStyle, labelStyle, containerStyle } = styles;
  return (


    <View style={containerStyle}>
    <Text style={labelStyle}>{label}</Text>
    <TextInput
    secureTextEntry={secureTextEntry}
    placeholder={placeholder}
    multiline={true}
    autoCorrect={false}
    style={[inputStyle, style]}
    value={value}
    onChangeText={onChangeText}
    returnKeyType={'default'}
    blurOnSubmit={true}
    maxLength={maxLength}
    />
    </View>
  );
};

const styles = {
inputStyle: {
  color: '#4a4a4a',
  paddingRight: 0,
  paddingLeft: 0,
  paddingTop: 3,
  paddingBottom: 2,
  fontSize: 13,
  fontWeight: '500',
  alignSelf: 'center'


},
labelStyle: {
  color: '#dfa553',
  fontSize: 17,
  fontWeight: '600',
  paddingRight: 0,
  paddingLeft: 0,
  paddingTop: 0,
  paddingBottom: 4,
  alignSelf: 'center'

},
containerStyle: {
flex:1

}
};

export { InputSearch };
