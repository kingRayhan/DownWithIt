import * as SecureStorage from "expo-secure-store";

const key = "authKey";

const storeToken = async (token) => {
  try {
    await SecureStorage.setItemAsync(key, token);
  } catch (error) {
    console.log("Error storing auth token", error);
  }
};

const getToken = async () => {
  try {
    return await SecureStorage.getItemAsync(key);
  } catch (error) {
    console.log("Error getting auth token", error);
  }
};

const removeToken = async () => {
  try {
    return await SecureStorage.deleteItemAsync(key);
  } catch (error) {
    console.log("Error removing auth token", error);
  }
};

export default {
  storeToken,
  getToken,
  removeToken,
};
