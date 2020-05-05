import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';

import MenuButton from '../components/MenuButton'

const StartScreen = props => {

    const toChemistry = () => {
        props.navigation.navigate('Chemistry')
    }
    const toMath = () => {
        props.navigation.navigate('Math')
    }

    return (
        <View style={styles.screen}>
            <ScrollView>
                <MenuButton on style={styles.physics}>PHYSICS</MenuButton>
                <MenuButton onClick={toMath} style={styles.math}>MATH</MenuButton>
                <MenuButton onClick={toChemistry} style={styles.chemistry}>CHEMISTRY</MenuButton>
                <MenuButton style={styles.biology}>BIOLOGY</MenuButton>
                <MenuButton style={styles.geography}>GEOGRAPHY</MenuButton>
                <MenuButton style={styles.history}>HISTORY</MenuButton>
                <MenuButton style={styles.artHisyory}>ART HISTORY</MenuButton>
                <MenuButton style={styles.english}>ENGLISH</MenuButton>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        width: "100%",
        backgroundColor: '#39ff14',
    }, 
    physics: {
        backgroundColor: '#39ff14',
        borderColor: 'green'
    },
    math: {
        backgroundColor: '#1439ff',
        borderColor: 'blue'
    },
    chemistry: {
        backgroundColor: '#a700a7',
        borderColor: 'purple'
    },
    biology: {
        backgroundColor: '#ff0aff',
        borderColor: '#bd00bd'
    },
    geography: {
        backgroundColor: '#ff0000',
        borderColor: '#cc0000'
    },
    history: {
        backgroundColor: '#FFA500',
        borderColor: '#ff8106'
    },
    artHisyory: {
        backgroundColor: '#ffff00',
        borderColor: '#ebeb00'
    },
    english: {
        backgroundColor: '#59b300',
        borderColor: 'green'
    }
})

export default StartScreen;