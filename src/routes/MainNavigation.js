import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

const StackNavigator = createStackNavigator();

export const Navigator = () => {
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
            <StackNavigator.Screen
                name="Favorite"
                component={FavoritesScreen}
            />
        </StackNavigator.Navigator>
    )
};
