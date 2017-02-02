import { connect } from 'react-redux'

import PvEView from '../components/PvEView'

const mapDispatchToProps = {

}

const mapStateToProps = (state) => ({
  character: state.character
})

export default connect(mapStateToProps, mapDispatchToProps)(PvEView)
