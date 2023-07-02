import React, { useState } from 'react';
import { RadioButton } from 'react-native-paper';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function Signup() {
  const [checked, setChecked] = useState('first');

  const displayRegistrationSection =()=>{
 if(checked==='second'){
  return (
    <View  style={styles.registrationLabelInputContainer}>
    <Text style={styles.registrationText}>Registration Number</Text>
    <TextInput style={styles.registrationInput} />
  </View>
  )
 }
  }
  return (
    <View style={styles.container}>
      <View style={styles.headingSection}>
        <Text style={styles.headingText}>Signup</Text>
      </View>
      <ScrollView style={styles.bottomSection}>        
        <View style={styles.phoneLabelInputContainer}>
          <Text style={styles.phoneText}>Phone</Text>
          <TextInput style={styles.phoneInput} />
        </View>
        <View style={styles.emailLabelInputContainer}>
          <Text style={styles.emailText}>Email Address</Text>
          <TextInput style={styles.emailInput} />
        </View>
        <View style={styles.passwordLabelInputContainer}>
          <Text style={styles.passwordText}>Password</Text>
          <TextInput secureTextEntry style={styles.passwordInput} />
        </View>
        <View style={styles.radioButtonsContainer}>
          <View style={styles.regularRadioButtonContainer}>
          <RadioButton
            value="first"
            color='#03C043'
            status={checked === 'first' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('first')}
          />
          <Text>Regular</Text>
          </View>
          <View style={styles.pharmacistRadioButtonContainer}>
          <RadioButton
            value="second"
            color='#03C043'
            status={checked === 'second' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('second')}
          />
          <Text>Pharmacist</Text>
          </View>
        </View>
       <View>
        {
          displayRegistrationSection()
        }
       </View>
        <View style={styles.signupButtonContainer}>
          <TouchableOpacity style={styles.signupButton}>
            <Text style={styles.signupButtonText}>Sign up</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.haveAccountTextsContainer}>
          <Text style={styles.haveAccountText}>Have an account?</Text>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#03C043',
    justifyContent: 'flex-start',
    alignSelf: 'stretch',
    margin: 0,
    padding: 0,
  },
  headingSection: {
    flex: 0.4,
    justifyContent: 'center',
  },
  headingText: {
    alignSelf: 'center',
    fontSize: 35,
    color: '#fefefe',
    fontWeight: '300',
  },
  bottomSection: {
    flex: 0.6,
    backgroundColor: '#fff',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  emailLabelInputContainer: {
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: '#03C043',
    marginBottom: 20,
  },
  emailText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#565656',
    paddingLeft: 10,
    marginBottom: 10,
  },
  emailInput: {
    paddingLeft: 10,
    color: '#050505',
    fontSize: 18,
  },

  phoneLabelInputContainer: {
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: '#03C043',
    marginBottom: 20,
  },
  phoneText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#565656',
    paddingLeft: 10,
    marginBottom: 10,
  },
  phoneInput: {
    paddingLeft: 10,
    color: '#050505',
    fontSize: 18,
  },
  passwordLabelInputContainer: {
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: '#03C043',
    marginBottom: 20,
  },
  passwordText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#565656',
    paddingLeft: 10,
    marginBottom: 10,
  },
  passwordInput: {
    paddingLeft: 10,
    color: '#050505',
    fontSize: 18,
  },
  signupButtonContainer:{
    marginBottom:20
  },
  signupButton: {
    backgroundColor: '#03C043',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  signupButtonText: {
    color: '#fefefe',
    paddingVertical: 12,
    fontSize: 18,
    fontWeight: '600',
  },

  haveAccountTextsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  haveAccountText: {
    color: '#565656',
    fontSize: 18,
  },
  loginButtonText: {
    color: '#03C043',
    fontSize: 18,
    marginVertical: 2,
  },
  radioButtonsContainer:{
    flex:1,
    flexDirection:'row',
    justifyContent:'flex-start',
    marginBottom:20
  },
  regularRadioButtonContainer:{
    flex:0.5,
    flexDirection:'row',
    alignItems:"center",
    justifyContent:"flex-start"
  },
  pharmacistRadioButtonContainer:{
    flex:0.5,
    flexDirection:'row',
    alignItems:"center",
    justifyContent:"flex-start"
  },

  registrationLabelInputContainer: {
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: '#03C043',
    marginBottom: 30,
  },
  registrationText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#565656',
    paddingLeft: 10,
    marginBottom: 16,
  },
  registrationInput: {
    paddingLeft: 10,
    color: '#050505',
    fontSize: 18,
  },

});
