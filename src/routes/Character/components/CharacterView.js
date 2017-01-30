import React from 'react'
import './CharacterView.scss'
import CharacterTitle from './CharacterTitle'
import ErrorsMessage from '../../../components/ErrorsMessage'


export const CharacterView = (props) => {
  if (props.character.isLoading === true) {
    return <div>Loading ...</div>
  }
  else if (props.character.hasError === true) {
    return <ErrorsMessage errors={props.errors}/>
  } else
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


export default CharacterView
