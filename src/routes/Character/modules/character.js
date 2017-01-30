import {CALL_API} from '../../../middlewares/api'


// ------------------------------------
// Constants
// ------------------------------------
export const CHARACTER_REQUEST = 'CHARACTER_REQUEST'
export const CHARACTER_SUCCESS = 'CHARACTER_SUCCESS'
export const CHARACTER_FAILURE = 'CHARACTER_FAILURE'

// ------------------------------------
// Actions
// ------------------------------------
/*  This is a thunk, meaning it is a function that immediately
 returns a function for lazy evaluation. It is incredibly useful for
 creating async actions, especially when combined with redux-thunk! */


const fetchCharacter = (region, realm, name) => ({
  [CALL_API]: {
    types: [CHARACTER_REQUEST, CHARACTER_SUCCESS, CHARACTER_FAILURE],
    endpoint: `characters/${region}/${realm}/${name}`,
  }
})

export const loadCharacter = (region, realm, name) => (dispatch) => {
  return dispatch(fetchCharacter(region, realm, name))
}

export const actions = {
  loadCharacter
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [CHARACTER_REQUEST]: (state) => {
    return Object.assign({}, state, {isLoading: true, hasError: false})
  },
  [CHARACTER_SUCCESS]: (state, action) => {
    return Object.assign({}, state, {isLoading: false}, {data: action.response})
  },
  [CHARACTER_FAILURE]: (state, action) => {
    return Object.assign({}, state, {isLoading: false, hasError: true})
  },
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {isLoading: false, data: undefined, hasError: false}
export default function characterReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
