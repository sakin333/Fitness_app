import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import Navigation from '../Navigation/Navigation';

const Home = () => {
    return (
        <View style={styles.root}>
            <Navigation />
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#f9fbfc'
    }
})

export default Home;