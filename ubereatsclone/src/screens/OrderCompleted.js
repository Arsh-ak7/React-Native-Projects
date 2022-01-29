import {View, Text, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import LottieView from 'lottie-react-native';
import firestore from '@react-native-firebase/firestore';
import {useState} from 'react';
import MenuItems from '../components/restaurantDetail/MenuItems';

export default function OrderCompleted() {
  const [lastOrder, setLastOrder] = useState({
    items: [
      {
        title: 'Tandoori Chicken',
        description:
          'Amazing Indian dish with tenderloin chicken off sizzling hot tandoor',
        price: '$12.99',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2Fgy2RBANeMdxE-4jUITEu-NrLobLmPeZXA&usqp=CAU',
      },
    ],
  });
  const {items, restaurantName} = useSelector(
    state => state.cartReducer.selectedItems,
  );
  const total = items
    .map(item => Number(item.price.replace('$', '')))
    .reduce((a, b) => a + b, 0);

  const totalUSD = total.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  useEffect(() => {
    const getOrders = async () => {
      const unsub = await firestore()
        .collection('orders')
        .orderBy('createdAt', 'desc')
        .limit(1)
        .onSnapshot(snapshot => {
          snapshot.docs.map(doc => {
            setLastOrder(doc.data());
          });
        });
      return () => unsub();
    };
    getOrders();
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          margin: 15,
          alignItems: 'center',
          height: '100%',
        }}>
        <LottieView
          style={{
            height: 100,
            alignSelf: 'center',
            marginBottom: 10,
            width: 100,
          }}
          autoPlay
          speed={0.5}
          loop={false}
          source={require('../assets/animations/check-mark.json')}
        />
        <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
          Your Order at {restaurantName} has been placed for {totalUSD}
        </Text>
        <ScrollView>
          <MenuItems foods={lastOrder.items} hideCheckbox={true} />
          <LottieView
            style={{
              height: 200,
              alignSelf: 'center',
              marginBottom: 10,
              width: 100,
            }}
            autoPlay
            speed={0.5}
            loop={false}
            source={require('../assets/animations/cooking.json')}
          />
        </ScrollView>
      </View>
    </View>
  );
}
