import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const AppIcon = ({
  name,
  size = 40,
  backgroundColor = "#000",
  iconColor = "#fff",
}) => {
  return (
    <View
      style={[
        styles.icon,
        { width: size, height: size, backgroundColor, borderRadius: size / 2 },
      ]}
    >
      <MaterialCommunityIcons name={name} size={size / 2} color={iconColor} />
    </View>
  );
};

export default AppIcon;

const styles = StyleSheet.create({
  icon: {
    justifyContent: "center",
    alignItems: "center",
  },
});
