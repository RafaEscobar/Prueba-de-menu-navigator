import React from 'react';
// import Navigation from './Navigation';
// import { HomeScreen } from './src/screens/HomeScreen';
import 'react-native-gesture-handler';
// import { DrawerNavigation } from './src/navigation/DrawerNavigation';
// import ActionSheet from '@expo/react-native-action-sheet/lib/typescript/ActionSheet';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import Navigation from './src/navigation';

import { PortalProvider } from '@gorhom/portal';

export const App = () => {
  return (
      // <HomeScreen />
      <SafeAreaProvider>
		  <PortalProvider>
			  <Navigation />
		  </PortalProvider>
     </SafeAreaProvider>
  )
}
