import React from 'react'
import { Media } from 'react-bootstrap'
import classnames from 'classnames'
import './CharacterItem.scss'

export const CharacterItem = (props) => (
  <div className={classnames('character-item', props.side)}>
    <Media>
      {props.side === 'left' &&
      <Media.Left align='top'>
        <a href={'//www.wowhead.com/item=' + props.item.id}
          rel={'bonus=' + props.item.bonusLists.join(':')}>
          <img
            src={'http://' + props.region + '.media.blizzard.com/wow/icons/56/' + props.item.icon + '.jpg'}
            title={props.item.name} />
          <span className={classnames('frame', 'quality-' + props.item.quality)} />
        </a>
      </Media.Left>
      }
      <Media.Body>
        <Media.Heading>
          <div className={classnames('quality-' + props.item.quality)}>
            <a href={'//www.wowhead.com/item=' + props.item.id}
              rel={'bonus=' + props.item.bonusLists.join(':')}>
              {props.item.name}

            </a>
          </div>

        </Media.Heading>
        <div>{props.item.itemLevel}</div>
      </Media.Body>
      {props.side === 'right' &&
      <Media.Right align='top'>
        <a href={'//www.wowhead.com/item=' + props.item.id}
          rel={'bonus=' + props.item.bonusLists.join(':')}>
          <img
            src={'http://' + props.region + '.media.blizzard.com/wow/icons/56/' + props.item.icon + '.jpg'}
            title={props.item.name} />
          <span className={classnames('frame', 'quality-' + props.item.quality)} />
        </a>
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
    name: 'n/a',
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
