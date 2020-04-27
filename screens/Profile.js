import React, { Component } from "react";
import { Text, StyleSheet, View, ImageBackground } from "react-native";
import { Feather } from "@expo/vector-icons";

import Cover from "../assets/images/cover.jpg";
import Colors from "../constants/Colors";

export default class Profile extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.imagebg}>
                    <ImageBackground
                        source={Cover}
                        style={{
                            width: "100%",
                            height: "100%",
                        }}
                    >
                        <View style={styles.bgIn}>
                            <View
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    alignSelf: "flex-start",
                                }}
                            >
                                <Feather name="menu" size={30} color="#fff" />
                                <Text style={styles.proHead}>Profile</Text>
                            </View>
                            <View style={styles.details}> 
                                <Text style={styles.name}>
                                    Edwina
                                </Text>
                                <Text style={styles.location}>
                                    <Feather 
                                        name="map-pin"
                                        size={20}
                                        
                                    />
                                        Banglore, India
                                </Text>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.info}>
                    <Text></Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.defaultBack,
    },
    imagebg: {
        height: "40%",
    },
    bgIn: {
        paddingHorizontal: 20,
        paddingVertical: 50,
        height: "100%",
        justifyContent: "space-between"
    },
    proHead: {
        marginLeft: 20,
        fontSize: 25,
        color: "#fff",
    },
    details: {
        alignSelf: "flex-end",
        width: "100%",
    },
    name: {
        color: "#fff",
        fontSize: 25
    },
    location: {
        color: "#fff",
        fontSize: 18,
    },
    info: {
        height: "60%",
    },
});
