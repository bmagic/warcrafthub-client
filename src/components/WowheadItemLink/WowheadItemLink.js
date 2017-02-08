import React from 'react'

export const WowheadItemLink = (props) => {
  if (props.id === 0) {
    return (
      <span className='wowhead-item-link empty'>
        {props.children}
      </span>
    )
  } else {
    let rel = ''
    rel += 'bonus=' + props.bonusLists.join(':')
    rel += ';gems=' + props.gems.join(':')

    if (props.enchant) {
      rel += ';ench=' + props.enchant
    }
    return (
      <a href={'//www.wowhead.com/item=' + props.id} className='wowhead-item-link'
        rel={rel}>
        {props.children}
      </a>
    )
  }
}

WowheadItemLink.defaultProps = {
  id: 0,
  bonusLists: [],
  gems: []
}

WowheadItemLink.propTypes = {
  id: React.PropTypes.number.isRequired,
  bonusLists: React.PropTypes.array,
  enchant: React.PropTypes.number,
  gems: React.PropTypes.array,
  children: React.PropTypes.node.isRequired
}

export default WowheadItemLink
