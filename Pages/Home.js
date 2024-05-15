import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, View ,Text, ScrollView} from 'react-native';
import { getAllMovies } from "../redux/store/slices/moviesSlice";
import Category from '../Components/category';
const Home = () => {
    const dispatch = useDispatch();
    const { movies, status, error } = useSelector((state) => state.movies);

    useEffect(() => {
        dispatch(getAllMovies());
    }, [dispatch]);

    if (status === "loading") {
        return <Text>Loading...</Text>;
    }

    if (status === "failed") {
        return <Text>Error: {error}</Text>;
    }

    return (
        <View style={{margin:80}}>
            <Text>Category</Text>
            {/* {movies.map((movie) => (
                <Text key={movie.id}>{movie.title}</Text>
            ))} */}

<Text>Category</Text>
            <ScrollView style={{height:"50%"}} horizontal showsHorizontalScrollIndicator={false}>
                {movies.map((movie) => (
                    <Category key={movie.id} />
                ))}
            </ScrollView>
        </View>
    );
}

export default Home;