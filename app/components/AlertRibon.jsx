import React from "react";
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import { color } from "react-native-reanimated";
import colors from "../config/colors";
import AppText from "./AppText";

const AlertRibon = ({ visible = false, message, type = "error" }) => {
  if (!visible) return null;
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={[
          styles.alert,
          {
            backgroundColor: type === "error" ? colors.danger : colors.success,
          },
        ]}
      >
        <AppText style={{ color: "#fff" }}>{message}</AppText>
      </View>
    </SafeAreaView>
  );
};

export default AlertRibon;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: colors.light,
    paddingLeft: 10,
    paddingRight: 10,
  },
  alert: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
