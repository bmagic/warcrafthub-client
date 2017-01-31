import React from 'react'
import classNames from 'classnames'
import './CharacterTitle.scss'

export const CharacterTitle = (props) => (
  <div className='character-title'>
    <div className='container'>
      <h1 className={classNames('class-' + props.class_)}>{props.name}</h1>
      <h2>{props.region.toUpperCase()}/{props.realm}</h2>
    </div>
  </div>
)

CharacterTitle.propTypes = {
  region: React.PropTypes.string.isRequired,
  realm: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  faction: React.PropTypes.number.isRequired,
  class_: React.PropTypes.number.isRequired
}

export default CharacterTitle
