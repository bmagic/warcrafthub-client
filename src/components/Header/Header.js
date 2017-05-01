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
      sideBarAccount: false,
      dropDown: null
    }

    this.toggleSearchBar = this.toggleSearchBar.bind(this)
    this.toggleSideBarMenu = this.toggleSideBarMenu.bind(this)
    this.toggleSideBarAccount = this.toggleSideBarAccount.bind(this)
    this.toggleDropdown = this.toggleDropdown.bind(this)
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

  toggleDropdown (id) {
    if (this.state.dropDown === id) {
      this.setState({
        dropDown: null
      })
    } else {
      this.setState({
        dropDown: id
      })
    }
    console.log(id)
  }

  render () {
    return (
      <div>
        <header className='header'>
          <div className='container'>
            <a href='#' className='col' id='btn-open-navig' onClick={this.toggleSideBarMenu}>
              <span><i className='fa fa-bars fa-xl' /></span>
              <span className='title'>menu</span>
            </a>
            <a href='/' className='logo'><img src={logo} alt='' /></a>
            {/* <div className='col-vide' /> */}
            <a href='#' className='col hidden-xs hidden-sm'>
              <span><i className='fa fa-home fa-xl' /></span>
              <span className='title'>Home</span>
            </a>
            <span className='col hidden-xs hidden-sm' onClick={() => this.toggleDropdown('dropdown-1')}>
              <span><i className='fa fa-area-chart fa-xl' /></span>
              <span className='title'>Leaderboards</span>
              <span className='angle-down'>
                <i className={'fa ' + (this.state.dropDown !== 'dropdown-1' ? ' fa-angle-down' : 'fa-angle-up')} />
              </span>
              <div className={'dropdown' + (this.state.dropDown !== 'dropdown-1' ? ' hide' : '')}>
                <a className='title' href='#'>Raids</a>
                <a className='title' href='#'>Mythic+</a>
              </div>
            </span>
            <span className='col hidden-xs hidden-sm' onClick={() => this.toggleDropdown('dropdown-2')}>
              <span><i className='fa fa-flag fa-xl' /></span>
              <span className='title'>Recruitment</span>
              <span className='angle-down'>
                <i className={'fa ' + (this.state.dropDown !== 'dropdown-2' ? ' fa-angle-down' : 'fa-angle-up')} />
              </span>
              <div className={'dropdown' + (this.state.dropDown !== 'dropdown-2' ? ' hide' : '')}>
                <a className='title' href='#'>Characters</a>
                <a className='title' href='#'>Guilds</a>
              </div>
            </span>
            <a href='#' className='col hidden-xs hidden-sm push-right'>
              <span><i className='fa fa-pie-chart fa-xl' /></span>
              <span className='title'>Parsing</span>
            </a>
            <a href='#' className='col' onClick={this.toggleSearchBar}>
              <span><i className='fa fa-search fa-xl' /></span>
              <span className='title'>search</span>
            </a>
            <a href='#' className='col account btn-open-navig-compte hidden-md hidden-lg'
              onClick={this.toggleSideBarAccount} >
              <span>
                <i className='fa fa-user fa-xl' />
              </span>
              <span className='title'>account</span>
              <span className='loggee'><i className='fa fa-circle' /></span>
            </a>
            <span href='#' className='col account btn-open-navig-compte hidden-xs hidden-sm'
              onClick={() => this.toggleDropdown('dropdown-3')} >
              <span>
                <i className='fa fa-user fa-xl' />
              </span>
              <span className='title'>account</span>
              <span className='loggee'><i className='fa fa-circle' /></span>
              <span className='angle-down'>
                <i className={'fa ' + (this.state.dropDown !== 'dropdown-3' ? ' fa-angle-down' : 'fa-angle-up')} />
              </span>
              <div className={'dropdown' + (this.state.dropDown !== 'dropdown-3' ? ' hide' : '')}>
                <a className='title' href='#'>Manage characters / guilds</a>
                <a className='title' href='#'>Discord Webhooks</a>
                <a className='title' href='#'>Settings</a>
                <a className='title' href='#'>Logout</a>
              </div>
            </span>
          </div>
        </header>
        <SideBarMenu toggleAction={this.toggleSideBarMenu} isOpen={this.state.sideBarMenu} />
        <SideBarAccount toggleAction={this.toggleSideBarAccount} isOpen={this.state.sideBarAccount} />
        <SearchBar isOpen={this.state.searchBar} />
      </div>
    )
  }
}

export default Header
