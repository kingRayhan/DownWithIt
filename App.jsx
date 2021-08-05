import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import jwtDecode from "jwt-decode";
import AppLoading from "expo-app-loading";

import AuthNavigator from "./app/navigation/AuthNavigator";
import theme from "./app/navigation/theme";
import AppTabNavigator from "./app/navigation/AppTabNavigator";

import OfflineNotice from "./app/components/OfflineNotice";
import AuthContext from "./app/auth/AuthContext";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import AuthStorage from "./app/auth/storage";

const App = () => {
  const [user, setUser] = useState(null);
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const token = await AuthStorage.getToken();

    if (!token) return;

    setUser(jwtDecode(token));
  };

  if (!isReady)
    return (
      <AppLoading
        startAsync={restoreUser}
        onError={() => setIsReady(false)}
        onFinish={() => setIsReady(true)}
      />
    );

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer theme={theme}>
        <OfflineNotice />
        {user ? <AppTabNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
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
