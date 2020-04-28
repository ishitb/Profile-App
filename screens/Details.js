import React, { Component } from "react";
import { Text, StyleSheet, View, SegmentedControlIOSComponent } from "react-native";
import { Feather } from "@expo/vector-icons"

import Colors from "../constants/Colors"

export default class Details extends Component {

    constructor(props){
        super(props)
    }
    
    state = {
        color1: this.props.mode == "default" ? "#fff": Colors.tabIconSelected,
        color2: this.props.mode == "default" ? "#fff" : "#666"
    }

    
    render() {
        return (
            <View>
                <Text style={{ ...styles.name, color: this.state.color1 }}>Edwina</Text>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                    }}
                >
                    <Feather name="map-pin" size={20} color={this.state.color2} />
                    <Text style={{ ...styles.location, color: this.state.color2 }}>Banglore, India</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    name: {
        fontSize: 25,
        marginBottom: 5,
    },
    location: {
        fontSize: 14,
        marginLeft: 8,
    },
});
