import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AppinfoPage } from '../../pages/AppinfoPage';
import { SocialmediaPage } from '../../pages/SocialmediaPage';

const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
        <Drawer.Screen name='App info' component={ AppinfoPage } />
        <Drawer.Screen name='Redes sociales' component={ SocialmediaPage } />
    </Drawer.Navigator>
  )
}
