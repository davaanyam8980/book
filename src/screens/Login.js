import React from 'react';
import {StyleSheet, Text, TextInput, View, Button } from 'react-native';

const LoginScreen = ({navigation}) => {
    return(
        <View style={{flex:1, flexDirection: "column", alignItems: "center"}}>
            <TextInput placeholder="email" style={styles.input}/>
            <TextInput placeholder="password" style={styles.input}/>
            <Button 
                placeholder="Login" 
                title="Login" 
                style={styles.button}
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    input: {
        height:50,
        width:"80%",
        backgroundColor: "#cccccc",
        margin:10,
        borderRadius:8,
        paddingLeft:15,

    },
    button: {
        width:"50%",
    }
});