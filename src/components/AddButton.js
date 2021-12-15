import React from 'react';
import { Image, Pressable, StyleSheet } from 'react-native';
import COLORS from '../utils/colors';

const AddButton = (props) => {
    return (
        <Pressable onPress={props.onPress} style={styles.container}>
            <Image style={styles.addButton} source={require('../assets/ic-plus.png')} />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 24,
        right: 24,
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: COLORS.MAIN,
        shadowColor: 'grey',
        shadowOpacity: 0.7,
        shadowRadius: 10,
        shadowOffset: {
            width: 2,
            height: 2,
        },
        alignItems: 'center',
        justifyContent: 'center',
    },
    addButton: {
        width: 20,
        height: 20,
    }
})

export default AddButton;
