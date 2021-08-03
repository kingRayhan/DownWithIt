import React from "react";
import { Image, StyleSheet, TouchableHighlight, View } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import colors from "../config/colors";
import AppText from "./AppText";

const ListItem = ({
  title,
  subTitle,
  IconComponent,
  onPress,
  image,
  renderRightActions,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <AppText style={styles.title} title={title} />
            {subTitle && <AppText style={styles.subTitle} title={subTitle} />}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: colors.white,
  },
  image: {
    width: 65,
    height: 65,
    borderRadius: 35,
  },
  detailsContainer: {
    marginLeft: 10,
  },
  title: {
    fontWeight: "500",
  },
  subTitle: {
    color: colors.medium,
  },
});
