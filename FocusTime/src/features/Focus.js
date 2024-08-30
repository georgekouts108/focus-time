import React, {useState} from "react"
import {StyleSheet, Text, View} from 'react-native'
import { colors } from "../utils/colors"
import { TextInput } from "react-native-paper"

export const Focus = () => {
    const [subject, setSubject] = React.useState('')
    
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput style={styles.inputContainer}
                label="What would you like to focus on?"
                value={subject}
                onChangeText={subject => {setSubject() ;console.log(subject)}}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    inputContainer: {
        flex: 0.25,
        padding:25,
        justifyContent: 'top'
    }
})