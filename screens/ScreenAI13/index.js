import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity, WebView } from 'react-native';

const Screen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.closeButton}>
          <Text style={styles.closeButtonText}>Close</Text>
        </TouchableOpacity>
      </View>
      <WebView source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} style={styles.webView} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 10
  },
  closeButton: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 5
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  webView: {
    flex: 1
  }
});
export default Screen;