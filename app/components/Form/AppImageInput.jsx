import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import { Alert, Image, StyleSheet, TouchableOpacity, View } from "react-native";
import colors from "../../config/colors";

const ImageInput = ({ imageUri = null, onChangeImage }) => {
  const getPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) {
      Alert.alert(
        "Permission needed",
        "Without Media library permission, you can't select am image"
      );
    }
  };

  useEffect(() => {
    getPermission();
  }, []);

  const handlePress = async () => {
    if (imageUri) {
      Alert.alert("Sure to remove image?", "", [
        {
          text: "Yes",
          onPress: () => onChangeImage(null),
        },
        {
          text: "No",
        },
      ]);
    } else {
      const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
        allowsEditing: true,
        aspect: [1, 1],
      });

      if (!cancelled) {
        onChangeImage(uri);
      }
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      {imageUri && <Image style={styles.image} source={{ uri: imageUri }} />}

      {!imageUri && (
        <View style={styles.icon}>
          <MaterialCommunityIcons
            name="camera"
            size={40}
            color={colors.medium}
          />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default ImageInput;

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    backgroundColor: colors.light,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  image: {
    height: "100%",
    width: "100%",
  },
});
