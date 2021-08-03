import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import AppText from "../components/AppText";
import ListItem from "../components/ListItem";
import colors from "../config/colors";

const ListingDetailsScreen = () => {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red jacket for you</AppText>
        <AppText style={styles.price}>$100</AppText>

        <View style={styles.user}>
          <ListItem
            title="Mosh Hamedani"
            subtitle="5 listing"
            image={require("../assets/mosh.jpg")}
          />
        </View>
      </View>
    </View>
  );
};

export default ListingDetailsScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    marginBottom: 5,
    fontSize: 24,
  },
  price: {
    color: colors.secondary,
    fontWeight: "700",
    fontSize: 20,
    marginVertical: 10,
  },
  user: {
    marginTop: 40,
  },
});
