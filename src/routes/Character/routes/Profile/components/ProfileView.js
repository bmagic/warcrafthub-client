import React from 'react'
import { Row, Col,Panel } from 'react-bootstrap'
import CharacterItems from './CharacterItems'
import CharacterItemStats from './CharacterItemStats'

export const ProfileView = (props) => {
  return (
    <div className='character-profile'>
      <Row>
        <Col md={6}>
          <Panel>
            <div>Ilvl: 864</div>
            <div>Ilvl bag: 861</div>
            <div>Artifact Rank: 54</div>
            <div>T19: 2</div>
          </Panel>

        </Col>
        <Col md={6}>
          <Panel>
            <div>Audit</div>
            <div>Wrong on head</div>
            <div>Ok on feet</div>
            <div>Low gem on feet</div>
            <div>Missing enchant on chest</div>
          </Panel>

        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Panel>
            <h3>Items</h3>
          </Panel>
          {/*<CharacterItemStats averageItemLevel={props.character.data.averageItemLevel}*/}
            {/*averageItemLevelEquipped={props.character.data.averageItemLevelEquipped} />*/}
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <CharacterItems items={props.character.data.items} region={props.character.data.region} />
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Panel>
            <h3>Artefact Ranks</h3>
          </Panel>
          Le tableau des points artefact ici
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Panel>
            <h3>Event</h3>
          </Panel>
          On affiche ici sa montée en level le jour ou on l'a et ses changements de guildes
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
