import React from 'react';
import { Text, StyleSheet, SafeAreaView } from 'react-native';

const PrivacyPolicyScreen = () => {
  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Privacy Policy</Text>
      <Text style={styles.content}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
        justo nec mauris tincidunt, id aliquet nunc tincidunt. Nulla facilisi.
        Sed auctor, nunc id aliquam tincidunt, nunc nunc tincidunt nunc, nec
        tincidunt nunc nunc nec nunc. Sed auctor, nunc id aliquam tincidunt,
        nunc nunc tincidunt nunc, nec tincidunt nunc nunc nec nunc.
      </Text>
      <Text style={styles.content}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
        justo nec mauris tincidunt, id aliquet nunc tincidunt. Nulla facilisi.
        Sed auctor, nunc id aliquam tincidunt, nunc nunc tincidunt nunc, nec
        tincidunt nunc nunc nec nunc. Sed auctor, nunc id aliquam tincidunt,
        nunc nunc tincidunt nunc, nec tincidunt nunc nunc nec nunc.
      </Text>
      <Text style={styles.content}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
        justo nec mauris tincidunt, id aliquet nunc tincidunt. Nulla facilisi.
        Sed auctor, nunc id aliquam tincidunt, nunc nunc tincidunt nunc, nec
        tincidunt nunc nunc nec nunc. Sed auctor, nunc id aliquam tincidunt,
        nunc nunc tincidunt nunc, nec tincidunt nunc nunc nec nunc.
      </Text>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  content: {
    fontSize: 16,
    marginBottom: 10
  }
});
export default PrivacyPolicyScreen;