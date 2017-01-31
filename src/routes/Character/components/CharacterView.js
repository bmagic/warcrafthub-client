import React from 'react'
import './CharacterView.scss'
import CharacterTitle from './CharacterTitle'
import ErrorsMessage from '../../../components/ErrorsMessage'

export const CharacterView = (props) => {
  if (props.character.hasError === true) {
    return <ErrorsMessage errors={props.errors}/>
  } else if (props.character.isLoading === false) {
    return (
      <div>
        <CharacterTitle
          region={props.character.data.region}
          realm={props.character.data.realm}
          name={props.character.data.name}
          faction={1}
          class_={11}/>
        <ErrorsMessage errors={props.errors}/>
      </div>
    )
  }
  else {
    return null;
  }

}

CharacterView.propTypes = {
  character: React.PropTypes.shape({
    isLoading: React.PropTypes.bool.isRequired,
    hasError: React.PropTypes.bool.isRequired,
    data: React.PropTypes.shape({
      region: React.PropTypes.string.isRequired,
      realm: React.PropTypes.string.isRequired,
      name: React.PropTypes.string.isRequired
    })
  }),
  errors: React.PropTypes.array.isRequired
}

export default CharacterView
