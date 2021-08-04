import React, { useRef } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import AppImageInput from "./AppImageInput";

const ImageInputList = ({ imageUris, onAddImage, onDeleteImage }) => {
  const scrollViewRef = useRef();

  return (
    <ScrollView
      horizontal
      ref={scrollViewRef}
      onContentSizeChange={() => scrollViewRef.current.scrollToEnd()}
    >
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
    </ScrollView>
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
