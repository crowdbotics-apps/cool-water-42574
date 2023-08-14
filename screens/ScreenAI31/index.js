import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';

const BookmarkScreen = () => {
  const bookmarkedContent = [{
    id: 1,
    title: 'Specific Content 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc id aliquet lacinia, nisl nunc tincidunt urna, id lacinia nunc nunc id urna.'
  }, {
    id: 2,
    title: 'Specific Content 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc id aliquet lacinia, nisl nunc tincidunt urna, id lacinia nunc nunc id urna.'
  } // Add more bookmarked content objects as needed
  ];

  const handleReadMore = id => {// Handle read more button press
  };

  const handleRemove = id => {// Handle remove button press
  };

  return <SafeAreaView style={styles.container}>
      {bookmarkedContent.map(content => <View key={content.id} style={styles.contentContainer}>
          <Text style={styles.title}>{content.title}</Text>
          <Text style={styles.description}>{content.description}</Text>
          <TouchableOpacity style={styles.button} onPress={() => handleReadMore(content.id)}>
            <Text style={styles.buttonText}>Read more</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleRemove(content.id)}>
            <Text style={styles.buttonText}>Remove</Text>
          </TouchableOpacity>
        </View>)}
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 16
  },
  contentContainer: {
    marginBottom: 16
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8
  },
  description: {
    fontSize: 16,
    marginBottom: 8
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 8
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
export default BookmarkScreen;