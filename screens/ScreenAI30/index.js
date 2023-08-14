import { useNavigation } from "@react-navigation/native";
import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Screen = () => {
  const navigation = useNavigation();
  const additionalContent = [{
    title: 'Specific Content 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc id aliquet ultrices, nisl nunc tincidunt nunc, id lacinia nunc nunc id nunc.'
  }, {
    title: 'Specific Content 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc id aliquet ultrices, nisl nunc tincidunt nunc, id lacinia nunc nunc id nunc.'
  }, {
    title: 'Specific Content 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc id aliquet ultrices, nisl nunc tincidunt nunc, id lacinia nunc nunc id nunc.'
  }];

  const renderAdditionalContent = () => {
    return additionalContent.map((content, index) => <View key={index} style={styles.contentContainer}>
        <Text style={styles.title}>{content.title}</Text>
        <Text style={styles.description}>{content.description}</Text>
        <TouchableOpacity style={styles.readMoreButton} onPress={() => {
        navigation.navigate("ScreenAI29");
      }}>
          <Text style={styles.readMoreButtonText}>Read more</Text>
        </TouchableOpacity>
      </View>);
  };

  return <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.bookmarkButton} onPress={() => {
      navigation.navigate("ScreenAI31");
    }}>
        <Text style={styles.bookmarkButtonText}>Bookmarked Content</Text>
      </TouchableOpacity>
      <View style={styles.additionalContentContainer}>
        {renderAdditionalContent()}
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16
  },
  bookmarkButton: {
    marginTop: 16,
    marginBottom: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#42a5f5',
    borderRadius: 8,
    alignItems: 'center'
  },
  bookmarkButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  additionalContentContainer: {
    flex: 1
  },
  contentContainer: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#f5f5f5',
    borderRadius: 8
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8
  },
  description: {
    fontSize: 14,
    marginBottom: 8
  },
  readMoreButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#42a5f5',
    borderRadius: 8,
    alignItems: 'center'
  },
  readMoreButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold'
  }
});
export default Screen;