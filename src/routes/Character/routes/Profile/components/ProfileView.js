import React from 'react'
import { Row, Col } from 'react-bootstrap'
import CharacterItems from './CharacterItems'
import CharacterItemIlvl from './CharacterItemIlvl'
import CharacterItemsAudit from './CharacterItemsAudit'
import CharacterT19 from './CharacterT19'

export const ProfileView = (props) => {
  return (
    <div className='character-profile'>
      <Row>
        <Col md={12} />
        <Col md={8}>
          <Row>
            <Col md={12}>
              <CharacterItems items={props.character.data.items} region={props.character.data.region}
                race={props.character.data.race} thumbnail={props.character.data.thumbnail} />
            </Col>
          </Row>
        </Col>
        <Col md={4}>
          <CharacterItemIlvl averageItemLevel={props.character.data.averageItemLevel}
            averageItemLevelEquipped={props.character.data.averageItemLevelEquipped} />
          <CharacterItemsAudit items={props.character.data.items} />
          <CharacterT19 items={props.character.data.items} class={props.character.data.class} />
          //TODO artefact power & Guild history
        </Col>
      </Row>
    </div>
  )
}

ProfileView.propTypes = {
  character: React.PropTypes.shape({
    isLoading: React.PropTypes.bool.isRequired,
    hasError: React.PropTypes.bool.isRequired,
    data: React.PropTypes.object
  })
}

export default ProfileView
