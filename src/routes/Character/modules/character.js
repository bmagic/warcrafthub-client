import { CALL_API } from 'redux-api-middleware'
import config from '../../../config'

// ------------------------------------
// Constants
// ------------------------------------
export const CHARACTER_REQUEST = 'CHARACTER_REQUEST'
export const CHARACTER_SUCCESS = 'CHARACTER_SUCCESS'
export const CHARACTER_FAILURE = 'CHARACTER_FAILURE'

// ------------------------------------
// Actions
// ------------------------------------
const fetchCharacter = (region, realm, name) => ({
  [CALL_API]: {
    types: [CHARACTER_REQUEST, CHARACTER_SUCCESS, CHARACTER_FAILURE],
    endpoint: config.API_ROOT + `characters/${region}/${realm}/${name}` +
    `?items=items,averageItemLevel,averageItemLevelEquipped`,
    method: 'GET'
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
    return Object.assign({}, state, { isLoading: true, hasError: false })
  },
  [CHARACTER_SUCCESS]: (state, action) => {
    return Object.assign({}, state, { isLoading: false }, { data: action.payload })
  },
  [CHARACTER_FAILURE]: (state) => {
    return Object.assign({}, state, { isLoading: false, hasError: true })
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = { isLoading: false, data: undefined, hasError: false }
export default function characterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
