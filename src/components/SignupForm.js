import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Linking
} from 'react-native';

export default class Form extends React.Component {
    render() {
        return (
            <View style={loginForm.container}>
                <TextInput
                    style={loginForm.textInput}
                    placeholder="Email"
                    autoFocus = 'true'
                    placeholderTextColor="rgba(0, 0, 0, 0.7)" />
                <TextInput
                    style={loginForm.textInput}
                    placeholder="Password"                    
                    placeholderTextColor="rgba(0, 0, 0, 0.7)" />
                <Text style={loginForm.forgotLink}
                    onPress ={ ()=>{Linking.openURL("https://google.com")}}
                    >Forget Password</Text>   
                <View style={loginForm.buttonContainer}>
                    <TouchableOpacity
                        style={loginForm.button}
                        onPress={this.onPress}>
                        <Text style={{ color: "white", textAlign: "center" }}> Sign-In </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={loginForm.button}
                        onPress={this.onPress}>
                        <Text style={{ color: "white", textAlign: "center" }}> Sign-Up </Text>
                    </TouchableOpacity>
                </View>
            </View>


        )
    }
}

const loginForm = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 60
    },
    textInput: {
        height: 40,
        borderWidth: 1,
        width: 300,
        borderRadius: 25,
        paddingHorizontal: 16,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        marginBottom: 24

    },
    buttonContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center"
    },
    button: {
        width: 120,
        borderColor: 'black',
        borderRadius: 25,
        backgroundColor: '#ff8a65',
        height: 40,
        padding: 12,
        margin: 10
    },
    forgotLink: {
        color: '#e57373',
        textDecorationLine: 'underline',
        justifyContent:"flex-end"
      }
});


