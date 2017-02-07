import React from 'react'
import './CharacterBackground.scss'

export const CharacterBackground = (props) => {
  if (props.thumbnail.indexOf('avatar') === -1) {
    return (
      <div className='character-background'>
        {props.children}
      </div>
    )
  } else {
    const token = props.thumbnail.replace('avatar', 'profilemain')
    const url = 'http://render-' + props.region + '.worldofwarcraft.com/character/' + token +
      '?alt=/wow/static/images/2d/profilemain/race/' + props.race + '-0.jpg'
    return (
      <div className='character-background' style={{ backgroundImage: 'url(' + url + ')' }}>
        {props.children}
      </div>
    )
  }
}

CharacterBackground.defaultProps = {
  thumbnail: '',
  race: 0,
  region: 'eu'
}

CharacterBackground.propTypes = {
  thumbnail: React.PropTypes.string.isRequired,
  race: React.PropTypes.number.isRequired,
  region: React.PropTypes.string.isRequired,
  children: React.PropTypes.element.isRequired

}

export default CharacterBackground
