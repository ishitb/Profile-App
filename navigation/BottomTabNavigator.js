import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";

import TabBarIcon from "../components/TabBarIcon";
import DummyScreen from "../screens/DummyScreen";
import Profile from "../screens/Profile"

import Colors from "../constants/Colors"

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "Dummy";

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  return (
    <BottomTab.Navigator
      initialRouteName={INITIAL_ROUTE_NAME}
      tabBarOptions={{
        activeTintColor: Colors.tabIconSelected,
        style: {
          height: 100,
          justifyContent: "center",
          backgroundColor: Colors.defaultBack,
          borderTopColor: Colors.defaultBack,
          borderTopWidth: 0,
        },
        tabStyle: {
          paddingTop: 10,
          height: 80
        },
        labelStyle: {
          fontSize: 16,
          textTransform: "uppercase"
        }
      }}
    >
      <BottomTab.Screen
        name="INBOX"
        component={DummyScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="mail" />
          ),
        }}
      />
      <BottomTab.Screen
        name="SEARCH"
        component={DummyScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="search" />
          ),
        }}
      />
      <BottomTab.Screen
        name="REFER"
        component={DummyScreen}
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
        component={DummyScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="menu" />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName =
    route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case "Home":
      return "How to get started";
    case "Links":
      return "Links to learn more";
  }
}
