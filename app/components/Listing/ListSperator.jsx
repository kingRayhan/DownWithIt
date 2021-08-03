import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../../config/colors";

const ListSperator = () => {
  return <View style={styles.seperator} />;
};

export default ListSperator;

const styles = StyleSheet.create({
  seperator: {
    width: "100%",
    backgroundColor: colors.light,
    height: 1,
  },
});
