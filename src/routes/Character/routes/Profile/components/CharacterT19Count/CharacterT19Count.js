import React from 'react'

export const CharacterT19Count = (props) => {

  let count = 0;
  const t19 = {
    1: "Obsidian Aspect",
    2: "Highlord",
    3: "Eagletalon",
    4: "Doomblade",
    5: "Purifier",
    6: "Dreadwyrm",
    7: "Shackled Elements",
    8: "Everburning Knowledge",
    9: "Azj'Aqir",
    10: "Enveloped Dissonance",
    11: "Astral Warden",
    12: "Second Sight",
  };

  Object.keys(props.items).map(function (key) {
    var item = props.items[key]
    if (item.name && item.name.indexOf(t19[props.class]) >= 0) {
      count++;
    }
  })

  return (
    <span className='character-t19-count'>
      {count}
    </span>
  )
}


CharacterT19Count.defaultProps = {
  items: {},

}
CharacterT19Count.propTypes = {
  items: React.PropTypes.object.isRequired,
  class: React.PropTypes.number.isRequired
}

export default CharacterT19Count
