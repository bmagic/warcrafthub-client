import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'

export const HomeView = () => (
  <div className="container">
    <div className="row">
      <div className="col-xs-12">
        <h4>Welcome!</h4>
        <img
          alt='This is a duck, because Redux!'
          className='duck'
          src={DuckImage} />
        <img
          alt='This is a duck, because Redux!'
          className='duck'
          src={DuckImage} />
        <img
          alt='This is a duck, because Redux!'
          className='duck'
          src={DuckImage} />
        <img
          alt='This is a duck, because Redux!'
          className='duck'
          src={DuckImage} />
        <img
          alt='This is a duck, because Redux!'
          className='duck'
          src={DuckImage} />
        <img
          alt='This is a duck, because Redux!'
          className='duck'
          src={DuckImage} />
        <img
          alt='This is a duck, because Redux!'
          className='duck'
          src={DuckImage} />
      </div>
    </div>
  </div>
)

export default HomeView
