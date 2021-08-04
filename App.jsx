import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./app/navigation/AuthNavigator";
import theme from "./app/navigation/theme";
import AppTabNavigator from "./app/navigation/AppTabNavigator";

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      {/* <AuthNavigator /> */}
      <AppTabNavigator />
    </NavigationContainer>
  );

  // return null;
  // return <ListingDetailsScreen />;
  // return <ViewImageScreen />;
  // return <MessagesScreen />;
  // return <ListingScreen />;
  // return <LoginScreen />;
  // return <ListingEditScreen />;
  // return <MyAccount />;
};

export default App;
