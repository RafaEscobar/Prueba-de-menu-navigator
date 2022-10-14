import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const SettingsScreen = () => {
  return (
    <View style={ styles.container }>
        <Text style={ styles.title1 }>Hábitos</Text>
    </View>
  )
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
   },
   title1: {
    fontSize: 25,
    color: 'black',
   }
});