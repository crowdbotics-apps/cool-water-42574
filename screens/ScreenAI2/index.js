import React from 'react';
import { View, Image, StyleSheet, SafeAreaView } from 'react-native';

const SplashScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.logo} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoContainer: {
    width: '80%',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  }
});
export default SplashScreen;