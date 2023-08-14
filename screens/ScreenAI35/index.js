import React from 'react';
import { View, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native';

const Screen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.image} />
        <Text style={styles.text}>Successfully removed/deleted</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Close</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>;
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    alignItems: 'center'
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
};
export default Screen;