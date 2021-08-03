import { useFormikContext } from "formik";
import React from "react";
import { StyleSheet } from "react-native";

import AppButton from "../AppButton";

const AppFormSubmitButton = ({ title }) => {
  const { handleSubmit } = useFormikContext();

  return <AppButton title={title} onPress={handleSubmit} />;
};

export default AppFormSubmitButton;

const styles = StyleSheet.create({});
