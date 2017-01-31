// ------------------------------------
// Constants
// ------------------------------------
export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE'

// ------------------------------------
// Actions
// ------------------------------------
export function resetErrorMessage () {
  return {
    type: RESET_ERROR_MESSAGE
  }
}

export const actions = {
  resetErrorMessage
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = []
export default function errorReducer (state = initialState, action) {
  if (action.type.indexOf('_FAILURE') !== -1) {
    return [...state, action.error]
  } else if (action.type === RESET_ERROR_MESSAGE) {
    return []
  } else {
    return state
  }
}

