import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button, InputItem } from '../components';
import { useNavFunc } from '../navigation/useNavFunc';
import { useDataContext } from '../stores/ContextData';
import moment from 'moment';
import COLORS from '../utils/colors';

const AddScreen = () => {
    const { setData, data } = useDataContext();
    const { route, navigation } = useNavFunc()
    const [content, setContent] = useState('');
    const [amount, setAmount] = useState('');
    const [createTime, setCreateTime] = useState(moment().format('DD/MM/YYYY'));

    const onSubmit = () => {
        navigation.goBack();
        let arr = [...data];
        arr.push({ content, amount, createTime })
        setData(arr)
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>{route.params.type === 'income' ? 'Incomes' : 'Spend'}</Text>
            </View>
            <View style={styles.listContainer}>
                <View style={styles.inputsContainer}>
                    <InputItem title="Nội dung" value={content} onChangeText={setContent} />
                    <InputItem title="Số tiền" value={amount} onChangeText={setAmount} />
                    <InputItem title="Thời gian" value={createTime} onChangeText={setCreateTime} />
                </View>
                <Button onPress={onSubmit} />
            </View>
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
    headerTitle: {
        fontSize: 24,
        color: COLORS.WHITE,
        fontWeight: 'bold',
    },
    listContainer: {
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        flex: 1,
        padding: 24,
    },
    listTitle: {
        fontWeight: '600',
        fontSize: 18,
    },
    inputsContainer: {
        flex: 1,
    }
})

AddScreen.routeInfo = {
    title: 'My Finance - Add',
    path: '/add',
};

export default AddScreen;
