// ------------------------------------
// Constants
// ------------------------------------
export const CHARACTER_FETCH_REQUEST = 'CHARACTER_FETCH_REQUEST'
export const CHARACTER_FETCH_SUCCESS = 'CHARACTER_FETCH_SUCCESS'

// ------------------------------------
// Actions
// ------------------------------------
/*  This is a thunk, meaning it is a function that immediately
 returns a function for lazy evaluation. It is incredibly useful for
 creating async actions, especially when combined with redux-thunk! */

export const fetchCharacter = (region, realm, name) => {
  return (dispatch) => {
    dispatch({
      type: CHARACTER_FETCH_REQUEST
    });
    fetch('https://api.warcrafthub.com/api/v1/characters/' + region + '/' + realm + '/' + name)
      .then(response => {
        response.json()
          .then(character => {
            dispatch({
              type: CHARACTER_FETCH_SUCCESS,
              payload: character
            })
          })
      })
      .catch(err => {
        console.log(err);
      })
  }
}

export const actions = {
  fetchCharacter
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [CHARACTER_FETCH_REQUEST]: (state) => {
    return Object.assign({}, state, { isLoading: true })
  },
  [CHARACTER_FETCH_SUCCESS]: (state, action) => {
    return Object.assign({}, state, { isLoading: false },{data:action.payload})
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {isLoading: false, data: undefined, hasError: false}
export default function characterReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
