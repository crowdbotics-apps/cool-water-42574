import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Clipboard, Alert, SafeAreaView } from "react-native";

const App = () => {
  const [email, setEmail] = useState("");
  const [appShareLink, setAppShareLink] = useState("");

  const handleCopyLink = () => {
    Clipboard.setString(appShareLink);
    Alert.alert("Link Copied", "The app-share link has been copied to the clipboard.");
  };

  const handleSend = () => {// Implement send functionality here
    // You can use the 'email' and 'appShareLink' variables to send the email
    // For example, you can use a library like react-native-mail or react-native-smtp-mailer to send the email
  };

  const handleCancel = () => {// Implement cancel functionality here
    // For example, you can navigate back to the previous screen or close the modal
  };

  return <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} placeholder="Enter your email" value={email} onChangeText={setEmail} />
      </View>
      <View style={styles.linkContainer}>
        <Text style={styles.label}>App-Share Link</Text>
        <Text style={styles.link}>{appShareLink}</Text>
        <TouchableOpacity style={styles.copyButton} onPress={handleCopyLink}>
          <Text style={styles.copyButtonText}>Copy</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>;
};

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5"
  },
  inputContainer: {
    marginBottom: 20
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5
  },
  input: {
    width: 250,
    height: 40,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 5,
    paddingHorizontal: 10
  },
  linkContainer: {
    marginBottom: 20
  },
  link: {
    fontSize: 16,
    marginBottom: 5
  },
  copyButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  copyButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold"
  },
  buttonContainer: {
    flexDirection: "row"
  },
  sendButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginRight: 10
  },
  sendButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold"
  },
  cancelButton: {
    backgroundColor: "#CCCCCC",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  cancelButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold"
  }
};
export default App;