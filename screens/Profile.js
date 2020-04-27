import React, { Component } from "react";
import {
    Text,
    StyleSheet,
    View,
    ImageBackground,
    ScrollView,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import Cover from "../assets/images/cover.jpg";
import Colors from "../constants/Colors";

import Card from "./Card";

export default class Profile extends Component {
    state = {
        cardArray: [],
    };

    render() {
        var cardArray = [];
        for (var i = 0; i < 15; i++) {
            cardArray = [...cardArray, i];
        }

        var card100 = cardArray.map((i) => <Card key={i} />);

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
                                <Text style={styles.name}>Edwina</Text>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        alignItems: "center",
                                    }}
                                >
                                    <Feather
                                        name="map-pin"
                                        size={20}
                                        color="#fff"
                                    />
                                    <Text style={styles.location}>
                                        Banglore, India
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.info}>
                    <ScrollView
                        style={{
                            paddingHorizontal: 8,
                        }}
                        // persistentScrollbar={true}
                        scrollBarThumbImage={{uri: "../assets/images/scroll.png"}}
                    >
                        {card100}
                    </ScrollView>
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
        paddingTop: 50,
        paddingBottom: 30,
        height: "100%",
        justifyContent: "space-between",
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
        fontSize: 25,
        marginBottom: 5,
    },
    location: {
        color: "#fff",
        fontSize: 14,
        marginLeft: 8,
    },
    info: {
        height: "60%",
        paddingHorizontal: 8,
        paddingTop: 15,
    },
});
