import React from 'react'
import classnames from 'classnames'

export const ColoredItemIlvl = (props) => {

  let ilvlQuality

  if (props.ilvl > 900)
    ilvlQuality = 5
  else if (props.ilvl > 850)
    ilvlQuality = 4
  else if (props.ilvl > 800)
    ilvlQuality = 3
  else if (props.ilvl > 750)
    ilvlQuality = 2
  else
    ilvlQuality = 1

  return (<span className={classnames("quality-" + ilvlQuality)}>{props.ilvl}</span>)
}

ColoredItemIlvl.propTypes = {
  ilvl: React.PropTypes.number.isRequired,
}

export default ColoredItemIlvl
