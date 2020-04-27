import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Card extends Component {
    render() {
        return (
            <View style={styles.card}>
                <Text style={styles.heading}>
                    About
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        borderWidth: 1,
        padding: 35,
        marginBottom: 13
    },
    heading: {
        fontSize: 20,
        fontWeight: "700",
        fontFamily: "space-mono"
    }
})
