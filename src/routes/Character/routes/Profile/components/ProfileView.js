import React from 'react'
import {Row, Col } from 'react-bootstrap'
import CharacterItems from './CharacterItems'
import CharacterItemStats from './CharacterItemStats'

export const ProfileView = (props) => {
  return (
    <div className='character-profile'>
      <Row>
        <Col md={12}>
          <CharacterItemStats averageItemLevel={props.character.data.averageItemLevel} averageItemLevelEquipped={props.character.data.averageItemLevelEquipped}/>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <CharacterItems items={props.character.data.items} region={props.character.data.region} />
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
