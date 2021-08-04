import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../config/colors";

const NewListTabButton = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
        activeOpacity={0.9}
      >
        <MaterialCommunityIcons name="plus" color={colors.white} size={40} />
      </TouchableOpacity>
    </View>
  );
};

export default NewListTabButton;

const styles = StyleSheet.create({
  container: {
    borderColor: colors.white,
    borderWidth: 10,
    overflow: "hidden",
    height: 80,
    width: 80,
    borderRadius: 40,
    bottom: 20,
  },
  button: {
    backgroundColor: colors.primary,
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
  },
});
