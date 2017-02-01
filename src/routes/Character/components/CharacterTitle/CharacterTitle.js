import React from 'react'
import classNames from 'classnames'
import './CharacterTitle.scss'
import horde from './assets/horde.png'
import alliance from './assets/alliance.png'

import {Row, Col, Media} from 'react-bootstrap'

export const CharacterTitle = (props) => (
  <div className='character-title'>
    <div className='container'>
      <div className="media">
        <div className="media-left media-middle">
          {props.faction === 0 &&
          <img src={alliance}/>
          }
          {props.faction === 1 &&
          <img src={horde}/>
          }
        </div>
        <div className="media-body">
          <h1 className={classNames('class-' + props.class_, "media-heading")}>{props.name}</h1>
          <h2>{props.region.toUpperCase()}-{props.realm}</h2>
          Guerrier Orc de level {props.level}
        </div>
      </div>
      <Row>
        <Col xs={4} sm={3} md={2} lg={1}>

        </Col>
        <Col xs={8} sm={9} md={10} lg={11}>

        </Col>
      </Row>
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
