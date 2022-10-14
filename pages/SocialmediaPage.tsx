import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

export const SocialmediaPage = () => {
  return (
    <View>
        <Text>GitHub</Text>
        <Text>Facebook</Text>
        <Text>Instagram</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    text: {
        fontSize: 25,
        color: 'black',
    }
});
