import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';
import COLORS from '../utils/colors';

const Button = (props) => {
    return (
        <Pressable onPress={props.onPress} style={styles.container}>
            <Text style={styles.title}>CREATE</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.MAIN,
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: COLORS.WHITE,
        fontSize: 18,
        fontWeight: '600',
    }
})

export default Button;
