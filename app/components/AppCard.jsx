import React from "react";
import {
  Image,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

const AppCard = ({ title, subtitle, image, onPress }) => {
  return (
    <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} source={image} />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title} title={title} />
          <AppText style={styles.subtitle} title={subtitle} />
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default AppCard;

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    marginBottom: 5,
  },
  subtitle: {
    color: colors.secondary,
    fontWeight: "700",
  },
});
