import * as secureStore from "expo-secure-store";

const key = "authUser";

const storeUser = async (user) => {
  try {
    await secureStore.setItemAsync(key, JSON.stringify(user));
  } catch (error) {
    console.log("error while storing user: " + error);
  }
};

const readUser = async () => {
  try {
    return await secureStore.getItemAsync(key);
  } catch (error) {
    console.log("error while reading user: " + error);
  }
};

const removeUser = () => {
  try {
    secureStore.deleteItemAsync(key);
  } catch (error) {
    console.log("error while removing user: " + error);
  }
};

export default {
  storeUser,
  readUser,
  removeUser,
};
