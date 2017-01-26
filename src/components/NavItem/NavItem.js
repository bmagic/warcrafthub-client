import React from 'react';
import { Link, IndexLink } from 'react-router';
import _ from 'lodash';
import classnames from 'classnames';

class NavItem extends React.Component {
  constructor(props) {
    super(props);

    // The default state
    this.state = {
      isActive: false,
      unregisterRouteListener: false
    };

    // Binding for functions
    this.locationHasChanged = this.locationHasChanged.bind(this);
  }

  componentDidMount() {
    // Check if component is active on mount and add listener on route change
    this.setState({
      isActive: this.context.router.isActive(this.props.to, true),
      unregisterRouteListener: this.context.router.listen(this.locationHasChanged)
    });
  }

  componentWillUnmount() {
    if (this.state.unregisterRouteListener) {
      // Remove the listener
      this.state.unregisterRouteListener();
    }

    // Reset the state
    this.setState({
      isActive: false,
      unregisterRouteListener: false
    });
  }

  // Update the state of the component, based on the router path
  locationHasChanged() {
    this.setState({
      isActive: this.context.router.isActive(this.props.to, true)
    });
  }

  render () {
    let { index } = this.props;
    let LinkComponent = index ? Link : IndexLink;
    let newProps = _.omit(this.props, 'router');

    return (
      <li className={classnames('nav-item', this.state.isActive ? 'active' : '' )}>
        <LinkComponent className="nav-link" {...newProps}>
          {this.props.children}
        </LinkComponent>
      </li>
    );
  }
}

NavItem.contextTypes = {
  router: React.PropTypes.object
};

export default NavItem;
