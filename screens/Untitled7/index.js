import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { Text } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled7 = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><Pressable onPress={() => {
        navigation.navigate("ScreenAI8");
      }}><Text style={styles.qgUMYRSa}>{"Notifications"}</Text></Pressable><Pressable onPress={() => {
        navigation.navigate("ScreenAI9");
      }}><Text style={styles.IpFBRHiq}>{"My Benefit ID cards"}</Text></Pressable><Pressable onPress={() => {
        navigation.navigate("ScreenAI10");
      }}><Text style={styles.KjQUEmDw}>{"Specific plan - Details"}</Text></Pressable><Pressable onPress={() => {
        navigation.navigate("ScreenAI12");
      }}><Text style={styles.sHeYkdMQ}>{"Links"}</Text></Pressable><Pressable onPress={() => {
        navigation.navigate("ScreenAI22");
      }}><Text style={styles.RgjQXmRw}>{"Find a Doctor "}</Text></Pressable><Pressable onPress={() => {
        navigation.navigate("ScreenAI27");
      }}><Text style={styles.dwNtwuRV}>{"Family members"}</Text></Pressable><Pressable onPress={() => {
        navigation.navigate("ScreenAI30");
      }}><Text style={styles.GkVVJZaH}>{"Addition Content"}</Text></Pressable><Pressable onPress={() => {
        navigation.navigate("ScreenAI32");
      }}><Text style={styles.rsngvQnL}>{"Settings"}</Text></Pressable></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  qgUMYRSa: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  IpFBRHiq: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  KjQUEmDw: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  sHeYkdMQ: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  RgjQXmRw: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  dwNtwuRV: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  GkVVJZaH: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  rsngvQnL: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  }
});
export default Untitled7;