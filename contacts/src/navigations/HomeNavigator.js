import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {
  CONTACT_DETAILS,
  CONTACT_LIST,
  SETTINGS,
  CONTACT_CREATE,
} from '../constants/routeName';
import Contacts from '../screens/Contacts';
import ContactDetails from '../screens/ContactDetails';
import CreateContact from '../screens/CreateContact';
import Settings from '../screens/Settings';

const HomeNavigator = () => {
  const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator initialRouteName="Contact">
      <HomeStack.Screen name={CONTACT_LIST} component={Contacts} />
      <HomeStack.Screen name={CONTACT_DETAILS} component={ContactDetails} />
      <HomeStack.Screen name={CONTACT_CREATE} component={CreateContact} />
      <HomeStack.Screen name={SETTINGS} component={Settings} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
