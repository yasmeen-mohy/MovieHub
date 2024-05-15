import React from 'react';
import { ScrollView, StyleSheet, View ,Text} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Category = () => {
    return (
      
                <View style={styles.MovieCard}>
                    <Text>Drama</Text>
                </View>
    );
}

const styles = StyleSheet.create({

    MovieCard:{
        width:"30%",
        height:"20%",
        backgroundColor:"pink"

    }
})

export default Category;
