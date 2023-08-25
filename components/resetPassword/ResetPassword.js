import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import CustomButtons from '../customButtons/CustomButtons';
import CustomizedInput from '../CustomInput/CustomizedInput';
import { useNavigation } from 'expo-router';

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigation = useNavigation()

  const onResetPassword = () => {
    navigation.navigate('LogIn')
    console.warn('Your password has benn reset')
  };

  const onBackToEmailPressed = () => {
    navigation.navigate('EmailInput')
  }

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Reset Password</Text>
      <Text style={styles.subtitle}>Please enter your new password and confirm it below.</Text>
      <CustomizedInput
        value={newPassword}
        onChange={setNewPassword}
        placeholder="New Password"
        style={styles.input}
        secureTextEntry={true}
      />
      <CustomizedInput
        value={confirmPassword}
        onChange={setConfirmPassword}
        placeholder="Confirm Password"
        style={styles.input}
        secureTextEntry={true}
      />
      <CustomButtons text="Reset Password" onPress={onResetPassword} />
      <CustomButtons text="Back to enter Email" onPress={onBackToEmailPressed} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    justifyContent: 'center',
    backgroundColor: 'black',
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
});

export default ResetPassword;