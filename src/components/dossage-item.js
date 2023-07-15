import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import Dropdown from 'react-native-input-select';

export default function DossageItem() {
  const [country, setCountry] = useState('tablet');
  return (
    <View style={styles.mainContainer}>
      <View style={styles.medicineContainer}>
        <Text style={styles.medicineText}>medicine</Text>
        <TextInput
          style={styles.medicineInput}
          placeholder="Eg. Paracetamol syrup"
        />
      </View>
      <View style={styles.amountContainer}>
        <Text style={[styles.amountText, styles.allText]}>Amount</Text>
        <View style={styles.amountInputContainer}>
          <TextInput style={styles.amountInput} />

          <Dropdown
            options={[
              { name: 'Tablet', code: 'tablet' },
              { name: 'Capsule', code: 'capsule' },
              { name: 'ml', code: 'ml' },
            ]}
            optionLabel={'name'}
            optionValue={'code'}
            selectedValue={country}
            onValueChange={(value) => setCountry(value)}
            primaryColor={'green'}
            selectedItemStyle={{ fontWeight: '600', backgroundColor:'transparent',width:170 }}
            dropdownStyle={{borderRadius:0,backgroundColor:'transparent',margin:0,padding:0,width:100,height:9 }}
          
            dropdownIconStyle={{right:0,display:'none'}}
          />
        </View>
      </View>
      <View style={styles.frequencyContainer}>
        <Text style={[styles.frequencyText, styles.allText]}>frequency</Text>
        <View style={styles.frequencyInputContainer}>
          <TextInput style={styles.frequencyNumOfTimes} />
          <Text>x</Text>
          <TextInput style={styles.frequencyOption} />
          {/* <Picker
            selectedValue={frequency}
            onValueChange={(itemValue, itemIndex) => setFrequency(itemValue)}
          >
            <Picker.Item label="Hour(s)" value="hrs" />
            <Picker.Item label="Day(s)" value="days" />
            <Picker.Item label="Week(s)" value="weeks" />
            <Picker.Item label="Month(s)" value="months" />
          </Picker> */}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 0.1,
    flexDirection: 'row',

    backgroundColor: '#aaddee',
  },
  medicineContainer: {
    flex: 0.5,
  },
  amountContainer: {
    flex: 0.25,
  },
  frequencyContainer: {
    flex: 0.25,
  },
  frequencyInputContainer: {
    flexDirection: 'row',
  },
  medicineText: {
    fontSize: 17,
    color: '#000',
  },
  medicineInput: {
    borderStyle: 'solid',
    borderColor: '#000',
    borderWidth: 1,
    fontSize: 15,
    width: 160,
    paddingHorizontal: 2,
  },
  amountInputContainer: {
    flexDirection: 'row',
    borderStyle: 'solid',
    borderColor: '#000',
    borderWidth: 1,
    width: '85%',
  },
  amountInput: {
    borderStyle: 'solid',
    borderColor: '#000',
    borderWidth: 1,
    width: 20,
  },
});
