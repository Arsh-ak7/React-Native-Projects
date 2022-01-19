import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../redux/slices/navSlice';
import NavFavourites from '../components/NavFavourites';

const Homescreen = () => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.viewStyle}>
        <Image
          style={styles.uberlogo}
          source={{
            uri: 'https://links.papareact.com/gzs',
          }}
        />
        <GooglePlacesAutocomplete
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          placeholder="Where from?"
          textInputProps={{ placeholderTextColor: 'grey' }}
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
              color: '#000',
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
          }}
          fetchDetails={true}
          returnKeyType={'search'}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              }),
            );

            dispatch(setDestination(null));
          }}
          enablePoweredByContainer={false}
          minLength={2}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'en',
          }}
        />
        <NavOptions />
        <NavFavourites />
      </View>
    </SafeAreaView>
  );
};

export default Homescreen;

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: '#fff',
    flex: 1,
    color: '#000',
  },
  viewStyle: {
    padding: 20,
  },
  uberlogo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});
