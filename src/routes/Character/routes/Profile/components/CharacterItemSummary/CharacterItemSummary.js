import React from 'react'
import { Panel, Row, Col } from 'react-bootstrap'
import ColoredItemIlvl from '../../../../../../components/ColoredItemIlvl'
import CharacterT19Count from '../CharacterT19Count'
import 'font-awesome/scss/font-awesome.scss'
import './CharacterItemSummary.scss'

export const CharacterItemSummary = (props) => (

  <div className='character-item-stats'>
    <Panel>
      <Row>
        <Col md={12}>
          iLvl: <ColoredItemIlvl ilvl={props.averageItemLevelEquipped} />
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          iLvl bag: <ColoredItemIlvl ilvl={props.averageItemLevel} />
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          T19 parts: <CharacterT19Count items={props.items} class={props.class} />
        </Col>
      </Row>
    </Panel>
  </div>
)

CharacterItemSummary.defaultProps = {
  averageItemLevel: 0,
  averageItemLevelEquipped: 0,
  items:{},
  class:0
}

CharacterItemSummary.propTypes = {
  averageItemLevel: React.PropTypes.number,
  averageItemLevelEquipped: React.PropTypes.number,
  items: React.PropTypes.object.isRequired,
  class:React.PropTypes.number.isRequired
}

export default CharacterItemSummary
