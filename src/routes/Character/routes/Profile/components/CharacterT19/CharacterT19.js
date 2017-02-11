import React from 'react'
import { Panel, Row, Col } from 'react-bootstrap'
import classnames from 'classnames'
import WowheadItemLink from '../../../../../../components/WowheadItemLink'

import './CharacterT19.scss'

export const CharacterT19 = (props) => {
  let count = 0
  const t19 = {
    1: 'Obsidian Aspect',
    2: 'Highlord',
    3: 'Eagletalon',
    4: 'Doomblade',
    5: 'Purifier',
    6: 'Dreadwyrm',
    7: 'Shackled Elements',
    8: 'Everburning Knowledge',
    9: "Azj'Aqir",
    10: 'Enveloped Dissonance',
    11: 'Astral Warden',
    12: 'Second Sight'
  }
  var results = []
  Object.keys(props.items).map(function (slot) {
    var item = props.items[slot]
    if (item.name && item.name.indexOf(t19[props.class]) >= 0) {
      results.push(
        <div key={item.id}>
          <Row>
            <Col xs={12}>
              <span className='slot'>{slot}:</span>&nbsp;
              <WowheadItemLink id={item.id} bonusLists={item.bonusLists} enchant={item.enchant} gems={item.gems}>
                <span className={classnames('quality-' + item.quality)}>{item.name}</span>
              </WowheadItemLink>

            </Col>
          </Row>
        </div>
      )
      count++
    }
  })

  return (
    <Panel className='character-t19'>
      <h2>
        T19&nbsp;
        {count <= 1 &&
          <span>({count} part)</span>
        }
        {count > 1 &&
        <span>({count} parts)</span>
        }
      </h2>
      {results}
    </Panel>
  )
}

CharacterT19.defaultProps = {
  items: {}

}
CharacterT19.propTypes = {
  items: React.PropTypes.object.isRequired,
  class: React.PropTypes.number.isRequired
}

export default CharacterT19
