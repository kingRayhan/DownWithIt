import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Netinfo, { useNetInfo } from "@react-native-community/netinfo";

import AuthNavigator from "./app/navigation/AuthNavigator";
import theme from "./app/navigation/theme";
import AppTabNavigator from "./app/navigation/AppTabNavigator";

import AlertRibon from "./app/components/AlertRibon";

const App = () => {
  const netinfo = useNetInfo();

  return (
    <NavigationContainer theme={theme}>
      <AlertRibon
        visible={!netinfo.isInternetReachable}
        message="Unreachable internet"
      />

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
