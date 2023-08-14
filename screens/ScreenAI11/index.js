import React from 'react';
import { Text, Image, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';

const Screen = () => {
  return <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.closeButton}>
        <Text style={styles.closeButtonText}>Close</Text>
      </TouchableOpacity>
      <Image source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} style={styles.image} />
      <Text style={styles.emailText}>Employee user email address</Text>
      <TextInput style={styles.emailInput} placeholder="Enter email address" />
      <TouchableOpacity style={styles.sendButton}>
        <Text style={styles.sendButtonText}>Send</Text>
      </TouchableOpacity>
    </SafeAreaView>;
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2'
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    padding: 10,
    backgroundColor: '#ccc',
    borderRadius: 5
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20
  },
  emailText: {
    fontSize: 18,
    marginBottom: 10
  },
  emailInput: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20
  },
  sendButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16
  }
};
export default Screen;