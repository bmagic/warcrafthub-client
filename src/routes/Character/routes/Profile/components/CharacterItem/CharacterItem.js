import React from 'react'
import { Media } from 'react-bootstrap'
import classnames from 'classnames'
import WowheadItemLink from '../../../../../../components/WowheadItemLink'
import CharacterItemIcon from '../CharacterItemIcon'
import './CharacterItem.scss'

export const CharacterItem = (props) => (
  <div className={classnames('character-item', props.side)}>
    <Media>
      {props.side === 'left' &&
      <Media.Left align='top'>
        <WowheadItemLink id={props.item.id} bonusLists={props.item.bonusLists} enchant={props.item.enchant}
          gems={props.item.gems}>
          <CharacterItemIcon region={props.region} icon={props.item.icon} name={props.item.name}
            quality={props.item.quality} slot={props.slot} />
        </WowheadItemLink>
      </Media.Left>
      }
      <Media.Body>
        <Media.Heading>
          <div className={classnames('quality-' + props.item.quality)}>
            <WowheadItemLink id={props.item.id} bonusLists={props.item.bonusLists} enchant={props.item.enchant}
              gems={props.item.gems}>
              {props.item.name}
            </WowheadItemLink>
          </div>
        </Media.Heading>
        {props.item.itemLevel !== 0 &&
        <div>
          <strong>{props.item.itemLevel}</strong>
        </div>}
      </Media.Body>
      {props.side === 'right' &&
      <Media.Right align='top'>
        <WowheadItemLink id={props.item.id} bonusLists={props.item.bonusLists} enchant={props.item.enchant}
          gems={props.item.gems}>
          <CharacterItemIcon region={props.region} icon={props.item.icon} name={props.item.name}
            quality={props.item.quality} slot={props.slot} />
        </WowheadItemLink>
      </Media.Right>
      }
    </Media>
  </div>
)

CharacterItem.defaultProps = {
  item: {
    quality: 0,
    id: 0,
    bonusLists: [],
    icon: '',
    name: '',
    itemLevel: 0
  },
  slot: '',
  side: '',
  region: ''
}

CharacterItem.propTypes = {
  item: React.PropTypes.object,
  slot: React.PropTypes.string.isRequired,
  side: React.PropTypes.string.isRequired,
  region: React.PropTypes.string.isRequired
}

export default CharacterItem
