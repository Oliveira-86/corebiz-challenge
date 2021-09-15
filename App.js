import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { Navigator } from './src/routes/MainNavigation';
import AppLoading from 'expo-app-loading'
import { NavigationContainer } from '@react-navigation/native';

import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';

export default function App() {

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />
  };

  return (

    <NavigationContainer>
      <Navigator />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
