import { connect } from 'react-redux'
import { postUpdate } from './module'

import UpdateButton from './UpdateButton'

const mapDispatchToProps = {
  postUpdate
}

const mapStateToProps = (state) => ({
  count: state.update.count
})

export default connect(mapStateToProps, mapDispatchToProps)(UpdateButton)
