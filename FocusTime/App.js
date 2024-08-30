import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform , SafeAreaView} from 'react-native';
import { colors } from './src/utils/colors'
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Hello World!</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // here, you can put CSS code
  container: {
    flex: 1,
    // the StatusBar refers to the top bar with the time, wifi logo, and battery icon
    paddingTop: Platform.OS === 'android' ? StatusBar.arguments.currentHeight : 10, // this is in PIXELS
    backgroundColor: colors.purple,
  },
  text: {
    color: colors.white,
    fontFamily: 'Times New Roman',
    fontWeight: 'bold'
  }
});
