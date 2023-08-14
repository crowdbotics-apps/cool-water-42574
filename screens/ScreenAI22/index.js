import { useNavigation } from "@react-navigation/native";
import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet } from 'react-native';

const Screen = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => {
      navigation.navigate("ScreenAI17");
    }}>
        <Text style={styles.buttonText}>Display Map</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {
      navigation.navigate("ScreenAI19");
    }}>
        <Text style={styles.buttonText}>Bookmarked Doctors</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {
      navigation.navigate("ScreenAI24");
    }}>
        <Text style={styles.buttonText}>Filter option</Text>
      </TouchableOpacity>
      <View style={styles.cardContainer}>
        <TouchableOpacity style={styles.card}>
          <TouchableOpacity style={styles.bookmarkButton}>
            <Text style={styles.bookmarkButtonText}>Bookmark</Text>
          </TouchableOpacity>
          <Image style={styles.profileImage} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
          <Text style={styles.specialty}>Specialty</Text>
          <Text style={styles.fullName}>Full Name</Text>
          <Text style={styles.gender}>Gender</Text>
          <Text style={styles.miles}>10 miles</Text>
          <Text style={styles.averageRate}>Average Rate</Text>
          <TouchableOpacity style={styles.moreInfoButton}>
            <Text style={styles.moreInfoButtonText}>More info</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 10
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  cardContainer: {
    marginTop: 20
  },
  card: {
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
    padding: 20,
    marginBottom: 10
  },
  bookmarkButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginBottom: 10
  },
  bookmarkButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10
  },
  specialty: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5
  },
  fullName: {
    fontSize: 14,
    marginBottom: 5
  },
  gender: {
    fontSize: 14,
    marginBottom: 5
  },
  miles: {
    fontSize: 14,
    marginBottom: 5
  },
  averageRate: {
    fontSize: 14,
    marginBottom: 5
  },
  moreInfoButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5
  },
  moreInfoButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
export default Screen;