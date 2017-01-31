import React from 'react'
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {IndexLink} from 'react-router'
import LoadingBar from 'react-redux-loading-bar'


import './Header.scss'

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false
    }
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <IndexLink to='/'>
                Warcrafthub
              </IndexLink>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <LinkContainer to='/counter'>
                <NavItem >Counter</NavItem>
              </LinkContainer>
              <LinkContainer to='/character/eu/Archimonde/Bmagic'>
                <NavItem >Bmagic</NavItem>
              </LinkContainer>
              <LinkContainer to='/character/eu/Archimonde/Alogon'>
                <NavItem >Alogon</NavItem>
              </LinkContainer>
              <LinkContainer to='/character/eu/Archimonde/Errrr'>
                <NavItem >Error</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <LoadingBar className="loading"/>
  </div>
    )
  }
}

export default Header
