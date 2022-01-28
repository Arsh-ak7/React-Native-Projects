import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from '@env';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Searchbar = ({setCity}) => {
  return (
    <View
      style={{
        marginTop: 15,
        flexDirection: 'row',
      }}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        textInputProps={{placeholderTextColor: 'grey'}}
        debounce={400}
        fetchDetails={true}
        query={{
          key: GOOGLE_MAPS_APIKEY,
          language: 'en',
        }}
        onPress={(data, details = null) => {
          const city = data.description.split(',')[0];
          setCity(city);
        }}
        returnKeyType={'search'}
        styles={{
          textInput: {
            backgroundColor: '#eee',
            borderRadius: 20,
            fontWeight: '700',
            marginTop: 1,
            color: 'black',
          },
          textInputContainer: {
            backgroundColor: '#eee',
            borderRadius: 50,
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 10,
          },
          row: {
            color: '#000',
          },
          description: {
            color: '#000',
          },
        }}
        renderLeftButton={() => (
          <View>
            <Ionicons
              name="location-sharp"
              size={24}
              color="black"
              style={{
                marginLeft: 10,
              }}
            />
          </View>
        )}
        renderRightButton={() => (
          <View
            style={{
              flexDirection: 'row',
              marginRight: 8,
              backgroundColor: 'white',
              padding: 9,
              borderRadius: 30,
              alignItems: 'center',
            }}>
            <AntDesign
              name="clockcircle"
              size={11}
              color="black"
              style={{
                marginRight: 6,
              }}
            />
            <Text
              style={{
                color: 'black',
              }}>
              Search
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default Searchbar;

const styles = StyleSheet.create({});
