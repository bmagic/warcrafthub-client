import React from 'react'
import Header from '../../components/Header'
import 'bootstrap/scss/bootstrap.scss'
import './CoreLayout.scss'
import '../../styles/core.scss'
import 'bootstrap/scss/bootstrap.scss';

export const CoreLayout = ({ children }) => (
  <div>
    <Header />
    <div className='core-layout__viewport container'>
      {children}
    </div>
  </div>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
