import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const Card = props => {
    return (
        <View style={{...styles.card, ...props.style}}>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        elevation: 5,
        shadowOpacity: 0.2,
        shadowRadius: 6,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10
    }
});

export default Card;