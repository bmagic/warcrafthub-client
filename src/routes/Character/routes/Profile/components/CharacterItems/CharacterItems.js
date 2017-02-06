import React from 'react'
import { Row, Col } from 'react-bootstrap'
import CharacterItem from '../CharacterItem'
import './CharacterItems.scss'

class CharacterItems extends React.Component {
  render () {
    const itemsLeftKeys = ['head', 'neck', 'shoulder', 'back', 'chest', 'shirt', 'tabard', 'wrist', 'mainHand']
    const itemsRightKeys = ['hands', 'waist', 'legs', 'feet', 'finger1', 'finger2', 'trinket1', 'trinket2', 'offHand']
    const itemsLeft = []
    const itemsRight = []

    const items = this.props.items
    const region = this.props.region
    if (items === undefined) { return null }
    itemsLeftKeys.forEach(function (key) {
      itemsLeft.push(<CharacterItem key={key} region={region} slot={key} item={items[key]} />)
    })

    itemsRightKeys.forEach(function (key) {
      itemsRight.push(<CharacterItem key={key} region={region} slot={key} item={items[key]} />)
    })

    return (
      <div className='character-items'>
        <Row>
          <Col md={6} className='left'>
            {itemsLeft}
          </Col>
          <Col md={6} className='right'>
            {itemsRight}
          </Col>
        </Row>
      </div>
    )
  }
}

CharacterItems.propTypes = {
  items: React.PropTypes.object,
  region: React.PropTypes.string.isRequired
}

export default CharacterItems
