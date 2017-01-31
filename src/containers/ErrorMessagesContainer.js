import { connect } from 'react-redux'

import ErrorMessages from '../components/ErrorMessages'

const mapDispatchToProps = {}

const mapStateToProps = (state) => ({
  errors: state.errors
})

export default connect(mapStateToProps, mapDispatchToProps)(ErrorMessages)
