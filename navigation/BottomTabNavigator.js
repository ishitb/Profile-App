import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import {
    DrawerLayoutAndroid,
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
} from "react-native";

import TabBarIcon from "../components/TabBarIcon";
import Profile from "../screens/Profile";
import Drawer from "../screens/Drawer";

import Colors from "../constants/Colors";
import { Feather } from "@expo/vector-icons";

const BottomTab = createBottomTabNavigator();

export default class BottomTabNavigator extends React.Component {
    constructor(props) {
        super(props);
        // this.drawer = React.createRef()
        this.screen = React.createRef();
    }

    state = {
        currentRoute: "Profile",
    };

    render() {
        return (
            <DrawerLayoutAndroid
                renderNavigationView={Drawer}
                drawerWidth={350}
                ref={this.drawer}
            >
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={() => {
                            this.drawer.current.openDrawer();
                        }}
                    >
                        <Feather name="menu" size={30} color="#fff" />
                    </TouchableOpacity>
                    <Text style={styles.proHead}>
                        {this.state.currentRoute}
                    </Text>
                </View>
                <BottomTab.Navigator
                    tabBarOptions={{
                        activeTintColor: Colors.tabIconSelected,
                        style: {
                            height: 100,
                            justifyContent: "center",
                            backgroundColor: Colors.defaultBack,
                            borderTopColor: Colors.defaultBack,
                            borderTopWidth: 0,
                            elevation: 0,
                            flexDirection: "row",
                            alignItems: "center",
                        },
                        tabStyle: {
                            paddingTop: 0,
                            height: 60,
                            elevation: 0,
                            justifyContent: "center",
                        },
                        labelStyle: {
                            fontSize: 16,
                            textTransform: "uppercase",
                        },
                        keyboardHidesTabBar: true,
                    }}
                    initialRouteName="Profile"
                >
                    <BottomTab.Screen
                        name="Inbox"
                        component={Profile}
                        options={{
                            title: "inbox",
                            tabBarIcon: ({ focused }) => (
                                <TabBarIcon focused={focused} name="mail" />
                            ),
                        }}
                    />
                    <BottomTab.Screen
                        name="Search"
                        component={Profile}
                        options={{
                            tabBarIcon: ({ focused }) => (
                                <TabBarIcon focused={focused} name="search" />
                            ),
                        }}
                    />
                    <BottomTab.Screen
                        name="Refer"
                        component={Profile}
                        options={{
                            tabBarIcon: ({ focused }) => (
                                <TabBarIcon focused={focused} name="users" />
                            ),
                        }}
                    />
                    <BottomTab.Screen
                        name="Profile"
                        component={Profile}
                        options={{
                            tabBarIcon: ({ focused }) => (
                                <TabBarIcon focused={focused} name="user" />
                            ),
                        }}
                        ref={this.screen}
                    />
                    <BottomTab.Screen
                        name="More"
                        component={Profile}
                        options={{
                            tabBarIcon: ({ focused }) => (
                                <TabBarIcon focused={focused} name="menu" />
                            ),
                        }}
                    />
                </BottomTab.Navigator>
            </DrawerLayoutAndroid>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        zIndex: 99,
        position: "absolute",
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "flex-start",
        top: 50,
        left: 20,
    },
    proHead: {
        marginLeft: 20,
        fontSize: 25,
        color: "#fff",
    },
});
