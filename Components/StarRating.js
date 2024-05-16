import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const StarRating = ({ rating, maxStars = 5, size = 24, filledColor = 'gold', unfilledColor = 'gray' }) => {
  const filledStars = Math.round(rating / 2); // Assuming rating is out of 10, so dividing by 2 to get rating out of 5

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < maxStars; i++) {
      stars.push(
        <Icon
        style={{marginLeft:7}}
          key={i}
          name={i < filledStars ? 'star' : 'star-o'}
          size={size}
          color={i < filledStars ? filledColor : unfilledColor}
        />
      );
    }
    return stars;
  };

  return <View style={{ flexDirection: 'row' }}>{renderStars()}</View>;
};

export default StarRating;
