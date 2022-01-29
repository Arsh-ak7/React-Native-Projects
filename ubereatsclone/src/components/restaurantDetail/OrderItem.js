import {View, Text} from 'react-native';
import React from 'react';

export default function OrderItem({item}) {
  const {title, price} = item;
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        borderBottomColor: '#eee',
        borderBottomWidth: 0.7,
      }}>
      <Text style={{fontWeight: '600', fontSize: 16, color: 'black'}}>
        {title}
      </Text>
      <Text style={{opacity: 0.7, fontSize: 16, color: 'black'}}>{price}</Text>
    </View>
  );
}
