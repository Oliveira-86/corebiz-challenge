import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen, {
    screenOptions as HomeScreenOptions
} from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export const BottomTabNav = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="HomeTab" component={StackNavigation} />
      <Tab.Screen name="Favorite" component={FavoritesScreen} />
    </Tab.Navigator>
  );
}

const StackNavigator = createStackNavigator();

export const StackNavigation = () => {
    return (
        <StackNavigator.Navigator>
            <StackNavigator.Screen
                name="Home"
                component={HomeScreen}
            />
            <StackNavigator.Screen
                name="Details"
                component={DetailsScreen}
            />
        </StackNavigator.Navigator>
    )
};
