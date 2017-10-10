import React, { Component } from 'react';
import { Text, View} from 'react-native';
import SearchForm from '../components/SearchForm';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';




class SearchPage extends Component {


  render() {
    return (


      <KeyboardAwareScrollView style={{backgroundColor: '#fff', flex: 1}} resetScrollToCoords={{ x: 0, y: 0 }}
      scrollEnabled={true} automaticallyAdjustContentInsets={false}>

      <View>
      <SearchForm />
      </View>
    </KeyboardAwareScrollView>

    );
  }
}
export default SearchPage;
