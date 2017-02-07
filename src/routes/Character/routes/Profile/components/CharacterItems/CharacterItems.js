import React from 'react'
import { Row, Col } from 'react-bootstrap'
import CharacterItem from '../CharacterItem'
import CharacterBackground from '../CharacterBackground'
import './CharacterItems.scss'

class CharacterItems extends React.Component {
  render () {
    const items = this.props.items
    const region = this.props.region

    return (
      <div className='character-items'>
        <CharacterBackground thumbnail={this.props.thumbnail} race={this.props.race} region={this.props.region}>
          <Row>
            <Col sm={6}>
              <CharacterItem side={'left'} region={region} slot={'head'} item={items['head']} />
            </Col>
            <Col sm={6}>
              <CharacterItem side={'right'} region={region} slot={'hands'} item={items['hands']} />
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <CharacterItem side={'left'} region={region} slot={'neck'} item={items['neck']} />
            </Col>
            <Col sm={6}>
              <CharacterItem side={'right'} region={region} slot={'waist'} item={items['waist']} />
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <CharacterItem side={'left'} region={region} slot={'shoulder'} item={items['shoulder']} />
            </Col>
            <Col sm={6}>
              <CharacterItem side={'right'} region={region} slot={'legs'} item={items['legs']} />
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <CharacterItem side={'left'} region={region} slot={'back'} item={items['back']} />
            </Col>
            <Col sm={6}>
              <CharacterItem side={'right'} region={region} slot={'feet'} item={items['feet']} />
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <CharacterItem side={'left'} region={region} slot={'chest'} item={items['chest']} />
            </Col>
            <Col sm={6}>
              <CharacterItem side={'right'} region={region} slot={'finger1'} item={items['finger1']} />
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <CharacterItem side={'left'} region={region} slot={'shirt'} item={items['shirt']} />
            </Col>
            <Col sm={6}>
              <CharacterItem side={'right'} region={region} slot={'finger2'} item={items['finger2']} />
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <CharacterItem side={'left'} region={region} slot={'tabard'} item={items['tabard']} />
            </Col>
            <Col sm={6}>
              <CharacterItem side={'right'} region={region} slot={'trinket1'} item={items['trinket1']} />
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <CharacterItem side={'left'} region={region} slot={'wrist'} item={items['wrist']} />
            </Col>
            <Col sm={6}>
              <CharacterItem side={'right'} region={region} slot={'trinket2'} item={items['trinket2']} />
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <CharacterItem side={'right'} region={region} slot={'mainHand'} item={items['mainHand']} />
            </Col>
            <Col sm={6}>
              <CharacterItem side={'left'} region={region} slot={'offHand'} item={items['offHand']} />
            </Col>
          </Row>
        </CharacterBackground>
      </div>
    )
  }
}

CharacterItems.defaultProps = {
  items: {},
  region: '',
  race: 0,
  thumbnail: ''
}

CharacterItems.propTypes = {
  items: React.PropTypes.object,
  region: React.PropTypes.string.isRequired,
  race: React.PropTypes.number.isRequired,
  thumbnail: React.PropTypes.string.isRequired
}

export default CharacterItems
