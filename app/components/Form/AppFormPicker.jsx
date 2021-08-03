import { useFormikContext } from "formik";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppInputErrorMessage from "./AppInputErrorMessage";
import AppPicker from "./AppPicker";

const AppFormPicker = ({ items, name, placeholder }) => {
  const { values, setFieldValue, errors, touched } = useFormikContext();
  return (
    <>
      <AppPicker
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        selectedItem={values[name]}
        placeholder={placeholder}
      />
      <AppInputErrorMessage visible={touched[name]} error={errors[name]} />
    </>
  );
};

export default AppFormPicker;

const styles = StyleSheet.create({});
