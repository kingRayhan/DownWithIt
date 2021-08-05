import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingScreen from "../screens/ListingScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import routes from "./routes";
import ListingEditScreen from "../screens/ListingEditScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ presentation: "modal", headerShown: false }}
    >
      <Stack.Screen name={routes.LISTING} component={ListingScreen} />
      <Stack.Screen name={routes.LISTING_EDIT} component={ListingEditScreen} />

      <Stack.Screen
        name={routes.LISTING_DETAILS}
        component={ListingDetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default FeedNavigator;
