import { useFormikContext } from "formik";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppInputErrorMessage from "./AppInputErrorMessage";
import AppImageInputList from "./AppImageInputList";

const FormAppImageInputList = ({ name }) => {
  const {
    errors,
    setFieldTouched,
    setFieldValue,
    touched,
    handleChange,
    values,
  } = useFormikContext();

  const handleAdd = (uri) => {
    console.log("handleAdd", uri);
    setFieldValue(name, [...values[name], uri]);
  };

  const handleRemoveImage = (uri) => {
    setFieldValue(
      name,
      values[name].filter((imageUri) => imageUri != uri)
    );
  };

  return (
    <View style={styles.container}>
      <AppImageInputList
        imageUris={values[name]}
        onAddImage={handleAdd}
        onDeleteImage={handleRemoveImage}
      />
      <AppInputErrorMessage error={errors[name]} visible={touched[name]} />
    </View>
  );
};

export default FormAppImageInputList;

const styles = StyleSheet.create({
  container: {},
});
