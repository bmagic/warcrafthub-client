import React from 'react'
import {Panel, Row, Col} from 'react-bootstrap'
import ColoredItemIlvl from '../../../../../../components/ColoredItemIlvl'
import 'font-awesome/scss/font-awesome.scss'
import './CharacterItemStats.scss'

export const CharacterItemStats = (props) => (

  <div className='character-item-stats'>
    <Panel>
      <Row>
        <Col md={6}>
          <h2><i className="fa fa-file-image-o" aria-hidden="true"/> Items</h2>
        </Col>
        {/*<Col md={3}>*/}
          {/*iLvl: <ColoredItemIlvl ilvl={props.averageItemLevelEquipped}/>*/}
        {/*</Col>*/}
        {/*<Col md={3}>*/}
          {/*iLvl bag: <ColoredItemIlvl ilvl={props.averageItemLevel}/>*/}
        {/*</Col>*/}
      </Row>
    </Panel>
  </div>
)


CharacterItemStats.propTypes = {
  averageItemLevel: React.PropTypes.number.isRequired,
  averageItemLevelEquipped: React.PropTypes.number.isRequired
}

export default CharacterItemStats
