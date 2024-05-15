import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, View ,Text} from 'react-native';
import { getAllMovies } from "../redux/store/slices/moviesSlice";
const Home = () => {

    const movies=useSelector((state)=>state.movies.movies)
    const dispatch= useDispatch()
    useEffect(() => {
        dispatch(getAllMovies());
        console.log(movies)
      }, []);
    
      



    return (
        <View>
            <Text> Hello in Home</Text>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Home;
