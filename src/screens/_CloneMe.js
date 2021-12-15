import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavFunc } from '../navigation/useNavFunc';

const CloneMe = () => {
    return (
        <View style={styles.container}>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'grey',
    }
})

CloneMe.routeInfo = {
    title: 'Clone Me',
    path: '/clone-me',
};

export default CloneMe;
