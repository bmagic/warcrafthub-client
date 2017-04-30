import React from 'react'
import config from '../../config'

import patreon from './assets/patreon.png'

class SideBarMenu extends React.Component {
  constructor (props) {
    super(props)
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
        <div className="navig-close" onClick={this.props.toggleAction}><i className="fa fa-times fa-xl"></i><span>fermer</span></div>
        <div className="sidebar-left">
          <div className="menu-level1">
            <span className="intitule">Ranking</span>
            <div id="canape" className="ssmenu btn-ssmenu">
              <a href="#" className="menu-item"><span className="title">Raids</span></a>
            </div>
            <div id="canape" className="ssmenu btn-ssmenu">
              <a href="#" className="menu-item"><span className="title">Mythic+</span></a>
            </div>
            <span className="intitule">Recruitment</span>
            <div id="canape" className="ssmenu btn-ssmenu">
              <a href="#" className="menu-item"><span className="title">Characters</span></a>
            </div>
            <div id="canape" className="ssmenu btn-ssmenu">
              <a href="#" className="menu-item"><span className="title">Guilds</span></a>
            </div>
            <span className="intitule">Parser</span>          
            <div id="canape" className="ssmenu btn-ssmenu">
              <a href="#" className="menu-item"><span className="title">Examples</span></a>
            </div>
            <div id="canape" className="ssmenu btn-ssmenu">
              <a href="#" className="menu-item"><span className="title">My Guild</span></a>
            </div>
            <span className="intitule">Support Us</span>
            <a href="https://www.patreon.com/warcrafthub" target="_blank" className="support-img">
              <img src={patreon} className="th img-responsive center-block" alt="" />
              <div className="mask"></div>
              <div className="icone"><i className="fa fa-external-link"></i></div>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default SideBarMenu