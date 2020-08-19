import React from 'react';
import PropTypes from 'prop-types';

import firebase from 'firebase/app';
import 'firebase/auth';

class MyNavBar extends React.Component {
  static propTypes = {
    authed: PropTypes.bool.isRequired,
  }

  // render when logged in
  loadLogOut = () => {
    const { authed } = this.props;
    if (authed) { return <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={this.logOutEvent}>Log Out <i className="fas fa-sign-out-alt"></i></button>; }
    return '';
  }

  // log out on click
  logOutEvent = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-dark">
          <div className="navbar-brand">React Pinterest</div>
          {this.loadLogOut()}
        </nav>
      </div>
    );
  }
}

export default MyNavBar;
