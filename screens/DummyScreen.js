import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Colors from "../constants/Colors"

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>
        DUMMY SCREEN
      </Text>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.defaultBack,
    justifyContent: "center",
    alignItems: "center"
  },
});
