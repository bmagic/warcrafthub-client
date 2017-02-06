import React from 'react'
import './CharacterNav.scss'
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap'
import { Nav, NavItem } from 'react-bootstrap'

export const CharacterNav = (props) => (
  <div className='character-nav'>
    <Nav bsStyle='pills' justified>
      <IndexLinkContainer to={'/character/' + props.region + '/' + props.realm + '/' + props.name}>
        <NavItem >Profile</NavItem>
      </IndexLinkContainer>
      <LinkContainer to={'/character/' + props.region + '/' + props.realm + '/' + props.name + '/recruitment'}>
        <NavItem >Recruitment</NavItem>
      </LinkContainer>
      <LinkContainer to={'/character/' + props.region + '/' + props.realm + '/' + props.name + '/pve'}>
        <NavItem >PvE</NavItem>
      </LinkContainer>
      <LinkContainer to={'/character/' + props.region + '/' + props.realm + '/' + props.name + '/pvp'}>
        <NavItem >PvP</NavItem>
      </LinkContainer>
    </Nav>
  </div>
)

CharacterNav.propTypes = {
  region: React.PropTypes.string.isRequired,
  realm: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired
}

export default CharacterNav
