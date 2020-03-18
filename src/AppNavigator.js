import React from 'react';
import {createBottomTabNavigator, BottomTabBar} from 'react-navigation-tabs';
import Whatsapp from './components/Whatsapp';

const TabBarComponent = props => <BottomTabBar {...props} />;

const AppNavigator = createBottomTabNavigator(
  {
    Whatsapp: {
      screen: Whatsapp,
    },
    Twitter: {
      screen: Whatsapp,
    },
    Instagram: {
      screen: Whatsapp,
    },
  },
  {
    tabBarComponent: props => (
      <TabBarComponent {...props} style={{borderTopColor: '#605F60'}} />
    ),
  },
);

export default AppNavigator;
