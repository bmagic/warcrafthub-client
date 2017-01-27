import React from 'react'
import './CharacterView.scss'


class CharacterView extends React.Component {

  render(){
   const { params,character } = this.props
    return(
      <div>
        <h4>Character</h4>
        {character.region}/{character.realm}/{character.name}


      </div>
    )
  }
}


export default CharacterView
