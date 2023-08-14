import { useNavigation } from "@react-navigation/native";
import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';

const Screen = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => {
      navigation.navigate("ScreenAI13");
    }}>
        <Text style={styles.buttonText}>Telemedicine</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>401k Access</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>HSA</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>FSA</Text>
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
    marginVertical: 10
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
export default Screen;