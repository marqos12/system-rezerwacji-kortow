import React from 'react';
import './MyHeader.css';

import { NavLink } from 'react-router-dom';

class MyHeaderComponent extends React.Component {



  render() {
    return (
      <div>

        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item">
              <img src="/assets/rakieta.png" width="75" />
            </a>

            <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">

            <div className="navbar-end">
              <NavLink exact to="/" className="navbar-item" >
                Rezerwacje
              </NavLink>

              <NavLink to="/statistics" className="navbar-item" >
                Statystyki
              </NavLink>

            </div>
          </div>
        </nav>


      </div>
    );
  }
}

export default MyHeaderComponent;