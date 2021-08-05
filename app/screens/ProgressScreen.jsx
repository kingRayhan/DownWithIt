import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "../components/AppText";

const ProgressScreen = ({ progress = 0, visible = false }) => {
  if (!visible) return null;
  return (
    <View style={styles.container}>
      <AppText>Progress {progress}%</AppText>
    </View>
  );
};

export default ProgressScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
