import React from "react";
import { Platform, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

const App = () => {
  return <ViewImageScreen />;
};

export default App;

const styles = StyleSheet.create({
  container: {
    padding: Platform.OS == "android" ? StatusBar.currentHeight : 0,
  },
});
