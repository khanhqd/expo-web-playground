import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Accounting from 'accounting-js';

const BalanceView = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.balance}>{Accounting.formatNumber(props.balance)}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
    },
    title: {
        fontSize: 16, 
        marginBottom: 8,
        color: 'white',
    },
    balance: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
    }
})

export default BalanceView;
