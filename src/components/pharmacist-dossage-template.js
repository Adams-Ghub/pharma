import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function PharmacistDossageTemplate({ name, date, patientInfo }) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerSection}>
        <View style={styles.toContainer}>
          <Text style={styles.toText}>To:</Text>
          <Text style={styles.toValueText}> {name}</Text>
        </View>
        <View style={styles.onContainer}>
          <Text style={styles.onText}>On:</Text>
          <Text style={styles.onValueDate}>{date}</Text>
        </View>
        <View style={styles.forContainer}>
          <Text style={styles.forText}>For:</Text>
          <Text style={styles.patientInfoText}>{patientInfo}</Text>
        </View>
      </View>
      <View style={styles.medicationSection}>
        <View style={styles.medicationHeading}>
          <Text style={styles.medicationHeadingText}>Medication</Text>
          <Text style={styles.amountHeadingText}>Amount</Text>
          <Text style={styles.frequencyHeadingText}>Frequency</Text>
        </View>
        <View style={styles.medicationContainer}>
          <Text style={styles.medicineText}>Paracetamol</Text>
          <Text style={styles.amountText}>1 tablet</Text>
          <Text style={styles.frequencyText}>3 x daily</Text>
        </View>
        <View style={styles.medicationContainer}>
          <Text style={styles.medicineText}>Paracetamol</Text>
          <Text style={styles.amountText}>1 tablet</Text>
          <Text style={styles.frequencyText}>3 x daily</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 10,
    flexDirection: 'column',
    marginHorizontal: 5,
    alignSelf: 'stretch',
  },
  headerSection: {
    flex: 2,
    marginVertical: 5,
    paddingTop: 10,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#03C043',
  },

  toContainer: {
    flexDirection: 'row',
  },
toText:{
  fontSize:17,
  fontWeight:'600',
  marginRight:2
},
  onText:{
    fontSize:17,
    fontWeight:'600',
    marginRight:2
  },
  forText:{
    fontSize:17,
    fontWeight:'600',
    marginRight:2
  },
  toValueText:{
    fontSize:17,
  },
  onValueDate:{
    fontSize:17,
  },
  patientInfoText:{
    fontSize:17,
  },
  onContainer: {
    flexDirection: 'row',
  },

  forContainer: {
    flexDirection: 'row',
  },
  medicationSection: {
    flex: 7,
  },
  medicationHeading:{
    flexDirection:'row',
    marginBottom:5
    },
  medicationHeadingText:{
    flex:0.7,
    marginBottom:5,
    fontSize:17,
    fontWeight:'600',
    },
    medicationHeadingText:{
      flex:0.55,
      marginBottom:5,
      fontSize:17,
      fontWeight:'600',
      },
    amountHeadingText:{
      flex:0.21,
      marginBottom:5,
      fontSize:18,
      fontWeight:'600',
      },
    frequencyHeadingText:{
      flex:0.24,
      marginBottom:5,
      fontSize:17,
      fontWeight:'600',
      },
      medicationContainer:{
        flexDirection:'row',
        fontSize:17,
        fontWeight:'600',
        },
      medicineText:{
        flex:0.55,
        marginBottom:5,
        fontSize:17,
        },
      amountText:{
        flex:0.21,
        alignSelf:'center',
        marginBottom:5,
        fontSize:18,        
        },
      frequencyText:{
        flex:0.24,
        marginBottom:5,
        fontSize:17,
        textAlign:'center',
        justifyContent:'center'
        }
});

export default PharmacistDossageTemplate;
