import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform , SafeAreaView} from 'react-native';
import { colors } from './src/utils/colors'
import { Focus } from './src/features/Focus';


export default function App() {
  const [currentSubject, setCurrentSubject] = useState('')
  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? 
        <Focus addSubject={setCurrentSubject}/> : 
        <View><Text>I'm gonna render the timer for {currentSubject}</Text></View>
      }
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
  }
});
