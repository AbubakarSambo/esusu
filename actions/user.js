import axios from "axios";
import apiUrl from "../api/config";
import { toggleLoading } from "./auxilliary";
import { getGroup } from "./group";
import { SET_USER_GROUP, SET_USER } from "../constants";
import AsyncStorage from "@react-native-community/async-storage";

export function setUserGroup(userGroup) {
  return {
    type: SET_USER_GROUP,
    userGroup
  };
}
export function setUser(user) {
  return {
    type: SET_USER,
    user
  };
}

export function getUserDetails(navigate) {
  return dispatch => {
    axios({
      method: "get",
      url: `${apiUrl}/user/details`,
      headers: { "Content-Type": "application/json; charset=utf-8" }
    })
      .then(response => {
        dispatch(toggleLoading(false));
        console.log(response.data);
        const { user, groupCode } = response.data;
        let userGroup = {
          user,
          groupCode
        };
        dispatch(setUserGroup(userGroup));
        if (groupCode) {
          dispatch(getGroup(groupCode));
          navigate("HomePage");
        } else if (user) {
          navigate("Search");
        }
      })
      .catch(error => {});
  };
}

export function getUser() {
  console.log("getting user");
  return dispatch => {
    AsyncStorage.getItem("user").then(user => {
      console.log(JSON.parse(user));
      dispatch(setUser(JSON.parse(user)));
    });
  };
}
