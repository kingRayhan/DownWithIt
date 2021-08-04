import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppText from "../AppText";
import AppImageInput from "./AppImageInput";

const ImageInputList = ({ imageUris, onAddImage, onDeleteImage }) => {
  return (
    <View style={styles.container}>
      {imageUris.map((uri) => (
        <View style={styles.image} key={uri}>
          <AppImageInput
            onChangeImage={() => onDeleteImage(uri)}
            imageUri={uri}
          />
        </View>
      ))}

      <AppImageInput onChangeImage={onAddImage} />
    </View>
  );
};

export default ImageInputList;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    marginRight: 10,
  },
});
