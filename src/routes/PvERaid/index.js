import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'pve/raid/:region/:realm/:name',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
     and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
       dependencies for bundling   */
      const PveRaid = require('./containers/PveRaidContainer').default
      const reducer = require('./modules/pveRaid').default

      /*  Add the reducer to the store on key 'character'  */
      injectReducer(store, { key: 'character', reducer })

      /*  Return getComponent   */
      cb(null, PveRaid)

      /* Webpack named bundle   */
    }, 'pveRaid')
  }
})
