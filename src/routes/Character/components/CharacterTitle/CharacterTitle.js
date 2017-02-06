import React from 'react'
import classNames from 'classnames'
import './CharacterTitle.scss'
import horde from './assets/horde.png'
import alliance from './assets/alliance.png'
import { Media } from 'react-bootstrap'

export const CharacterTitle = (props) => (
  <div className='character-title'>
    <div className='container'>
      <Media>
        <Media.Left>
          {props.faction === 0 &&
          <img src={alliance} />
          }
          {props.faction === 1 &&
          <img src={horde} />
          }
        </Media.Left>
        <Media.Body>
          <Media.Heading className={classNames('class-' + props.class_)} componentClass='h1'>
            {props.name}
          </Media.Heading>
          <h2>{props.region.toUpperCase()}-{props.realm}</h2>
        </Media.Body>
      </Media>
    </div>
  </div>
)

CharacterTitle.propTypes = {
  region: React.PropTypes.string.isRequired,
  realm: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  faction: React.PropTypes.number.isRequired,
  class_: React.PropTypes.number.isRequired,
  level: React.PropTypes.number
}

export default CharacterTitle
