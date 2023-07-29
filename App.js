import React from 'react';
import { StyleSheet, View } from 'react-native';
// import Login from './src/screens/login';
import Signup from './src/screens/signup';
import PrescriptionScreen from './src/screens/pharmacist/prescription-screen';
import AddPrescriptionScreen from './src/screens/pharmacist/add-prescription-screen';
import ProfileScreen from './src/screens/pharmacist/profile-screen';
import MainNavigation from './src/navigation/main-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer style={styles.container}>
        <MainNavigation />
      </NavigationContainer>
    </Provider>
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
