import React from 'react';
import { StyleSheet, View, Text, Image, Pressable } from 'react-native';
import COLORS from '../utils/colors';

const SelectBox = (props) => {
    return (
        <Pressable onPress={props.onPress} style={styles.container}>
            <Text style={styles.text}>{props.title}</Text>
            <Image style={styles.downArrow} source={require('../assets/ic-drop-down.png')} />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 8,
        backgroundColor: 'rgba(255,255,255,0.25)',
        paddingHorizontal: 16,
        paddingVertical: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        color: COLORS.WHITE,
        fontSize: 16,
    },
    downArrow: {
        width: 12,
        height: 12,
        resizeMode: 'contain',
        marginLeft: 12,
    }
})

export default SelectBox;
