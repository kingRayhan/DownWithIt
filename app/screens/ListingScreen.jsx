import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";

import AppCard from "../components/AppCard";
import Screen from "../components/Screen";
import colors from "../config/colors";
import routes from "../navigation/routes";

import FetchingError from "../components/FetchingError";
import AppActivityIndicator from "../components/AppActivityIndicator";
import useAPI from "../hooks/useAPI";
import listingAPI from "../api/listingAPI";

const ListingScreen = () => {
  const navigation = useNavigation();

  const {
    data: listing,
    loading,
    error,
    request: loadListing,
  } = useAPI(listingAPI.getListings);

  useEffect(() => {
    loadListing();
  }, []);

  const handlePullRefresh = () => {
    loadListing();
  };

  return (
    <Screen style={styles.screen}>
      {error && <FetchingError onPressRetry={loadListing} />}
      {<AppActivityIndicator visible={loading} />}

      {!loading && (
        <FlatList
          data={listing}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <AppCard
              title={item.title}
              subtitle={"$" + item.price}
              imageUri={item.images[0].url}
              onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
            />
          )}
          refreshing={false}
          onRefresh={handlePullRefresh}
        />
      )}
    </Screen>
  );
};

export default ListingScreen;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
    padding: 10,
    paddingBottom: 0,
  },
});
