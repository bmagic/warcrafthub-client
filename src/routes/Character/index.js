import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'character/:region/:realm/:name',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
     and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
       dependencies for bundling   */
      const Character = require('./containers/CharacterContainer').default
      const reducer = require('./modules/character').default
      const actions = require('./modules/character').actions
      const errorActions = require('../../store/errors').actions

      /*  Add the reducer to the store on key 'character'  */
      injectReducer(store, { key: 'character', reducer })

      store.dispatch(errorActions.resetErrorMessage())
      store.dispatch(actions.loadCharacter(nextState.params.region,nextState.params.realm,nextState.params.name))

      /*  Return getComponent   */
      cb(null, Character);

      /*store.dispatch(actions.fetchCharacter(nextState.params.region,nextState.params.realm,nextState.params.name)) // set global spinner
        .then(() => cb(null, Character)) // success, data loaded, render component
        .catch(cb) // return error to router (or render NotFoundComponent)*/

      /* Webpack named bundle   */
    }, 'character')
  }
})
