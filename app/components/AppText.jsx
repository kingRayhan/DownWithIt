import React from "react";
import { Text } from "react-native";
import defaultStyles from "../config/defaultStyles";

const AppText = ({ title, style }) => {
  return <Text style={[defaultStyles.text, style]}>{title}</Text>;
};

export default AppText;
