import React, { useState } from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom'
import './style.css'
// import { Card } from "reactstrap"

function NavBar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);



  return (
    <div>
      <nav className="navbar navbar-expand navbar-light bg-light"
        style={{ margin: "0px" }}>
        <NavLink className="navbar-brand"
          to="/"
          style={{ paddingRight: "20px" }}
          activeStyle={{ color: "red" }}
          exact>
          <img className="welcome_navbrand_img" src={process.env.PUBLIC_URL + "/assets/images/logo/apple-touch-icon.png"} alt="EW icon"
            style={{ width: "30px", height: "30px" }} />
          <span className="d-none d-sm-block">Home</span>
        </NavLink>
        <div>

          <ul className="navbar-nav">
            {/* <li className="nav-item d-none d-sm-block">
              <NavLink
                to="/"
                className="nav-link"
                style={{ color: "darkGray" }}
                activeStyle={{ color: "red" }}
                exact
              >
                Home
            </NavLink>
            </li> */}

            <li className="nav-item">
              <NavLink
                to="/Search"
                className="nav-link"
                style={{ color: "darkGray", paddingBottom: "0px" }}
                activeStyle={{ color: "red" }}
                exact
              >
                <span className="d-block d-sm-none fa fa-users"></span>
                <span className="d-none d-sm-block"><i className="d-none d-sm-inline fa fa-users"></i>Profiles</span>
              </NavLink>
            </li>


            <li className="nav-item">
              <NavLink
                to="/AddWorkout"
                className="nav-link"
                style={{ color: "darkGray" }}
                activeStyle={{ color: "red" }}
                exact
              >
                <span className="d-block d-sm-none fa fa-plus"></span>
                <span className="d-none d-sm-block"><i className="d-none d-sm-inline fa fa-plus"></i>Add Workout</span>
              </NavLink>
            </li>
            <li>
              <Dropdown
                isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle
                  style={{ color: "darkGray", backgroundColor: "#F8F9FA" }}
                  activeStyle={{ color: "red" }}
                  outline color="none"
                  caret
                  className="nav-link">Challenges
        </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    <NavLink
                      to="/ChallengeFriends"
                      className="nav-link"
                      style={{ color: "darkGray" }}
                      activeStyle={{ color: "red" }}
                      exact
                    >
                      Challenge Friends
            </NavLink>
                  </DropdownItem>

                  <DropdownItem>
                    <NavLink
                      to="/GlobalChallenge"
                      className="nav-link"
                      style={{ color: "darkGray" }}
                      activeStyle={{ color: "red" }}
                      exact
                    >
                      Global Challenge
            </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink
                      to="/LocalChallenge"
                      className="nav-link"
                      style={{ color: "darkGray" }}
                      activeStyle={{ color: "red" }}
                      exact
                    >
                      Local Challenge
            </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink
                      to="/SoloChallenge"
                      className="nav-link"
                      style={{ color: "darkGray" }}
                      activeStyle={{ color: "red" }}
                      exact
                    >
                      Minute Challenge
            </NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>


            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar