import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { AddButton, Balance, ListItem, SelectBox } from '../components';
import { useNavFunc } from '../navigation/useNavFunc';
import { useDataContext } from '../stores/ContextData';
import COLORS from '../utils/colors';

const HomeScreen = () => {
    const { data } = useDataContext();
    const { navigate } = useNavFunc();
    const [isSpend, setIsSpend] = useState(true);

    const onPressAdd = () => {
        navigate('AddScreen', {
            type: isSpend ? 'spend' :'income',
        })
    }

    const onChangeType = () => {
        setIsSpend(!isSpend)
    }

    let total = 0;
    for (let item of data) {
        total = total + Number(item.amount)
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.selectContainer}>
                    <SelectBox onPress={onChangeType} title={!isSpend ? "Earn" : "Spend"} />
                    <SelectBox title="Month" />
                </View>
                <Balance title="Total" balance={total} />
            </View>
            <View style={styles.listContainer}>
                <Text style={styles.listTitle}>History</Text>
                {data.map((item, i) => (
                    <ListItem key={i} {...item} />
                ))}
            </View>
            <AddButton onPress={onPressAdd} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.MAIN,
    },
    header: {
        padding: 24,
    },
    selectContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    listContainer: {
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        flex: 1,
        padding: 24,
        paddingBottom: 0,
    },
    listTitle: {
        fontWeight: '600',
        fontSize: 18,
    }
})

HomeScreen.routeInfo = {
    title: 'My Finance - Home',
    path: '/',
};

export default HomeScreen;
