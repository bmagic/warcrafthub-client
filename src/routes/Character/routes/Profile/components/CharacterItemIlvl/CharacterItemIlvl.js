import React from 'react'
import './CharacterItemIlvl.scss'

export const CharacterItemIlvl = (props) => (

  <div className='character-item-ilvl'>
    <div className="left">
      {props.averageItemLevel}
    </div>
    <div className="right">
      <div>average item level</div>
      <div>(<strong>{props.averageItemLevelEquipped}</strong> equipped)</div>
    </div>
  </div>
)


CharacterItemIlvl.defaultProps={
  averageItemLevel: 0,
  averageItemLevelEquipped: 0,
}

CharacterItemIlvl.propTypes = {
  averageItemLevel: React.PropTypes.number.isRequired,
  averageItemLevelEquipped: React.PropTypes.number.isRequired,
}

export default CharacterItemIlvl
