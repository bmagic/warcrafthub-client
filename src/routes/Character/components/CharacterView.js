import React from 'react'
import './CharacterView.scss'
import CharacterTitle from './CharacterTitle'


export const CharacterView = (props) => {
  if (props.character.isLoading === true) {
    return <div><h1>Loading ...</h1></div>
  }
  else
    console.log(props.character.data)

  return (
    <div>
      <CharacterTitle
        region={props.character.data.region}
        realm={props.character.data.realm}
        name={props.character.data.name}
        faction={1}
        class_={11}/>
    </div>
  )
}


export default CharacterView
