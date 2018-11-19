import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import {createSwitchNavigator} from 'react-navigation';
import IndexScreen from "./screens/IndexScreen";
import LogoScreen from "./screens/LogoScreen";

export default class App extends React.Component {
  state = {
    walletType: -1,
    isLoadingComplete: false,
  };
  constructor()
  {
    super();

    let initState = {
      walletType: 1,

    };
    this.state = initState;
  }

  render() {
    const RootNavigator = createSwitchNavigator(
      {
        StartRoot: LogoScreen,
        Main: IndexScreen,
      },
    );

    return (<RootNavigator/>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
