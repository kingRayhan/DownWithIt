import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from "../config/colors";
import AppButton from "../components/AppButton";
import defaultStyles from "../config/defaultStyles";

const FetchingError = ({ onPressRetry }) => {
  return (
    <View style={styles.container}>
      <AntDesign name="warning" size={30} color={colors.danger} />
      <Text style={styles.text}>Couldn't retrive data from server</Text>
      <AppButton title="Retry" onPress={onPressRetry} />
    </View>
  );
};

export default FetchingError;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
  },
  text: {
    ...defaultStyles.text,
    textAlign: "center",
    marginBottom: 4,
  },
});
