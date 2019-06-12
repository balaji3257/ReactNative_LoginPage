import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';



export default class Logo extends React.Component{
    render(){
        return(
            <View style={logo.container} >
                <Image style={logo.imgDesign}
                    source={require('../images/logo2.jpg')}/>
                <Text style={logo.logoText} >
                    Welcome to Login App
                </Text>
            </View>
        )
    }
}
const logo = StyleSheet.create({
    container:{
        justifyContent: "center",
        alignItems: "center"
    },
    imgDesign:{
        height:100,
        width: 120
    },
    logoText:{
        marginVertical: 5,
        fontWeight:"bold",
        marginBottom: 40
    }
});
