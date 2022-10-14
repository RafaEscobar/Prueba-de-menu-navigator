import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

export const AppinfoPage = () => {
  return (
    <View style={ styles.container }>
        <Text style={ styles.text }>Versión: 000</Text>
        <Text style={ styles.text }>Creadores: RONA Projects</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        color: 'gray'
    }
});