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
import AppText from "./app/components/AppText";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import Messages from "./app/screens/Messages";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

const App = () => {
  // return <WelcomeScreen />;
  // return <ListingDetailsScreen />;
  // return <ViewImageScreen />;
  return <Messages />;
  // return (
  //   <View style={styles.container}>
  //     <AppCard
  //       title="Red jacket for you"
  //       subtitle="$100"
  //       image={require("./app/assets/jacket.jpg")}
  //     />
  //   </View>
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
