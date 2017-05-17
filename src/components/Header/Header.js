import React from 'react'

import {Link, IndexLink} from 'react-router'
import SearchBar from '../../components/SearchBar'
import SideBarMenu from '../../components/SideBarMenu'
import SideBarAccount from '../../components/SideBarAccount'

import logo from './assets/logo.svg'

import './Header.scss'

class Header extends React.Component {
  constructor(props) {
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

  toggleSearchBar() {
    this.setState({
      searchBar: !this.state.searchBar
    })
  }

  toggleSideBarMenu() {
    document.body.classList.toggle('sidebar-open')
    this.setState({
      sideBarMenu: !this.state.sideBarMenu
    })
  }

  toggleSideBarAccount() {
    document.body.classList.toggle('sidebar-open')
    this.setState({
      sideBarAccount: !this.state.sideBarAccount
    })
  }

  toggleDropdown(id) {
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

  render() {
    return (
      <section className='header'>
        <header>
          <nav className='horizontal menu'>
            <ul className='gray'>
              <li><IndexLink  to="/"  activeClassName="active"><i className='fa fa-home' aria-hidden='true'/> Home</IndexLink></li>
              <li><span className={location.pathname.indexOf('recruitment') >0 && 'active'}><i className='fa fa-flag' aria-hidden='true'/> Recruitments</span>
                <ul>
                  <li><Link to='/character/recruitment' activeClassName="active">Characters</Link></li>
                  <li><Link to='/guild/recruitment/' activeClassName="active">Guilds</Link></li>
                </ul>
              </li>
              <li><i className='fa fa-search' aria-hidden='true'/> Search
                <ul className='right wide'>
                  <li><input type='text'/></li>
                </ul>
              </li>
              <li><a href='#'><i className='fa fa-user' aria-hidden='true'/> Account</a>
                <ul>
                  <li><a href='#'>Characters / Guilds</a></li>
                  <li><a href='#'>Discord Webhooks</a></li>
                  <li><a href='#'>Settings</a></li>
                  <li className='background-dark'><a href='#'>Logout</a></li>
                </ul>
              </li>
            </ul>
          </nav>
          <a href='#' className='col hidden-sm hidden-md hidden-lg' id='btn-open-navig'
             onClick={this.toggleSideBarMenu}>
            <span><i className='fa fa-bars fa-xl'/></span>
          </a>
          <object className='col logo' data={logo} type='image/svg+xml'>
            <h1><span>W</span>arcraft<strong>Hub</strong></h1>
          </object>
          <a href='#' className='col hidden-sm hidden-md hidden-lg' onClick={this.toggleSearchBar}>
            <span><i className='fa fa-search fa-xl'/></span>
          </a>
          <a href='#' className='col hidden-sm hidden-md hidden-lg account btn-open-navig-compte'
             onClick={this.toggleSideBarAccount}>
            <span>
              <i className='fa fa-user fa-xl'/>
            </span>
            {/* <span className='loggee'><i className='fa fa-circle' /></span> */}
          </a>
        </header>
        <SideBarMenu toggleAction={this.toggleSideBarMenu} isOpen={this.state.sideBarMenu}/>
        <SideBarAccount toggleAction={this.toggleSideBarAccount} isOpen={this.state.sideBarAccount}/>
        <SearchBar isOpen={this.state.searchBar}/>
      </section>
    )
  }
}

export default Header
