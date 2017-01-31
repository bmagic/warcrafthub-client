import React from 'react'
import './CharacterView.scss'
import CharacterTitle from './CharacterTitle'

export const CharacterView = (props) => {
  if (props.character.isLoading === false && props.character.hasError === false) {
    return (
      <div>
        <CharacterTitle
          region={props.character.data.region}
          realm={props.character.data.realm}
          name={props.character.data.name}
          faction={1}
          class_={11} />
      </div>
    )
  } else {
    return null
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
  })
}

export default CharacterView
