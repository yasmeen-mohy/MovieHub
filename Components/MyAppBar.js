import * as React from 'react';
import { View, Text } from 'react-native';
import { Appbar, Colors } from 'react-native-paper'; // Importing Colors from react-native-paper
// Removed import { white } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

const MyAppBar = ({ title, navigation, back }) => {
  if (title === "MovieHub") // Used strict equality operator (===) for comparison
    return (
      <Appbar.Header style={{ backgroundColor: '#161616' }}>
        {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={{ fontWeight: "bold", fontSize: 25 }}>
            <Text style={{ color: "white" }}>Movie</Text> {/* Used Colors.white */}
            <Text style={{ color: 'red' }}>Hub</Text>
          </Text>
        </View>
      </Appbar.Header>
    );
  else
    return (
      <Appbar.Header style={{ backgroundColor: '#161616' }}>
        {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={{ fontWeight: "900", fontSize: 20 }}>
            <Text style={{ color: "white" }}>{title}</Text> {/* Used Colors.white */}
          </Text>
        </View>
      </Appbar.Header>
    );
};

export default MyAppBar;
