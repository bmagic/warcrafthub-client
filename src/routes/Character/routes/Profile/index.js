export default (store) => ({
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
     and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
       dependencies for bundling   */
      const PvE = require('./containers/Profile').default
      const actions = require('../../modules/character').actions

      store.dispatch(actions.loadCharacter(nextState.params.region, nextState.params.realm, nextState.params.name,
        ['items', 'averageItemLevel', 'averageItemLevelEquipped', 'thumbnail']))

      /*  Return getComponent   */
      cb(null, PvE)

      /* Webpack named bundle   */
    }, 'profile')
  }
})
