import React from 'react'
import CatHorde from '../assets/horde.png'
import CatAlliance from '../assets/alliance.png'
import './HomeView.scss'

export const HomeView = () => (
  <div className='container'>
    <div className='row'>
      <div className='col-md-6'>
        <img className='centered padding-60' src={CatHorde} />
        <h2 className='horde'>For the Horde</h2>
      </div>
      <div className='col-md-6'>
        <img className='centered padding-60' src={CatAlliance} />
        <h2 className='alliance'>For the Alliance</h2>
      </div>
    </div>
  </div>
)

export default HomeView
