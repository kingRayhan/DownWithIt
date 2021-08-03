import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../config/colors";
import defaultStyles from "../config/defaultStyles";

const AppTextButton = ({
  onPress,
  title,
  icon,
  iconSize = 25,
  color = colors.dark,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      {icon && (
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons name={icon} size={iconSize} color={color} />
        </View>
      )}
      <Text style={[styles.text, { color }]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppTextButton;

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    // flex: 1,
  },
  text: {
    // ...defaultStyles.text,
    textTransform: "uppercase",
    fontWeight: "700",
    fontSize: 25,
    color: defaultStyles.colors.danger,
  },
  iconContainer: {},
  text: {},
});
