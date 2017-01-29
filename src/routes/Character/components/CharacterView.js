import React from 'react'
import './CharacterView.scss'
import CharacterTitle from './CharacterTitle'


class CharacterView extends React.Component {

  render() {
    const {character} = this.props;
    console.log(character);
    return (
      <div>
        <CharacterTitle region={character.region} realm={character.realm} name={character.name} faction={1} class_={11}/>

      </div>
    )
  }
}


export default CharacterView
