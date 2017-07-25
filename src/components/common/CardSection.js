import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={[styles.containerStyle, props.style]}>
    {props.children}
    </View>
  );
};
const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 0,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#e0a64b',
    position: 'relative'
  }
};
export { CardSection };
