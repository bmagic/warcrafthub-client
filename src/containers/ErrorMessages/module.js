import { LOCATION_CHANGE } from '../../store/location'
// ------------------------------------
// Reducer
// ------------------------------------
const initialState = []
export default function errorReducer (state = initialState, action) {
  if (action.type.indexOf('_FAILURE') !== -1) {
    return [...state, action.payload.statusText]
  } else if (action.type === LOCATION_CHANGE) {
    return initialState
  } else {
    return state
  }
}

