import React from 'react';
import {StatusBar} from 'react-native';

import {createAppContainer} from 'react-navigation';

import AppNavigator from './src/AppNavigator';

const AppContainer = createAppContainer(AppNavigator);

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <AppContainer />
    </>
  );
};

export default App;
