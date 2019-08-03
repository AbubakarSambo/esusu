import { SET_GROUP, SET_SCHEDULE } from "../constants";

export function setGroup(
  state = { admin: {}, members: [], paymentSchedule: [] },
  action
) {
  switch (action.type) {
    case SET_GROUP:
      return action.group;
    default:
      return state;
  }
}

export function setSchedule(state = {}, action) {
  switch (action.type) {
    case SET_SCHEDULE:
      return action.schedule;
    default:
      return state;
  }
}
