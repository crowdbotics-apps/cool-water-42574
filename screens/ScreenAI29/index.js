import React from 'react';
import { View, Text, Button, SafeAreaView } from 'react-native';

const Screen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Button title="Bookmark" onPress={() => {}} />
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Title</Text>
        <Text style={styles.description}>Description</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.content}>Screen content</Text>
        <Button title="Download as PDF" onPress={() => {}} />
      </View>
    </SafeAreaView>;
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 20
  },
  section: {
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  description: {
    fontSize: 16,
    color: '#888'
  },
  content: {
    fontSize: 18,
    marginBottom: 10
  }
};
export default Screen;