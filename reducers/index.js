import { combineReducers } from "redux";
import { loadingReducer } from "./auxilliary-reducer";
import { setUserGroup, setUser } from "./reducer-user";
import { setGroup, setSchedule } from "./reducer-group";

const allReducers = combineReducers({
  loading: loadingReducer,
  userGroup: setUserGroup,
  activeGroup: setGroup,
  activeSchedule: setSchedule,
  user: setUser
});

export default allReducers;
