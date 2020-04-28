import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

import TabBarIcon from "../components/TabBarIcon"

import Colors from "../constants/Colors"

export default class DrawerItem extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        name: this.props.name,
        icon: this.props.icon,
        borderWdith: this.props.border ? 0.3 : 0
    }

    render() {
        return (
            <View style={{ ...styles.item, borderBottomWidth: this.state.borderWdith, borderBottomColor: Colors.tabIconDefault }}>
                <TabBarIcon focused={false} name={this.state.icon} />
                <Text style={styles.name}>
                    {
                        this.state.name
                    }
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    item: {
        flexDirection: "row",
        paddingVertical: 25,
        alignItems: "center"
    },
    name: {
        fontSize: 20,
        marginLeft: 10,
        color: Colors.tabIconSelected
    }
})