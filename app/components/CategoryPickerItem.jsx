import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AppIcon from "./AppIcon";
import AppText from "./AppText";

const CategoryPickerItem = ({ label, onPress, item }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <AppIcon
        name={item.icon}
        size={60}
        backgroundColor={item.backgroundColor}
      />
      <AppText style={styles.label}>{label}</AppText>
    </TouchableOpacity>
  );
};

export default CategoryPickerItem;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 30,
    width: "33%",
  },
  label: {
    textAlign: "center",
  },
});
