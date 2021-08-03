import React from "react";
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import AppButton from "./app/components/AppButton";
import AppText from "./app/components/AppText";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

const App = () => {
  return <WelcomeScreen />;
  // return (
  //   <View style={styles.container}>
  //     <AppText>React native</AppText>
  //     <AppButton>Hey</AppButton>
  //   </View>
  // );
};

export default App;

const styles = StyleSheet.create({
  container: {
    padding: Platform.OS == "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
