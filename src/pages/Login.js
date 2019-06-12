import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar} from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';
export default class Login extends React.Component{
    render(){
        return(
            <View  style={loginStyles.container} >
                <Logo></Logo>
                <Form></Form>
            </View>
        )
    }
}

const loginStyles = StyleSheet.create({
        container:{
            // borderColor: "black",
            // borderRadius: 25,
            // borderWidth: 1,
            // margin: 10
        }
});