import React from 'react';
import { View } from 'react-native';

const ProfileCardSection = (props) => {
  return (
    <View style={[styles.containerStyle, props.style]}>
    {props.children}
    </View>
  );
};
const styles = {
  containerStyle: {

    padding: 3,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#fff',
    position: 'relative',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    borderBottomWidth: 1,
    borderColor: '#f0d6ad'

  }
};
export { ProfileCardSection };
