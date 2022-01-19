import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Icon } from 'react-native-elements';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Map from '../components/Map';
import NavigateCard from '../components/NavigateCard';
import RideOptions from '../components/RideOptions';
import { useNavigation } from '@react-navigation/native';

const MapScreen = () => {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate('homescreen')}
        style={{
          position: 'absolute',
          backgroundColor: 'rgba(211,211,211,0.4)',
          top: 18,
          left: 10,
          zIndex: 50,
          padding: 9,
          borderRadius: 999,
          shadowRadius: 20,
          shadowColor: 'black',
          shadowOpacity: 1,
        }}>
        <Icon name="menu" />
      </TouchableOpacity>
      <View style={styles.mapContainer}>
        <Map />
      </View>
      <View style={styles.mapContainer}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="RideOptionsCard"
            component={RideOptions}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  mapContainer: {
    height: '50%',
  },
});
