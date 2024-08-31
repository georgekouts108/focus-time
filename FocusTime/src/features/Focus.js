import React, {useState} from "react"
import {StyleSheet, Text, View} from 'react-native'
import { colors } from "../utils/colors"
import { TextInput } from "react-native-paper"
import { RoundedButton } from "../components/RoundedButton"

export const Focus = (props) => {
    const [subject, setSubject] = React.useState('')
    
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput}
                label="What would you like to focus on?"
                value={subject}
                onChangeText={subject => setSubject(subject) }
                />
                <View style={styles.button}>
                <RoundedButton onPress={()=>props.addSubject(subject)} title='+' size={50} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    button: {
        justifyContent: 'center'
    },
    textInput:{
        flex:0.8,
        marginRight:10,
    },
    inputContainer: {
        flexDirection:'row',
        padding:25,
        justifyContent: 'top'
    }
})