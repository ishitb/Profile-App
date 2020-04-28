import React, { Component } from "react";
import {
    Text,
    StyleSheet,
    View,
    ImageBackground,
    ScrollView,
    TextInput,
    TouchableOpacity,
    DrawerLayoutAndroid,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import Cover from "../assets/images/cover.jpg";
import Colors from "../constants/Colors";

import Card from "./Card";
import Details from "./Details";

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.drawerRef = React.createRef();
    }

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
                            {/* <Header /> */}
                            <View style={styles.details}>
                                <Details mode="default" />
                            </View>
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.info}>
                    <ScrollView
                        style={{
                            paddingHorizontal: 8,
                        }}
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
        height: "43%",
    },
    bgIn: {
        paddingHorizontal: 20,
        paddingTop: 50,
        paddingBottom: 30,
        height: "100%",
        justifyContent: "space-between",
        flexDirection: "row"
    },
    details: {
        alignSelf: "flex-end",
        width: "100%",
    },

    info: {
        height: "57%",
        paddingHorizontal: 8,
        paddingTop: 20,
    },
});
