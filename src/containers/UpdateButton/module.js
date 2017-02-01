import { CALL_API } from 'redux-api-middleware'
import config from '../../config'
import { LOCATION_CHANGE } from '../../store/location'

// ------------------------------------
// Constants
// ------------------------------------
export const UPDATE_REQUEST = 'UPDATE_REQUEST'
export const UPDATE_SUCCESS = 'UPDATE_SUCCESS'
export const UPDATE_FAILURE = 'UPDATE_FAILURE'

// ------------------------------------
// Actions
// ------------------------------------
const fetchUpdate = (type, region, realm, name) => ({
  [CALL_API]: {
    types: [UPDATE_REQUEST, UPDATE_SUCCESS, UPDATE_FAILURE],
    endpoint: config.API_ROOT + `updates`,
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ type: type, region: region, realm: realm, name: name })
  }
})

export const postUpdate = (type, region, realm, name) => (dispatch) => {
  return dispatch(fetchUpdate(type, region, realm, name))
}

export const actions = {
  postUpdate
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [UPDATE_REQUEST]: (state) => {
    return Object.assign({}, state, { isLoading: true, hasError: false })
  },
  [UPDATE_SUCCESS]: (state, action) => {
    return Object.assign({}, state, { isLoading: false }, { count: action.payload.count })
  },
  [UPDATE_FAILURE]: (state) => {
    return Object.assign({}, state, { isLoading: false, hasError: true })
  },
  [LOCATION_CHANGE]: (state) => {
    return Object.assign({}, state, initialState)
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = { isLoading: false, count: null, hasError: false }
export default function updateReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
