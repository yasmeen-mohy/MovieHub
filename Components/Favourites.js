import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import MovieItem from '../Components/MovieItem';
import AppBar from "../Components/MyAppBar";

const Favourites = ({navigation}) => {
  const favourites = useSelector((state) => state.movies.favourites);

  return (
    <View style={styles.container}>
      <AppBar title="favourites" navigation={navigation} />

      {favourites.length > 0 ? (
        <FlatList
          data={favourites}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => (
            <View style={index % 2 === 0 ? styles.row : {}}>
              <MovieItem movie={item} />
            </View>
          )}
          numColumns={2}
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});

export default Favourites;
