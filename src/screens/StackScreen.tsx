import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const StackScreen = () => {
  return (
    <View>
        <Text>Stack</Text>
    </View>
  )
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: 'black',
   },
   title1: {
    fontSize: 20,
    color: 'white',
   },
});