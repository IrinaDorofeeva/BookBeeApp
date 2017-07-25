import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    var config = {
      apiKey: "AIzaSyDIxnG0TUTA-SIbdO0y4592oy_x0bMZjQc",
      authDomain: "bookbeereact.firebaseapp.com",
      databaseURL: "https://bookbeereact.firebaseio.com",
      projectId: "bookbeereact",
      storageBucket: "bookbeereact.appspot.com",
      messagingSenderId: "741410785478"
    };
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
    <Router />
     </Provider>
    );
  }
}



export default App;
