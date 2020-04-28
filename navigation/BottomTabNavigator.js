import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import { DrawerLayoutAndroid } from "react-native";

import TabBarIcon from "../components/TabBarIcon";
import Profile from "../screens/Profile";
import Drawer from "../screens/Drawer";

import Colors from "../constants/Colors";

const BottomTab = createBottomTabNavigator();

export default class BottomTabNavigator extends React.Component {
    render() {
        console.log("hello")
        return (
            <DrawerLayoutAndroid
                renderNavigationView={Drawer}
                drawerWidth={350}
            >
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
                            alignItems: "center"
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
                        name="INBOX"
                        component={Profile}
                        options={{
                            title: "inbox",
                            tabBarIcon: ({ focused }) => (
                                <TabBarIcon focused={focused} name="mail" />
                            ),
                        }}
                    />
                    <BottomTab.Screen
                        name="SEARCH"
                        component={Profile}
                        options={{
                            tabBarIcon: ({ focused }) => (
                                <TabBarIcon focused={focused} name="search" />
                            ),
                        }}
                    />
                    <BottomTab.Screen
                        name="REFER"
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
                    />
                    <BottomTab.Screen
                        name="MORE"
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
