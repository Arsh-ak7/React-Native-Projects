import {View} from 'react-native';
import React from 'react';
import About from '../components/restaurantDetail/About';
import {Divider} from 'react-native-elements';
import MenuItems from '../components/restaurantDetail/MenuItems';
import ViewCart from '../components/restaurantDetail/ViewCart';

const menuItems = [
  {
    title: 'Tandoori Chicken',
    description:
      'Amazing Indian dish with tenderloin chicken off sizzling hot tandoor',
    price: '$12.99',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2Fgy2RBANeMdxE-4jUITEu-NrLobLmPeZXA&usqp=CAU',
  },
  {
    title: 'Chicken Tikka',
    description:
      'Amazing Indian dish with tenderloin chicken off sizzling hot tandoor',
    price: '$19.99',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2Fgy2RBANeMdxE-4jUITEu-NrLobLmPeZXA&usqp=CAU',
  },
  {
    title: 'Chicken Masala',
    description:
      'Amazing Indian dish with tenderloin chicken off sizzling hot tandoor',
    price: '$10.99',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2Fgy2RBANeMdxE-4jUITEu-NrLobLmPeZXA&usqp=CAU',
  },
];

const RestaurantDetail = ({route, navigation}) => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
      }}>
      <About route={route} />
      <Divider width={1.8} style={{marginVertical: 20}} />
      <MenuItems restaurantName={route.params.name} foods={menuItems} />
      <ViewCart navigation={navigation} />
    </View>
  );
};

export default RestaurantDetail;
