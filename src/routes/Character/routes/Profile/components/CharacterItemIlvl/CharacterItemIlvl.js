import React from 'react'
import { Panel } from 'react-bootstrap'

import './CharacterItemIlvl.scss'

export const CharacterItemIlvl = (props) => (

  <div className='character-item-ilvl'>
    <Panel>
      <div className='left'>
        {props.averageItemLevel}
      </div>
      <div className='right'>
        <div>average item level</div>
        <div>(<strong>{props.averageItemLevelEquipped}</strong> equipped)</div>
      </div>
    </Panel>
  </div>
)

CharacterItemIlvl.defaultProps = {
  averageItemLevel: 0,
  averageItemLevelEquipped: 0
}

CharacterItemIlvl.propTypes = {
  averageItemLevel: React.PropTypes.number.isRequired,
  averageItemLevelEquipped: React.PropTypes.number.isRequired
}

export default CharacterItemIlvl
