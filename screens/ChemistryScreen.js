import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';

import MenuButton from '../components/MenuButton'
//ADD BIG PICTURES OF SUBJECTS
const ChemistryScreen = props => {
    return (
        <View style={styles.screen}>
            <ScrollView style={{paddingTop: 50}}>
                <MenuButton style={styles.periodic}>PERIODIC TABLE</MenuButton>
                <MenuButton style={styles.element}>NAME THE ELEMENT</MenuButton>
                <MenuButton style={styles.chemist}>NAME THE CHEMIST</MenuButton>
                <MenuButton style={styles.molecul}>NAME THE MOLECUL</MenuButton>
                <MenuButton style={styles.symbol}>NAME THE SYMBOL</MenuButton>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#9933ff',
    },
    periodic: {
        backgroundColor: '#a64dff',
    },
    element: {
        backgroundColor: '#8c1aff',
    },
    chemist: {
        backgroundColor: '#7300e6',
    },
    molecul: {
        backgroundColor: '#5900b3',
    },
    symbol: {
        backgroundColor: '#400080',
    }
})

export default ChemistryScreen;