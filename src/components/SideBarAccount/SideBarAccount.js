import React from 'react'
import config from '../../config'

class SideBarAccount extends React.Component {
  constructor (props) {
    super(props)
  }

  renderLogged() {

  }

  renderNotLogged() {

  }

  render () {
    const isOpen = this.props.isOpen;
    //const isFocus = this.state.isFocus;

    let sideBarMenuClass = null;
    let overlayStyle = null;

    if (isOpen) {
        sideBarMenuClass="menu-open";
    }

    /*if (isFocus) {
      overlayStyle = {'display': 'block'};
    }*/

    return (
      <div className={sideBarMenuClass}>
        <div className="overlay" onClick={this.props.toggleAction}></div>
        <div className="navig-close navig-account-close" onClick={this.props.toggleAction}><i className="fa fa-times fa-xl"></i><span>fermer</span></div>
        <div className="sidebar-right">
          <div className="menu-level1">
            <span className="intitule">Alogon#2773</span>
            <div id="canape" className="ssmenu btn-ssmenu">
              <a href="#" className="menu-item"><span className="title">Manage characters / guilds</span></a>
            </div>
            <div id="canape" className="ssmenu btn-ssmenu">
              <a href="#" className="menu-item"><span className="title">Discord Webhooks</span></a>
            </div>
            <div id="canape" className="ssmenu btn-ssmenu">
              <a href="#" className="menu-item"><span className="title">Widgets</span></a>
            </div>
            <div id="canape" className="ssmenu btn-ssmenu">
              <a href="#" className="menu-item"><span className="title">Settings</span></a>
            </div>
            <div id="canape" className="ssmenu btn-ssmenu">
              <a href="#" className="menu-item"><span className="title">Logout</span></a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SideBarAccount