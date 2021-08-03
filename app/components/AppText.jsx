import React from "react";
import { Platform, StyleSheet, Text } from "react-native";

const AppText = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>;
};

export default AppText;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    // ...Platform.select({
    //   android: {
    //     fontSize: 18,
    //     fontFamily: "Roboto",
    //   },
    //   ios: {
    //     fontSize: 18,
    //     fontFamily: "Avenir",
    //   },
    // }),
  },
});
