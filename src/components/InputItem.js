import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import COLORS from '../utils/colors';

const InputItem = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            <TextInput style={styles.textInput} value={props.value} onChangeText={props.onChangeText} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        color: COLORS.MAIN_TEXT,
        marginBottom: 10,
    },
    textInput: {
        height: 50,
        backgroundColor: 'rgb(240,246,253)',
        borderRadius: 10,
        paddingHorizontal: 10,
    }
})

export default InputItem;
