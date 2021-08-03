import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../../config/colors";
import AppText from "../AppText";

const AppInputErrorMessage = ({ error, visible }) => {
  if (!error || !visible) return null;

  return <AppText style={styles.error}>{error}</AppText>;
};

export default AppInputErrorMessage;

const styles = StyleSheet.create({
  error: {
    color: colors.danger,
  },
});
