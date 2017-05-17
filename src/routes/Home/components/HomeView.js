import React from 'react'
import CatHorde from '../assets/horde.png'
import CatAlliance from '../assets/alliance.png'
import './HomeView.scss'

export const HomeView = () => (
  <div className='container'>
    {/*<div className='row'>*/}
      {/*<div className='col-md-6'>*/}
        {/*<img className='centered padding-60' src={CatHorde} />*/}
        {/*<h2 className='horde'>For the Horde</h2>*/}
      {/*</div>*/}
      {/*<div className='col-md-6'>*/}
        {/*<img className='centered padding-60' src={CatAlliance} />*/}
        {/*<h2 className='alliance'>For the Alliance</h2>*/}
      {/*</div>*/}
    {/*</div>*/}
    <div style={{color:'red'}}>
      <h1>HOMEPAGE</h1>
      <h3>Last Recruitment Characters</h3>
      <div>Source - Name - Realm - Region - Update time</div>
      <div>Source - Name - Realm - Region - Update time</div>
      <div>...</div>
      <h3>Last Recruitment Guilds</h3>
      <div>Source - Name - Realm - Region - Update time</div>
      <div>Source - Name - Realm - Region - Update time</div>
      <div>...</div>
      <h3>Last Guild Updated</h3>
      <div>Source - Name - Realm - Region - Update time</div>
      <div>Source - Name - Realm - Region - Update time</div>
      <div>...</div>
      <h3>Last Character Updated</h3>
      <div>Source - Name - Realm - Region - Update time</div>
      <div>Source - Name - Realm - Region - Update time</div>
      <div>...</div>
      <h2>What we do</h2>
      <p>A beautiful image who explain what we do. Improve armory with other fan website.<br/>
        We take data from armory and add information from raider.io / wowprogress / warcraftlfg to present information useful for PvE<br/>
        And we offer you recruitment tools & parsing tools for character & guild.
      </p>
    </div>
  </div>
);

export default HomeView
