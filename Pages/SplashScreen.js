import React, {useEffect} from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
const SplashScreen = ({navigation}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Main');
    }, 5000);

    return () => clearTimeout(timer);
  }, []); 
    return (
        <View style={styles.container}>
            <Image style={{ width:"100%",height:"100%", margin:"10%"}} source={require('../assets/splash2.gif')} >

            </Image>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    
  });

export default SplashScreen;
