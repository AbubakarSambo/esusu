import AsyncStorage from "@react-native-community/async-storage";

export const getUser = async () => {
  console.log("in util");
  let user = {};
  try {
    user = (await AsyncStorage.getItem("user")) || {};
    console.log(JSON.parse(user));
  } catch (error) {
    // Error retrieving data
    console.log(error.message);
  }
  return user;
};
