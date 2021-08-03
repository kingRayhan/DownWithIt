import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

const ListDeleteAction = () => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="trash-can-outline"
        color="white"
        size={35}
      />
    </View>
  );
};

export default ListDeleteAction;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
});
