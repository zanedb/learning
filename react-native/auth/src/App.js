import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import { LoginForm } from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyA021VYNlS1_QhLcq59v_N9oLyBiXz_ovA',
      authDomain: 'authentication-4f809.firebaseapp.com',
      databaseURL: 'https://authentication-4f809.firebaseio.com',
      projectId: 'authentication-4f809',
      storageBucket: 'authentication-4f809.appspot.com',
      messagingSenderId: '524359222530'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
