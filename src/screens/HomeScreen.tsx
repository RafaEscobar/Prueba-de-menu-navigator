import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ActionButton from '../../ActionButton';
import ActionSheet from '@expo/react-native-action-sheet/lib/typescript/ActionSheet';

export const HomeScreen = () => {
  return (
    <View style={ styles.container }>
        <Text style={ styles.title1 }>Proyectos</Text>
        <ActionButton />
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
