import React from "react";
import LottieView from "lottie-react-native";
import { View, Text, StyleSheet } from "react-native";

const AppActivityIndicator = ({ visible }) => {
  if (!visible) return null;
  const animationSource = require("../assets/animations/loader.json");

  return <LottieView source={animationSource} autoPlay loop />;
};

export default AppActivityIndicator;

const styles = StyleSheet.create({});
