import {View, Text, Image} from 'react-native';
import React from 'react';

const About = props => {
  const {name, image, price, reviews, rating, categories} = props.route.params;

  const formattedCategories = categories.map(cat => cat.title).join(' • ');

  const description = `${formattedCategories} ${
    price ? ' • ' + price : ''
  } • 🎫 • ${rating} ⭐ (${reviews}+)`;

  return (
    <View>
      <RestuarantImage image={image} />
      <RestaurantName name={name} />
      <RestaurantDescription description={description} />
    </View>
  );
};

export default About;

const RestuarantImage = props => (
  <Image
    source={{
      uri: props.image,
    }}
    style={{width: '100%', height: 180}}
  />
);

const RestaurantName = props => (
  <Text
    style={{
      color: 'black',
      fontSize: 29,
      fontWeight: '600',
      marginTop: 10,
      marginHorizontal: 15,
    }}>
    {props.name}
  </Text>
);

const RestaurantDescription = props => (
  <Text
    style={{
      color: 'black',
      fontSize: 15.5,
      fontWeight: '400',
      marginTop: 10,
      marginHorizontal: 15,
    }}>
    {props.description}
  </Text>
);
