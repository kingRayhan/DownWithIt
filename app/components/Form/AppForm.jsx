import { Formik } from "formik";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import colors from "../../config/colors";
import AppText from "../AppText";

const DebugForm = ({ errors, values, visible }) =>
  visible ? (
    <View
      style={{ backgroundColor: colors.light, padding: 15, borderRadius: 15 }}
    >
      <AppText>Errors</AppText>
      <AppText>{JSON.stringify(errors, undefined, 4)}</AppText>

      <AppText>Values</AppText>
      <AppText>{JSON.stringify(values, undefined, 4)}</AppText>
    </View>
  ) : null;

const AppForm = ({ initialValues, validationSchema, onSubmit, children }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ values, errors }) => (
        <>
          <DebugForm errors={errors} values={values} />
          <ScrollView>{children}</ScrollView>
        </>
      )}
    </Formik>
  );
};

export default AppForm;

const styles = StyleSheet.create({});
