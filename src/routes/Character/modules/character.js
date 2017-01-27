// ------------------------------------
// Constants
// ------------------------------------
export const CHARACTER_FETCH = 'CHARACTER_FETCH'

// ------------------------------------
// Actions
// ------------------------------------
/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

export const fetchCharacter = (region,realm,name) => {
  return (dispatch) => {

    return fetch('https://api.warcrafthub.com/api/v1/characters/'+region+'/'+realm+'/'+name).then(
      function(response){
        response.json().then(function(character){
          dispatch({
            type    : CHARACTER_FETCH,
            payload : character
          })
        })

      }
    ),function(error){
      console.log("Error");
    }
  }
}

export const actions = {
  fetchCharacter,
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [CHARACTER_FETCH]    : (state, action) => action.payload,
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {}
export default function characterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
