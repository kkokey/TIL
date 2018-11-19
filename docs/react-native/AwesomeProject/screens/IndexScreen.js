import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import AppNavigator from '../navigation/MainTabNavigator';
import {createNavigationContainer} from "react-navigation";

export default createNavigationContainer(
  AppNavigator,
);
