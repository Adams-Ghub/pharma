import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerActions } from '@react-navigation/native';
import DrawerItem from '../components/drawer-item';
import Account from '../screens/pharmacist/profile-screen';
import PrescriptionScreen from '../screens/pharmacist/prescription-screen';
import Feedback from '../screens/pharmacist/feedback-screen';
import { TouchableOpacity } from 'react-native';
import { Entypo,SimpleLineIcons, Fontisto, FontAwesome5 } from '@expo/vector-icons';

function PharmacistNavigation({ navigation }) {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      screenOptions={{
        headerLeft: () => {
          return (
            <TouchableOpacity
              style={{ marginLeft: 20 }}
              onPress={() => {
                navigation.dispatch(DrawerActions.toggleDrawer());
              }}
            >
              <Entypo name="menu" size={30} color="#000" />
            </TouchableOpacity>
          );
        },
        headerStyle: {
          backgroundColor:'#ddd',
          height:60,
        },
        headerTitleContainerStyle: {
          top: 0, // Adjust the top position to align with the drawer content
        },
        headerStatusBarHeight: 12,
        drawerStyle:{
          backgroundColor: '#03C043',
          width: '55%',
          marginTop: '7%',

        }
      }}
      
    >
      <Drawer.Screen
        name="Account"
        component={Account}
        options={{
          drawerLabel: () => {
            return (
              <DrawerItem
                icon={
                  <SimpleLineIcons
                    name="user"
                    style={{}}
                    size={16}
                    color="#000"
                  />
                }
                title="Account"
              />
            );
          },
          drawerItemStyle:{
            backgroundColor:'transparent'
          }
        }}
      />
      <Drawer.Screen name="Prescription" component={PrescriptionScreen} />
      <Drawer.Screen name="Feedback" component={Feedback} />
    </Drawer.Navigator>
  );
}

export default PharmacistNavigation;
