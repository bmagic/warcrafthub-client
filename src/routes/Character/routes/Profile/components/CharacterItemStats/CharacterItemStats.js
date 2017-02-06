import React from 'react'
import {Panel} from 'react-bootstrap'
import './CharacterItemStats.scss'

export const CharacterItemStats = (props) => (
  <div className="character-item-stats">
    <Panel>
      {props.averageItemLevel}
      {props.averageItemLevelEquipped}
    </Panel>
  </div>
)

CharacterItemStats.propTypes = {
  averageItemLevel: React.PropTypes.number.isRequired,
  averageItemLevelEquipped: React.PropTypes.number.isRequired
}

export default CharacterItemStats
