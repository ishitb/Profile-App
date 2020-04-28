import React, { Component } from "react";
import { Text, StyleSheet, View, DrawerLayoutAndroid, Image } from "react-native";
import cover from "../assets/images/cover.jpg"

import Details from "./Details"
import DrawerItem from "./DrawerItem"

export default function Drawer() {

    var di = [
        {
            icon: "mail",
            name: "Inbox"
        },
        {
            icon: "user",
            name: "Edit Profile"
        },
        {
            icon: "users",
            name: "Refer a Friend"
        },
        {
            icon: "folder-plus",
            name: "Manage Subscription"
        },
        {
            icon: "clock",
            name: "Pause Activity"
        },
        {
            icon: "log-out",
            name: "Logout"
        },
    ]

    const item = di.map((e, i) => (
            <DrawerItem icon={e.icon} name={e.name} key={i} border={
                i == (di.length - 1) ? false : true
            } />
    ))

    return (
        <View style={styles.container}>
            <View style={styles.profile}> 
                <Image source={cover} style={{ width: 65, height: 65, borderRadius: 100, marginRight: 15 }}/>
                <Details mode="dark"/>
            </View>
            <View>
                {item}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 40,
        paddingVertical: 80
    },
    profile: {
        flexDirection: "row",
        marginBottom: 30
    }
});
