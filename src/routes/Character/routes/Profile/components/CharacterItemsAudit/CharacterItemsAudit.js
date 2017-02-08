import React from 'react'
import { Panel, Row, Col } from 'react-bootstrap'
import WowheadSpellLink from '../../../../../../components/WowheadSpellLink'
import 'font-awesome/scss/font-awesome.scss'
import './CharacterItemsAudit.scss'

export const CharacterItemsAudit = (props) => {
  const neckEnchant = [5891, 5437, 5438, 5889, 5439, 5890]
  const neckSpellID = {
    5439: {
      id: 190894,
      name: 'Mark of the Hidden Satyr'
    }
  }
  // const ringEnchantLow = [5423, 5424, 5425, 5426]
  // const ringEnchantHigh = [5427, 5428, 5429, 5430]
  // const backEnchantLow = [5431, 5432, 5433]
  const backEnchantHigh = [5434, 5435, 5436]

  // const gemLow = [130215, 130216, 130217, 130218]
  // const gemMedium = []
  // const gemHigh = [130219, 130220, 130221, 130222, 130246, 130247, 130248]

  var enchants = []
  Object.keys(props.items).map(function (key) {
    var item = props.items[key]
    if (key === 'neck') {
      if (neckEnchant.indexOf(item.enchant) === -1) {
        console.log('PAF ENCHANT')
      } else {
        let spell = neckSpellID[item.enchant]
        enchants.push(
          <div key={item.slot}>
            <Row>
              <Col xs='1'>
                <i className='fa fa-check' aria-hidden='true' />
              </Col>
              <Col xs='2'>
                Neck
              </Col>
              <Col xs='9'>
                <WowheadSpellLink id={spell.id} bonusLists={item.bonusLists} gems={item.gems} enchant={item.enchant}>
                  <span className='quality-0'>{spell.name}</span>
                </WowheadSpellLink>
              </Col>
            </Row>
          </div>
        )
      }
    }
    if (key === 'back' && backEnchantHigh.indexOf(item.enchant) === -1) {
      enchants.push(
        <div key={item.slot}>
          <Row>
            <Col xs='1'>
              <i className='fa fa-times' aria-hidden='true' />
            </Col>
            <Col xs='2'>
              Back
            </Col>
            <Col xs='9'>
              missing
            </Col>
          </Row>
        </div>
      )
    }
  })

  return (
    <Panel className='character-items-audit'>
      <p>
        <h2>Enchants</h2>
        {enchants}
      </p>
      <p>
        <h2>Gems</h2>
      </p>
    </Panel>
  )
}

CharacterItemsAudit.defaultProps = {
  items: {}
}

CharacterItemsAudit.propTypes = {
  items: React.PropTypes.object.isRequired

}

export default CharacterItemsAudit
