import React from 'react'
import './CharacterItemIcon.scss'

export const CharacterItemIcon = (props) => {
  return (
    <div />
  )
}

CharacterItemIcon.defaultProps = {
  name: '',
  icon: '',
  region: 'eu',
  quality: 0
}

CharacterItemIcon.propTypes = {
  name: React.PropTypes.string,
  icon: React.PropTypes.string,
  region: React.PropTypes.string.isRequired,
  quality: React.PropTypes.number

}

export default CharacterItemIcon
