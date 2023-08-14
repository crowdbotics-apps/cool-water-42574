import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

const MedicalPlanScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Medical Plan</Text>
        <Text style={styles.sectionSubtitle}>Coverage Details:</Text>
        <Text style={styles.sectionText}>
          Display a breakdown of medical coverage details, including in-network and out-of-network benefits, preventive care, and prescription medication coverage
        </Text>
        <Text style={styles.sectionSubtitle}>Deductibles and Co-payments Information:</Text>
        <Text style={styles.sectionText}>
          Display a breakdown of co-payments for various medical services, such as doctor visits, specialist consultations, and prescription medications.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Documentation</Text>
        <Text style={styles.documentTitle}>Document title 1</Text>
        <Text style={styles.documentLink}>https://example.com/document1</Text>
        <Text style={styles.documentTitle}>Document title 2</Text>
        <Text style={styles.documentLink}>https://example.com/document2</Text>
        <Text style={styles.documentTitle}>Document title 3</Text>
        <Text style={styles.documentLink}>https://example.com/document3</Text>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 24
  },
  section: {
    marginBottom: 24
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8
  },
  sectionSubtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8
  },
  sectionText: {
    fontSize: 16,
    marginBottom: 16
  },
  documentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4
  },
  documentLink: {
    fontSize: 16,
    color: 'blue',
    marginBottom: 8
  }
});
export default MedicalPlanScreen;