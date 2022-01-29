import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import HeaderTabs from '../components/home/HeaderTabs';
import Searchbar from '../components/home/Searchbar';
import Categories from '../components/home/Categories';
import RestaurantItem, {
  localRestaurants,
} from '../components/home/RestaurantItem';
import {Divider} from 'react-native-elements';
import BottomTabs from '../components/home/BottomTabs';

const Home = ({navigation}) => {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState('London');
  const [activeTab, setActiveTab] = useState('Delivery');

  const YELP_API_KEY =
    'i76ydWfEA-Wc1x0MNaUux-m0RDyy85uuIe-QpXr1BusoQsFmR9YgCiuAEee6D6z5SXie_qFnoXVhgJa9vm2Z4ejWBU0B4cYt-y4qfxkNydSbxP_KjBSFqbAkd7jzYXYx';

  const getRestaurantsFromYelp = () => {
    return fetch(
      `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`,
      {
        headers: {
          Authorization: `Bearer ${YELP_API_KEY}`,
        },
      },
    )
      .then(response => response.json())
      .then(data => setRestaurantData(data.businesses));
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View
        style={{
          backgroundColor: 'white',
          padding: 16,
        }}>
        <HeaderTabs />
        <Searchbar setCity={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItem
          restaurantData={restaurantData}
          navigation={navigation}
        />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#eee',
    flex: 1,
  },
});
