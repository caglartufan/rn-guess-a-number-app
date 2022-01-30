import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

import Colors from '../constants/colors';

const Header = props => {
    return (
        <View style={{...styles.headerMain, ...Platform.select({
            ios: styles.headerIOS,
            android: styles.headerAndroid
        })}}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headerMain: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerIOS: {
        backgroundColor: 'white',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    },
    headerAndroid: {
        backgroundColor: Colors.primary
    },
    title: {
        color: Platform.OS === 'android' ? 'black' : Colors.primary,
        fontSize: 18,
        fontFamily: 'open-sans-bold'
    }
});

export default Header;