import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView ,TouchableOpacity} from 'react-native';
import AppBar from "../Components/MyAppBar";
import Icon from 'react-native-vector-icons/FontAwesome';
import StarRating from '../Components/StarRating';
import { useDispatch, useSelector } from 'react-redux';
import { addToFav ,removeFromFav} from '../redux/store/slices/moviesSlice';

const MovieDetails = ({ route ,navigation}) => {
    const { m } = route.params;
    const dispatch = useDispatch();
    const favourites = useSelector((state) => state.movies.favourites);
  const [movie, setMovie] = useState(null);
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = () => {
    if (isFavorited) {
      dispatch(removeFromFav(movie.id));
    } else {
      dispatch(addToFav(movie));
    }
    setIsFavorited(!isFavorited);
  };
   useEffect(() => {
    setMovie(m);
    const isFav = favourites.some((favMovie) => favMovie.id === m.id);
    setIsFavorited(isFav);
  }, [m, favourites]);

  if (!movie) return <View><Text>Loading...</Text></View>;
  return (
    <View style={{ backgroundColor: "#161616", flex: 1 }}>
        <AppBar title={movie.title} navigation={navigation} />
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
        style={styles.poster}
      />
      <View style={styles.detailsContainer}>
      <View style={styles.titleContainer}>
  {/* <Text style={styles.title}>{movie.title}</Text> */}
  <View style={styles.iconContainer}>
  <TouchableOpacity onPress={toggleFavorite}>
              <Icon
                name={isFavorited ? 'heart' : 'heart-o'}
                size={24}
                color="red"
                style={styles.icon}
              />
            </TouchableOpacity>
            <StarRating style={{marginLeft:4}}rating={movie.vote_average} />
  </View>
</View>
        {/* <Text style={styles.subtitle}> {movie.release_date}</Text> */}
        <Text style={styles.overview}>{movie.overview}</Text>
      </View>
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161616",  },
  poster: {
    width: '100%',
    height: 480,
    resizeMode: 'cover',
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight:"900",
    marginBottom: 10,
    color:"#930202"
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 10,
    color:"white"

  },
  overview: {
    fontSize: 16,
    color:"white"

  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '900',
    color: '#930202',
  },
  iconContainer: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  icon: {
    marginRight: 5,
  },
});

export default MovieDetails;
