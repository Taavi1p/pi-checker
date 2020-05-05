import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';

import MenuButton from '../components/MenuButton'
//ADD BIG PICTURES OF SUBJECTS
const ChemistryScreen = props => {
    return (
        <View style={styles.screen}>
            <ScrollView style={{paddingTop: 50}}>
                <MenuButton style={styles.physics}>PERIODIC TABLE</MenuButton>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default ChemistryScreen;