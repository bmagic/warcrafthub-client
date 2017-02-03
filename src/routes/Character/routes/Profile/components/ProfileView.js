import React from 'react'
import {Col, Row} from 'react-bootstrap'

export const ProfileView = (props) => {
  return (
    <div>PAf Pif Pouf Profile {props.character.data.name}</div>
  )

}

ProfileView.propTypes = {
  character: React.PropTypes.shape({
    isLoading: React.PropTypes.bool.isRequired,
    hasError: React.PropTypes.bool.isRequired,
    data: React.PropTypes.object
  }),
}

export default ProfileView
