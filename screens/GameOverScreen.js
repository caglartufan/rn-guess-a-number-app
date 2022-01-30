import React from 'react';
import { Text, View, StyleSheet, Button, Image, Dimensions } from 'react-native';

import Colors from '../constants/colors';
import MainButton from '../components/MainButton';

const { width, height } = Dimensions.get('window');

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>Game is Over!</Text>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../assets/success.png')}
                    //source={{ uri: 'https://s3.amazonaws.com/www.explorersweb.com/wp-content/uploads/2021/05/23233000/Summit-Everest-MingmaG.jpg',  }}
                    style={styles.image} />
            </View>
            <Text style={styles.resultText}>
                Your phone needed <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{props.userNumber}</Text>.
            </Text>
            <MainButton onPress={props.onRestart} >NEW GAME</MainButton>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 2,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: height / 40
    },
    image: {
        width: '100%',
        height: '100%'
    },
    resultText: {
        textAlign: 'center',
        marginBottom: height / 60,
        fontSize: height > 400 ? 20 : 16,
        fontFamily: 'open-sans'
    },
    highlight: {
        color: Colors.primary,
        fontFamily: 'open-sans-bold'
    }
});

export default GameOverScreen;