import React from "react";
import { useNavigation } from "@react-navigation/native";
import { FlatList, StyleSheet, Text, View } from "react-native";
import AppCard from "../components/AppCard";
import Screen from "../components/Screen";
import colors from "../config/colors";

const listing = [
  {
    id: 1,
    title: "Red jacket for you",
    price: 100,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Red jacket for you",
    price: 200,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 3,
    title: "Red jacket for you",
    price: 300,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 4,
    title: "Red jacket for you",
    price: 400,
    image: require("../assets/jacket.jpg"),
  },
];

const ListingScreen = () => {
  const navigation = useNavigation();

  const handlePullRefresh = () => {
    console.log("pull");
  };
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listing}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <AppCard
            title={item.title}
            subtitle={"$" + item.price}
            image={item.image}
            onPress={() => navigation.navigate("listing_details", item)}
          />
        )}
        refreshing={false}
        onRefresh={handlePullRefresh}
      />
    </Screen>
  );
};

export default ListingScreen;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
    padding: 20,
    paddingBottom: 0,
  },
});
