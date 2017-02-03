import { connect } from 'react-redux'

import ProfileView from '../components/ProfileView'

const mapDispatchToProps = {

}

const mapStateToProps = (state) => ({
  character: state.character
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileView)
