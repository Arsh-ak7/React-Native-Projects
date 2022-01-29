import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import React from 'react';
import {Divider} from 'react-native-elements';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';

export default function MenuItems({
  restaurantName,
  foods,
  hideCheckbox,
  marginLeft,
}) {
  const dispatch = useDispatch();
  const selectItem = (item, checkboxValue) =>
    dispatch({
      type: 'ADD_TO_CART',
      payload: {...item, restaurantName, checkboxValue},
    });

  const cartItems = useSelector(state => state.cartReducer.selectedItems.items);

  const isFoodSelected = (food, cartItems) => {
    return Boolean(cartItems.find(item => item.title === food.title));
  };

  return (
    <ScrollView>
      {foods &&
        foods.map((food, index) => (
          <View key={index}>
            <View style={styles.menuItemStyle}>
              {!hideCheckbox && (
                <BouncyCheckbox
                  iconStyle={{
                    borderColor: 'lightgray',
                    borderRadius: 0,
                  }}
                  fillColor="green"
                  onPress={checkboxValue => selectItem(food, checkboxValue)}
                  isChecked={isFoodSelected(food, cartItems)}
                />
              )}
              <FoodInfo food={food} />
              <FoodImage food={food} marginLeft={marginLeft ? marginLeft : 0} />
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

const FoodImage = ({marginLeft, ...props}) => (
  <View>
    <Image
      source={{uri: props.food.image}}
      style={{width: 100, height: 100, marginLeft, borderRadius: 8}}
    />
  </View>
);
