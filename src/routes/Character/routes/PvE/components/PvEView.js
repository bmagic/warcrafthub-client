import React from 'react'
import { Row, Col } from 'react-bootstrap'

import CharacterRaidProgress from './CharacterRaidProgress'

export const PvEView = (props) => {
  if (props.character && props.character.data && props.character.data.progression) {
    return (<div className='pve-view'>
      <Row>
        <Col md={12}>
          <CharacterRaidProgress
            name='The Nighthold'
            raid={props.character.data.progression['The Nighthold']} />
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <CharacterRaidProgress
            name='Trial of Valor'
            raid={props.character.data.progression['Trial of Valor']} />
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <CharacterRaidProgress
            name='The Emerald Nightmare'
            raid={props.character.data.progression['The Emerald Nightmare']} />
        </Col>
      </Row>
    </div>)
  } else {
    return null
  }
}

PvEView.propTypes = {
  character: React.PropTypes.shape({
    isLoading: React.PropTypes.bool.isRequired,
    hasError: React.PropTypes.bool.isRequired,
    data: React.PropTypes.object
  })
}

export default PvEView
