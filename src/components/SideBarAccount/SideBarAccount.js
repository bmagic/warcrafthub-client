import React from 'react'

class SideBarAccount extends React.Component {
  static propTypes = {
    isOpen: React.PropTypes.bool.isRequired,
    toggleAction: React.PropTypes.func.isRequired
  }

  renderLogged () {

  }

  renderNotLogged () {

  }

  render () {
    const isOpen = this.props.isOpen

    let sideBarMenuClass = null

    if (isOpen) {
      sideBarMenuClass = 'menu-open'
    }

    return (
      <div className={sideBarMenuClass}>
        <div className='overlay' onClick={this.props.toggleAction} />
        <div className='navig-close navig-account-close' onClick={this.props.toggleAction}>
          <i className='fa fa-times fa-xl' />
          <span>fermer</span>
        </div>
        <div className='sidebar-right'>
          <div className='menu-level1'>
            <span className='intitule'>Alogon#2773</span>
            <div id='canape' className='ssmenu btn-ssmenu'>
              <a href='#' className='menu-item'><span className='title'>Manage characters / guilds</span></a>
            </div>
            <div id='canape' className='ssmenu btn-ssmenu'>
              <a href='#' className='menu-item'><span className='title'>Discord Webhooks</span></a>
            </div>
            <div id='canape' className='ssmenu btn-ssmenu'>
              <a href='#' className='menu-item'><span className='title'>Widgets</span></a>
            </div>
            <div id='canape' className='ssmenu btn-ssmenu'>
              <a href='#' className='menu-item'><span className='title'>Settings</span></a>
            </div>
            <div id='canape' className='ssmenu btn-ssmenu'>
              <a href='#' className='menu-item'><span className='title'>Logout</span></a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SideBarAccount
