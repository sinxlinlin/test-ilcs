import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

function Navbar() {

  // VIEW
  return (
    <div className='sticky-top'>
      {/* Header */}
      <header className="navbar navbar-expand-md navbar-dark Navbar_dark sticky-top d-print-none">
        <div className="container-fluid">
          {/* leftside */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar-menu"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <h5 className="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3" style={{fontSize: 20, color: "#fff"}}>
            Simulasi Biaya Import
          </h5>

        </div>
      </header>

    </div>

  );
}

export default Navbar;
