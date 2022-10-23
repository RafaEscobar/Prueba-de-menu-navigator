import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const AboutScreen = () => {
  return (
    <View style={ styles.container }>
        <Text style={ styles.title1 }>Acerca</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'aqua',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title1: {
        fontSize: 25,
        color: 'black',
    }
});
