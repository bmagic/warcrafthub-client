import React from 'react'

export const WowheadSpellLink = (props) => {
  if (props.id === 0) {
    return (
      <span className='wowhead-spell-link empty'>
        {props.children}
      </span>
    )
  } else {
    return (
      <a href={'//www.wowhead.com/spell=' + props.id} className='wowhead-spell-link'>
        {props.children}
      </a>
    )
  }
}

WowheadSpellLink.defaultProps = {
  id: 0
}

WowheadSpellLink.propTypes = {
  id: React.PropTypes.number.isRequired,
  children: React.PropTypes.node.isRequired
}

export default WowheadSpellLink
