import axios from "axios";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { showMessage } from "react-native-flash-message";
import apiUrl from "../api/config";
import { toggleLoading } from "./auxilliary";
import { getUserDetails } from "./user";

export function register(userObj, navigate) {
  return dispatch => {
    dispatch(toggleLoading(true));
    axios({
      method: "post",
      data: userObj,
      url: `${apiUrl}/user`,
      headers: { "Content-Type": "application/json; charset=utf-8" }
    })
      .then(response => {
        console.log(this.props);
        const { data } = response;
        const { token } = data;
        dispatch(toggleLoading(false));
        navigate("Signin");
      })
      .catch(error => {
        console.log(error.response);
        dispatch(toggleLoading(false));
        showMessage({
          message: `${error.response.data.message}`,
          type: "error",
          backgroundColor: "#ff9999"
        });
      });
  };
}

export function login(loginObj, navigate) {
  return dispatch => {
    dispatch(toggleLoading(true));
    axios({
      method: "post",
      data: loginObj,
      url: `${apiUrl}/login`,
      headers: { "Content-Type": "application/json; charset=utf-8" }
    })
      .then(response => {
        const { data } = response;
        const { token, user } = data;
        // dispatch(toggleLoading(false))
        axios.defaults.headers.common.Authorization = token;
        AsyncStorage.setItem("token", token);
        AsyncStorage.setItem("user", JSON.stringify(user));
        dispatch(getUserDetails(navigate));
        // dispatch(getGroup(groupCode, navigate))
      })
      .catch(error => {
        dispatch(toggleLoading(false));
        showMessage({
          message: `${error.response.data.message}`,
          type: "error",
          backgroundColor: "#ff9999"
        });
      });
  };
}
