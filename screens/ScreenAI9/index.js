import { useNavigation } from "@react-navigation/native";
import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';

const Screen = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.container}>
      <View style={styles.section1}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Medical</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Dental</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Vision insurance</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section2}>
        <Text style={styles.cardText}>User's Full Name</Text>
        <Text style={styles.cardText}>ID Number</Text>
        <Text style={styles.cardText}>Additional Information</Text>
        <TouchableOpacity style={styles.cardButton}>
          <Text style={styles.cardButtonText}>Download</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardButton} onPress={() => {
        navigation.navigate("ScreenAI11");
      }}>
          <Text style={styles.cardButtonText}>Share Option</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>;
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  section1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  button: {
    backgroundColor: '#42a5f5',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  section2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardText: {
    fontSize: 18,
    marginBottom: 10
  },
  cardButton: {
    backgroundColor: '#42a5f5',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10
  },
  cardButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
};
export default Screen;