import { TOGGLE_LOADING } from '../constants'


export function loadingReducer(state = false, action) {
    switch (action.type) {
        case TOGGLE_LOADING:
          return action.loading
        default:
          return state
      }
}