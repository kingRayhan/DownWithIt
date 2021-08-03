import React from "react";
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import AppButton from "./app/components/AppButton";
import AppCard from "./app/components/AppCard";
import AppIcon from "./app/components/AppIcon";
import AppText from "./app/components/AppText";
import AppTextInput from "./app/components/AppTextInput";
import ListItem from "./app/components/ListItem";
import Screen from "./app/components/Screen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ListingScreen from "./app/screens/ListingScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import MyAccount from "./app/screens/MyAccount";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

const App = () => {
  // return <WelcomeScreen />;
  // return <ListingDetailsScreen />;
  // return <ViewImageScreen />;
  // return <MessagesScreen />;
  // return <ListingScreen />;
  return (
    <Screen>
      <AppTextInput placeholder="Username" icon="email" />
    </Screen>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    // padding: Platform.OS == "android" ? StatusBar.currentHeight : 0,
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#f8f4f4",
    padding: 20,
    paddingTop: 100,
  },
});
