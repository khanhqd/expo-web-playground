import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import COLORS from '../utils/colors';
import Accounting from 'accounting-js';

const ListItem = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.leftBox}>
                <Text style={styles.title}>{props.content}</Text>
                <Text style={styles.subTitle}>{props.createTime}</Text>
            </View>
            <Text style={styles.title}>{Accounting.formatNumber(props.amount)}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 14,
    },
    leftBox: {
        flex: 1,
    },
    title: {
        fontWeight: '600',
        marginBottom: 4,
        fontSize: 16,
        color: COLORS.MAIN_TEXT,
    },
    subTitle: {
        color: COLORS.SUB_TEXT,
        fontWeight: 13,
    }
})

export default ListItem;
