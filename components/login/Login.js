import { View, Text, TextInput, StyleSheet, ScrollView, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import CustomizedInput from '../CustomInput/CustomizedInput'
import CustomButtons from '../customButtons/CustomButtons'
import { useNavigation } from 'expo-router'

const Login = () => {

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

const navigation = useNavigation()

const onLogInPressed = () => {
    if (!email || !password) {
        // All fields are required
        console.warn('Please fill in all fields');
        return;
    }
    if (!email.includes('@') || !email.includes('.')) {
        console.warn('Please enter a valid email address');
        return;
    }
    
    if (password.length < 8 || !/\d/.test(password) || !/[!@#$%^&*]/.test(password)) {
        console.warn('Password must be at least 8 characters long and contain a number and a special character');
        return;
    }
    
    navigation.navigate('Home')
}

const onSignupPressed = () => {
    navigation.navigate("SignUp")
}

const onForgotPasswordPressed = () => {
    navigation.navigate("EmailInput")
}

  return (
    <ImageBackground source={require('../../assets/push.jpg')} style={styles.backgroundImage}>
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollViewContent}>
    <View style={styles.root}>
        <Text style={styles.title}>Log-in</Text>
        <CustomizedInput placeholder="Email"  value={email} setValue={setEmail} keyboardType="email-address" />
        <CustomizedInput placeholder="Password"  value={password} setValue={setPassword} secureTextEntry={true} />

        <CustomButtons text="Log In" onPress={onLogInPressed} />

        <CustomButtons text="Forgot Password?" onPress={onForgotPasswordPressed} type="TERTIARY" />

        <CustomButtons text="Don't have an account? Sign Up" onPress={onSignupPressed} type="TERTIARY" />
    </View>
    </ScrollView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'center',
      },
    root: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        justifyContent: 'center',
    },
    title: {
        fontSize: 25,
        padding: 20,
        fontWeight: 'bold',
        color: 'white'
    },
})

export default Login