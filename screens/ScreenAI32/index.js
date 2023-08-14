import { useNavigation } from "@react-navigation/native";
import React from 'react';
import { Text, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';

const Screen = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Privacy Policy</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Terms and Conditions</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {
      navigation.navigate("ScreenAI33");
    }}>
        <Text style={styles.buttonText}>Change Password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {
      navigation.navigate("ScreenAI35");
    }}>
        <Text style={styles.buttonText}>Delete Account</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {
      navigation.navigate("ScreenAI34");
    }}>
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#007AFF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
export default Screen;