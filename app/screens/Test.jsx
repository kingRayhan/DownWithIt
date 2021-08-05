import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Test = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello</Text>
    </View>
  );
};

export default Test;

const styles = StyleSheet.create({
  text: {
    fontSize: 65,
    color: "red",
  },
  container: {
    padding: 10,
    backgroundColor: "red",
  },
});
