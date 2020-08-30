import React, { useState } from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { NavLink } from 'react-router-dom'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function NavBar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);



  return (
    <div>
      <nav className="navbar navbar-expand navbar-light bg-light"
        style={{ margin: "0px" }}>
        <NavLink className="navbar-brand"
          to="/Home"
          style={{ paddingRight: "20px" }}
          activestyle={{ color: "red" }}
          exact>
          <img className="welcome_navbrand_img mr-1" src={process.env.PUBLIC_URL + "/assets/images/logo/apple-touch-icon.png"} alt="EW icon"
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
                activestyle={{ color: "red" }}
                exact
              >
                Home
            </NavLink>
            </li> */}

            <li className="nav-item">
              <NavLink
                to="/SearchProfiles"
                className="nav-link"
                style={{ color: "darkGray", paddingBottom: "0px" }}
                activeStyle={{ color: "red" }}
                exact
              >
                  <FontAwesomeIcon icon="users" />
                 <span className="d-block d-sm-none"></span>
                <span className="d-none d-sm-inline"><i className="d-none d-sm-inline mr-1"></i>Profiles</span>
              
                
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
                <FontAwesomeIcon icon="plus" />
                 <span className="d-block d-sm-none"></span>
                <span className="d-none d-sm-inline"><i className="d-none d-sm-inline mr-1"></i>Add Workout</span>
                
              </NavLink>
            </li>
            <li>
              <Dropdown
                isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle
                  style={{ color: "darkGray", backgroundColor: "#F8F9FA" }}
                  activestyle={{ color: "red" }}
                  outline color="none"
                  caret
                  >
                 <FontAwesomeIcon icon="trophy" />
                  <span className="d-inline d-sm-none"></span>
                <span className="d-none d-sm-inline"><i className="d-none d-sm-inline mr-1"></i>Challenges</span>
                 
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
                        <FontAwesomeIcon icon="user-friends" />
                        <span className="d-block d-sm-none"></span>
                <span className="d-none d-sm-inline"><i className="d-none d-sm-inline mr-1"></i>Challenge Friends</span> 
               
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
                      <FontAwesomeIcon icon="globe" />
                           <span className="d-block d-sm-none"></span>
                <span className="d-none d-sm-inline"><i className="d-none d-sm-inline mr-1"></i>Global Challenge</span>
                
            </NavLink>
                  </DropdownItem>
                  {/* <DropdownItem>
                    <NavLink
                      to="/LocalChallenge"
                      className="nav-link"
                      style={{ color: "darkGray" }}
                      activeStyle={{ color: "red" }}
                      exact
                    >
                       <FontAwesomeIcon icon="map-marker-alt" />
                         <span className="d-block d-sm-none"></span>
                <span className="d-none d-sm-inline"><i className="d-none d-sm-inline mr-1"></i>Local Challenge</span>
            </NavLink>
                  </DropdownItem> */}
                  <DropdownItem>
                    <NavLink
                      to="/SoloChallenge"
                      className="nav-link"
                      style={{ color: "darkGray" }}
                      activeStyle={{ color: "red" }}
                      exact
                    >
                      <FontAwesomeIcon icon="stopwatch" />
                         <span className="d-block d-sm-none"></span>
                <span className="d-none d-sm-inline"><i className="d-none d-sm-inline mr-1"></i>Minute Challenge</span>
                
            </NavLink>

                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
              </li>

              <li>
              <NavLink
                to="/Logout"
                className="nav-link"
                style={{ color: "darkGray", paddingBottom: "0px" }}
                activeStyle={{ color: "red" }}
                exact
              >
                <span className="d-inline">Logout</span>
              
                
              </NavLink>


            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar