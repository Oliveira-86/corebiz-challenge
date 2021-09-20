import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import DetailsScreen, {
  screenOptions as DetailsScreenOptions
} from '../screens/DetailsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

import { Entypo, Ionicons } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Colors from '../styles/Colors';
import { useSelector } from 'react-redux';

const Tab = createBottomTabNavigator();

export const BottomTabNav = () => {
  const listFav = useSelector(state => state.characters.favoriteCharacter);
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: Colors.black,
          height: 65
        }
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center' }} >

              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={28}
                color={focused ? Colors.primary : 'white'}
              />

              <Text
                style={{
                  color: focused ? Colors.primary : 'white',
                  fontSize: 10
                }}
              >
                HOME
              </Text>
            </View>
          )
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center' }} >
              <Entypo
                name={focused ? "star" : "star-outlined"}
                size={32}
                color={focused ? Colors.primary : 'white'}
              />
              <Text
                style={{
                  color: focused ? Colors.primary : 'white',
                  fontSize: 10
                }}
              >
                FAVORITE
              </Text>
              {listFav.length !== 0 && <View style={styles.dot} />}
            </View>
          )
        }}
      />
    </Tab.Navigator>
  );
}

const StackNavigator = createStackNavigator();

export const StackNavigation = () => {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen
        name="Home"
        component={BottomTabNav}
        options={{ headerShown: false }}
      />
      <StackNavigator.Screen
        name="Details"
        component={DetailsScreen}
        options={DetailsScreenOptions}
      />
    </StackNavigator.Navigator>
  )
};

const styles = StyleSheet.create({
  dot: {
    backgroundColor: "#ff0047",
    width: 15,
    height: 15,
    borderRadius: 8,
    position: 'absolute',
    right: 6,
    top: 0,
    borderWidth: 2,
    borderColor: Colors.black
}
})
