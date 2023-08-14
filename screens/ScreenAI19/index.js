import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';

const Screen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Search..." placeholderTextColor="#999" />
      </View>
      <View style={styles.doctorContainer}>
        <View style={styles.doctorItem}>
          <Image style={styles.profileImage} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
          <View style={styles.doctorInfo}>
            <Text style={styles.doctorName}>Dr. John Doe</Text>
            <Text style={styles.doctorSpecialty}>Cardiologist</Text>
            <Text style={styles.doctorMiles}>5 miles</Text>
            <Text style={styles.doctorRate}>Average Rate: $100</Text>
          </View>
          <TouchableOpacity style={styles.moreInfoButton}>
            <Text style={styles.buttonText}>More Info</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.removeButton}>
            <Text style={styles.buttonText}>Remove</Text>
          </TouchableOpacity>
        </View>
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
  searchContainer: {
    marginBottom: 20
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 5,
    paddingHorizontal: 10
  },
  doctorContainer: {
    flex: 1
  },
  doctorItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 10
  },
  doctorInfo: {
    flex: 1
  },
  doctorName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  doctorSpecialty: {
    fontSize: 16,
    marginBottom: 5
  },
  doctorMiles: {
    fontSize: 14,
    marginBottom: 5
  },
  doctorRate: {
    fontSize: 14,
    marginBottom: 10
  },
  moreInfoButton: {
    backgroundColor: '#007bff',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginRight: 10
  },
  removeButton: {
    backgroundColor: '#dc3545',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold'
  }
};
export default Screen;