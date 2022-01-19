import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { useDispatch } from 'react-redux';
import { setDestination } from '../redux/slices/navSlice';
import { useNavigation } from '@react-navigation/native';
import NavFavourites from './NavFavourites';
import { Icon } from 'react-native-elements';

const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.textStyle}>Here is something</Text>
      <View style={styles.viewContainer}>
        <View>
          <GooglePlacesAutocomplete
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
            placeholder="Where To?"
            textInputProps={{ placeholderTextColor: 'grey' }}
            styles={toInputBoxStyles}
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language: 'en',
            }}
            fetchDetails={true}
            returnKeyType={'search'}
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  location: details.geometry.location,
                  description: data.description,
                }),
              );
              navigation.navigate('RideOptionsCard');
            }}
          />
        </View>
        <NavFavourites />
      </View>
      <View
        style={{
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginTop: 'auto',
          paddingBottom: 40,
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('RideOptionsCard')}
          style={{
            backgroundColor: 'black',
            flexDirection: 'row',
            width: 100,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 999,
          }}>
          <Icon name="car" type="font-awesome" color="white" size={16} />
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              paddingLeft: 10,
            }}>
            Rides
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            width: 100,
            padding: 15,
            borderRadius: 999,
          }}>
          <Icon
            name="fast-food-outline"
            type="ionicon"
            color="black"
            size={16}
          />
          <Text
            style={{
              color: 'black',
              textAlign: 'center',
            }}>
            Eats
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    flex: 1,
    color: '#000',
  },
  textStyle: {
    color: '#000',
    textAlign: 'center',
    fontSize: 24,
    paddingTop: 15,
  },
  viewContainer: {
    borderTopWidth: 2,
    borderColor: '#f1f1f1',
    flexShrink: 1,
  },
});

const toInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: '#f1f1f1',
    borderRadius: 6,
    fontSize: 16,
    color: 'black',
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
  listView: {
    color: '#000',
  },
  row: {
    color: '#000',
  },
  description: {
    color: '#000',
  },
});
