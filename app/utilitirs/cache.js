import { AsyncStorage } from "react-native";
import moment from "moment";

const prefix = "cache";

const store = async (key, value) => {
  try {
    const item = {
      timestamp: Date.now(),
      value,
    };
    await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
  } catch (error) {
    console.log("cache.js", error);
  }
};

const isExpired = (item) => {
  const now = moment(Date.now());
  const storedTimeStamp = moment(item.timestamp);
  return now.diff(storedTimeStamp) > 100;
};

const get = async (key) => {
  try {
    const res = await AsyncStorage.getItem(prefix + key);
    const item = JSON.parse(res);

    if (!item) return null;

    // if (isExpired(item)) {
    //   await AsyncStorage.removeItem(prefix + key);
    //   return null;
    // }

    return item.value;
  } catch (error) {
    console.log("cache.js", error);
  }
};

export default {
  get,
  store,
};
