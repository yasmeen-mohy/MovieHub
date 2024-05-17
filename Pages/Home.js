import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { getAllMovies } from "../redux/store/slices/moviesSlice";
import AppBar from "../Components/MyAppBar";

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const { movies, status, error } = useSelector((state) => state.movies);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [activeButton, setActiveButton] = useState("All Movies");
  const [mostViewedMovies, setmostViewedMovies] = useState([]);

  useEffect(() => {
    dispatch(getAllMovies());
  }, [dispatch]);

  useEffect(() => {
    if (movies.length > 0) {
      setFilteredMovies(movies.filter((m) => m.vote_average > 7.5));
      setmostViewedMovies(movies.filter((m)=>m.popularity>900))
    }
  }, [movies]);

  if (status === "loading") {
    return <Text>Loading...</Text>;
  }

  if (status === "failed") {
    return <Text>Error: {error}</Text>;
  }
  const handlePress = (m) => {
    navigation.navigate('MovieDetails', { m });
  };
  const handleButtonPress = (button) => {
    setActiveButton(button);
    // Handle button press logic here
  };
  const renderMovies = () => {
    if (activeButton === "All Movies") {
      return (
        <ScrollView  showsVerticalScrollIndicator={false}>
          <View style={styles.moviesContainer}>
          {movies.map((movie) => (
           <TouchableOpacity  
             onPress={() => handlePress(movie)} // Corrected onPress handler
             key={movie.id}
           >
             <View key={movie.id} style={styles.movieCont}>
               <Image
                 source={{
                   uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                 }}
                 style={styles.movieImage2}
               />
             </View>
           </TouchableOpacity>
          ))}
          </View>
        </ScrollView>
      );
    } else if (activeButton === "Most Viewed") {
      return (
        <ScrollView  showsVericalScrollIndicator={false}>
         <View style={styles.moviesContainer}>
          {mostViewedMovies.map((movie) => (
           <TouchableOpacity  
             onPress={() => handlePress(movie)} // Corrected onPress handler
             key={movie.id}
           >
             <View key={movie.id} style={styles.movieCont}>
               <Image
                 source={{
                   uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                 }}
                 style={styles.movieImage2}
               />
             </View>
           </TouchableOpacity>
          ))}
          </View>
        </ScrollView>
      );
    }
  };
 
  return (
    <View style={{ backgroundColor: "#161616", flex: 1 }}>
      <AppBar title="MovieHub" navigation={navigation} />
      <View style={styles.container}>
        <Text style={styles.heading}>TOP MOVIES</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {filteredMovies.map((movie) => (
            <View key={movie.id} style={styles.movieContainer}>
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                }}
                style={styles.movieImage}
              />
            </View>
          ))}
        </ScrollView>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => handleButtonPress("All Movies")}
            style={[
              styles.button,
              activeButton === "All Movies" && styles.activeButton,
            ]}
          >
            <Text style={styles.buttonText}>All Movies</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleButtonPress("Most Viewed")}
            style={[
              styles.button,
              activeButton === "Most Viewed" && styles.activeButton,
            ]}
          >
            <Text style={styles.buttonText}>Most Viewed</Text>
          </TouchableOpacity>
        </View>
        {renderMovies()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  heading: {
    margin: 2,
    color: "#930202",
    fontSize: 20,
    fontWeight: "bold",
  },
  movieContainer: {
    marginLeft: 20,
    marginTop: 10,
    borderWidth: 0.5,
    borderRadius: 15,
    borderColor: "grey",
    width: 200,
    height: 280, // Increased height to accommodate image and title
    justifyContent: "center",
    alignItems: "center",
  },
  movieImage: {
    width: 200,
    height: 280,
    borderRadius: 5,
    resizeMode:"cover"
  },
  movieImage2: {
    width: 150,
    height: 200,
    borderRadius: 5,
    resizeMode:"contain"
  },
  row: {
    marginTop: 20,
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#930202",
    padding: 10,
    borderRadius: 5,
    marginLeft: 4,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  activeButton: {
    opacity: 0.5,
  },
  movieCont:{
    width:"45%",
    marginTop: 10,
    paddingHorizontal: 4,
  },
  moviesContainer: {
    marginTop:4,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
});

export default Home;
