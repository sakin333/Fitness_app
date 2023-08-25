import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import CustomButtons from '../customButtons/CustomButtons';
import CustomizedInput from '../CustomInput/CustomizedInput';
import { useNavigation } from 'expo-router';

const OTPConfirmation = () => {
  const [otp, setOTP] = useState('');

  const navigation = useNavigation()

  const onResendOTP = () => {
    navigation.navigate('EmailInput')
  };

  const onVerifyOTP = () => {
    navigation.navigate('LogIn')
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>OTP Confirmation</Text>
      <Text style={styles.subtitle}>A One-Time Password (OTP) has been sent to your email address. Please enter it below to verify.</Text>
      <CustomizedInput
        value={otp}
        onChange={setOTP}
        placeholder="Enter OTP"
        style={styles.input}
        keyboardType="numeric"
      />
      <CustomButtons text="Verify OTP" onPress={onVerifyOTP} />
      <CustomButtons text="Resend OTP" onPress={onResendOTP} type="SECONDARY" />

    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white'
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 20,
    color: 'white'
  },
  input: {
    backgroundColor: 'white',
    width: '100%',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
  },
  resendText: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginTop: 10,
  },
});

export default OTPConfirmation;
