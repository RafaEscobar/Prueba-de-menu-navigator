import React from 'react';
import Navigation from './Navigation';
import { HomeScreen } from './src/screens/HomeScreen';
import 'react-native-gesture-handler';
import { DrawerNavigation } from './src/navigation/DrawerNavigation';
import ActionSheet from '@expo/react-native-action-sheet/lib/typescript/ActionSheet';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';

export const App = () => {
  return (
      // <HomeScreen />
      <ActionSheetProvider>
        <Navigation />
      </ActionSheetProvider>
  )
}
