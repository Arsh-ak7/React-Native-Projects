import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import React from 'react';
import {Divider} from 'react-native-elements';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

export default function MenuItems() {
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

  return (
    <ScrollView>
      {menuItems.map((food, index) => (
        <View key={index}>
          <View style={styles.menuItemStyle}>
            <BouncyCheckbox
              iconStyle={{
                borderColor: 'lightgray',
                borderRadius: 0,
              }}
              fillColor="green"
            />
            <FoodInfo food={food} />
            <FoodImage food={food} />
          </View>
          <Divider
            width={0.5}
            orientation="vertical"
            style={{
              marginHorizontal: 20,
            }}
          />
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  titleStyle: {
    fontSize: 19,
    fontWeight: '600',
    color: 'black',
  },
});

const FoodInfo = props => (
  <View style={{width: 240, justifyContent: 'space-evenly'}}>
    <Text style={styles.titleStyle}>{props.food.title}</Text>
    <Text style={{color: 'black'}}>{props.food.description}</Text>
    <Text style={{color: 'black'}}>{props.food.price}</Text>
  </View>
);

const FoodImage = props => (
  <View>
    <Image
      source={{uri: props.food.image}}
      style={{width: 100, height: 100, borderRadius: 8}}
    />
  </View>
);
