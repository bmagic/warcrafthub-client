import React from 'react'
import {Row, Col} from 'react-bootstrap'
import classnames from 'classnames'
import './CharacterItem.scss'

export const CharacterItem = (props) => (
  <div className={classnames('character-item',props.slot)}>
    <Row>
      <Col md={2}>
        {props.slot}
      </Col>
      <Col md={8}>
        {props.item &&
        <span className={classnames("quality-" + props.item.quality)}>
        <a href={"//www.wowhead.com/item=" + props.item.id} rel={"bonus=" + props.item.bonusLists.join(':')}><img
          src={"http://" + props.region + ".media.blizzard.com/wow/icons/18/" + props.item.icon + ".jpg"}
          title={props.item.name}/>{props.item.name}</a>
          </span>
        }
        {!props.item &&
        "n/a"
        }
      </Col>
      <Col md={2}>
        {props.item && props.item.itemLevel}
      </Col>
    </Row>
  </div>
)

CharacterItem.propTypes = {
  item: React.PropTypes.object,
  slot: React.PropTypes.string.isRequired,
  region: React.PropTypes.string.isRequired
}

export default CharacterItem
