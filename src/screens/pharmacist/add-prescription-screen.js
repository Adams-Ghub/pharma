import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import DossageItem from '../../components/dossage-item';

export default function AddPrescriptionScreen() {
  return (
    <View style={styles.mainContainer}>
      <View>
        <Text>Prescription Form</Text>
      </View>
      <View>
        <TextInput placeholder="select customer" />
        <TextInput placeholder="date" />
      </View>
      <View>
        <Text>Patient info</Text>
        <TextInput placeholder="Eg. John Kingston, 2yrs, 10Kg" />
      </View>
      <DossageItem />
      <View>
        <Text>Medication & Dossage</Text>
       
        <View style={styles.dossageItemConainer}>
        
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    // backgroundColor:'#450989'
  },
  dossageItemConainer:{
    flex:0.5,
    width:'100%'
  }
});
