import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { selectTravelTimeInformation } from '../redux/slices/navSlice';

const data = [
  {
    id: 'Uber-X',
    title: 'Uber X',
    multipliers: 1,
    image: 'https://links.papareact.com/3pn',
  },
  {
    id: 'Uber-XL',
    title: 'Uber XL',
    multipliers: 1.2,
    image: 'https://links.papareact.com/5w8',
  },
  {
    id: 'Uber-LUX',
    title: 'Uber LUX',
    multipliers: 1.75,
    image: 'https://links.papareact.com/7pf',
  },
];

const SURGE_CHARGE_RATE = 1.5;

const RideOptions = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const travelTimeInformation = useSelector(selectTravelTimeInformation);

  return (
    <SafeAreaView
      style={{
        backgroundColor: 'white',
        flex: 1,
      }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          backgroundColor: 'white',
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('NavigateCard')}
          style={{
            top: 9,
            flex: 0.1,
            left: 12,
            padding: 9,
            borderRadius: 999,
            backgroundColor: 'white',
          }}>
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
        <Text style={styles.rideOptionsHeading}>
          Select a Ride - {travelTimeInformation?.distance.text}
        </Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => setSelected(item)}
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingLeft: 30,
              paddingRight: 30,
              backgroundColor:
                item.id === selected?.id ? 'rgba(210, 215, 211, 0.4)' : 'white',
            }}>
            <Image
              style={{
                height: 100,
                width: 100,
                marginRight: -30,
                resizeMode: 'contain',
              }}
              source={{ uri: item.image }}
            />
            <View>
              <Text
                style={{
                  color: 'black',
                  fontSize: 20,
                  fontWeight: '600',
                }}>
                {item.title}
              </Text>
              <Text
                style={{
                  color: 'black',
                }}>
                {travelTimeInformation?.duration.text} Travel Time
              </Text>
            </View>
            <Text style={{ color: 'black', fontSize: 18, fontWeight: '500' }}>
              {new Intl.NumberFormat('en-IN', {
                style: 'currency',
                currency: 'INR',
              }).format(
                travelTimeInformation?.duration.value *
                  SURGE_CHARGE_RATE *
                  item.multipliers,
              )}
            </Text>
          </TouchableOpacity>
        )}
      />
      <View>
        <TouchableOpacity
          disabled={!selected}
          style={{
            backgroundColor: !selected ? 'rgba(210, 215, 211, 0.6)' : 'black',
            padding: 10,
            margin: 10,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 24,
              textAlign: 'center',
            }}>
            Choose {selected?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptions;

const styles = StyleSheet.create({
  rideOptionsHeading: {
    color: 'black',
    fontSize: 24,
    textAlign: 'center',
    paddingTop: 12,
    fontWeight: '500',
    flex: 0.9,
    paddingRight: 54,
  },
});
