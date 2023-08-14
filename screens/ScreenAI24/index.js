import React, { useState } from 'react';
import { View, Text, SafeAreaView, TextInput, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native';
const data = [{
  id: 1,
  name: 'John Doe',
  distance: '10 miles',
  gender: 'Male',
  language: 'English'
}, {
  id: 2,
  name: 'Jane Smith',
  distance: '20 miles',
  gender: 'Female',
  language: 'Español'
}, {
  id: 3,
  name: 'Mike Johnson',
  distance: '30 miles',
  gender: 'Male',
  language: 'English'
}, {
  id: 4,
  name: 'Maria Garcia',
  distance: '40 miles',
  gender: 'Female',
  language: 'Español'
}, {
  id: 5,
  name: 'David Lee',
  distance: '50 miles',
  gender: 'Male',
  language: 'English'
}];

const Screen = () => {
  const [searchDistance, setSearchDistance] = useState('');
  const [searchGender, setSearchGender] = useState('');
  const [searchLanguage, setSearchLanguage] = useState('');

  const handleSearch = () => {// Perform search logic based on searchDistance, searchGender, and searchLanguage
    // Update the search results state
  };

  const renderItem = ({
    item
  }) => <View style={styles.itemContainer}>
      <Image source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemDistance}>{item.distance}</Text>
        <Text style={styles.itemGender}>{item.gender}</Text>
        <Text style={styles.itemLanguage}>{item.language}</Text>
      </View>
    </View>;

  return <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput style={styles.input} placeholder="Search distance (e.g. 10 miles)" value={searchDistance} onChangeText={setSearchDistance} />
        <TextInput style={styles.input} placeholder="Search gender (Male or Female)" value={searchGender} onChangeText={setSearchGender} />
        <TextInput style={styles.input} placeholder="Search language (English or Español)" value={searchLanguage} onChangeText={setSearchLanguage} />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>
      <FlatList data={data} renderItem={renderItem} keyExtractor={item => item.id.toString()} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 16
  },
  searchContainer: {
    marginBottom: 16
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 8
  },
  searchButton: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center'
  },
  searchButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16
  },
  itemImage: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 16
  },
  itemDetails: {
    flex: 1
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4
  },
  itemDistance: {
    fontSize: 14,
    color: '#888',
    marginBottom: 4
  },
  itemGender: {
    fontSize: 14,
    color: '#888',
    marginBottom: 4
  },
  itemLanguage: {
    fontSize: 14,
    color: '#888'
  }
});
export default Screen;