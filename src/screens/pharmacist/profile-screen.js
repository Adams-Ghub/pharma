import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

function ProfileScreen() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [5, 5],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageMajorContainer}>
        <TouchableOpacity
          onPress={pickImage}
          style={styles.profileImageContainer}
        >
          {image ? (
            image && (
              <Image
                source={{ uri: image }}
                style={{ width: '100%', height: 350 }}
              />
            )
          ) : (
            <Text>select an image</Text>
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.bottomSection}>
        <View style={styles.usernameAndInputContainer}>
          <View style={styles.usernameEditContainer}>
            <Text style={[styles.usernameText,styles.labelText]}>username</Text>
            <TouchableOpacity style={styles.editButton}>
              <Text style={styles.editButtonText}>edit</Text>
            </TouchableOpacity>
          </View>
          <TextInput style={styles.allTextInput}/>
        </View>
        <View style={styles.emailAndInputContainer}>
          <View style={styles.emailEditContainer}>
            <Text style={[styles.emailText,styles.labelText]}>email</Text>
            <TouchableOpacity style={styles.editButton}>
              <Text style={styles.editButtonText}>edit</Text>
            </TouchableOpacity>
          </View>
          <TextInput style={styles.allTextInput}/>
        </View>
        <View style={styles.pharmacyAndInputContainer}>
          <View style={styles.pharmacyEditContainer}>
            <Text style={[styles.pharmacyText,styles.labelText]}>pharmacy</Text>
            <TouchableOpacity style={styles.editButton}>
              <Text style={styles.editButtonText}>edit</Text>
            </TouchableOpacity>
          </View>
          <TextInput style={styles.allTextInput}/>
        </View>
        <View style={styles.phoneAndInputContainer}>
          <View style={styles.phoneEditContainer}>
            <Text style={[styles.phoneText,styles.labelText]}>phone</Text>
            <TouchableOpacity style={styles.editButton}>
              <Text style={styles.editButtonText}>edit</Text>
            </TouchableOpacity>
          </View>
          <TextInput style={styles.allTextInput}/>
        </View>
        <View style={styles.regNumberAndInputContainer}>
          <View style={styles.regNumberEditContainer}>
            <Text style={[styles.regNumberText,styles.labelText]}>registration number</Text>
            <TouchableOpacity style={styles.editButton}>
              <Text style={styles.editButtonText}>edit</Text>
            </TouchableOpacity>
          </View>
          <TextInput style={styles.allTextInput}/>
        </View>
        <View>
            <TouchableOpacity style={styles.updateButton}>
                <Text style={styles.updateButtonText}>
                    update
                </Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>
                    update
                </Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignContent: 'center',
    width: '100%',
    paddingHorizontal: 10,
  },
  imageMajorContainer: {
    flex: 0.43,
  },
  profileImageContainer: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#ddd',
    width: '100%',
    height: 350,
    marginVertical: 0,
    paddingVertical: 0,
  },
  bottomSection: {
    flex: 0.57,
    paddingTop:30
  },
  usernameEditContainer:{
    flexDirection:'row',    
    justifyContent:'space-between'
  },
  emailEditContainer:{
    flexDirection:'row',    
    justifyContent:'space-between'
  }
  ,
  pharmacyEditContainer:{
    flexDirection:'row',    
    justifyContent:'space-between'
  },
  regNumberEditContainer:{
    flexDirection:'row',    
    justifyContent:'space-between'
  }
  ,
  phoneEditContainer:{
    flexDirection:'row',    
    justifyContent:'space-between'
  },
  allTextInput:{
    borderStyle:'solid',
    borderWidth:1,
    borderColor:'#333',
    borderRadius:5,
    paddingHorizontal:5

  },
  editButtonText:{
    color:'#03C043',
    fontSize:16
  },
  labelText:{
    fontSize:18,
    fontWeight:'700'    
  },
  usernameAndInputContainer:{
    marginBottom:15
  },
  emailAndInputContainer:{
    marginBottom:15
  },
  pharmacyAndInputContainer:{
    marginBottom:15
  },
  phoneAndInputContainer:{
    marginBottom:15
  },
  regNumberAndInputContainer:{
    marginBottom:15
  },
  updateButton:{
    backgroundColor:'#03C043',
    paddingVertical:8,
    alignItems:'center',
    borderRadius:5
  },
  updateButtonText:{
    color:'#fff',
    fontSize:18
  }
});

export default ProfileScreen;
