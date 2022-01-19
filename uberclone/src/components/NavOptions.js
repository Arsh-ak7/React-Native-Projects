import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../redux/slices/navSlice';

const data = [
  {
    id: '123',
    title: 'Get a Ride',
    image: 'https://links.papareact.com/3pn',
    screen: 'MapScreen',
  },
  {
    id: '456',
    title: 'Order food',
    image: 'https://links.papareact.com/28w',
    screen: 'EatsScreen',
  },
];

const NavOptions = () => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);
  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={!origin ? [styles.touchable, styles.opa] : [styles.touchable]}
          onPress={() => navigation.navigate('mapscreen')}
          disabled={!origin}>
          <View style={styles.touchableView}>
            <Image style={styles.listLogos} source={{ uri: item.image }} />
            <Text style={styles.listText}>{item.title}</Text>
          </View>
          <Icon
            name="arrowright"
            color="white"
            type="antdesign"
            style={styles.iconStyle}
          />
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;

const styles = StyleSheet.create({
  touchable: {
    padding: 2,
    paddingBottom: 8,
    paddingLeft: 6,
    paddingTop: 4,
    backgroundColor: 'rgba(211,211,211, 0.3)',
    width: 160,
    margin: 8,
    display: 'flex',
    flex: 1,
  },
  touchableView: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  opa: {
    opacity: 0.2,
  },
  listLogos: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  listText: {
    marginTop: 8,
    fontSize: 18,
    color: '#000',
    fontWeight: '600',
  },
  iconStyle: {
    backgroundColor: '#000',
    width: 40,
    height: 40,
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 99999,
    marginTop: 14,
    marginLeft: 14,
    marginBottom: 7,
  },
});
