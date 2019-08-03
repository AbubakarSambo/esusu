import { SET_USER_GROUP, SET_USER } from "../constants";

export function setUserGroup(state = {}, action) {
  switch (action.type) {
    case SET_USER_GROUP:
      return action.userGroup;
    default:
      return state;
  }
}

export function setUser(state = {}, action) {
  switch (action.type) {
    case SET_USER:
      return action.user;
    default:
      return state;
  }
}
