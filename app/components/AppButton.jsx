import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../config/colors";

const AppButton = ({ children, opPress, color = "primary" }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={opPress}
    >
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 8,
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    textTransform: "uppercase",
    fontWeight: "700",
    fontSize: 18,
  },
});
