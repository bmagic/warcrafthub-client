import React from 'react'
import classNames from 'classnames'
import './CharacterTitle.scss'
import horde from './assets/horde.png'
import alliance from './assets/alliance.png'

import { Row, Col } from 'react-bootstrap'

export const CharacterTitle = (props) => (
  <div className='character-title'>
    <div className='container'>
      <Row>
        <Col xs={4} sm={3} md={2} lg={1} >
          {props.faction === 0 &&
          <img src={alliance} className='img-responsive' />
          }
          {props.faction === 1 &&
          <img src={horde} className='img-responsive' />
          }
        </Col>
        <Col xs={8} sm={9} md={10} lg={11}>
          <h1 className={classNames('class-' + props.class_)}>{props.name}</h1>
          <h2 className={classNames('faction-' + props.faction)}>{props.region.toUpperCase()}-{props.realm}</h2>
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
  class_: React.PropTypes.number.isRequired
}

export default CharacterTitle
