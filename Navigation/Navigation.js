import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../components/login/Login';
import SignUp from '../components/signup/SignUp';
import OTPConfirmation from '../components/verifyOTP/OTPConfirmation';
import ResetPassword from '../components/resetPassword/ResetPassword';
import EmailInput from '../components/resetPassword/EmailInput';
import { ToastProvider } from 'react-native-toast-message';
import Home from '../app';

const Stack = createNativeStackNavigator()

const Navigation = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{ headerShown: false}}>
        <Stack.Screen name="LogIn" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="OTPConfirmation" component={OTPConfirmation} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="EmailInput" component={EmailInput} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation