import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ErrorMessages from '../../../containers/ErrorMessages'
import CharacterTitle from './CharacterTitle'
import UpdateButton from '../../../containers/UpdateButton'
import 'font-awesome/scss/font-awesome.scss'

import './CharacterView.scss'
export const CharacterView = (props) => {
  if (props.character.isLoading === false && props.character.hasError === false && props.character.data) {
    return (
      <div className='character-view'>
        <CharacterTitle
          region={props.character.data.region}
          realm={props.character.data.realm}
          name={props.character.data.name}
          faction={props.character.data.faction}
          class_={props.character.data.class}
          level={props.character.data.level}
        />
        <div className='container content'>
          <ErrorMessages />
          <Row>
            <Col md={12}>
              <UpdateButton type='character' region={props.character.data.region} realm={props.character.data.realm}
                name={props.character.data.name}>
                <i className='fa fa-refresh' aria-hidden='true' /> Update character
              </UpdateButton>
            </Col>
          </Row>
        </div>
      </div>
    )
  } else if (props.character.hasError === true) {
    return (
      <div className='character-view'>
        <CharacterTitle
          region={props.params.region}
          realm={props.params.realm}
          name={props.params.name}
          faction={-1}
          class_={-1} />
        <div className='container content'>
          <ErrorMessages />
          <Row>
            <Col md={12}>
              <p>Oops, this character is missing. Click on the button below to import him.</p>
              <UpdateButton type='character' region={props.params.region} realm={props.params.realm}
                name={props.params.name}>
                <i className='fa fa-download' aria-hidden='true' /> Import Character</UpdateButton>

            </Col>
          </Row>
        </div>
      </div>
    )
  } else {
    return null
  }
}

CharacterView.propTypes = {
  character: React.PropTypes.shape({
    isLoading: React.PropTypes.bool.isRequired,
    hasError: React.PropTypes.bool.isRequired,
    data: React.PropTypes.object
  }),
  params: React.PropTypes.object
}

export default CharacterView
