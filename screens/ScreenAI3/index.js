import { useNavigation } from "@react-navigation/native";
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

const SignUpScreen = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput style={styles.input} placeholder="Username" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
      <TouchableOpacity style={styles.forgotPasswordButton} onPress={() => {
      navigation.navigate("ScreenAI6");
    }}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signUpButton}>
        <Text style={styles.signUpButtonText}>Sign Up</Text>
      </TouchableOpacity>
      <View style={styles.termsContainer}>
        <TouchableOpacity onPress={() => {
        navigation.navigate("ScreenAI4");
      }}>
          <Text style={styles.termsText}>Terms and Conditions</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
        navigation.navigate("ScreenAI5");
      }}>
          <Text style={styles.termsText}>Privacy Policy</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10
  },
  forgotPasswordButton: {
    alignSelf: 'flex-end',
    marginBottom: 10
  },
  forgotPasswordText: {
    color: '#007AFF'
  },
  signUpButton: {
    width: '80%',
    height: 40,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10
  },
  signUpButtonText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  termsContainer: {
    flexDirection: 'row'
  },
  termsText: {
    color: '#007AFF',
    marginRight: 10
  }
});
export default SignUpScreen;