import React from 'react';
import { View, TextInput, Button, SafeAreaView } from 'react-native';

const ResetPasswordScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Change Password" onPress={() => {}} />
        <Button title="Cancel" onPress={() => {}} />
      </View>
    </SafeAreaView>;
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5'
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10
  },
  buttonContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
};
export default ResetPasswordScreen;