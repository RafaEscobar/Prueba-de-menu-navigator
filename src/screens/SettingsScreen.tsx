import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const SettingsScreen = () => {
  return (
    <View style={ styles.container }>
        <Text style={ styles.title1 }>Setting</Text>
    </View>
  )
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: 'yellow',
   },
   title1: {
    fontSize: 20,
    color: 'black',
   }
});