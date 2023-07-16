import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer'

function ClientNavigation() {
    const Drawer = createDrawerNavigator()
  return (
    <Drawer.Navigator>
        <Drawer.Screen />
    </Drawer.Navigator>
  )
}

export default ClientNavigation