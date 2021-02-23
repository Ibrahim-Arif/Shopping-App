import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";

const store = async (key, value) => {
  try {
    await AsyncStorage.setItem(
      key,
      JSON.stringify({ value, timestamp: Date.now() })
    );
  } catch (error) {
    console.log(error);
  }
};

const isExpired = (item) => {
  const now = moment(Date.now());
  const dateStored = moment(item.timestamp);
  return now.diff(dateStored, "minute") > 5;
};

const get = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    const item = JSON.parse(value);

    if (!item) return null;

    if (isExpired(item)) {
      await AsyncStorage.removeItem(key);
      return null;
    }

    return item;
  } catch (error) {
    console.log(error);
  }
};

export default {
  get,
  store,
};
