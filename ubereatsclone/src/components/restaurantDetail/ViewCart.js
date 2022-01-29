import {View, Text, Modal, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import OrderItem from './OrderItem';
import firestore from '@react-native-firebase/firestore';
import LottieView from 'lottie-react-native';

export default function ViewCart({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
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

  const addToFirebase = () => {
    const userCollections = firestore().collection('orders');
    userCollections
      .add({
        items,
        restaurantName,
        createdAt: firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        setModalVisible(false);
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          navigation.navigate('OrderCompleted');
        }, 2500);
      });
  };

  const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: 'flex-end',
      backgroundColor: 'rgba(0,0,0,0.7)',
    },
    modalCheckoutContainer: {
      backgroundColor: 'white',
      padding: 16,
      height: 500,
      borderWidth: 1,
    },
    restaurantName: {
      textAlign: 'center',
      fontWeight: '600',
      fontSize: 18,
      marginBottom: 10,
      color: 'black',
    },
    subtotalContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 15,
    },
    subtotalText: {
      textAlign: 'left',
      fontWeight: '600',
      fontSize: 15,
      marginBottom: 10,
      color: 'black',
    },
  });

  const checkoutModalContent = () => {
    return (
      <>
        <View style={styles.modalContainer}>
          <View style={styles.modalCheckoutContainer}>
            <Text style={styles.restaurantName}>{restaurantName}</Text>
            {items.map((item, index) => (
              <OrderItem key={index} item={item} />
            ))}
            <View style={styles.subtotalContainer}>
              <Text style={styles.subtotalText}>Subtotal: </Text>
              <Text style={{color: 'black'}}>{totalUSD}</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <TouchableOpacity
                style={{
                  marginTop: 20,
                  backgroundColor: 'black',
                  padding: 13,
                  justifyContent: 'space-evenly',
                  borderRadius: 30,
                  width: 200,
                  flexDirection: 'row',
                  position: 'relative',
                  alignItems: 'center',
                }}
                onPress={() => addToFirebase()}>
                <Text style={{fontWeight: '600', fontSize: 20, color: 'white'}}>
                  Checkout
                </Text>
                <Text
                  style={{
                    color: 'white',
                  }}>
                  {totalUSD}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    );
  };

  return (
    <>
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(true)}>
        {checkoutModalContent()}
      </Modal>
      {total ? (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            flexDirection: 'row',
            position: 'absolute',
            bottom: 40,
            zIndex: 999,
            justifyContent: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              width: '100%',
            }}>
            <TouchableOpacity
              style={{
                marginTop: 20,
                backgroundColor: 'black',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 13,
                flexDirection: 'row',
                borderRadius: 30,
                width: 300,
                position: 'relative',
              }}
              onPress={() => setModalVisible(true)}>
              <Text style={{fontSize: 20, marginRight: 15}}>View Cart</Text>
              <Text style={{fontSize: 20}}>{totalUSD}</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <></>
      )}
      {loading ? (
        <View
          style={{
            position: 'absolute',
            justifyContent: 'center',
            alignSelf: 'center',
            alignItems: 'center',
            backgroundColor: 'black',
            opacity: 0.6,
            height: '100%',
            width: '100%',
          }}>
          <LottieView
            style={{height: 200}}
            autoPlay
            speed={3}
            source={require('../../assets/animations/scanner.json')}
          />
        </View>
      ) : (
        <></>
      )}
    </>
  );
}
