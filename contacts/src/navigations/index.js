import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import React from 'react';
import DrawerNavigator from './DrawerNavigator';
import HomeNavigator from './HomeNavigator';

const AppContainer = () => {
  const isLoggedIn = true;
  return (
    <NavigationContainer>
      {isLoggedIn ? <DrawerNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppContainer;
