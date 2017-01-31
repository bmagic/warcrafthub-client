import React from 'react'
import Header from '../../components/Header'
import ErrorMessagesContainer from '../../containers/ErrorMessagesContainer'
import './CoreLayout.scss'
import '../../styles/core.scss'

export const CoreLayout = ({ children }) => (
  <div>
    <Header />
    <div>
      <ErrorMessagesContainer />
      {children}
    </div>
  </div>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
