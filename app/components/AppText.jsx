import React from "react";
import { Text } from "react-native";
import defaultStyles from "../config/defaultStyles";

const AppText = ({ children, style, visible = true }) => {
  if (!visible) return null;
  return <Text style={[defaultStyles.text, style]}>{children}</Text>;
};

export default AppText;
