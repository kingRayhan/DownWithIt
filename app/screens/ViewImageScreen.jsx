import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonGroup}>
        <View style={styles.closeButton} />
        <View style={styles.deleteButton} />
      </View>

      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("./../assets/chair.jpg")}
      />
    </View>
  );
};

export default ViewImageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  buttonGroup: {
    position: "absolute",
    top: 50,
    flexDirection: "row",
    width: "100%",
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: "space-between",
  },
  closeButton: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
  },
  deleteButton: {
    width: 50,
    height: 50,
    backgroundColor: colors.secondary,
  },
});
