import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native';

const Screen = () => {
  return <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Display Map</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Bookmarked Doctors</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Filter Option</Text>
      </TouchableOpacity>
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Search by name or specialty" />
        <TouchableOpacity style={styles.searchButton}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.resultsText}>Display {number} of search results</Text>
      <View style={styles.cardContainer}>
        {
        /* Render search results cards */
      }
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
          <Text style={styles.distance}>{number} miles</Text>
          <Text style={styles.averageRate}>Average Rate</Text>
          <TouchableOpacity style={styles.moreInfoButton}>
            <Text style={styles.moreInfoButtonText}>More Info</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    </SafeAreaView>;
};

const styles = {
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
    borderRadius: 5,
    marginBottom: 10
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  searchContainer: {
    flexDirection: 'row',
    marginBottom: 10
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10
  },
  searchButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  searchButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  resultsText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10
  },
  cardContainer: {
    marginBottom: 10
  },
  card: {
    backgroundColor: '#F2F2F2',
    borderRadius: 5,
    padding: 10,
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
    fontSize: 14,
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
  distance: {
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
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center'
  }
};
export default Screen;