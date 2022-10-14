import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const TareasScreen = () => {
    return (
        <View style={ styles.container }>
            <Text style={ styles.title1 }>Tareas</Text>
        </View>
      )
}

const styles = StyleSheet.create({
    container: {
     flex: 1,
     backgroundColor: 'gray',
     justifyContent: 'center',
     alignItems: 'center',
    },
    title1: {
     fontSize: 25,
     color: 'white',
    }
 });