import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import PharmacistWelcomeScreen from './src/screens/pharmacist/pharmacist-welcome-screen';
import FeedBackScreen from './src/screens/pharmacist/feedback-screen';
import PrescribtionScreen from './src/screens/pharmacist/prescription-screen';
import AddPrescriptionScreen from './src/screens/pharmacist/add-prescription-screen';

export default function App() {
  return (
    <View style={styles.container}>
      <AddPrescriptionScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 20,
  },
});
