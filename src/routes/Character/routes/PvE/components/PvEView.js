import React from 'react'

export const PvEView = (props) => {
  return (
    <div>PAf Pif Pouf {props.character.data.name}</div>
  )
}

PvEView.propTypes = {
  character: React.PropTypes.shape({
    isLoading: React.PropTypes.bool.isRequired,
    hasError: React.PropTypes.bool.isRequired,
    data: React.PropTypes.object
  })
}

export default PvEView
