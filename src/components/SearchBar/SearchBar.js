import React from 'react'
import config from '../../config'

import './SearchBar.scss'

class SearchBar extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isFocus: false,
    }

    this.toggleFocus = this.toggleFocus.bind(this);
  }

  toggleFocus() {
    this.setState({
      isFocus: !this.state.isFocus
    });
  }

  render () {
    const isOpen = this.props.isOpen;
    const isFocus = this.state.isFocus;

    let searchBarStyle = null;
    let overlayStyle = null;

    if (!isOpen) {
        searchBarStyle={'display': 'none'};
    }

    if (isFocus) {
      overlayStyle = {'display': 'block'};
    }

    return (
      <div>
        <div className="overlay-search" id="overlay-search" style={overlayStyle}></div>
        <div className="field-search-home" style={searchBarStyle}>
            <input type="search" className="field-search" id="product-search" placeholder="Recherche joueur, guilde, ..." onFocus={this.toggleFocus} onBlur={this.toggleFocus} />
            <button type="submit" className={"search-icone "+this.state.isFocus}><i className="fa fa-search fa-xl"></i></button>
            <div className="result" id="search-result">
              <div className="bg">
              </div>
            </div>
        </div>
      </div>
    )
  }
}

export default SearchBar