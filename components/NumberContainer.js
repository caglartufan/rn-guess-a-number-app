import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/colors.js';

const NumberContainer = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.number}>{props.children}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: Colors.primary,
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    number: {
        color: Colors.secondary,
        fontSize: 22,
        fontWeight: 'bold'
    }
});

export default NumberContainer;