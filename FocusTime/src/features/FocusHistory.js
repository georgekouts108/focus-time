import React, {useState} from "react"
import {StyleSheet, Text, View, FlatList} from 'react-native'
import { colors } from "../utils/colors"
import { spacing, fontSizes } from "../utils/sizes"

export const FocusHistory = (props) => {
    const renderItem = ({item}) => <Text style={styles.item}>- {item}</Text>
    return (
        <View>
        {props.history.length>0 && 
            <View style={styles.listContainer}>
                <Text style={styles.focusesTitle}>Things we've focused on:</Text>
                <FlatList
                    data={props.history}
                    renderItem={renderItem}
                >

                </FlatList>
            </View>
        }
        {props.history.length===0 && <Text style={styles.noFocusesTitle}>We haven't focused on anything yet</Text>}
        </View>
    )
}
const styles = StyleSheet.create({
    listContainer:{
        padding:spacing.medium,
        flex:1
    },
    title:{
        fontWeight: 'bold',
        fontSize: fontSizes.medium,
        color: colors.white,
        textAlign:'center',
    },
    item: {
        fontSize: fontSizes.medium,
        color: colors.white,
        textAlign:'center',
        paddingTop: spacing.small
    },
    noFocusesTitle: {
        color: colors.red,
        fontWeight: 'bold',
        fontSize: fontSizes.medium,
        textAlign:'center'
    },
    focusesTitle: {
        color: colors.green,
        fontWeight: 'bold',
        fontSize: fontSizes.medium,
        textAlign:'center'
    }
})