import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentScreen,
    Images: ImageScreen,
    Modal: ModalScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    },
  }
);
export default createAppContainer(navigator);