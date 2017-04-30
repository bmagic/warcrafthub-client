import React from 'react'

import SearchBar from '../../components/SearchBar'
import SideBarMenu from '../../components/SideBarMenu'
import SideBarAccount from '../../components/SideBarAccount'

import logo from './assets/logo.png'

import './Header.scss'

class Header extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      searchBar: false,
      sideBarMenu: false,
      sideBarAccount: false
    }

    this.toggleSearchBar = this.toggleSearchBar.bind(this)
    this.toggleSideBarMenu = this.toggleSideBarMenu.bind(this)
    this.toggleSideBarAccount = this.toggleSideBarAccount.bind(this)
  }

  toggleSearchBar () {
    this.setState({
      searchBar: !this.state.searchBar
    })
  }

  toggleSideBarMenu () {
    document.body.classList.toggle('sidebar-open')
    this.setState({
      sideBarMenu: !this.state.sideBarMenu
    })
  }

  toggleSideBarAccount () {
    document.body.classList.toggle('sidebar-open')
    this.setState({
      sideBarAccount: !this.state.sideBarAccount
    })
  }

  render () {
    return (
      <div>
        <header className='header'>
          <a href='#' className='col' id='btn-open-navig' onClick={this.toggleSideBarMenu}>
            <span><i className='fa fa-bars fa-xl' /></span>
            <span className='title'>menu</span>
          </a>
          <a href='home.html' className='logo'><img src={logo} alt='' /></a>
          <div className='col-vide' />
          <a href='#' className='col' onClick={this.toggleSearchBar}>
            <span><i className='fa fa-search fa-xl' /></span>
            <span className='title'>Recherche</span>
          </a>
          <a href='#' className='col btn-open-navig-compte' onClick={this.toggleSideBarAccount}>
            <span>
              <i className='fa fa-user fa-xl' />
            </span>
            <span className='title'>compte</span>
            <span className='loggee'><i className='fa fa-circle' /></span>
          </a>
        </header>
        <SideBarMenu toggleAction={this.toggleSideBarMenu} isOpen={this.state.sideBarMenu} />
        <SideBarAccount toggleAction={this.toggleSideBarAccount} isOpen={this.state.sideBarAccount} />
        <SearchBar isOpen={this.state.searchBar} />
      </div>
    )
  }
}

export default Header
