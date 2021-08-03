import React, { useState } from "react";
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
import AppPicker from "./app/components/Form/AppPicker";
import ListItem from "./app/components/ListItem";
import Screen from "./app/components/Screen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ListingScreen from "./app/screens/ListingScreen";
import LoginScreen from "./app/screens/LoginScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import MyAccount from "./app/screens/MyAccount";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

const categories = [
  {
    label: "Furniture",
    value: 1,
  },
  {
    label: "Clothing",
    value: 2,
  },
  {
    label: "Camara",
    value: 3,
  },
];

const App = () => {
  const [item, setItem] = useState(categories[0]);

  // return <WelcomeScreen />;
  // return <ListingDetailsScreen />;
  // return <ViewImageScreen />;
  // return <MessagesScreen />;
  // return <ListingScreen />;
  // return <LoginScreen />;
  return <ListingEditScreen />;
  // return <MyAccount />;

  // return (
  //   <Screen>
  //     <AppPicker
  //       selectedItem={item}
  //       onSelectItem={setItem}
  //       icon="apps"
  //       placeholder="Categories"
  //       items={categories}
  //     />
  //   </Screen>
  // );
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
