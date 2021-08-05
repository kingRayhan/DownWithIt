import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";
import colors from "../config/colors";
import AppText from "./AppText";

const OfflineNotice = () => {
  const netinfo = useNetInfo();

  if (netinfo.type === "none" && netinfo.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <AppText style={styles.text}>No Internet</AppText>
      </View>
    );

  return null;
};

export default OfflineNotice;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 10,
    paddingTop: Constants.statusBarHeight,
    width: "100%",
  },
  text: {
    color: colors.white,
  },
});
