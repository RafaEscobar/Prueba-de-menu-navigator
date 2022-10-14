import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
export const ProductivityScreen = () => {
    return (
        <View style={ styles.container }>
            <Text style={ styles.title1 }>Productividad</Text>
        </View>
      )
}

const styles = StyleSheet.create({
    container: {
     flex: 1,
     backgroundColor: 'green',
     justifyContent: 'center',
     alignItems: 'center',
    },
    title1: {
     fontSize: 25,
     color: 'white',
    }
 });