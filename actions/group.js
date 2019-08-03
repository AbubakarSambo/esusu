import axios from "axios";
import { showMessage } from "react-native-flash-message";
import apiUrl from "../api/config";
import { toggleLoading } from "./auxilliary";
import { getUserDetails } from "./user";
import { SET_GROUP, SET_SCHEDULE } from "../constants";

export function setGroup(group) {
  return {
    type: SET_GROUP,
    group
  };
}
export function setSchedule(schedule) {
  return {
    type: SET_SCHEDULE,
    schedule
  };
}

export function createGroup(groupObj, navigate) {
  console.log("create group");
  return dispatch => {
    axios({
      method: "post",
      url: `${apiUrl}/group`,
      data: groupObj,
      headers: { "Content-Type": "application/json; charset=utf-8" }
    })
      .then(response => {
        dispatch(toggleLoading(false));
        dispatch(getUserDetails(navigate));
      })
      .catch(error => {});
  };
}

export function getGroup(groupCode) {
  return dispatch => {
    axios({
      method: "get",
      url: `${apiUrl}/group/${groupCode}`,
      headers: { "Content-Type": "application/json; charset=utf-8" }
    })
      .then(response => {
        let {
          data: { group }
        } = response;
        console.log(group);
        dispatch(setGroup(group));
      })
      .catch(error => {});
  };
}
export function joinGroup(code) {
  console.log(code);
  return dispatch => {
    axios({
      method: "post",
      data: { code },
      url: `${apiUrl}/group/join`,
      headers: { "Content-Type": "application/json; charset=utf-8" }
    })
      .then(response => {
        let {
          data: { group }
        } = response;
        console.log(group);
        dispatch(setGroup(group));
      })
      .catch(error => {});
  };
}
export function start(code) {
  console.log("startinggg");
  return dispatch => {
    axios({
      method: "post",
      data: { code },
      url: `${apiUrl}/group/start`,
      headers: { "Content-Type": "application/json; charset=utf-8" }
    })
      .then(response => {
        let {
          data: { group }
        } = response;
        console.log("group startedddddd", group);
        dispatch(setGroup(group));
      })
      .catch(error => {});
  };
}

export function viewSchedule(schedule, navigate) {
  console.log("viewing schedule");
  return dispatch => {
    dispatch(setSchedule(schedule));
    navigate("SchedulePage");
  };
}

export function searchGroup(groupCode, navigate) {
  console.log("starting to search yabishh");
  return dispatch => {
    dispatch(toggleLoading(true));
    axios({
      method: "get",
      url: `${apiUrl}/group/${groupCode}`,
      headers: { "Content-Type": "application/json; charset=utf-8" }
    })
      .then(response => {
        let {
          data: { group }
        } = response;
        console.log(group);
        dispatch(toggleLoading(false));
        if (group) {
          dispatch(setGroup(group));
          navigate("HomePage");
        }
      })
      .catch(error => {
        dispatch(toggleLoading(false));
      });
  };
}
