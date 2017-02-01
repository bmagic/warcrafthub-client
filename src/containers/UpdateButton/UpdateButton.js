import React from 'react'
import { Button } from 'react-bootstrap'

import './UpdateButton.scss'
class UpdateButton extends React.Component {
  constructor (props) {
    super(props)
    this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleOnClick () {
    this.props.postUpdate(this.props.type, this.props.region, this.props.realm, this.props.name)
  }

  render () {
    if (this.props.count !== null) {
      return (
        <div className='update-button'>
          Position in queue : {this.props.count} (Please check back this page later.)
        </div>
      )
    } else {
      return (
        <div className='update-button'>
          <Button onClick={this.handleOnClick}>
            {this.props.children}
          </Button>
        </div>
      )
    }
  }
}

UpdateButton.propTypes = {
  count: React.PropTypes.number,
  type: React.PropTypes.string.isRequired,
  region: React.PropTypes.string.isRequired,
  realm: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  postUpdate: React.PropTypes.func.isRequired,
  children:React.PropTypes.element.isRequired
}

export default UpdateButton
