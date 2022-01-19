import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Icon } from 'react-native-elements';

const data = [
  {
    id: '123',
    icon: 'home',
    location: 'Home',
    destination: 'Code Street, London, UK',
  },
  {
    id: '456',
    icon: 'briefcase',
    location: 'Work',
    destination: 'London Eye, London, Uk',
  },
];

const NavFavourites = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      ItemSeparatorComponent={() => <View style={styles.lineSeperator} />}
      renderItem={({ item: { location, destination, icon } }) => (
        <TouchableOpacity style={styles.touchable}>
          <Icon
            name={icon}
            type={'ionicon'}
            color="white"
            size={21}
            style={styles.iconStyle}
          />
          <View>
            <Text style={styles.textColor}>{location}</Text>
            <Text style={styles.textColorDest}>{destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavourites;

const styles = StyleSheet.create({
  touchable: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 9,
    margin: 10,
  },
  lineSeperator: {
    height: 0.5,
    backgroundColor: 'grey',
    opacity: 0.2,
  },
  textColor: {
    color: 'black',
    paddingLeft: 15,
    fontSize: 18,
    fontWeight: '500',
  },
  textColorDest: {
    color: 'grey',
    paddingLeft: 15,
  },
  iconStyle: {
    padding: 10,
    backgroundColor: '#e5e5e5',
    borderRadius: 9999,
    color: 'black',
  },
});
