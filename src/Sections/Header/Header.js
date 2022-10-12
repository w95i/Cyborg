/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Header.css";
import logo from "../../Assets/images/logo.png";
import NavItems, { NavItemsDropDown } from "../../components/NavItems/NavItems";

const Header = () => {
  return (
    <div className="navbar navbar-expand-md navbar-dark cyborg-navbar">
      <div className="container">
        <a href="#" className="navbar-brand">
          <img src={logo} alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainmenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainmenu">
          <ul className="navbar-nav ms-auto">
            <NavItems>
              <a href="#hero" className="nav-link">
                Home
              </a>
            </NavItems>
            <NavItems>
              <a href="#features" className="nav-link">
                Browse
              </a>
            </NavItems>
            <NavItemsDropDown>
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Details
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="#learn" className="dropdown-item">
                    Learn Bootstrap
                  </a>
                </li>
                <li>
                  <a href="#next" className="dropdown-item">
                    Where to go next
                  </a>
                </li>
              </ul>
            </NavItemsDropDown>
            <NavItems>
              <a href="#faq" className="nav-link">
                Streams
              </a>
            </NavItems>
            <NavItems>
              <a href="./index-ar.html" className="nav-link">
                Profile
              </a>
            </NavItems>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
