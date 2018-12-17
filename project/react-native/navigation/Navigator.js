import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';

import AppMain from '../container/AppMain';
import AppDetail from '../container/AppDetail';
import Scanner from '../container/QRCodeScanner';

const MainStack = createStackNavigator(
  {
    main: {
      screen: AppMain
    },
    detail: {
      screen: AppDetail
    }
  },
  {
    initialRouteName: 'sample',
    headerBackTitle: null,
  }
);

const RootStack = createStackNavigator(
  {
    main: {
      screen: MainStack,
    },
    scan: {
      screen: Scanner,
    }
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

const AppContainer = createAppContainer(RootStack);


export default createSwitchNavigator({
  AppContainer,
});
