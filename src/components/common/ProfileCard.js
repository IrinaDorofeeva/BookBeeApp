import React from 'react';
import { Text, View, Dimensions } from 'react-native';

const ProfileCard = (props) => {
  return (
    <View style={styles.containerStyle}>
    {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginLeft: 15,
    marginRight: 15,
    marginTop: 35,


  }
};
export { ProfileCard };
