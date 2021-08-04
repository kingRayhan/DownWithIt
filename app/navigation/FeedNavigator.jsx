import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingScreen from "../screens/ListingScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ presentation: "modal", headerShown: false }}
    >
      <Stack.Screen name="listing" component={ListingScreen} />
      <Stack.Screen name="listing_details" component={ListingDetailsScreen} />
    </Stack.Navigator>
  );
};

export default FeedNavigator;
