import React from 'react'


import './ErrorMessages.scss'

export const ErrorMessages = (props) => {


  if (props.errors.length == 0)
    return null;
  else {
    const errorMessages = [];
    props.errors.forEach(function (error) {
      errorMessages.push(<div className="error-message">{error}</div>)
    });
    return (
      <div className="container">
        <div className="error-messages">
          <div className="alert alert-danger">
            {errorMessages}
            </div>
        </div>
      </div>
    )
  }
}


ErrorMessages.propTypes = {
  errors: React.PropTypes.array.isRequired,
}

export default ErrorMessages
