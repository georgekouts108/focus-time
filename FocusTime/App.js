import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform , SafeAreaView} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello World!</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // here, you can put CSS code
  container: {
    flex: 1,
    // the StatusBar refers to the top bar with the time, wifi logo, and battery icon
    paddingTop: Platform.OS === 'android' ? StatusBar.arguments.currentHeight : 10, // this is in PIXELS
    backgroundColor: "#8803fc",
  },
});
