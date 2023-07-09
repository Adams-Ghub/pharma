import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function DossageItem() {
  const [medType, setMedType] = useState('Tablet');
  const [frequency, setFrequency] = useState('days');
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
          {/* <Picker
            selectedValue={medType}
            onValueChange={(itemValue, itemIndex) => setMedType(itemValue)}
          >
            <Picker.Item label="Tablet" value="tablet" />
            <Picker.Item label="Capsule" value="capsule" />
            <Picker.Item label="ml" value="ml" />
          </Picker> */}
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
    flex: 1,
    flexDirection: 'row',
    // width: '100%',
    // height: '100%',
    backgroundColor: '#aaddee',
  },
  medicineContainer: {
    // flex: 0.5,
  },
  amountContainer: {
    // flex: 0.25,
  },
  frequencyContainer: {
    // flex: 0.25,
  },
  medicineText: {
    fontSize: 17,
    color: '#000',
  },
});
