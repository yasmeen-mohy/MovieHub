import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import MovieItem from '../Components/MovieItem'; // Create this component if not already created

const Favourites = () => {
  const favourites = useSelector((state) => state.movies.favourites);

  return (
    <View style={styles.container}>
      {favourites.length > 0 ? (
        <FlatList
          data={favourites}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <MovieItem movie={item} />}
        />
      ) : (
        <Text style={styles.noFavouritesText}>No favourite movies added yet.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616',
    padding: 10,
  },
  noFavouritesText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default Favourites;
