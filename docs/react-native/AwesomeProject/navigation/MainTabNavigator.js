import React from 'react';
import {Image, Platform} from 'react-native';
import { createStackNavigator, createBottomTabNavigator, } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import StatusScreen from '../screens/StatusScreen';
import Colors from "../constants/Colors";

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  title: '',
  tabBarLabel: '',
  tabBarIcon: ({ focused }) => (
    <Image source={require('../assets/images/main_button.png')}
           style={{
             resizeMode: 'stretch',
             marginTop: 45,
             width: 30,
             height: 65,
             flex: 0,
           }}/>
  ),
  tabBarOptions : {
    style: {
      backgroundColor: Colors.lubicTabColor,
    }
  }
};

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: '주소 관리',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
  tabBarOptions : {
    style: {
      backgroundColor: Colors.lubicTabColor,
    }
  }
};

const SettingsStack = createStackNavigator({
  Settings: StatusScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: '블록 상태',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
  tabBarOptions : {
    style: {
      backgroundColor: Colors.lubicTabColor,
    }
  }
};

export default createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
});
