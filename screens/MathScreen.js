import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';

import MenuButton from '../components/MenuButton'
//ADD BIG PICTURES OF SUBJECTS
const MathScreen = props => {
    return (
        <View style={styles.screen}>
            <ScrollView style={{paddingTop: 20}}>
                <MenuButton style={styles.pi}>PI CHECKER</MenuButton>
                <MenuButton style={styles.i}>I CHECKER</MenuButton>
                <MenuButton style={styles.e}>E CHECKER</MenuButton>
                <MenuButton style={styles.shape}>GUESS THE SHAPE</MenuButton>                
                <MenuButton style={styles.equation}>NAME THE EQUATION</MenuButton>                
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#1439ff',
    },
    pi: {
        backgroundColor: '#4d79ff'
    },
    i: {
        backgroundColor: '#1a53ff'
    },
    e: {
        backgroundColor: '#0039e6'
    },
    shape: {
        backgroundColor: '#002db3'
    },
    equation: {
        backgroundColor: '#002080'
    }
})

export default MathScreen;