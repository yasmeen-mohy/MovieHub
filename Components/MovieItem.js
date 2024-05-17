import React from 'react';
import { StyleSheet, View,Image } from 'react-native';

const MovieItem = ({movie}) => {
    return (
        <View key={movie.id} style={styles.movieCont}>
               <Image
                 source={{
                   uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                 }}
                 style={styles.movieImage2}
               />
             </View>
    );
}

const styles = StyleSheet.create({
    movieCont:{
        width: "45%",
        marginTop: 10,
        paddingHorizontal: 4,
      },
      movieImage2: {
        width: 150,
        height: 200,
        borderRadius: 5,
        resizeMode:"contain"
      },
})

export default MovieItem;
