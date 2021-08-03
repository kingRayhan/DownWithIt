import React from "react";
import { Image, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";

import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import Screen from "../components/Screen";

let validationSchema = yup.object().shape({
  email: yup.string().email().label("Email"),
  password: yup.string().min(6).label("Password"),
});

const LoginScreen = () => {
  return (
    <Screen style={styles.screen}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleSubmit, errors }) => (
          <>
            <AppTextInput
              icon="email"
              placeholder="Email"
              keyboardType="email-address"
              textContentType="emailAddress"
              autoCapitalize="none"
              onChangeText={handleChange("email")}
              autoCorrect={false}
            />
            <AppText style={{ color: "red" }}>{JSON.stringify(errors)}</AppText>
            <AppTextInput
              icon="lock"
              placeholder="Password"
              textContentType="password"
              autoCapitalize="none"
              secureTextEntry
              onChangeText={handleChange("password")}
              autoCorrect={false}
            />
            <AppButton title="Login" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    marginTop: 50,
    marginBottom: 20,
    alignSelf: "center",
  },
});
