/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar} from 'react-native';
import Login from './src/pages/Login'


export default class App extends Component {
  render() {
    return (
      <View style={myStyle.container}>
        <Login></Login>
      </View>
    );
  }
}
const myStyle = StyleSheet.create({
  container:{
      flex:1,
      justifyContent: "center"
  }
});
