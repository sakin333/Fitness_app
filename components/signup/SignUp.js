import { View, Text, TextInput, StyleSheet, ScrollView, ImageBackground, TextInputComponent } from 'react-native'
import React, { useState } from 'react'
import CustomizedInput from '../CustomInput/CustomizedInput'
import CustomButtons from '../customButtons/CustomButtons'
import { useNavigation } from 'expo-router'
import { Toast } from 'react-native-toast-message';

const SignUp = () => {

const [username, setUsername] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [age, setAge] = useState('')
const [phnumber, setPhnumber] = useState('')
const [countryCode, setCountryCode] = useState('+977')

const navigation = useNavigation()

const onSignUpPressed = () => {
  if (!username || !email || !password || !age || !phnumber) {
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

  if (parseInt(age) < 14 || parseInt(age) > 70) {
    console.warn('Age must be between 14 and 70');
    return;
  }

  if (phnumber.length !== 10 || !/^\d+$/.test(phnumber)) {
    console.warn('Phone number must be a 10-digit number');
    return;
  }
  navigation.navigate('OTPConfirmation')
}

const onLoginPressed = () => {
  navigation.navigate('LogIn')
}

  return (
    <ImageBackground source={require('../../assets/push.jpg')} style={styles.backgroundImage}>
    <ScrollView contentContainerStyle={styles.scrollview} showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
        <Text style={styles.title}>Create an Account</Text>
        <CustomizedInput placeholder="Username" value={username} setValue={setUsername} />
        <CustomizedInput placeholder="Email"  value={email} setValue={setEmail} keyboardType="email-address" />
        <CustomizedInput placeholder="Password"  value={password} setValue={setPassword} secureTextEntry={true} />
        <CustomizedInput placeholder="Age"  value={age} setValue={setAge} keyboardType="numeric" />
        <View style={styles.phoneInputContainer}>
            <View style={styles.countryCodeContainer}>
            <CustomizedInput placeholder="+977" value={countryCode} setValue={() => {}} />
            </View>
            <View style={styles.phoneNumberContainer}>
            <CustomizedInput placeholder="Phone Number" value={phnumber} setValue={setPhnumber} keyboardType="numeric" />
            </View>
        </View>
        <CustomButtons text="Regiter" onPress={onSignUpPressed} />
        <CustomButtons text="Already have an account? Log In" onPress={onLoginPressed} type="TERTIARY" />
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
  scrollview: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  root: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        marginTop: 10,
        justifyContent: 'center',
    },
    title: {
        fontSize: 25,
        padding: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    phoneInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
      },
      countryCodeContainer: {
        flex: 1,
        marginRight: 10,
        maxWidth: 80, // Adjust the maximum width as needed
      },
      phoneNumberContainer: {
        flex: 2,
      },
})

export default SignUp