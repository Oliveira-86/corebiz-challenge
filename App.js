import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { StackNavigation } from './src/routes/MainNavigation';
import AppLoading from 'expo-app-loading'
import { NavigationContainer } from '@react-navigation/native';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import CharacterReducer from './src/store/reducer/characters';

import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';

const rootReducer = combineReducers({
  characters: CharacterReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));


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
      <Provider store={store}>
        <StackNavigation />
        <StatusBar style="auto" />
      </Provider>
    </NavigationContainer>
  );
}
