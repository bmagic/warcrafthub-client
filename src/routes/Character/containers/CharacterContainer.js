import {connect} from 'react-redux'
import {fetchCharacter} from '../modules/character'


import CharacterView from '../components/CharacterView'

const mapDispatchToProps = {
  fetchCharacter
}

const mapStateToProps = (state) => ({
  character: state.character,
  errors:state.errors
})

export default connect(mapStateToProps, mapDispatchToProps)(CharacterView)
