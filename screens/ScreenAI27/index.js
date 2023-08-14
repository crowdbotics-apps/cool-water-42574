import { useNavigation } from "@react-navigation/native";
import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';

const Screen = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Spouse</Text>
        <View style={styles.memberContainer}>
          <Text style={styles.memberName}>Full Name</Text>
          <TouchableOpacity style={styles.inviteButton} onPress={() => {
          navigation.navigate("ScreenAI26");
        }}>
            <Text style={styles.buttonText}>Invite</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Children</Text>
        <View style={styles.memberContainer}>
          <Text style={styles.memberName}>Child 1</Text>
          <TouchableOpacity style={styles.inviteButton}>
            <Text style={styles.buttonText}>Invite</Text>
          </TouchableOpacity>
        </View>
        {
        /* Add more children here */
      }
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Invited Family Members</Text>
        <View style={styles.memberContainer}>
          <Text style={styles.memberName}>Spouse</Text>
          <Text style={styles.memberStatus}>Status: Pending</Text>
          <TouchableOpacity style={styles.revokeButton}>
            <Text style={styles.buttonText}>Revoke Access</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.memberContainer}>
          <Text style={styles.memberName}>Child 1</Text>
          <Text style={styles.memberStatus}>Status: Registered</Text>
          <TouchableOpacity style={styles.revokeButton}>
            <Text style={styles.buttonText}>Revoke Access</Text>
          </TouchableOpacity>
        </View>
        {
        /* Add more invited family members here */
      }
      </View>
    </SafeAreaView>;
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  section: {
    marginBottom: 20
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  memberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  memberName: {
    flex: 1,
    fontSize: 16
  },
  memberStatus: {
    fontSize: 14,
    marginRight: 10
  },
  inviteButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5
  },
  revokeButton: {
    backgroundColor: '#FF3B30',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5
  },
  buttonText: {
    color: '#fff',
    fontSize: 14
  }
};
export default Screen;