import React from 'react'
import './CharacterItemIcon.scss'
import classnames from 'classnames'

export const CharacterItemIcon = (props) => {
  return (
    <div className={classnames('character-item-icon', 'quality-' + props.quality, 'slot-' + props.slot)}>

      {props.icon &&
      <img className='item-icon'
        src={'http://' + props.region + '.media.blizzard.com/wow/icons/56/' + props.icon + '.jpg'}
        title={props.name} />
      }
      <span className='frame' />
    </div>
  )
}

CharacterItemIcon.defaultProps = {
  region: 'eu',
  quality: 0
}

CharacterItemIcon.propTypes = {
  name: React.PropTypes.string,
  icon: React.PropTypes.string,
  region: React.PropTypes.string.isRequired,
  quality: React.PropTypes.number,
  slot: React.PropTypes.string.isRequired
}

export default CharacterItemIcon
