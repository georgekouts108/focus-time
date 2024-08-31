import React, {useState} from "react"
import {StyleSheet, Text, View} from 'react-native'
import { colors } from "../utils/colors"
import { RoundedButton } from "../components/RoundedButton"
import { spacing, fontSizes } from "../utils/sizes"
import { Countdown } from "../components/Countdown"
import { ProgressBar } from 'react-native-paper'

export const Timer = (props) => {
    const [isStarted, setIsStarted] = useState(false)
    const [minutes, setMinutes] = useState(0)
    const [progress, setProgress] = useState(1)
    return (
        <View style={styles.container}>
            <View style={styles.countdown}>
                <Countdown minutes={minutes} isPaused={!isStarted} onEnd={()=>{}} onProgress={setProgress}/>
            </View>
            <View>
                <Text style={styles.textDefault}>Focusing on:</Text>
                <Text style={styles.textSubject}>{props.focusSubject}</Text>
            </View>
            <View style={styles.progressBarContainer}>
                <ProgressBar progress={progress} style={{height:spacing.small}}/>
            </View>
            
            <View style={styles.buttonWrapper}>

                <View style={styles.numberButtonContainer}>
                    <RoundedButton textStyle={{fontSize: fontSizes.medium}} style={styles.numberButton} onPress={()=>{setMinutes(10)}} title='10' size={65} />
                    <RoundedButton textStyle={{fontSize: fontSizes.medium}} style={styles.numberButton} onPress={()=>{setMinutes(15)}} title='15' size={65} />
                    <RoundedButton textStyle={{fontSize: fontSizes.medium}} style={styles.numberButton} onPress={()=>{setMinutes(20)}} title='20' size={65} />
                </View>
                
                <View style={styles.startButtonContainer}>
                    {!isStarted && <RoundedButton textStyle={{fontSize: fontSizes.medium}} 
                    style={styles.startButton} onPress={()=>{setIsStarted(true)}} title='start' size={140} /> }
                    {isStarted && <RoundedButton textStyle={{fontSize: fontSizes.medium}} 
                    style={styles.startButton} onPress={()=>{setIsStarted(false)}} title='pause' size={140} /> }
                </View>

                <View style={styles.minusButtonContainer} >
                    <RoundedButton onPress={()=>{}} title='-' size={50} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    countdown: {
        alignItems: 'center',
        flex:0.4,
        justifyContent:'center'
    },
    progressBarContainer: {
        flex:0.05,
    },
    buttonWrapper: {
        flex:0.3,
        padding:5
    },
    numberButtonContainer:{
        flexDirection:'row',
        justifyContent:'center',
        margin: spacing.xlarge,
    },
    numberButton: {
        margin: spacing.xlarge,
    },
    startButton: {
 
    },
    minusButtonContainer: {
        padding: spacing.large
    },
    startButtonContainer: {
        flexDirection:'row',
        justifyContent:'center'
    },
    textDefault: {
        color:colors.white,
        textAlign: 'center'
    },
    textSubject: {
        color: colors.white,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})