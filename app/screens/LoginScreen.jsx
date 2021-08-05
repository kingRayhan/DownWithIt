import React from "react";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";
import jwtDecode from "jwt-decode";

import Screen from "../components/Screen";

import AppFormField from "../components/Form/AppFormField";
import AppForm from "../components/Form/AppForm";
import AppFormSubmitButton from "../components/Form/AppFormSubmitButton";
// import AuthAPI from "../api/authAPI";
// import useAPI from "../hooks/useAPI";

import AppText from "../components/AppText";
import colors from "../config/colors";
import authAPI from "../api/authAPI";
import { useState } from "react";
import { useContext } from "react";
import AuthContext from "../auth/AuthContext";
import AuthStorage from "../auth/storage";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = () => {
  // const { data, error, request, loading, errorMessages } = useAPI(
  //   AuthAPI.login
  // );

  const authConext = useContext(AuthContext);

  const [error, setError] = useState(false);
  const [errorMessages, setErrorMessages] = useState(false);

  const handleSubmitForm = async (credential) => {
    // request(credential);

    // if (error) {
    //   console.log(errorMessages);
    //   console.log("error");
    // } else {
    //   console.log("no error");
    //   console.log(data);
    // }

    setError(false);
    authAPI.login(credential).then(async (res) => {
      if (!res.ok) {
        setError(true);
        return setErrorMessages(res.originalError?.response?.data?.error);
      }

      authConext.setUser(jwtDecode(res.data));
      await AuthStorage.storeToken(res.data);
    });
  };

  return (
    <Screen style={styles.screen}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />

      <AppForm
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmitForm}
      >
        <AppText visible={error} style={styles.errorText}>
          {errorMessages}
        </AppText>
        <AppFormField
          icon="email"
          name="email"
          placeholder="Email"
          keyboardType="email-address"
          textContentType="emailAddress"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <AppFormField
          icon="lock"
          name="password"
          placeholder="Password"
          textContentType="password"
          autoCapitalize="none"
          secureTextEntry
          autoCorrect={false}
        />
        <AppFormSubmitButton title="Login" />
      </AppForm>
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
  errorText: {
    color: colors.danger,
    textAlign: "center",
    backgroundColor: colors.danger,
    color: colors.white,
    opacity: 1,
    padding: 5,
    borderRadius: 10,
  },
});
