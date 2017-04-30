import React from 'react'
import { Panel, Row, Col } from 'react-bootstrap'
import classnames from 'classnames'
import WowheadSpellLink from '../../../../../../components/WowheadSpellLink'
import WowheadItemLink from '../../../../../../components/WowheadItemLink'

import './CharacterItemsAudit.scss'

export const CharacterItemsAudit = (props) => {
  const neckEnchants = {
    5891: {
      id: 228410,
      name: 'Mark of the Ancient Priestess'
    },
    5437: {
      id: 191023,
      name: 'Mark of the Claw'
    },
    5438: {
      id: 191024,
      name: 'Mark of the Distant Army'
    },
    5889: {
      id: 228404,
      name: 'Mark of the Heavy Hide'
    },
    5439: {
      id: 191025,
      name: 'Mark of the Hidden Satyr'
    },
    5890: {
      id: 228407,
      name: 'Mark of the Trained Soldier'
    }
  }

  const backEnchants = {
    5435: {
      id: 191021,
      name: 'Binding of Agility',
      level: 'high'
    },
    5436: {
      id: 191022,
      name: 'Binding of Intellect',
      level: 'high'
    },
    5434: {
      id: 191020,
      name: 'Binding of Strength',
      level: 'high'
    },
    5432: {
      id: 191018,
      name: 'Word of Agility',
      level: 'low'
    },
    5433: {
      id: 191019,
      name: 'Word of Intellect',
      level: 'low'
    },
    5431: {
      id: 191017,
      name: 'Word of Strength',
      level: 'low'
    }
  }

  const ringEnchants = {
    5427: {
      id: 191013,
      name: 'Binding of Critical Strike',
      level: 'high'
    },
    5428: {
      id: 191014,
      name: 'Binding of Haste',
      level: 'high'
    },
    5429: {
      id: 191015,
      name: 'Binding of Mastery',
      level: 'high'
    },
    5430: {
      id: 191016,
      name: 'Binding of Versatility',
      level: 'high'
    },
    5423: {
      id: 191009,
      name: 'Word of Critical Strike',
      level: 'low'
    },
    5424: {
      id: 191010,
      name: 'Word of Haste',
      level: 'low'
    },
    5425: {
      id: 191011,
      name: 'Word of Mastery',
      level: 'low'
    },
    5426: {
      id: 191012,
      name: 'Word of Versatility',
      level: 'low'
    }
  }

  const gemsList = {
    130215: {
      quality: 2,
      name: 'Deadly Deep Amber'
    },
    130216: {
      quality: 2,
      name: 'Quick Azsunite'
    },
    130217: {
      quality: 2,
      name: 'Versatile Skystone'
    },
    130218: {
      quality: 2,
      name: 'Masterful Queen\'s Opal'
    },
    130219: {
      quality: 3,
      name: 'Deadly Eye of Prophecy'
    },
    130220: {
      quality: 3,
      name: 'Quick Dawnlight'
    },
    130221: {
      quality: 3,
      name: 'Versatile Maelstrom Sapphire'
    },
    130222: {
      quality: 3,
      name: 'Masterful Shadowruby'
    },
    130246: {
      quality: 4,
      name: 'Saber\'s Eye of Strength'
    },
    130247: {
      quality: 4,
      name: 'Saber\'s Eye of Agility'
    },
    130248: {
      quality: 4,
      name: 'Saber\'s Eye of Intellect'
    }
  }

  let enchants = []
  let gems = []
  Object.keys(props.items).map(function (slot) {
    var item = props.items[slot]
    if (slot === 'neck') {
      let neckEnchant = neckEnchants[item.enchant]
      enchants.push(
        <div key={'enchant' + slot}>
          <Row>
            <Col xs={12}>
              {neckEnchant &&
              <i className='fa fa-check' aria-hidden='true' />
              }
              {!neckEnchant &&
              <i className='fa fa-times' aria-hidden='true' />
              }
              <span className='slot'>{slot}:&nbsp;</span>Neck:&nbsp;
              {neckEnchant &&
              <WowheadSpellLink id={neckEnchant.id}>
                <span className='quality-0'>{neckEnchant.name}</span>
              </WowheadSpellLink>
              }
              {!neckEnchant &&
              <span>missing</span>
              }
            </Col>
          </Row>
        </div>
      )
    }

    if (slot === 'back') {
      let backEnchant = backEnchants[item.enchant]
      enchants.push(
        <div key={'enchant' + slot}>
          <Row>
            <Col xs={12}>
              {backEnchant && backEnchant.level === 'high' &&
              <i className='fa fa-check' aria-hidden='true' />
              }
              {backEnchant && backEnchant.level !== 'high' &&
              <i className='fa fa-times orange' aria-hidden='true' />
              }
              {!backEnchant &&
              <i className='fa fa-times' aria-hidden='true' />
              }
              <span className='slot'>{slot}:&nbsp;</span>
              { backEnchant &&
              <WowheadSpellLink id={backEnchant.id}>
                <span className='quality-0'>{backEnchant.name}</span>
              </WowheadSpellLink>
              }
              {backEnchant && backEnchant.level !== 'high' &&
              <span> (low enchant)</span>
              }
              {!backEnchant &&
              <span>missing</span>
              }
            </Col>
          </Row>
        </div>
      )
    }

    if (slot === 'finger1' || slot === 'finger2') {
      let ringEnchant = ringEnchants[item.enchant]
      enchants.push(
        <div key={'enchant' + slot}>
          <Row>
            <Col xs={12}>
              {ringEnchant && ringEnchant.level === 'high' &&
              <i className='fa fa-check' aria-hidden='true' />
              }
              {ringEnchant && ringEnchant.level !== 'high' &&
              <i className='fa fa-times orange' aria-hidden='true' />
              }
              {!ringEnchant &&
              <i className='fa fa-times' aria-hidden='true' />
              }
              <span className='slot'>{slot}:&nbsp;</span>
              { ringEnchant &&
              <WowheadSpellLink id={ringEnchant.id}>
                <span className='quality-0'>{ringEnchant.name}</span>
              </WowheadSpellLink>
              }
              {ringEnchant && ringEnchant.level !== 'high' &&
              <span> (low enchant)</span>
              }
              {!ringEnchant &&
              <span>missing</span>
              }
            </Col>
          </Row>
        </div>
      )
    }
    if (item.gems && item.gems.length > 0 && slot !== 'mainHand') {
      let gem = gemsList[item.gems[0]]
      gems.push(
        <div key={'gem' + slot}>
          <Row>
            <Col xs={12}>
              {gem && gem.quality >= 3 &&
              <i className='fa fa-check' aria-hidden='true' />
              }
              {gem && gem.quality < 3 &&
              <i className='fa fa-times orange' aria-hidden='true' />
              }
              {!gem &&
              <i className='fa fa-times' aria-hidden='true' />
              }
              <span className='slot'>{slot}:&nbsp;</span>
              { gem &&
              <WowheadItemLink id={item.gems[0]}>
                <span className={classnames('quality-' + gem.quality)}>{gem.name}</span>
              </WowheadItemLink>
              }
              {gem && gem.quality < 3 &&
              <span> (low gem)</span>
              }
              {!gem &&
              <span>missing</span>
              }
            </Col>
          </Row>
        </div>
      )
    }
    if (item.gems && item.gems.length === 0 && item.bonusLists && item.bonusLists.indexOf(565) !== -1) {
      gems.push(
        <div key={'gem' + slot}>
          <Row>
            <Col xs={12}>
              <i className='fa fa-times' aria-hidden='true' />
              <span className='slot'>{slot}:&nbsp;</span>
              <span>missing</span>
            </Col>
          </Row>
        </div>
      )
    }
  })

  return (
    <div className='character-items-audit'>
      <Panel >
        <h2>Enchants</h2>
        <div className='list'>
          {enchants}
        </div>
      </Panel>
      {gems &&
      <Panel >
        <h2>Gems</h2>
        <div className='list'>
          {gems}
        </div>
      </Panel>
      }
    </div>
  )
}

CharacterItemsAudit.defaultProps = {
  items: {}
}

CharacterItemsAudit.propTypes = {
  items: React.PropTypes.object.isRequired

}

export default CharacterItemsAudit
