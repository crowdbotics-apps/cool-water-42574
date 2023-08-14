import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Button } from 'react-native';

const LocationScreen = () => {
  return <SafeAreaView style={_styles.hNGPlgnv}>
      <Text style={_styles.XNnyYdKp}>Allow the app to access your location?</Text>
      <View style={_styles.pBNjcGSS}>
        <Button title="Allow always" onPress={() => {}} />
        <Button title="Allow only when using the app" onPress={() => {}} />
      </View>
      <Button title="Don't allow" onPress={() => {}} />
    </SafeAreaView>;
};

export default LocationScreen;

const _styles = StyleSheet.create({
  hNGPlgnv: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  XNnyYdKp: {
    fontSize: 20,
    marginBottom: 20
  },
  pBNjcGSS: {
    flexDirection: "row",
    marginBottom: 20
  }
});