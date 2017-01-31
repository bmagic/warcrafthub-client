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
          faction={props.character.data.faction}
          class_={props.character.data.class} />
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
      name: React.PropTypes.string.isRequired,
      faction: React.PropTypes.number.isRequired,
      class:React.PropTypes.number.isRequired
    })
  })
}

export default CharacterView
