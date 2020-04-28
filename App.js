import * as React from "react";
import { StyleSheet, View } from "react-native";
import { SplashScreen } from "expo";
import * as Font from "expo-font";
import { Feather } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Colors from "./constants/Colors";

import BottomTabNavigator from "./navigation/BottomTabNavigator";

const Stack = createStackNavigator();

export default function App(props) {
    const [isLoadingComplete, setLoadingComplete] = React.useState(false);
    const containerRef = React.useRef();

    React.useEffect(() => {
        async function loadResourcesAndDataAsync() {
            try {
                SplashScreen.preventAutoHide();

                await Expo.Font.loadAsync({
                    ...Feather.font,
                });
            } catch (e) {
                console.warn(e);
            } finally {
                setLoadingComplete(true);
                SplashScreen.hide();
            }
        }

        loadResourcesAndDataAsync();
    }, []);

    if (!isLoadingComplete && !props.skipLoadingScreen) {
        return null;
    } else {
        return (
            <View style={styles.container}>
                <NavigationContainer ref={containerRef}>
                    <Stack.Navigator headerMode="none">
                        <Stack.Screen
                            name="Root"
                            component={BottomTabNavigator}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.defaultBack,
    },
});
