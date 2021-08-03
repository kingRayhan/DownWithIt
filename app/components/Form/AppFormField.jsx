import { useFormikContext } from "formik";
import React from "react";
import { StyleSheet } from "react-native";
import AppInputErrorMessage from "./AppInputErrorMessage";
import AppTextInput from "./AppTextInput";

const AppFormField = ({ name, width, ...otherProps }) => {
  const { errors, setFieldTouched, touched, handleChange } = useFormikContext();
  return (
    <>
      <AppTextInput
        width={width}
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
      />
      <AppInputErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormField;

const styles = StyleSheet.create({});
