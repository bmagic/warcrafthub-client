import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ErrorMessages from '../../../containers/ErrorMessages'
import CharacterTitle from './CharacterTitle'
import UpdateButton from '../../../containers/UpdateButton'
import CharacterNav from './CharacterNav'

import './CharacterView.scss'
class CharacterView extends React.Component {

  render () {
    if (this.props.character.isLoading === false &&
      this.props.character.hasError === false &&
      this.props.character.data) {
      document.title = this.props.character.data.name + ' @ ' + this.props.character.data.realm + ' | Warcrafthub'
      return (
        <div className='character-view'>
          <CharacterTitle
            region={this.props.character.data.region}
            realm={this.props.character.data.realm}
            name={this.props.character.data.name}
            faction={this.props.character.data.faction}
            class_={this.props.character.data.class}
            level={this.props.character.data.level}
          />
          <div className='container content'>
            <ErrorMessages />
            <Row>
              <Col md={12}>
                <UpdateButton type='character' region={this.props.character.data.region}
                  realm={this.props.character.data.realm}
                  name={this.props.character.data.name}>
                  <i className='fa fa-refresh' aria-hidden='true' /> Update character
                </UpdateButton>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <CharacterNav region={this.props.character.data.region} realm={this.props.character.data.realm}
                  name={this.props.character.data.name} />
              </Col>
            </Row>
            {this.props.children}
          </div>
        </div>
      )
    } else if (this.props.character.hasError === true) {
      return (
        <div className='character-view'>
          <CharacterTitle
            region={this.props.params.region}
            realm={this.props.params.realm}
            name={this.props.params.name}
            faction={-1}
            class_={-1} />
          <div className='container content'>
            <ErrorMessages />
            <Row>
              <Col md={12}>
                <p>Oops, this character is missing. Click on the button below to import him.</p>
                <UpdateButton type='character' region={this.props.params.region} realm={this.props.params.realm}
                  name={this.props.params.name}>
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
}

CharacterView.propTypes = {
  character: React.PropTypes.shape({
    isLoading: React.PropTypes.bool.isRequired,
    hasError: React.PropTypes.bool.isRequired,
    data: React.PropTypes.object
  }),
  params: React.PropTypes.object,
  children: React.PropTypes.element
}

export default CharacterView
