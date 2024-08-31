import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform , SafeAreaView} from 'react-native';
import { colors } from './src/utils/colors'
import { Focus } from './src/features/Focus';
import { Timer } from './src/features/Timer';
import { FocusHistory } from './src/features/FocusHistory';

export default function App() {
  const [currentSubject, setCurrentSubject] = useState('')
  const [history, setHistory] = useState([])

  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? 
        <View>
          <Focus addSubject={setCurrentSubject}/>
          <FocusHistory history={history}/>
        </View>
        : 
        <Timer 
          focusSubject={currentSubject}
          onTimerEnd={(subject)=>{
            setHistory([...history, subject])
          }}
          clearSubject={()=>setCurrentSubject(null)}
        />
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
